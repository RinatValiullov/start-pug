const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");

const pugCompile = () => {
  return src("./src/**/*.pug", {
    ignore: ["src/includes/**/*.pug", "src/layouts/**/*.pug"]
  })
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(dest("./dist"));
};

exports.default = () => {
  watch("./src/**/*.pug", series(pugCompile));
};
