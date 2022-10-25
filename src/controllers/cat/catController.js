require('dotenv').config();
const colors = require('colors/safe');
const catService = require('../../services/cat/catService')
const constant = require('../../config/constant');
const logger = require('../../helper/logger');
const util = require('../../helper/util')

const Cats = async () => {
    try {       
        const cats = await catService.getCats();
        console.log(colors.green(`${constant.MSG.CATS_FETCH} || ${JSON.stringify(cats)}`));
        logger.info(
            {
                payload: {
                    type: constant.LOG_TYPE.CATS,
                    uuid: util.getUUID(),
                    data: cats
                }
            },
            constant.MSG.CATS_FETCH
        );
        return cats;
    } catch (error) {
        console.log(colors.red(error.message));
        logger.error(
            {
                payload: {
                    type: constant.LOG_TYPE.CATS,
                    uuid: util.getUUID(),
                    error: error.message
                }
            },
            constant.MSG.APP_ERROR
        );
    }
}
module.exports = Cats();