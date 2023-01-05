import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Api } from "../api";
import { ApiRooms } from "../api/interfaces";
import { Screen } from "../Layout/Screen/Screen";
import { RoomCard } from "../Room";
import { RoomsError, RoomsLoading } from "./Loading";

export function HomeRooms() {
  const { isLoading, error, data } = useQuery<any, Error, ApiRooms>({
    queryKey: ["homeRoomsData"],
    queryFn: () => Api.get(`/v1/rooms?page=1&limit=20`).then((res) => res.data),
  });

  /**
   * Loading
   */
  if (isLoading) {
    return <RoomsLoading />;
  }
  /**
   * If error
   */
  if (error) return <RoomsError err={error}></RoomsError>;

  return (
    <Screen>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.items.map((r) => {
          return <RoomCard key={r.id + "room"} room={r}></RoomCard>;
        })}
      </div>
    </Screen>
  );
}
