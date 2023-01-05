import { useQuery } from "@tanstack/react-query";
import Head from "next/head";
import { useRouter } from "next/router";
import { PageLayout } from "../../components";
import { Api } from "../../components/api";
import { Room } from "../../components/api/interfaces";
import { Screen } from "../../components/Layout/Screen/Screen";
import { RoomViewResult } from "../../components/pages";

import {
  RoomViewError,
  RoomViewLoading,
} from "../../components/pages/RoomView/RoomLoading";

interface Params {
  id: string;
  req: Request;
  res: Response;
}
export function getServerSideProps({ req }: any) {
  return {
    props: {
      id: "router.query",
      room: {},
    },
  };
}

interface Props {
  id: string;
}
export default function RoomPage({ id }: any) {
  const router = useRouter();
  const roomId = router.query.id;
  console.log("Room ", roomId);
  /**
   * Const fetch the room
   */
  let { isLoading, isError, error, data, isFetching } = useQuery<
    any,
    Error,
    Room
  >({
    queryKey: ["roomData"],
    keepPreviousData: false,
    refetchOnMount: true,
    cacheTime: 0,
    refetchOnWindowFocus: false,
    initialData: {
      isLoading: true,
    },
    queryFn: () => {
      return Api.get<Room>(`/v1/rooms/${roomId}`)
        .then(async (res) => {
          await setTimeout(() => {}, 1000); // Wait for some loading time
          return res.data;
        })
        .catch((err) => {
          console.log("Error fetching the room ", err);
          throw err;
        });
    },
  });

  /**
   * Render the components respectively
   */
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
        <Screen>
          <main className="py-12">
            {isLoading || isFetching ? (
              <RoomViewLoading />
            ) : error ? (
              <RoomViewError />
            ) : (
              <div>{<RoomViewResult room={data!} />}</div>
            )}
          </main>
        </Screen>
      </PageLayout>
    </>
  );
}
