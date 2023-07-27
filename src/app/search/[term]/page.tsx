export default function Page(props: { params: { term: string } }) {
  console.log({ props: JSON.stringify(props, null, 2) })
  return (
    <>
      <h1>
        Search page
      </h1>
    </>
  );
}