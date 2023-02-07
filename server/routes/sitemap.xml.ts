import { serverQueryContent } from "#content/server";
import { SitemapStream, streamToPromise } from "sitemap";

export default defineEventHandler(async (event) => {
  const sitemap = new SitemapStream({ hostname: "https://virenbar.ru" });

  // const routes = useRouter().getRoutes();
  // for (const route of routes) {
  //   sitemap.write({
  //     url: route.path,
  //     changefreq: "monthly"
  //   });
  // }

  const docs_ru = await serverQueryContent(event, { where: [{ _locale: "ru" }] }).find();
  const docs_en = await serverQueryContent(event, { where: [{ _locale: "en" }] }).find();
  const docs_es = await serverQueryContent(event, { where: [{ _locale: "es" }] }).find();
  const docs = [...docs_ru, ...docs_en, ...docs_es];
  for (const doc of docs) {
    const prefix = `${doc._locale}` == "ru" ? "" : `${doc._locale}`;
    sitemap.write({
      url: prefix + doc._path,
      changefreq: "monthly"
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});
