import IconList from "./components/list";
import Instructions from "./components/instructions";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center p-4 lg:p-24 max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-6xl uppercase font-black">Gutenberg Icon Finder</h1>

        <p className="mt-6 text-lg">
          Un buscador de íconos utilizados en <code>@wordpress/icons</code>
        </p>

        <h2 className="my-6 text-2xl font-semibold">Lista de íconos</h2>

        <Instructions />

        <IconList />

        <footer>
          <p className="mt-12 text-xs text-center">
            Hecho con ❤️ por{" "}
            <a
              href="https://www.marioaguiar.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Mario Aguiar
            </a>
          </p>
        </footer>
      </div>
      
    </main>
  );
}
