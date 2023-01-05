import { Button } from "antd";
import { Room } from "../../api/interfaces";
import { RoomImg } from "./RoomImg";
import { EyeOutlined } from '@ant-design/icons';

interface Props {
  room: Room;
}
export function RoomHeader({ room }: Props) {
  return (
    <div>
      <div>
        <div className="flex flex-col gap-y-8">
          {/*  */}
          <div className="grid grid-cols-12 gap-1 h-[400px]">
            {/*  */}
            <div className="col-span-7 h-[400px] rounded-lg">
              <RoomImg img={room.images[0]}>
                <div className="flex justify-between items-end p-2 h-full">
                  <div>
                    <Button type="link" style={{ color: "white" }}>
                      4 Photos
                    </Button>
                    <Button type="link" style={{ color: "white" }}>
                      2 Videos
                    </Button>
                  </div>
                  <Button icon={<EyeOutlined />}  type="primary">Video Photos</Button>
                </div>
              </RoomImg>
            </div>
            {/*  */}
            <div className="col-span-5 ">
              <div className="h-[400px] grid grid-rows-2 gap-1">
                <RoomImg img={room.images[3]}></RoomImg>
                <div className="row-span-1 grid grid-cols-2 gap-1">
                  <RoomImg img={room.images[2]}></RoomImg>
                  <RoomImg img={room.images[3]}></RoomImg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
