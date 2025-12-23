import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { SitemapStream, streamToPromise } from "sitemap";
import type { PostsCollection, ProjectsCollection } from "~/types";

const EndPoint = "https://virenbar.ru";

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({ hostname: EndPoint });

  // Static pages
  // https://github.com/benoitdemaegdt/nuxt3-sitemap
  const staticEndpoints = await getStaticEndpoints();

  const locales = ["ru", "en"] as const;
  for (const locale of locales) {
    const prefix = locale == "ru" ? "" : `/${locale}`;
    for (const staticEndpoint of staticEndpoints) {
      sitemap.write({ url: prefix + staticEndpoint, changefreq: "monthly" });
    }

    const posts = await queryCollection(event, ("posts_" + locale) as PostsCollection).all();
    const projects = await queryCollection(event, ("projects_" + locale) as ProjectsCollection).all();
    for (const page of [...posts, ...projects]) {
      sitemap.write({ url: prefix + page.path, changefreq: "monthly" });
    }
  }

  sitemap.end();
  return streamToPromise(sitemap);
});

async function getStaticEndpoints(): Promise<string[]> {
  const current = dirname(fileURLToPath(import.meta.url));
  // console.log(current);
  // You're ugly
  const files = getFiles(`${current}/../../../../../app/pages`);
  return files
    .filter(file => !file.includes("slug")) // exclude dynamic content
    .map(file => file.split("pages")[1])
    .map(file => file.replace(/([\\/]index)?(\.vue$)/gm, ""));
}

/**
 * recursively get all files from /pages folder
 */
function getFiles(dir: string): string[] {
  const dirents = fs.readdirSync(dir, { withFileTypes: true });
  const files = dirents.map((dirent) => {
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  });
  return files.flat();
}
