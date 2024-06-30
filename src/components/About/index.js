import './index.css'
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const aboutThemeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextTheme = isDarkTheme ? 'lightText' : 'darkText'
      const aboutBgTheme = isDarkTheme ? 'bgDark' : 'bgLight'

      return (
        <div>
          <Navbar />
          <div className={`about ${aboutBgTheme}`}>
            <img src={aboutThemeImg} alt="about" className="about-image" />
            <h1 className={aboutTextTheme}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
