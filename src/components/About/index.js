// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBackground = isDarkTheme
        ? 'dark-home-background'
        : 'home-background'

      const homeColor = isDarkTheme ? 'dark-heading' : 'heading'
      return (
        <>
          <Navbar />
          <div className={homeBackground}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="home-image"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="home-image"
              />
            )}
            <h1 className={homeColor}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
