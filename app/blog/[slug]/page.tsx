type Params = { slug: string[] };

export default function Page({ params }: { params: Params }) {
  const { slug } = params;

  return (
    <>
      <h1>Slug: {slug.join(" / ")}</h1>
      <p>HoleTex</p>
      <p>Welcome to HCM</p>
    </>
  );
}
