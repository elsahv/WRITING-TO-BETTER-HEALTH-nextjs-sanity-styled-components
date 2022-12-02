import Link from "next/link";
import { sanityClient, urlFor } from "../client";
import styled from "styled-components";

// STYLES

const Banner = styled.div`
  text-align: left;
  color: #000;
  padding: 100px 150px;
  // background: coral;
`;

const BlogPageTitle = styled.h2`
  font-weight: bold;
  font-size: 35px;
  color: teal;
  text-shadow: 1px 1px 1px #000;
`;

export const PostsWrapper = styled.div`
  // background: orange;
  padding: 0 50px;
  border-top: solid 1px black;

  @media only screen and (max-width: 600px) {
    border-left: none;
    border-top: solid 2px black;
  }
`;

export const CategoryBanner = styled.div`
  ul {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin-bottom: 30px;
  }
  li {
    margin: 0 20px;
    list-style: none;
    background: teal;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border: solid 1px #000;
    padding: 10px 15px;
    border-radius: 25px;
  }
`;

export const IndexGrid = styled.div`
  // background: orange;
  display: grid;
  grid-template-areas: "ls rs";
  grid-gap: 2em;

  @media only screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "ls"
      "rs";
  }
`;

export const PostTitle = styled.h2`
  padding: 10px 0px;
  text-align: center;
  text-transform: capitalize;
  // text-shadow: 1px 1px 1px #000;
  color: #000;
`;

export const MostRecentTitle = styled.h2`
  padding-top: 55px;
  text-align: center;
  font-size: 25px;
  text-decoration: underline;
  color: #000;
  // text-shadow: 1px 1px 1px #000;
`;

export const PostsGrid = styled.div`
  grid-area: rs;
  padding: 50px 105px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2em;
  border-bottom: solid 1px #000;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 20px 40px;
  }

  @media only screen and (max-width: 531px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  .img {
    width: 100%;
    height: 400px;
    border: solid 1px black;
    &:hover {
      opacity: 0.7;
      transition: 2s;
    }
  }

  @media only screen and (max-width: 1024px) {
    .img {
      height: 300px;
    }
  }
`;

//END STYLES

export default function blog({ posts }) {
  return (
    <div>
      <Banner>
        <BlogPageTitle>Blog</BlogPageTitle>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae at,
          voluptates corporis quia a placeat asperiores ratione ducimus?
        </span>
      </Banner>
      <CategoryBanner>
        <ul>
          <li>Blogging Resources</li>
          <li>Cooking Notes</li>
          <li>Nutritional Biochemsitry</li>
        </ul>
      </CategoryBanner>

      <IndexGrid>
        <PostsWrapper>
          <PostsGrid>
            {posts &&
              posts.map((post, index) => (
                <span key={index}>
                  <PostTitle>{post.title}</PostTitle>
                  <Link href={`post/${post.slug.current}`}>
                    <ImgWrapper>
                      <img
                        src={urlFor(post.image)}
                        alt="main pic"
                        className="img"
                      />
                    </ImgWrapper>
                  </Link>
                </span>
              ))}
          </PostsGrid>
        </PostsWrapper>
      </IndexGrid>
    </div>
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
