// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const backgroundHomeStyle = isDarkTheme ? 'darkmode-home-background' : ''
      const textHomeDarkMode = isDarkTheme ? 'text-home-dark' : ';'
      const homeImage = isDarkTheme ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
          alt="home"
          className="home-image-style"
        />
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
          alt="home"
          className="home-image-style"
        />
      )

      return (
        <>
          <Navbar />
          <div className={`home-container ${backgroundHomeStyle}`}>
            {homeImage}
            <h1 className={`heading-text-home-page ${textHomeDarkMode}`}>
              Home
            </h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
