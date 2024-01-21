import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink data-test-id="header-logo" to="/" className="header__logo">
          Travel App
        </NavLink>
        <nav data-test-id="header-nav" className="header__nav">
          <ul className="nav-header__list">
            <li className="nav-header__item" title="Bookings">
              <NavLink
                data-test-id="header-bookings-link"
                to="/bookings"
                className="nav-header__inner"
              >
                <span className="visually-hidden">Bookings</span>
                <img src="/src/assets/images/briefcase.svg" alt="bookings" />
              </NavLink>
            </li>
            <li className="nav-header__item" title="Profile">
              <div
                data-test-id="header-profile-nav"
                className="nav-header__inner profile-nav"
                tabIndex={0}
              >
                <span className="visually-hidden">Profile</span>
                <img src="/src/assets/images/user.svg" alt="profile" />
                <ul
                  data-test-id="header-profile-nav-list"
                  className="profile-nav__list"
                >
                  <li
                    data-test-id="header-profile-nav-username"
                    className="profile-nav__item"
                  >
                    John Doe
                  </li>
                  <li className="profile-nav__item">
                    <NavLink
                      data-test-id="header-profile-nav-sign-out"
                      to="/sign-in"
                      className="profile-nav__sign-out button"
                    >
                      Sign Out
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
