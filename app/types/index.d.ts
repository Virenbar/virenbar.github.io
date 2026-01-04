import type { MarkdownParsedContent, ParsedContent } from "@nuxt/content";

export type Nullable<T> = T | null;

type PostsCollection = `posts_${"en" | "ru" | "eo"}`;
type ProjectsCollection = `projects_${"en" | "ru"}`;

interface MarkdownPage extends MarkdownParsedContent {
  path: string
  title: string
}

export interface Post extends MarkdownPage {
  date: string
  description?: string
}

export interface Project extends MarkdownPage {
  source?: string
  github?: string
  url?: string
}

export interface Hardware extends ParsedContent {
  pc: Record<string, string[]>
  server: Record<string, string[]>
  server_ha: Record<string, string[]>
}

interface Link {
  title: string
  url: string
  id: string
}
