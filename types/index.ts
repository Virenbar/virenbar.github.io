import { MarkdownParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Post extends MarkdownParsedContent {
  date: string
}

export interface Project extends MarkdownParsedContent {
  repo?: string
  github?: string
}

export type Nullable<T> = T | null
