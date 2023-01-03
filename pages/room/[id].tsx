
import { useRouter } from 'next/router'

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
  console.log(id);
  const router = useRouter();

  return (
    <>
      <div>
        <h1>{id}</h1>
        <h1>Query: {router.query.id}</h1>
        <h1>Hello</h1>
      </div>
    </>
  );
}
