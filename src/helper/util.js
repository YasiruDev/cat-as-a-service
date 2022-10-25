const moment = require("moment");
// const blend = require("@mapbox/blend");
const images = require("images");
// const { writeFile } = require("fs");
let { join } = require("path");
const { v4: uuidv4 } = require("uuid");
const constant = require("../config/constant");

const util = {
  getUUID() {
    return uuidv4();
  },
  changeObjKey(obj, targetKey, newKey) {
    obj[newKey] = obj[targetKey];
    delete obj[targetKey];
    return obj;
  },
  formatTime(time) {
    return moment(time && time).format(constant.FORMAT.TIME);
  },
  getSearchParams(params) {
    return new URLSearchParams(params).toString();
  },
  mergeTwoImages(firstImage, secondImage, width, height) {
    try {
      const fileOut = join(process.cwd(), `/${constant.IMAGE_NAME}`);
      images(Buffer.from(firstImage, constant.FORMAT.BINARY), 0, 0)
        .size(width * 2, height)
        .draw(images(Buffer.from(secondImage, constant.FORMAT.BINARY)), width, 0)
        .save(fileOut);

      return fileOut;
    } catch (error) {
      throw new Error(error);
    }

    //**blend library is not working :  https://github.com/mapbox/node-blend/issues/73 */

    // return new Promise((resolve, reject) => {
    //     blend([
    //         { buffer: Buffer.from(firstImage, constant.FORMAT.BINARY), x: 0, y: 0 },
    //         { buffer: Buffer.from(secondImage, constant.FORMAT.BINARY), x: Number(width), y: 0 }
    //     ], {
    //             width: Number(width) * 2,
    //             height: Number(height),
    //             format: 'jpeg',
    //         }, (err, data) => {
    //             const fileOut = join(process.cwd(), `/${constant.IMAGE_NAME}`);
    //             writeFile(fileOut, data, constant.FORMAT.BINARY, (error) => {
    //                 error ? reject(error) : resolve({ imgUrl: fileOut });
    //             })
    //         });
    // });
  },
};

module.exports = util;
