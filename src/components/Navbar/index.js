// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const changeTheme = () => {
        toggleTheme()
      }
      const backgroundStyle = isDarkTheme ? 'dark-mode-container' : ''
      const textStyleDark = isDarkTheme ? 'dark-mode-text' : ''

      const websiteLogo = isDarkTheme ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
          alt="website logo"
          className="website-logo"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
          alt="website logo"
          className="website-logo"
        />
      )
      const themeImage = isDarkTheme ? (
        <button
          type="button"
          className="buttn"
          onClick={changeTheme}
          data-testid="theme"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
            alt="theme"
            className="website-logo"
          />
        </button>
      ) : (
        <button
          type="button"
          className="buttn"
          onClick={changeTheme}
          data-testid="theme"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
            alt="theme"
            className="website-logo"
          />
        </button>
      )
      return (
        <nav className={`navbar-container ${backgroundStyle}`}>
          {websiteLogo}
          <ul className="text-container-navbar">
          <li className={`text-style-nav-bar ${textStyleDark}`}>
            <Link to="/" className="link-style">
              Home
            </Link>
            </li>
            <li className={`text-style-nav-bar ${textStyleDark}`}>
            <Link to="/about" className="link-style">
              About
            </Link>
            </li>
          </ul>
          {themeImage}
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
