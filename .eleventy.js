module.exports = function (eleventyConfig) {
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy `css/fonts/` to `_site/css/fonts`
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("assets/");

  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("**/*.jpg");

  eleventyConfig.addPassthroughCopy("robots.txt");

  eleventyConfig.addFilter("sortByDate", function (posts) {
    return posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  });


  eleventyConfig.addFilter("formatDate", function(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  });

  // Custom filter to sort posts by date
  eleventyConfig.addFilter("sortByDate", function(posts) {
    return posts.slice().sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  });

  eleventyConfig.addCollection("articles", function (collectionApi) {
    return collectionApi
      .getAll()
      .filter(
        (item) =>
          !item.url.startsWith("/articles/**") // &&
          // !item.url.startsWith("/articles")
      );
  });


};
