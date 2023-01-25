const svgSprite = require("eleventy-plugin-svg-sprite")

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets")
    eleventyConfig.addPassthroughCopy({ "screenshot.png": "assets/screenshot.png" })

    eleventyConfig.addPlugin(svgSprite, {
        path: "./assets/icons",
  })

  return {
    dir: {
      output: "docs"
    }
  }
}
