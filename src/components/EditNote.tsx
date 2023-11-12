"use client";
import { useState } from "react";
import colorMap from "../../data/colors";
import CircularColor from "./CircularColor";

export default function EditNote({
  editId,
  setEditId,
  notes,
  setNotes,
}: number | any) {
  console.log(notes);
  const {
    id: itemid,
    name: itemName,
    description: itemDescription,
    color: itemColor,
  }: any = notes.find((item: any) => item.id === editId);

  const [title, setTitle] = useState(itemName);
  const [description, setDescription] = useState(itemDescription);
  const [color, setColor] = useState(itemColor);

  function handleEditNote(id: number) {
    const newNotes = notes.map((item: any) =>
      item.id === id
        ? { ...item, name: title, description: description, color: color }
        : item
    );
    console.log("In Edit Notes", notes);
    console.log("In Edit NewNotes", newNotes);

    setNotes(newNotes);
    setEditId(null);
  }

  function handleColor(color: string) {
    setColor(color);
  }

  return (
    <section className="bg-white h-screen w-full flex justify-center items-center p-24 text-slate-500">
      <div className="container bg-pink-200 w-full h-full rounded-2xl flex p-2">
        <div className="flex flex-col w-9/12 gap-2">
          <div className="h-1/6">
            <input
              type="text"
              placeholder="Title"
              className="w-full h-full focus:outline-none text-4xl p-2 border-none bg-pink-100 rounded-2xl"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="h-5/6">
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-full bg-pink-100 focus:outline-none rounded-2xl p-2"
            ></textarea>
          </div>
        </div>
        <div className="w-3/12 p-2">
          <div className="h-3/5">
            <div className="flex  justify-end items-start rounded-full ">
              <button
                className="w-4 h-4 p-3 bg-purple-200 rounded-full flex justify-center items-center text-slate-600 border border-black  "
                onClick={() => setEditId(null)}
              >
                X
              </button>
            </div>

            <h1 className="text-xl text-center mt-4">Select Color</h1>
            <div className="flex flex-wrap mt-4">
              {colorMap.map((color, index): any => (
                <CircularColor
                  color={color.color}
                  onClick={handleColor}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 h-2/5">
            <button
              className="  bg-white text-purple-300 border border-white-300 py-2 px-4 rounded-md w-36"
              onClick={() => handleEditNote(itemid)}
            >
              Edit Note
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
