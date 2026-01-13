import PostSingle from "@layouts/PostSingle";
import { getSinglePage } from "@lib/contentParser";
import { getPostComments } from "@lib/getPostComments";
import { getTaxonomy } from "@lib/taxonomyParser";
import parseMDX from "@lib/utils/mdxParser";

export default function BlogPostPage(props) {
  return <PostSingle {...props} />;
}

export const getStaticPaths = () => {
  const posts = getSinglePage("content/blog");

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const posts = getSinglePage("content/blog");
  const post = posts.find((p) => p.slug === params.slug);

  if (!post || !post.frontmatter || !post.content) {
    return { notFound: true };
  }

  // parse MDX content
  const mdxContent = await parseMDX(post.content);

  // fetch comments
  const comments = getPostComments(params.slug) || [];

  // all categories
  const categories = getTaxonomy("content/blog", "categories");

  // related posts (posts that share at least one category)
  const relatedPosts = posts.filter((p) =>
    p.frontmatter.categories.some((cat) =>
      post.frontmatter.categories.includes(cat)
    )
  );

  return {
    props: {
      ...post,
      mdxContent,
      comments,
      allCategories: categories,
      relatedPosts,
      posts,
    },
  };
};
