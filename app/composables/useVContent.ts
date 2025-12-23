import type { PostsCollection, ProjectsCollection } from "~~/types";
// import { withLeadingSlash } from "ufo";

// async function getCollection(path?: string) {
//   path ??= useSwitchLocalePath()("ru");
//   const locale = useI18n().locale.value;
//   const route = useRoute();
//   const slug = computed(() => withLeadingSlash(String(route.params.slug)));
//   const collection = ("content_" + locale) as keyof Collections;
//   const content = await queryCollection(collection).path(slug.value).first();
//   return content;
// }

// async function getQuery(path?: string) {
//   const I18n = useI18n();
//   path ??= useSwitchLocalePath()(I18n.defaultLocale);
//   const locale = I18n.locale.value;

//   const query = await queryCollection("content").path(`/${locale}${path}`).all();
//   return query;
// }

async function getProjects() {
  const locale = useI18n().locale.value;
  const collection = ("projects_" + locale) as ProjectsCollection;
  const query = queryCollection(collection);
  return await query.order("title", "ASC").all(); // as Post[];
  // const query = await queryCollection("content").where("path", "LIKE", `/${locale}/projects/%`).all();
  // console.log(query);
  // return query;
}

async function getProject() {
  const locale = useI18n().locale.value;
  const path = useSwitchLocalePath()("ru");
  const collection = ("projects_" + locale) as ProjectsCollection;

  const query = queryCollection(collection).path(path);
  const project = await query.first();// as Project;
  return project;
}

async function getPosts() {
  const locale = useI18n().locale.value;
  const collection = ("posts_" + locale) as PostsCollection; // keyof Collections;
  const query = queryCollection(collection);
  return await query.order("date", "DESC").all(); // as Post[];
  // return await getQuery({ $contains: "posts" }).sort({ date: -1 }).find() as Post[];
}

async function getPost() {
  const locale = useI18n().locale.value;
  const path = useSwitchLocalePath()("ru");
  const collection = ("posts_" + locale) as PostsCollection;

  const query = queryCollection(collection).path(path);
  const post = await query.first();// as Post;
  const surround = await queryCollectionItemSurroundings(collection, path);

  return {
    post,
    prev: surround[0],
    next: surround[1],
  };
}

async function getHardware() {
  return await queryCollection("hardware").first();// as Hardware;
}

export default function () {
  // path = useSwitchLocalePath()("ru");
  // locale = useI18n().locale.value;
  return {
    getHardware,
    getProjects,
    getProject,
    getPosts,
    getPost,
  };
}
