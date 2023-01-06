import Head from "next/head";
import { Poppins } from "@next/font/google";
import { PageLayout } from "../components";
import Link from "next/link";
import { Image } from "antd";
import { SearchInput } from "../components/SearchInput/SearchInput";
import { HomeRooms } from "../components/HomeRooms/HomeRooms";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Hotels & Co</title>
        <meta name="description" content="Find a suitable room to stay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageLayout>
        <main className="">
          {/* HomeHero */}
          <div className="relative overflow-hidden">
            {/*  */}
            <div className="absolute z-0 top-0 bottom-0 left-0 right-0">
              <img
                src="home.jpg"
                alt={"home Back"}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/*  */}
            <div className="bg-gradient-to-b to-black/90 from-black/50 bg-opacity-70 z-5 relative">
              <div className="max-w-screen-md mx-auto py-12 text-center min-h-[50vh] flex flex-col justify-center gap-y-2 text-white">
                <div className="text-5xl font-semibold">Hotels&Co</div>
                <div className="text-6xl font-bold">
                  <p>Want a place to stay?</p>
                  <p>
                    We<span>'</span>ve got you covered!
                  </p>
                </div>
                <p className="text-2xl py-8 text-white opacity-80">
                  Just hit the search button!
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          {/* Home Search */}
          <div className="-translate-y-[50%] z-20 ">
            <div className="transition-all max-w-screen-md mx-auto hover:shadow-2xl shadow-xl rounded-lg">
              <SearchInput size="large"></SearchInput>
            </div>
          </div>
          {/*  */}
          {/* Proposed Rooms */}
          <HomeRooms />
          {/* Footer Art */}
          <div className="opacity-40 relative z-10 pt-20">
            <img className="w-full" src="footer-art.svg" alt="footer svg" />
          </div>
        </main>
      </PageLayout>
    </>
  );
}
