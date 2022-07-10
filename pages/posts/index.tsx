import { Layout } from "@/components/layout/Layout";
import { getCategories } from "lib/constants";

const Posts = () => {
  const categories = getCategories();
  return (
    <Layout>
      <h1>Posts</h1>
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
        </div>
      ))}
    </Layout>
  );
};

export default Posts;
