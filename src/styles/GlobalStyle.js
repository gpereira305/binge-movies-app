import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
 }

  body { 
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    letter-spacing: 1.2px;
    background-color: var(--dark-color);
    color: var(--white-color);
  }

  /* VARIABLES */
  :root {
     --dark-color: #0f0f0f;
     --red-color: #ff0000;
     --white-color: #fff;
     --text-color: #c1c1c1;

     --b-shadow: rgba(100,100,111, 0.2) 0px 7px 30px 0px;
     --header-height: 8rem;
     --header-shrink: 5rem;
     --mobile-width: 600px;
     --tablet-width: 1024px;
     
     
     --transition: all ease .3s;
     --radius: 3px;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style:none ;
  } 

`;

export const ContainerMovies = styled.div`
  width: calc(100% - 200px);
  margin: auto;

  @media (max-width: 724px) {
    width: calc(100% - 80px);
  }
`;
