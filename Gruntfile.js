module.exports = function (grunt) {
  "use strict";
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    "gh-pages": {
      options: {
        base: "src/",
        message: "auto-generated commit",
      },
      src: ["**/*"],
    },
  });
  for (var key in grunt.file.readJSON("package.json").devDependencies) {
    if (key !== "grunt" && key.indexOf("grunt") === 0) {
      grunt.loadNpmTasks(key);
    }
  }
  grunt.registerTask("default", ["gh-pages"]);
};
