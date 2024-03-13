// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundHomeStyle = isDarkTheme ? 'darkmode-home-background' : ''
      const textHomeDarkMode = isDarkTheme ? 'text-home-dark' : ';'
      const paraHomeDarkMode = isDarkTheme ? 'para-home-dark' : ';'

      return (
        <>
          <Navbar />
          <div className={`home-container ${backgroundHomeStyle}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="home-image-style"
            />
            <h1 className={`heading-text-home-page ${textHomeDarkMode}`}>
              Lost Your Way?
            </h1>
            <p className={`para-text-home-page ${paraHomeDarkMode}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
