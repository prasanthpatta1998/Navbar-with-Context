// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeChange = isDarkTheme
        ? 'dark-header-container'
        : 'header-container'

      const color = isDarkTheme ? 'dark-li-item' : 'li-item'

      return (
        <nav className={themeChange}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="navbar-image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="navbar-image"
            />
          )}
          <ul className="ul-items">
            <Link to="/">
              <li className={color}>Home</li>
            </Link>
            <Link to="/about">
              <li className={color}>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            type="button"
            className="image-button"
            onClick={toggleTheme}
          >
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="navbar-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="navbar-image"
              />
            )}
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
