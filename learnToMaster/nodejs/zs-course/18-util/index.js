import util from "node:util";

import { exec } from "node:child_process";

const fu = (type) => {
  if (type === 1) {
    return Promise.resolve("111");
  } else {
    return Promise.reject("222");
  }
};

const callback = util.callbackify(fu);
callback(2, (err, value) => {
  console.log(err, value);
});

// const execPromise = util.promisify(exec);
// execPromise("node -v")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// c printf
util.format();
