import { remark } from 'remark';
import headingId from "remark-heading-id";
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(headingId).use(html).process(markdown)
  return result.toString()
}