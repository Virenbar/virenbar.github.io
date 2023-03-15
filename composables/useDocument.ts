import { MarkdownParsedContent, ParsedContent, QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";

let path: string;
let locale: string;

export default function () {
  path = useSwitchLocalePath()("ru");
  locale = useI18n().locale.value;
  return {
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

async function getProjects() {
  return await getQuery({ $contains: "projects" }).find() as Project[];
}

async function getProject() {
  try {
    return await getQuery(path).findOne() as Project;
  } catch (error) {
    return null;
  }
}

async function getPostSurround() {
  try {
    const surround = await getQuery({ $contains: "posts" }).findSurround(path);
    return {
      prev: <ParsedContent | null>surround[0],
      next: <ParsedContent | null>surround[1]
    };
  } catch (error) {
    return {
      prev: null,
      next: null
    };
  }
}

async function getPosts() {
  return await getQuery({ $contains: "posts" }).sort({ date: -1 }).find() as Post[];
}

async function getPost() {
  try {
    return <Post | null>await getQuery(path).findOne();
  } catch (error) {
    console.log(error);
    return null;
  }
}

// type Document = Omit<MarkdownParsedContent, "_locale"> & { _locale?: string }

interface Project extends MarkdownParsedContent {
  repo?: string
  github?: string
}
interface Post extends MarkdownParsedContent {
  date: string
}
