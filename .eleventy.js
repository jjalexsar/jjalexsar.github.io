const markdownIt = require("markdown-it");
const markdownItImsize = require("markdown-it-imsize");

module.exports = function (eleventyConfig) {
  let md = markdownIt({ html: true }).use(markdownItImsize);
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy({ "src/css": "css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });
  return {
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
      build: "eleventy",
    },
    pathPrefix: "/",
  };
};
