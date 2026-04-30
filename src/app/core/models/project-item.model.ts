export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client?: string;
  year: string;
  summary: string;
  cover: string;
  tags: string[];
  featured: boolean;
}
