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
        .filter((item: any) => item.name.includes(search))
        .map((item: any) => (
          <Card key={item.id} note={item} />
        ))}
    </>
  );
}
