export interface ProjectItem {
  id: string;
  slug: string;
  type: string;
  title: string;
  subtitle?: string;
  category?: string;
  client?: string;
  sector: string;
  period: string;
  year?: string;
  role: string;
  tasks: string[];
  summary: string;
  excerpt?: string;
  problem: string;
  approach: string[];
  deliverables: string[];
  stack: string[];
  tags: string[];
  featured: boolean;
  cover: string;
}
