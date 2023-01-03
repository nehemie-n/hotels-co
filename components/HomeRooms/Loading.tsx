import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

export function RoomsLoading() {
  return (
    <div className="flex flex-col gap-y-8 p-5 justify-center items-center ">
      <Spin size="large" indicator={antIcon} />
      <p>Loading...</p>
    </div>
  );
}

export function RoomsError({ err }: { err?: Error }) {
  return (
    <div className="py-8 mx-auto max-w-screen-sm text-center">
      <p className="font-bold text-2xl">Oops!</p>
      <p className="font-semibold text-xl">
        An error has occurred while fetching rooms
      </p>
      <div>{err?.message}</div>
    </div>
  );
}
