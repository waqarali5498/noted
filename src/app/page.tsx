"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router?.push("/login");
  }, [router]);

  return (
    <main className="flex h-screen flex-col items-center justify-center ">
      <div className="p-24 text-8xl uppercase -rotate-12">NoteD</div>
    </main>
  );
}
