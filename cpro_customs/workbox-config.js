module.exports = {
    //Global directory of app
    "globDirectory": ".",
    //Patterns for files that will be added
    "globPatterns": [
        //Add all assets images
        "public/manifest.json",
        "**/js/**\/main.*.js",
        "**/css/**\/main.*.css",
        "public/assets/**\/*.{png,jpg,svg}",
        "public/favicon.ico",
        "**/media/**\/*.{png,jpg,svg}",
        "public/index.html",
        "src/registerServiceWorker.js",
    ],
    //Destination to service worker template
    "swSrc": "src/sw-base.js",
    //Destination where the new service worker will be saved
    "swDest": "src/custom-sw.js",
    "globIgnores": [],
    // Remove 'public/' prefix from url
    modifyUrlPrefix: {
        'public/': '',
        'build/': '',
	'src/': '',
    }
};
