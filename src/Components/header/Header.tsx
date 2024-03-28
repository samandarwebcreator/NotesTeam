import { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisVertical,
  faGear,
  faListUl,
  faMagnifyingGlass,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  function openNavbar() {
    setNavbarOpen(!navbarOpen);
  }

  function closeNavbar() {
    setNavbarOpen(false);
  }

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="notes__main-box">
      {navbarOpen ? (
        <div className={`${navbarOpen ? "opened" : ""} navbar`}>
          <div className="navbar__header">
            <button onClick={openNavbar} className="navbar__button">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <button className="navbar__button x__button" onClick={closeNavbar}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div
            id="nav-menu"
            className={`${navbarOpen ? "opened" : "collapse"} navbar__list`}
          >
            <Link className="navbar__link" to="/notes">
              <FontAwesomeIcon icon={faListUl} />
              All notes
            </Link>
            <Link className="navbar__link" to="/trash">
              <FontAwesomeIcon icon={faTrash} />
              Trash
            </Link>
            <Link className="navbar__link" to="/settings">
              <FontAwesomeIcon icon={faGear} />
              Settings
            </Link>
          </div>
        </div>
      ) : null}

      <div className="container">
        <div
          className="notes__main-box"
          style={
            navbarOpen
              ? { display: "flex" }
              : { display: "block", width: "100%" }
          }
        >
          <div className="notes__main-field">
            <div className="header">
              <div className="header__title-box">
                <button
                  onClick={openNavbar}
                  className="navbar__button"
                  style={
                    navbarOpen ? { display: "none" } : { display: "block" }
                  }
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <h1>Notes App</h1>
              </div>
              <div className="input__search-box">
                <div>
                  <input
                    className="search__input"
                    type="text"
                    onChange={handleSearchInput}
                    value={searchValue}
                    placeholder="Search..."
                  />
                  <button className="search__button">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </div>
                <button className="navbar__button more__actions-button">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
