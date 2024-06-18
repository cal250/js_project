import Header from "./components/header";
import HeaderIntro from "./components/HeaderIntro";
import AboutUs from "./components/AboutUs";
import PortfolioGallery from "./components/PortfolioGallery";
import LatestWork from "./components/LatestWork";
import React from 'react'




const App = () => {
  return (
    <div>
      <Header />
      {/* the main division */}
       <div>
          <HeaderIntro />
          {/* the about us section */}
          <AboutUs />
          {/* the porrtfolio gallery */}
          <PortfolioGallery />
          {/* the latest work */}
          <LatestWork />
       </div>
    </div>
  )
}

export default App