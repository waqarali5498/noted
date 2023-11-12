import { useRouter } from "next/navigation";
import CircularColor from "./CircularColor";

interface ColorMapItem {
  color: string;
}

const colorMap: ColorMapItem[] = [
  { color: "bg-red-300" },
  { color: "bg-orange-300" },
  { color: "bg-yellow-300" },
  { color: "bg-lime-300" },
  { color: "bg-green-300" },
  { color: "bg-teal-300" },
  { color: "bg-indigo-300" },
  { color: "bg-gray-300" },
  { color: "bg-pink-300" },
  { color: "bg-rose-300" },
];

export default function Sidebar({
  isAdd,
  setIsAdd,
  getByColor,
  setGetByColor,
}: {
  isAdd: boolean;
  setIsAdd: any;
  getByColor: string;
  setGetByColor: any;
}) {
  const router = useRouter();

  function handleLogout() {
    router?.push("/login");
  }

  return (
    <nav className="h-screen bg-purple-300 p-8 flex flex-col justify-between items-center w-40 ">
      <div>
        <h1 className="text-2xl text-center mb-3 font-roboto font-bold">
          NoteD
        </h1>
      </div>
      <div className="flex flex-col items-center">
        <button
          className="w-12 h-12 bg-purple-200 rounded-full font-bold text-4xl text-center text-purple-800 mb-4"
          onClick={() => setIsAdd(!isAdd)}
        >
          +
        </button>

        <ul>
          {colorMap.map((color, index): any => (
            <CircularColor
              color={color.color}
              onClick={setGetByColor}
              key={index}
            />
          ))}
        </ul>

        {getByColor && (
          <button
            onClick={() => setGetByColor("")}
            className=" bg-white text-purple-300 border border-white-300 py-1 px-2 rounded-md w-20 my-4"
          >
            Clear
          </button>
        )}
      </div>
      <div>
        <button
          className="  bg-white text-purple-300 border border-white-300 py-2 px-4 rounded-md w-28"
          onClick={handleLogout}
        >
          LogOut
        </button>
      </div>
    </nav>
  );
}
