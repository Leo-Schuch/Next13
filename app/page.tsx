import React from "react";
import styles from "../app/page.module.css";
const page = () => {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-xl">
      <main className="flex flex-col min-h-screen place-content-center">
        <section className="flex flex-col text-center bg-white rounded-md space-y-4 p-10 shadow-sm hover:shadow-md transition cursor-pointer">
          <h1 className="text-6x1 font-extrabold text-cyan-800">
            Bem Vindo ao NextJs 13!!!!!
          </h1>
          <p className="text-cyan-600 text-xl">
            To fufu
          </p>
        </section>
      </main>
    </div>
  );
};

export default page;
