export interface ServiceItem {
  id: string;
  title: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  dropdown?: string[];
  megaMenu?: boolean;
}

export interface AccordionItem {
  title: string;
  content: string;
}