import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const descTheme = isDarkTheme ? 'descDark' : 'descLight'
      const headTheme = isDarkTheme ? 'headLight' : 'headDark'
      const bgTheme = isDarkTheme ? 'notFoundBgDark' : 'notFoundBgLight'

      return (
        <div>
          <Navbar />
          <div className={`not-found ${bgTheme}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={`not-found-heading ${headTheme}`}>Lost Your Way?</h1>
            <p className={`not-found-description ${descTheme}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
