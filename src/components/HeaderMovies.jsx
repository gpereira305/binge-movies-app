import React, { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Header, HeaderLogo, HeaderNav } from "../styles/HeaderStyled";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "Tv Series",
    path: "/tv",
  },
];

const HeaderMovies = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);

  // useEffect(() => {
  //   const shrinkHeader = () => {
  //     if (
  //       document.body.scrollTop > 100 ||
  //       document.documentElement.scrollTop > 100
  //     ) {
  //       headerRef.current.className.add("shrink");
  //     } else {
  //       headerRef.current.classList.remove("shrink");
  //     }
  //   };
  //   window.addEventListener("scroll", shrinkHeader);
  //   return () => window.removeEventListener("scroll", shrinkHeader);
  // }, []);

  return (
    <Header href={headerRef}>
      <HeaderNav>
        <HeaderLogo>
          <Link to={"/"}>
            <h1>BingeMovies</h1>
          </Link>
        </HeaderLogo>
        <ul>
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </HeaderNav>
    </Header>
  );
};

export default HeaderMovies;
