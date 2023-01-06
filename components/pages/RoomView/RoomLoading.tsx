import { Button, Skeleton } from "antd";
import Link from "next/link";
import { Screen } from "../../Layout/Screen/Screen";

import img404 from "../../../public/Error404.svg";
import Image from "next/image";

export function RoomViewLoading() {
  return (
    <div>
      <div className="flex flex-col gap-y-8">
        {/*  */}
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-7">
            <Skeleton.Button block style={{ height: "400px" }} active />
          </div>
          <div className="col-span-5">
            <div className="grid grid-rows-2 gap-2  h-full">
              <div className="row-span-1 ">
                <Skeleton.Button block active style={{ height: "196px" }} />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Skeleton.Button block active style={{ height: "196px" }} />
                <Skeleton.Button block active style={{ height: "196px" }} />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="max-w-screen-lg flex flex-col gap-y-10">
          <Skeleton.Button size="large" style={{ width: "200px" }} active />
          <Skeleton.Button size="large" style={{ width: "900px" }} active />
          <Skeleton active />
        </div>
      </div>
    </div>
  );
}

export function RoomViewError() {
  return (
    <div>
      <div>
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
                Couldn<span>&#39</span> t find the room you are looking for.
                Check the url you browsed too.
              </p>
              <div>
                <Link href={"/"}>
                  <Button size="large" type="primary">
                    Take Me Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Screen>
      </div>
    </div>
  );
}
