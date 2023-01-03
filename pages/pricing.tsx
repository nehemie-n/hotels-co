import Head from "next/head";
import Link from "next/link";
import { PageLayout } from "../components";

interface Props {
  data: Array<{ name: string }>;
}
export default function ResultsPage({ data }: Props) {
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
      <PageLayout showSearch={true}>
        <div></div>
      </PageLayout>
    </>
  );
}
