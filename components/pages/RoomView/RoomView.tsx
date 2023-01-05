import { Room } from "../../api/interfaces";
import { useRoomHook } from "../../Room";
import { RoomHeader } from "./RoomHeader";
import { Button, Rate, Space } from "antd";
import {} from "antd";
import { MdRoom, MdShare, MdBed, MdWash } from "react-icons/md";
import { SearchOutlined } from "@ant-design/icons";
import { RoomAmenities } from "./RoomAmenities";

interface Props {
  room: Room;
}
export function RoomViewResult({ room }: Props) {
  const { rate, xName, reviewers } = useRoomHook(room);

  return (
    <div>
      <div className="RoomView">
        <RoomHeader room={room}></RoomHeader>
        {/*  */}

        <div className="grid grid-cols-12">
          <div className="col-span-7">
            {/*  */}
            <div className="pt-4">
              <div className="flex justify-between">
                <Space>
                  <Rate value={parseFloat(rate)}></Rate>
                  <span>{rate}</span>
                  <span>|</span>
                  <span>
                    <b>{reviewers}</b> Reviews
                  </span>
                </Space>
                <div>
                  <Space align="center">
                    <Button>Share</Button>
                    <Button>Save</Button>
                  </Space>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="py-4">
              <div className="max-w-xl">
                <div className="py-2">
                  <h3 className="text-4xl font-bold">${room.price}</h3>
                </div>
                <h2 className="text-xl font-semibold">
                  {xName} | {room.hotel} | {room.location.city}
                </h2>
                <div className="py-2">
                  <b>{room.quantity}</b> <span>Rooms Available</span>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div className="Room_Pin">
                <div className="Room_Pin_C">
                  <MdRoom />
                </div>
                <div className="Room_Pin_L">
                  <div className="Room_Pin_B">{room.beds}</div>{" "}
                  <span>Bedrooms</span>
                </div>
              </div>
              <div className="Room_Pin">
                <div className="Room_Pin_C">
                  <MdWash />
                </div>
                <div className="Room_Pin_L">
                  <div className="Room_Pin_B">{room.washrooms}</div>{" "}
                  <span>Washrooms</span>
                </div>
              </div>
              <div className="Room_Pin">
                <div className="Room_Pin_C">
                  <MdBed />
                </div>
                <div className="Room_Pin_L">
                  <div className="Room_Pin_B">{room.beds}</div>{" "}
                  <span>Beds</span>
                </div>
              </div>
              <div></div>
            </div>
            {/*  */}
            <div className="py-4">
              <div>{room.description}</div>
            </div>
            {/* Amenities */}
            <div className="py-4">
              <RoomAmenities></RoomAmenities>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
}
