import Head from 'next/head';

interface Props {
  title: string | undefined;
}

function Seo({ title }: Props) {
  return (
    <Head>
      <title>{`${title} : Nomad Books` ?? 'Nomad Books'}</title>
    </Head>
  );
}

export default Seo;
