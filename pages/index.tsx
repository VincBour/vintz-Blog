import { Layout } from "@/components/layout/Layout";
import { RecentlyPublished } from "@/components/recentlyPublished/RecentlyPublished";
import { TopCategories } from "@/components/topCategories/TopCategories";
import { getAllPosts } from "@/lib/api";
import { getFieldsPost } from "@/lib/constants";
import type { InferGetStaticPropsType, NextPage } from "next";

function Home({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Layout home>
        <div className="grid grid-cols-main gap-8 z-5">
          <div>
            <RecentlyPublished allPosts={allPosts} />
          </div>
          <div>
            <TopCategories />
          </div>
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getAllPosts(getFieldsPost());

  return {
    props: { allPosts },
  };
}

export default Home;
