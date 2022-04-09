import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background-color: #000;
  opacity: 0;
  visibility: hidden;

  &.active {
    opacity: 1;
    visibility: visible;
  }
`;

export const ModalContent = styled.div`
  padding: 2rem;
  background-color: var(--dark-color);
  width: 50%;
  opacity: 0;
  transform: translateY(-250px);
  transition: transform 0.5s ease, opacity 0.5s ease;

  > div {
    position: absolute;
    right: 5px;
    top: 5px;
    cursor: pointer;
  }

  &.active {
    opacity: 1;
    transform: translateY(0);
  }
`;
