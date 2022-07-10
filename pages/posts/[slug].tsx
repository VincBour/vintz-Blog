import { BreadCrumb } from "@/components/breadcrumb/Breadcrumb";
import { Layout } from "@/components/layout/Layout";
import { getAllPosts, getPostBySlug } from "lib/api";
import markdownToHtml from "lib/markdownToHtml";
import { useRouter } from "next/router";
import { ArticleType } from "@/types/dto";
import markdownStyles from "../../styles/markdown-styles.module.css";

function Post({ post }: { post: ArticleType & { content: string } }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <div>Error</div>;
  }
  console.log(post.tabContent);
  return (
    <Layout isPost>
      {router.isFallback ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="bg-mikadoYellow" style={{ minHeight: "min-content" }}>
            <div
              style={{
                gap: "64px 96px",
                width: "100%",
                maxWidth: "1100px",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: "32px",
                paddingRight: "32px",
              }}
            >
              <div>
                <BreadCrumb
                  level1={{ label: "Post", href: "/posts" }}
                  level2="react"
                />
              </div>
              <div className="pb-10">
                <h2
                  id="user-content-introduction"
                  className="font-serif font-bold text-6xl"
                >
                  {post.title}
                </h2>
                <h3 className="font-serif font-bold text-gray-600 text-xl">
                  {post.subtitle}
                </h3>
              </div>
            </div>
          </div>
          <main
            className="flex-1 grid"
            style={{
              gap: "64px 96px",
              width: "100%",
              maxWidth: "1100px",
              marginLeft: "auto",
              marginRight: "auto",
              paddingLeft: "32px",
              paddingRight: "32px",
            }}
          >
            <section className="grid grid-cols-main mt-10">
              <article>
                <div
                  className={markdownStyles["markdown"]}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </article>
              <div className="ml-5">
                <div className="sticky top-36">
                  <h2 className="font-serif mb-10 mt-5 text-center text-redCrayola text-lg font-semibold">
                    TABLE OF CONTENTS
                  </h2>
                  <ul className="ml-14">
                    {post.tabContent.map((tab) => (
                      <li key={tab.label}>
                        <a
                          href={`#${tab.href}`}
                          className="text-lg target:text-blueNCS"
                        >
                          {tab.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </main>
        </>
      )}
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "subtitle",
    "tabContent",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
export default Post;
