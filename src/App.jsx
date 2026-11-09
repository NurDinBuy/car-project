import './App.css'
import Header from './components/Header/Header.jsx'
import MainBlock from "./components/MainBlock/MainBlock.jsx";
import FeaturedCars from "./components/FeaturedCars/FeaturedCars.jsx";

const App = () => {
  return (
      <div className="app">
        <Header />
        <MainBlock />
        <FeaturedCars/>
      </div>
  )
}

export default App