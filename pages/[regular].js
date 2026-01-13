import NotFound from "@layouts/404";
import About from "@layouts/About";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// Main component for all regular pages
const RegularPages = ({ data }) => {
  const { frontmatter, content } = data || {};
  const { title, meta_title, description, image, noindex, canonical, layout } =
    frontmatter || {};

  return (
    <Base
      title={title || "Page"}
      description={description ? description : content?.slice(0, 120) || ""}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "contact" ? (
        // Pass dummy data for contact page
        <Contact
          data={{
            frontmatter: {
              title: "Contact Us",
              form_action: "#", // dummy action
            },
          }}
        />
      ) : (
        <Default data={data} />
      )}
    </Base>
  );
};

export default RegularPages;

// Generate all regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  // Always fallback false so unknown pages return 404
  return {
    paths,
    fallback: false,
  };
};

// Fetch data for each page
export const getStaticProps = async ({ params }) => {
  const { regular } = params;

  // Special case for contact page: dummy data
  if (regular === "contact") {
    return {
      props: {
        slug: "contact",
        data: {
          frontmatter: {
            title: "Contact Us",
            layout: "contact",
            form_action: "#", // dummy
          },
          content: "",
        },
      },
    };
  }

  // All other pages: fetch real data
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
