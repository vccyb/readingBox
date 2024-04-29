import to from "./await-to-js";

const A = () => {
  return Promise.reject("reject");
};

const B = () => {
  return Promise.resolve("resolve");
};

async function asyncOp() {
  const [error, result] = await to(A(), { customInfo: "请尽快修复bug" });
  if (error) {
    console.log("error =>", error);
    return;
  }
  console.log("success and result =>", result);
}

asyncOp();
