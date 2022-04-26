module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/style.css");
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("./src/js/home.js");
    eleventyConfig.addPassthroughCopy("./src/js/vanilla-tilt.min.js");

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};