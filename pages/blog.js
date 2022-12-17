/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Head from "next/head";
import { sanityClient, urlFor } from "../client";
import { BlogPostImgWrapper } from "../components/styles/images/BlogPostImages.styled";
import {
  PostCategoryBtn,
  PostTagBtn,
} from "../components/styles/buttons/BlogPostBtns.styled";
import { Banner, BlogPageTitle } from "../components/styles/PageBanner.styled";
import {
  PostsWrapper,
  CategoryBanner,
  IndexGrid,
  PostTitle,
  PostCategory,
  PostTags,
  PostsGrid,
  ContentExcerpt,
} from "../components/styles/blog.styled";

export default function blog({ posts }) {
  return (
    <>
      <Head>
        <title>Writing to Better Health | Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner>
        <BlogPageTitle>Blog</BlogPageTitle>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at,
          voluptates corporis quia a placeat asperiores ratione ducimus?
        </p>
      </Banner>
      <CategoryBanner>
        <ul>
          <li>Blogging Resources</li>
          <li>Cooking Notes</li>
          <li>Nutritional Biochemistry</li>
        </ul>
      </CategoryBanner>

      <IndexGrid>
        <PostsWrapper>
          <PostsGrid>
            {posts &&
              posts.map((post, index) => (
                <span key={index}>
                  <PostCategory>
                    <PostCategoryBtn>Category</PostCategoryBtn>
                  </PostCategory>
                  <Link
                    style={{ color: "#000", textDecoration: "none" }}
                    href={`post/${post.slug.current}`}
                  >
                    <BlogPostImgWrapper>
                      <img
                        src={urlFor(post.image)}
                        alt="main pic"
                        className="img"
                      />
                    </BlogPostImgWrapper>
                    <PostTitle>{post.title}</PostTitle>

                    <ContentExcerpt>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Vel eaque nulla tempora o adipisci exercitationem earum,
                      deserunt aperiam fugiat animi?
                    </ContentExcerpt>
                    <PostTags>
                      <PostTagBtn>tags</PostTagBtn>
                    </PostTags>
                  </Link>
                </span>
              ))}
          </PostsGrid>
        </PostsWrapper>
      </IndexGrid>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "blog"]';
  const posts = await sanityClient.fetch(query);
  if (!posts.length) {
    return {
      props: {
        posts: [],
      },
    };
  } else {
    return {
      props: {
        posts,
      },
    };
  }
};
