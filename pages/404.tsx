import { Button } from "antd";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PageLayout } from "../components";
import { Screen } from "../components/Layout/Screen/Screen";
import img404 from "../public/Error404.svg";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Hotels & Co</title>
        <meta name="description" content="Find a suitable room to stay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  */}
      <PageLayout>
        <main>
          <Screen>
            <div className="max-w-screen-sm mx-auto text-center">
              <div className="min-h-[90vh] flex flex-col justify-center items-center gap-4">
                <Image
                  className="h-300"
                  height={300}
                  src={img404}
                  alt="Not Found Img"
                />
                <h1 className="font-bold text-4xl">Ooops!</h1>
                <p className="text-2xl opacity-70">
                  Couldn<span>&#39</span>t find the page you are looking for. Check the url you
                  browsed too.
                </p>
                <div>
                  <Link href={"/"}>
                    <Button size="large" type="primary">
                      Take Me To Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Screen>
        </main>
      </PageLayout>
    </>
  );
}
