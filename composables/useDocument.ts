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
  //const path = useSwitchLocalePath()("ru");
  const path = useLocalePath()(useRoute().path, "ru");
  console.log(path);
  return await getQuery(path).findOne() as Project;
}

async function getPosts() {
  return await getQuery({ $contains: "posts" }).find() as Post[];
}

async function getPost() {
  const path = useSwitchLocalePath()("ru");
  return await getQuery(path).findOne() as Post;
}

interface Project extends MarkdownParsedContent {
  repo?: string
  github?: string
}
interface Post extends MarkdownParsedContent {
  date: string
}
