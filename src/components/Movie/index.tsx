import { Star } from "phosphor-react";

import { Container, MovieInfo } from "./styles";

interface MovieData {
  image: {
    source: string;
    alt: string;
  };
  title: string;
  rating: number;
}

interface MovieProps {
  movie: MovieData;
}

export function Movie({ movie }: MovieProps) {
  return (
    <Container>
      <img src={movie.image.source} alt={movie.image.alt} />

      <MovieInfo>
        <div>
          <Star size={18} weight="fill" />
          <span>{movie.rating}</span>
        </div>

        <span>{movie.title}</span>
      </MovieInfo>
    </Container>
  );
}
