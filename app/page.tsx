import IconList from "./components/list";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-24 max-w-7xl mx-auto">
        <h1 className="text-6xl uppercase font-black">Gutenberg Icon Finder</h1>

        <p className="mt-6 text-lg">
          Un buscador de íconos utilizados en <code>@wordpress/icons</code>
        </p>

        <h2 className="my-6 text-2xl font-semibold">Lista de íconos</h2>

        <IconList />
      </div>
      
    </main>
  );
}
