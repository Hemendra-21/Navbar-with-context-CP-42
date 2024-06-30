import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value

      const onClickChangeTheme = () => {
        toggleTheme()
      }

      const darkThemeImg =
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const lightThemeImg =
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'

      const lightThemeLogo =
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const darkThemeLogo =
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navThemeLogo = isDarkTheme ? lightThemeLogo : darkThemeLogo
      const navThemeImg = isDarkTheme ? lightThemeImg : darkThemeImg
      const navbarBg = isDarkTheme ? 'navbarBgDark' : 'navbarBgLight'
      const navSectionColor = isDarkTheme ? 'navSectionLight' : 'navSectionDark'

      return (
        <nav className={`navbar  ${navbarBg}`}>
          <div className="nav-content-container">
            <img src={navThemeLogo} alt="website logo" className="nav-logo" />
            <ul className="nav-sections-list">
              <li className="nav-list-item">
                <Link to="/" className="nav-link">
                  <p className={`nav-sections ${navSectionColor}`}>Home</p>
                </Link>
              </li>
              <li className="nav-list-item">
                <Link to="/about" className="nav-link">
                  <p className={`nav-sections ${navSectionColor}`}>About</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              data-testid="theme"
              className="theme-toggle-btn"
              onClick={onClickChangeTheme}
            >
              <img src={navThemeImg} alt="theme" className="nav-logo" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
