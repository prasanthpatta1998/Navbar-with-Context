// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBackground = isDarkTheme
        ? 'dark-home-background'
        : 'home-background'

      const homeColor = isDarkTheme ? 'dark-heading' : 'heading'
      const paraCoolor = isDarkTheme ? 'para-color' : 'light-para-color'
      return (
        <>
          <Navbar />
          <div className={homeBackground}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={homeColor}>Lost Your Way</h1>
            <p className={paraCoolor}>We cannot seem to find the page</p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
