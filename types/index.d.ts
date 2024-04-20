import type { MarkdownParsedContent, ParsedContent } from "@nuxt/content/dist/runtime/types";

export type Nullable<T> = T | null

interface MarkdownPage extends MarkdownParsedContent {
  _path: string
  title: string
}

export interface Post extends MarkdownPage {
  date: string
}

export interface Project extends MarkdownPage {
  source?: string
  github?: string
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
