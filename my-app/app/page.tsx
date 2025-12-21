import Image from "next/image";

  type HomeProps={
    name : string,
    age : number,
  }


export default function Home({ name , age} : HomeProps){
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
      <h1> hello world </h1>

      </main>
    </div>
  );
}
