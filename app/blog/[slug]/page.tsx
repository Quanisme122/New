import { PageProps } from 'next';

export async function generateMetadata({ params }: PageProps<{ slug: string }>) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: PageProps<{ slug: string }>) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>HoleTex</p>
      <p>Welcome to HCM</p>
    </>
  );
}
