import styled from "styled-components";

export const Container = styled.div`
  background-color: #222;

  display: flex;
  flex-direction: column;

  border-radius: 0.4rem;

  img {
    object-fit: cover;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.2rem 0.8rem;

  div {
    display: flex;
    align-items: center;

    margin-bottom: 1rem;

    svg {
      fill: #ff0;
    }

    span {
      margin-left: 0.3rem;
    }
  }

  span {
    font-size: 1.6rem;
    line-height: 1.2;
  }
`;
