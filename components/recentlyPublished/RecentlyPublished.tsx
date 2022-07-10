import { ArticleType } from "types/dto";

interface RecentlyPublishedProps {
  allPosts: Partial<ArticleType>[];
}

export function RecentlyPublished({ allPosts }: RecentlyPublishedProps) {
  return (
    <div>
      <h2 className="font-cursive mb-10 mt-12 text-redCrayola text-lg">
        Recently Published
      </h2>
      <div>
        {allPosts?.map((article) => (
          <Article key={article.title} {...article} />
        ))}
      </div>
    </div>
  );
}

function Article({
  title,
  subtitle,
  excerpt,
  slug,
  category,
}: Partial<ArticleType>) {
  return (
    <section>
      <article>
        <a href={`/posts/${slug}`}>
          <h3 className="font-sans font-bold text-3xl text-oxfordBlue hover:text-blueNCS">
            {title}
          </h3>
          <h4 className="font-sans font-semibold text-gray-500 text-xl mb-6">
            {subtitle}
          </h4>
          <p className="text-lg text-justify">{excerpt}</p>
          <div style={{ minHeight: "24px", minWidth: "24px" }}></div>
          <div className="font-sans font-bold text-lg">Read More</div>
        </a>
        <div style={{ minHeight: "24px", minWidth: "24px" }}></div>
      </article>
    </section>
  );
}
