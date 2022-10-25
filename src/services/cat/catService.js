const argv = require("minimist")(process.argv.slice(2));
const request = require("../../config/request");
const constant = require("../../config/constant");
const utill = require("../../helper/util");
const _ = require("lodash");

getCats = async () => {
  try {
    utill.changeObjKey(
      argv,
      Object.keys(constant.MAP_OBJ.SIZE_KEY)[0],
      Object.values(constant.MAP_OBJ.SIZE_KEY)[0]
    ); // change key name `size` in to `s`

    const firstCat = await getFirstCat(
      _.omit(argv, constant.PARAM_VALIDATION.UNDERSCORE, constant.PARAM_VALIDATION.WHO)
    ); // request first image without `who and _`
    const secondCat = await getSecondCat(
      _.omit(argv, constant.PARAM_VALIDATION.UNDERSCORE, constant.PARAM_VALIDATION.GREETING)
    ); // request second image without `greeting and _`

    return await utill.mergeTwoImages(firstCat, secondCat, argv.width, argv.height); // send images to merge and save
  } catch (error) {
    throw error;
  }
};

getFirstCat = async (params) => {
  try {
    const printText = params.greeting;
    const searchParams = `${printText}?${utill.getSearchParams(
      _.omit(params, constant.PARAM_VALIDATION.GREETING)
    )}`; // generate query params

    return await request.apiRequest(constant.END_URL.GET_CAT, constant.METHODS.GET, searchParams);
  } catch (error) {
    throw error;
  }
};
getSecondCat = async (params) => {
  try {
    const printText = params.who;
    const searchParams = `${printText}?${utill.getSearchParams(
      _.omit(params, constant.PARAM_VALIDATION.WHO)
    )}`;

    return await request.apiRequest(constant.END_URL.GET_CAT, constant.METHODS.GET, searchParams);
  } catch (error) {
    throw error;
  }
};

module.exports = { getCats };
