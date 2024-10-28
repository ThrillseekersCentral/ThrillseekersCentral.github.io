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

  // 28/10 Updated to work correctly. this will only pick up /article/** now.
eleventyConfig.addCollection("articles", function (collectionApi) {
  return collectionApi.getAll().filter(item => item.url && item.url.startsWith("/article/"));
});

};
