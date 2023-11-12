import Card from "./Card";

export default function FilterByColor({ color, edit, setEdit, data }: any) {
  console.log(data);

  const filterdCard = data.filter((card: any) => card.color === color);

  return (
    <>
      <div className="flex gap-8 flex-wrap h-full p-4 justify-center items-center">
        {filterdCard.map((item: any) => (
          <Card key={item.id} note={item} edit={edit} setEdit={setEdit} />
        ))}
      </div>
    </>
  );
}
