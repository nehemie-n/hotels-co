import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { PageLayout } from "../../components";
import { Api, ApiRooms } from "../../components/api";
import { RoomsError, RoomsLoading } from "../../components/HomeRooms/Loading";
import { Screen } from "../../components/Layout/Screen/Screen";
import { RoomCard } from "../../components/Room";
import { SearchInput } from "../../components/SearchInput/SearchInput";

interface Props {}

export default function ResultsPage() {
  const router = useRouter();
  const [txt, setState] = useState<string>();
  useEffect(() => {
    if (router.isReady) {
      setState(router.query.txt as string);
    }
  }, [router.isReady, router.query]);

  return (
    <>
      <Head>
        <title>Hotels & Co</title>
        <meta name="description" content="Find a suitable room to stay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*  */}
      <PageLayout showSearch>
        <main className="">
          {/* Restult Rooms */}
          <div className="py-6">
            {txt ? <Results txt={txt} /> : <RoomsLoading />}
          </div>
          {/* Footer Art */}
          <div className="opacity-40 relative z-10 pt-20">
            <img className="w-full" src="footer-art.svg" />
          </div>
        </main>
      </PageLayout>
      {/*  */}
    </>
  );
}

function Results({ txt }: { txt: string }) {
  /**
   * Search rooms
   */
  const { isLoading, isFetching, error, data, refetch } = useQuery<
    any,
    Error,
    ApiRooms
  >({
    queryKey: ["searchRoomsData"],
    keepPreviousData: false,
    refetchOnMount: true,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    queryFn: () =>
      Api.get<ApiRooms>(`/v1/rooms?search=${txt}&page=1&limit=20`).then(
        (resp) => resp.data
      ),
  });

  useEffect(() => {
    refetch();
  }, [txt]);

  if (isLoading || isFetching) {
    return <RoomsLoading />;
  }
  if (error) return <RoomsError err={error}></RoomsError>;
  return (
    <Screen>
      <div>
        {/* Results Highlights */}
        <div className="py-4 text-center">
          {txt ? (
            <div>
              <div>
                <span>
                  Searching for for: <b>{txt}</b>
                </span>
              </div>
              <div>
                Got <b>{data.count}</b> results
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {data.items.map((r) => {
          return <RoomCard key={r.id + "room"} room={r}></RoomCard>;
        })}
      </div>
    </Screen>
  );
}
