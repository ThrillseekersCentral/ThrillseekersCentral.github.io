const pluginTOC = require('eleventy-plugin-toc');
const slugify = require("slugify");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Initialize markdown-it with options
  const md = markdownIt({
    html: true,
    linkify: true,
  });

  // Add the markdown-it-anchor plugin
  md.use(markdownItAnchor);

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h1','h2', 'h3', 'h4'],
    wrapper: '',
    
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("**/*.jpg");
  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.addFilter("sortByDate", function (posts) {
    return posts.slice().sort((a, b) => new Date(b.data?.date || b.date) - new Date(a.data?.date || a.date));
  });

  eleventyConfig.addFilter("formatDate", function(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  });

  eleventyConfig.addFilter("find", function(array, attr, value) {
    return array.find(item => item[attr] === value);
  });

  
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./articles/**/*.md");
  });

};
