import { MarkdownParsedContent, ParsedContent } from "@nuxt/content/dist/runtime/types";

export type Nullable<T> = T | null

export interface Post extends MarkdownParsedContent {
  date: string
}

export interface Project extends MarkdownParsedContent {
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
