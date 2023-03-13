import { serverQueryContent } from "#content/server";
import fs from "fs";
import { dirname, resolve } from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";

const EndPoint = "https://virenbar.ru";

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({ hostname: EndPoint });

  // Static pages
  // https://github.com/benoitdemaegdt/nuxt3-sitemap
  const staticEndpoints = getStaticEndpoints();
  for (const staticEndpoint of staticEndpoints) {
    sitemap.write({ url: staticEndpoint, changefreq: "monthly" });
  }

  const docs_ru = await serverQueryContent(event, { where: [{ _locale: "ru" }] }).find();
  const docs_en = await serverQueryContent(event, { where: [{ _locale: "en" }] }).find();
  const docs_es = await serverQueryContent(event, { where: [{ _locale: "es" }] }).find();
  const docs = [...docs_ru, ...docs_en, ...docs_es];
  for (const doc of docs) {
    const prefix = `${doc._locale}` == "ru" ? "" : `${doc._locale}`;
    sitemap.write({ url: prefix + doc._path, changefreq: "monthly" });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});

function getStaticEndpoints(): string[] {
  const current = dirname(fileURLToPath(import.meta.url));
  const files = getFiles(`${current}/../../pages`);
  return files
    .filter((file) => !file.includes("slug")) // exclude dynamic content
    .map((file) => file.split("pages")[1])
    .map((file) => {
      return file.endsWith("index.vue") ? file.split("/index.vue")[0] : file.split(".vue")[0];
    });
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
