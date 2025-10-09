import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <h1 className="text-white text-6xl text-center m-4"> What to wear today?</h1>
     
      {/* <main className="grid md:grid-cols-5 gap-2"> */}
      <main className=" flex flex-row-reverse justify-center flex-wrap gap-4  text-white">
     
     
        {/* right content container */}
        <section className=" h-150 rounded-2xl bg-theme-800 min-w-100">
          {/* TO DO render cloathing-details in separate component */}
        </section>


        {/* left content container */}
        <article className="w-200">
          {/* <article className="md:col-span-2 md:col-start-2 max-w-200"> */}
          <Hero />
        
          {/*weather details section */}
          {/* TO DO render details in separate component */}
          <section className="h-75 mt-4"></section>
          
          {/* daily forecast section */}
          <section className="h-75 mt-4">
            <h2 className="text-2xl">Daily forecast</h2>
          
          </section>
        </article>

        {/* <section className=" h-200 border border-white col-span-1 md:col-start-4 max-w-100"> */}
      </main>
    </>
  );
}
