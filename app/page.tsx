import React from "react";
import Link from "next/link"
const Home = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-xl">
      <main className="flex flex-col space-y-6 min-h-screen place-content-center">
        <section className="flex flex-col text-center bg-white rounded-md space-y-4 p-10 shadow-sm hover:shadow-md transition cursor-pointer">
          <h1 className="text-6x1 font-extrabold text-cyan-800">
            Bem Vindo ao NextJs 13!!!!!
          </h1>
          <p className="text-cyan-600 text-xl">
            To fufu
          </p>
        </section>
          <div className="flex justify-center">
          <Link href="/blog">
          <button className="text-center px-4 py-2 rounded bg-slate-200">
            Vá para a página
            </button>
          </Link>
          </div>
      </main>
    </div>
  );
};

export default Home;
