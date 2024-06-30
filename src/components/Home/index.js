import Navbar from '../Navbar/index'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const darkHomeImg =
        'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const lightHomeImg =
        'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'

      const HomeBg = isDarkTheme ? 'homeBgDark' : 'homeBgLight'
      const HomeThemeImg = isDarkTheme ? lightHomeImg : darkHomeImg
      const homeTextClass = isDarkTheme ? 'homeTextLight' : 'homeTextDark'

      return (
        <div>
          <Navbar />
          <div className={`home ${HomeBg}`}>
            <img src={HomeThemeImg} alt="home" className="home-image" />
            <h1 className={homeTextClass}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
