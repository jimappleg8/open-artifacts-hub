module.exports = function(eleventyConfig) {

  // Copy in _public files
  eleventyConfig.addPassthroughCopy({'./templates/_public/': './'});

  // Copy in bootstrap css file from node_modules
  eleventyConfig.addPassthroughCopy(
    {'./node_modules/bootstrap/dist/css/bootstrap.min.css': './assets/css/bootstrap.min.css'}
  );

  // Return your Object options:
  return {

    // Control which files Eleventy will process
    // e.g.: *.md, *.njk, *.html, *.liquid
    templateFormats: ['md', 'njk', 'html'],

    // Pre-process *.md files with: (default: `liquid`)
    markdownTemplateEngine: 'njk',

    // Pre-process *.html files with: (default: `liquid`)
    htmlTemplateEngine: 'njk',

    dir: {
      input: "templates",
      output: "_site",
      data: "_data",
      includes: "_includes",
      layouts : "_layouts"
    }
  }
};