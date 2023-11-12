import Card from "./Card";
export default function AllNotes({
  edit,
  setEdit,
  notes,
  setNotes,
}: {
  edit: null;
  setEdit: any;
  notes: any;
  setNotes: any;
}) {
  console.log(notes);

  return (
    <>
      {notes.map((item: any) => (
        <Card
          key={item.id}
          note={item}
          edit={edit}
          setEdit={setEdit}
          setNotes={setNotes}
          notes={notes}
        />
      ))}
    </>
  );
}
