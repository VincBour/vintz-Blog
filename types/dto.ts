export type ArticleType = {
    title: string;
    subtitle: string;
    excerpt: string;
    date: string;
    author: {
      name: string,
      picture: string,
    }
    category: CategoryType;
    status: StatusType;
    slug: string;
    tabContent: TableContentType[];
  };

export type StatusType = "step1" | "step2" | "step3" | "step4"
export type CategoryType = "react" | "typescript" | "javascript" | "other";
type TableContentType = {
    label: string;
    href: string;
}