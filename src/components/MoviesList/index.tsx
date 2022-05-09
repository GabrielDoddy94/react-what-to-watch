import { movieData } from "../../utils/movieData";

import { Container } from "./styles";
import { Movie } from "../Movie";

export function MoviesList() {
  return (
    <Container>
      {movieData.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Container>
  );
}
