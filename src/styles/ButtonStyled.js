import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 2px solid var(--red-color);
  background-color: var(--red-color);
  color: var(--white-color);
  position: relative;
  text-transform: uppercase;
  font-size: 0.75rem;

  &.btn__outlined {
    border: 2px solid var(--red-color);
    background-color: transparent;
    color: var(--red-color);
    transition: var(--transition);

    &:hover {
      background-color: var(--red-color);
      color: var(--white-color);
    }
  }
`;
