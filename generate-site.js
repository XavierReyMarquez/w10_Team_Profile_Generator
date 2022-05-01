const fs = require("fs");

const writeFile = (fileContent) => {
  return new Promise((resolve, rejects) =>
    fs.writeFile("./dist/index.html", fileContent, (err) => {
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

const copyFile = () => {
  return new Promise((resolve, rejects) =>
    fs.copyFile("./src/styles.css", "./dist/styles.css", (err) => {
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

module.exports = { writeFile, copyFile };
