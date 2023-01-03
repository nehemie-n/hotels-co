import { Room } from "../api/interfaces";

export function useRoomHook(room: Room) {
  const xName = room.name + " " + room.location.street + " " + room.location.street;

  const reviewers =
    parseInt(room.reviews["5"]) +
    parseInt(room.reviews["4"]) +
    parseInt(room.reviews["3"]) +
    parseInt(room.reviews["2"]) +
    parseInt(room.reviews["1"]);

  let total =
    parseInt(room.reviews[5]) * 5 +
    parseInt(room.reviews[4]) * 4 +
    parseInt(room.reviews[3]) * 3 +
    parseInt(room.reviews[2]) * 2 +
    parseInt(room.reviews[1]) * 1;

  const rate = (total / reviewers).toFixed(1);

  return {
    rate,
    reviewers,
    xName
  };
}
