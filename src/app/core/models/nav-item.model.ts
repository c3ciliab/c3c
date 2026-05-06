export interface NavChildItem {
  id: string;
  labelKey: string;
  route?: string;
  fragment?: string;
}

export interface NavItem {
  id: string;
  labelKey: string;
  order: number;
  children?: NavChildItem[];
}
