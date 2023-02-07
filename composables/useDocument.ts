import { MarkdownParsedContent, QueryBuilderWhere } from "@nuxt/content/dist/runtime/types";

export default function () {
  return {
    getProjects,
    getProject,
    getPosts,
    getPost
  };
}

function getQuery(path: string | QueryBuilderWhere) {
  const { locale } = useI18n();
  return queryContent({
    where: [
      { _locale: locale.value },
      { _path: path }
    ]
  });
}

async function getProjects() {
  return await getQuery({ $contains: "projects" }).find() as Project[];
}

async function getProject() {
  try {
    const path = useSwitchLocalePath()("ru");
    //const path = useLocalePath()(useRoute().path, "ru");
    return await getQuery(path).findOne() as Project;
  } catch (error) {
    return null;
  }
}

async function getPosts() {
  return await getQuery({ $contains: "posts" }).find() as Post[];
}

async function getPost() {
  try {
    const path = useSwitchLocalePath()("ru");
    return await getQuery(path).findOne() as Post;
  } catch (error) {
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

