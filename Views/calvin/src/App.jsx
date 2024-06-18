import Header from "./components/header";
import HeaderIntro from "./components/HeaderIntro";
import AboutUs from "./components/AboutUs";
import PortfolioGallery from "./components/PortfolioGallery";
import LatestWork from "./components/LatestWork";
import DisplayData from "./Displaydata";




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
           {/* the data displayed */}
          <DisplayData/>
       
       </div>
    </div>
  )
}

export default App