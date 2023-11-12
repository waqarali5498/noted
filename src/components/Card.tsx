import Image from "next/image";
interface CardProps {
  note: { id: number; name: string; description: string; color: string };
}
export default function Card({
  note,
  edit,
  setEdit,
  notes,
  setNotes,
}: {
  note: CardProps["note"];
  edit?: any;
  setEdit?: any;
  setNotes?: any;
  notes?: any;
}) {
  const { id, name, description, color } = note;

  const cardStyle = `w-64 flex flex-col h-64 rounded-2xl p-4  ${color}`;

  function handleEdit(id: number) {
    setEdit((elId: number) => id);
  }

  function handleDelete(id: number) {
    const newNotes = notes.filter((item: any) => item.id !== id);
    setNotes([...newNotes]);
  }

  return (
    <div className={cardStyle}>
      <div className="flex h-full justify-end items-start rounded-full ">
        <button
          className="w-4 h-4 p-3 bg-purple-200 rounded-full flex justify-center items-center text-slate-600 border border-black"
          onClick={() => handleDelete(id)}
        >
          X
        </button>
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-md my-2">{description}</p>
      <div className="flex h-full justify-end items-end ">
        <button
          className="w-12 h-12 bg-purple-200 rounded-full flex justify-center items-center"
          onClick={() => handleEdit(id)}
        >
          <Image
            src="/edit-pen.svg"
            className=""
            width={30}
            height={30}
            alt="edit-icon"
          />
        </button>
      </div>
    </div>
  );
}
