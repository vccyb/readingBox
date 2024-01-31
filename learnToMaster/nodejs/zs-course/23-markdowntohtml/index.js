const ejs = require("ejs");

const fs = require("node:fs");
const marked = require("marked");

const browserSync = require("browser-sync");

let browser;

const server = () => {
  browser = browserSync.create();
  browser.init({
    server: {
      baseDir: "./",
      index: "index.html",
    },
  });
};

const init = (callback) => {
  // 读取md的内容
  const md = fs.readFileSync("./README.md", "utf-8");
  console.log(marked.parse(md));

  ejs.renderFile(
    "template.ejs",
    {
      content: marked.parse(md),
      title: "markdown to html",
    },
    (err, data) => {
      if (err) throw err;
      fs.writeFileSync("./index.html", data);
      callback && callback();
    }
  );
};

fs.watchFile("./README.md", (cur, pre) => {
  if (cur.mtime !== pre.mtime) {
    init(() => {
      browser.reload();
    });
  }
});

init(() => {
  server();
});

// ejs.renderFile('template.ejs'. {

// })
