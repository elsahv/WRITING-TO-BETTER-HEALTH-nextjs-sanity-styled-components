import Head from "next/head";
import HomePageHero from "../components/sections/homepage/HomePageHero";
import ThreeColumnSection from "../components/sections/homepage/ThreeColSection";
import SellingPoints from "../components/sections/homepage/SellingPoints";
import DevDesignProcess from "../components/sections/homepage/DevDesignProcess";

//* STYLES

//* END STYLES

export default function Home() {
  return (
    <div>
      <Head>
        <title>Writing to Better Health</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <HomePageHero />
        <ThreeColumnSection />
        <SellingPoints />
        <DevDesignProcess />
      </>
    </div>
  );
}
