import { QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";
import { Navigation, Post, Project } from "~~/types";

let path: string;
let locale: string;

export default function () {
  path = useSwitchLocalePath()("ru");
  locale = useI18n().locale.value;
  return {
    getNavigation,
    getProjects,
    getProject,
    getPostSurround,
    getPosts,
    getPost
  };
}

function getQuery(path: string | QueryBuilderWhere) {
  return queryContent({
    where: [
      { _locale: locale },
      { _path: path }
    ]
  });
}

async function getNavigation() {
  return await queryContent("navigation").findOne() as Navigation;
}

async function getProjects() {
  return await getQuery({ $contains: "projects" }).find() as Project[];
}

function getProject() {
  return getQuery(path).findOne() as Promise<Project>;
}

async function getPostSurround() {
  const surround = await getQuery({ $contains: "posts" }).findSurround(path);
  return {
    prev: <Post | null>surround[0] ?? null,
    next: <Post | null>surround[1] ?? null
  };
}

async function getPosts() {
  return await getQuery({ $contains: "posts" }).sort({ date: -1 }).find() as Post[];
}

function getPost() {
  return getQuery(path).findOne() as Promise<Post>;
}
