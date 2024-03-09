
import './App.css'
import Catagory from './global_Component/Catagory/Catagory'
import FlashSale from './global_Component/FlashSale/FlashSale'
import Header from './global_Component/Header/Header'
import Navbar from './global_Component/Header/Navbar'
import TopHeader from './global_Component/Header/TopHeader'

function App() {

  return (
    <>
      <TopHeader />
      <Navbar />
      <Header />
      <FlashSale />
      <Catagory />
    </>
  )
}

export default App
