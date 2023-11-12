import Card from "./Card";

export default function SearchResult({
  search,
  data,
}: {
  search: string;
  data: any;
}) {
  return (
    <>
      {data
        .filter((item) => item.name.includes(search))
        .map((item) => (
          <Card key={item.id} note={item} />
        ))}
    </>
  );
}
