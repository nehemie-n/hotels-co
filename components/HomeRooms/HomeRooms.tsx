import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { ApiRooms } from "../api/interfaces";
import { Screen } from "../Layout/Screen/Screen";
import { RoomCard } from "../Room";
import { RoomsError, RoomsLoading } from "./Loading";

export function HomeRooms() {
  const { isLoading, error, data } = useQuery<any, Error, ApiRooms>({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/rooms?page=1&limit=20`).then(
        (res) => res.json()
      ),
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
          return <RoomCard room={r}></RoomCard>;
        })}
      </div>
    </Screen>
  );
}
