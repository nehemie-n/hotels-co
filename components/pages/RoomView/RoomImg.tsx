interface Props {
  img: string;
  children?: any;
}
export function RoomImg({ img, children }: Props) {
  return (
    <div className="relative rounded-md overflow-hidden">
      <img
        className="h-[400px] w-full object-cover h-400px rounded-lg"
        src={img}
      />
      <div
        className="rounded-lg absolute top-0 left-0 right-0 bottom-0
      bg-gradient-to-br
      from-black/20
      to-black/80
      cursor-pointer
      transition-all
      hover:from-black/60
      hover:to-black
      "
      >
        {children}
      </div>
    </div>
  );
}
