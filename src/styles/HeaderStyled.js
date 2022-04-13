import styled from "styled-components";

export const Header = styled.header`
  /* position: relative; */
  background-color: #000;
  position: fixed;
  background-color: #000;
  width: 100%;
  top: -1px;
  z-index: 1000;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 7vh;
  width: calc(100% - 200px);
  margin: auto;

  ul {
    display: flex;

    @media (max-width: 724px) {
      display: none;
      flex-direction: column;
      position: absolute;
      justify-content: space-around;
      height: 100vh;
      width: 200px;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: #000;
    }

    li {
      margin-left: 40px;
      padding: 5px 0;
      position: relative;

      @media (max-width: 724px) {
        margin-left: 0;
        padding: 0 50px;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        transition: width 0.2s ease;
        height: 2px;
        background-color: var(--red-color);

        @media (max-width: 724px) {
          display: none;
        }
      }

      &.active::after,
      &:hover::after {
        width: 100%;

        @media (max-width: 724px) {
          width: 50%;
        }
      }

      a {
        color: var(--white-color);
      }
    }
  }
`;

export const HeaderLogo = styled.div`
  a {
    color: var(--white-color);
  }
`;
