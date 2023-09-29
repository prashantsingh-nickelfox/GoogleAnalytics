const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Define the hostname of your website
const hostname = "https://melodic-stroopwafel-b20ae9.netlify.app/"; // Replace with your website's URL

// Function to generate sitemap XML
function generateSitemap() {
  const publicPath = path.resolve(__dirname, "public");
  const pages = [];

  // Add the homepage
  pages.push("/");

  // Add other pages using glob to find files in the 'public' directory
  const files = glob.sync(`${publicPath}/**/*.html`, { nodir: true });
  files.forEach((file) => {
    const relativePath = file.replace(publicPath, "");
    const pagePath = relativePath.replace(/\.html$/, "");
    pages.push(pagePath);
  });

  // Create the sitemap XML
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => `<url><loc>${hostname}${page}</loc></url>`)
        .join("\n")}
    </urlset>`;

  console.log("Sitemap generated successfully!", sitemapXML);
}

generateSitemap();
