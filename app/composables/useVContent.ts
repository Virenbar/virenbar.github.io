import type { PostsCollection, ProjectsCollection } from "~/types";

async function getProjects() {
  const locale = useI18n().locale.value;
  const collection = ("projects_" + locale) as ProjectsCollection;
  const query = queryCollection(collection);
  return await query.order("title", "ASC").all();
}

async function getProject() {
  const locale = useI18n().locale.value;
  const path = useSwitchLocalePath()("ru");
  const collection = ("projects_" + locale) as ProjectsCollection;

  const query = queryCollection(collection).path(path);
  const project = await query.first();
  return project;
}

async function getPosts() {
  const locale = useI18n().locale.value;
  const collection = ("posts_" + locale) as PostsCollection;
  const query = queryCollection(collection);
  return await query.order("date", "DESC").all();
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
  return await queryCollection("hardware").first();
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
