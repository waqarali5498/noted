"use client";

import { useState } from "react";

import InsertNote from "@/components/InsertNote";
import SearchResult from "@/components/SearchResult";
import AllNotes from "@/components/AllNotes";
import EditNote from "@/components/EditNote";
import FilterByColor from "@/components/FilterByColor";

import Sidebar from "@/components/Sidebar";
import data from "../../../data/data";

export default function Page({}) {
  const [notes, setNotes] = useState(data);
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(null);
  const [isAdd, setIsAdd] = useState(false);
  const [getByColor, setGetbyColor] = useState("");

  return (
    <div className="flex w-screen ">
      <div>
        <Sidebar
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          getByColor={getByColor}
          setGetByColor={setGetbyColor}
        />
      </div>

      <div className=" min-h-screen w-full bg-rose-100 ">
        {getByColor !== "" && (
          <FilterByColor
            color={getByColor}
            edit={isEdit}
            setEdit={setIsEdit}
            data={notes}
          />
        )}
        {isEdit !== null && (
          <EditNote
            editId={isEdit}
            setEditId={setIsEdit}
            notes={notes}
            setNotes={setNotes}
          />
        )}
        {isAdd === true ? (
          <InsertNote setIsAdd={setIsAdd} notes={notes} setNotes={setNotes} />
        ) : (
          !getByColor && (
            <div className=" flex flex-col justify-center items-center">
              <input
                className="w-96 h-12 rounded-lg p-2 m-4 text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="Search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name=""
                id=""
              />
              <div className="flex gap-8 flex-wrap h-full p-4 justify-center items-center">
                {/* Search Result or All Notes Added Based on Condition */}
                {search.length > 0 ? (
                  <SearchResult search={search} data={notes} />
                ) : (
                  <AllNotes
                    edit={isEdit}
                    setEdit={setIsEdit}
                    notes={notes}
                    setNotes={setNotes}
                  />
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
