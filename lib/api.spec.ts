import { getPostBySlug, getPostSlugs } from "./api";

const namePosts = [ 'dynamic-routing.md', 'hello-world.md', 'preview.md' ];
const fieldNames = [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
    'excerpt',
  ]
describe('api', () => {
    describe('getPostSlugs', () => {
        it('should return name of each file ', () => {
            const result = getPostSlugs();
            expect(result.length).toEqual(4);
            expect(result[0]).toEqual('article.md');
            expect(result[1]).toEqual('dynamic-routing.md');
            expect(result[2]).toEqual('hello-world.md');
            expect(result[3]).toEqual('preview.md');
        });
    });
    describe('getPostBySlug', () => {
        it('should ', () => {
            const result = getPostBySlug(namePosts[0], fieldNames);
            expect(result.title).toEqual('Dynamic Routing and Static Generation');
            expect(result.date).toEqual('2020-03-16T05:35:07.322Z');
            expect(result.slug).toEqual('dynamic-routing');
            expect(result.author).toEqual({ name: 'JJ Kasper', picture: '/assets/blog/authors/jj.jpeg' });
            expect(result.coverImage).toEqual('/assets/blog/dynamic-routing/cover.jpg');
            expect(result.excerpt).toEqual('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.');
        });
    });
});