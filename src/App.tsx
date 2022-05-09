import { GlobalStyle } from "./styles/global";
import { MoviesList } from "./components/MoviesList";

export function App() {
  return (
    <>
      <header>
        <h1>What to Watch</h1>
      </header>

      <main>
        <MoviesList />
      </main>

      <GlobalStyle />
    </>
  );
}
