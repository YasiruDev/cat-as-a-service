const fs = require("fs");
const bunyan = require("bunyan");
const util = require("./util");

// if (!fs.existsSync(process.env.LOGS_FILE_PATH)) {
//   fs.mkdirSync(process.env.LOGS_FILE_PATH, { recursive: true });
// }
// if (!fs.existsSync(`${process.env.LOGS_FILE_PATH}info`)) {
//   fs.mkdirSync(`${process.env.LOGS_FILE_PATH}info`);
// }
// if (!fs.existsSync(`${process.env.LOGS_FILE_PATH}error`)) {
//   fs.mkdirSync(`${process.env.LOGS_FILE_PATH}error`);
// }
// if (!fs.existsSync(`${process.env.LOGS_FILE_PATH}fatal`)) {
//   fs.mkdirSync(`${process.env.LOGS_FILE_PATH}fatal`);
// }

const log = bunyan.createLogger({
  time: 0,
  name: "catapp-log",
  src: true,
  streams: [
    {
      level: "info",
      stream: process.stdout,
      //   period: "1d",
      //   gzip: true,
      //   path: `${process.env.LOGS_FILE_PATH}info/${util.formatTime()}.log`,
    },
    {
      level: "error",
      stream: process.stdout,
      //   period: "1d",
      //   gzip: true,
      //   path: `${process.env.LOGS_FILE_PATH}error/${util.formatTime()}.log`,
    },
    {
      level: "fatal",
      stream: process.stdout,
      //   period: "1d",
      //   gzip: true,
      //   path: `${process.env.LOGS_FILE_PATH}fatal/${util.formatTime()}.log`,
    },
  ],
});

module.exports = log;
