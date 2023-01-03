import { Divider, Space, Carousel } from "antd";
import Link from "next/link";
import { FaShower } from "react-icons/fa";
import { MdOutlineBedroomChild, MdStar } from "react-icons/md";
import { ImTicket } from "react-icons/im";
import { Room } from "../api/interfaces";
import { useRoomHook } from "./room.hook";
import Image from "next/image";
import { ArrayShuffle } from "../../utils";

interface Props {
  room: Room;
  children?: any;
}

function visitRoom() {}

export function RoomCard({ children, room }: Props) {
  const { xName, rate } = useRoomHook(room);

  // bottom pricing details
  const PricingDetails = () => {
    return (
      <div className="RoomCard_Det-Cont">
        <div className="RoomCard_Det_Name">
          <h3>{xName.slice(0, 40)}...</h3>
          <div className="RoomCard_Det_Rate">
            <Space align="center" size={4}>
              <span>
                <MdStar color="orange" />
              </span>
              <span> {rate}</span>
            </Space>
          </div>
        </div>
        <div className="RoomCard_Det-Pricing">
          <div>
            <div className="RoomCard_Det-Price">${room.price} </div>
            <span>/Night</span>
          </div>
          <div>
            <Space size={4}>
              <MdOutlineBedroomChild />
              <span>Hotel</span>
            </Space>
          </div>
        </div>
      </div>
    );
  };
  // Bottom Details
  const BottomDetails = () => {
    return (
      <div>
        <div className="RoomCard_Det-Cont">
          <div className="RoomCard_Det-Ln">
            <span className="RoomCard_Det_s">
              <Space size={5}>
                <MdOutlineBedroomChild />
                <span>
                  <span className="RoomCard_Det_Lbold">{room.beds} </span>
                  <span className="RoomCard_Det_Label"> Beds</span>
                </span>
              </Space>
            </span>
            {/* Bathrooms */}
            <span className="RoomCard_Det_s">
              <Space size={5}>
                <FaShower />
                <span>
                  <span className="RoomCard_Det_Lbold">{room.washrooms}</span>
                  <span className="RoomCard_Det_Label"> Washrooms</span>
                </span>
              </Space>
            </span>
          </div>
          <div className="RoomCard_Det-Ln pt-1">
            <Space size={5}>
              <ImTicket />
              <span>
                <span className="RoomCard_Det_Lbold">{room.quantity}</span>
                <span className="RoomCard_Det_Label"> Rooms Available</span>
              </span>
            </Space>
          </div>
        </div>
      </div>
    );
  };

  const CardCarousel = () => {
    return (
      <Carousel>
        {ArrayShuffle(room.images).map((img) => {
          return <img src={img} height={200} />;
        })}
      </Carousel>
    );
  };

  return (
    <div className={"RoomCard"}>
      <Link href={`/rooms/${room.id}`}>
        {/*  */}
        {/* Carousel */}
        <CardCarousel />

        {/* Details */}
        <div className="RoomCard_Det">
          <PricingDetails />

          <Divider className="my-1"></Divider>

          <BottomDetails />
        </div>
      </Link>
    </div>
  );
}
