import Link from "next/link";

export const getStaticProps = async () => {
  // const users =

  return {
    props: {
      data: [
        {
          name: "Nehemie",
        },
        {
          name: "Eric",
        },
      ],
    },
  };
};

interface Props {
  data: Array<{ name: string }>;
}
export default function ResultsPage({ data }: Props) {
  return (
    <>
      <h1>Results</h1>
      <div>
        <Link href={"/"}>Go To results</Link>
        <div>
          {data.map((d) => {
            return <h2 key={Math.random().toString()}>{d.name}</h2>;
          })}
        </div>
      </div>
    </>
  );
}
