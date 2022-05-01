const fs = require("fs");

const writefile = (fileContent) => {
  return new Promise((resolve, rejects) =>
    fs.writefile("index.html", fileContent, (err) => {
      if (err) {
        rejects(err);
        return;
      }

      resolve({
        ok: true,
        message: "Profiles Created",
      });
    })
  );
};

const copyfile = () => {
  return new Promise((resolve, rejects) =>
    fs.copyfile("./src/styles.css", "./dist/style.css", (err) => {
      if (err) {
        rejects(err);
        return;
      }
      resolve({
        ok: true,
        message: "Done",
      });
    })
  );
};

module.exports = { writefile, copyfile };
