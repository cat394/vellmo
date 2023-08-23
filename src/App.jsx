import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './components/home/Home';
import Price from './components/price/Price';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';
import Products from './components/products/Products';
import About from './components/about/About';
import AboutExterior from './components/about/AboutExterior';
import AboutInterior from './components/about/AboutInterior';
import AboutShopInfo from './components/about/AboutShopInfo';
import Support from './components/support/Support';
import useScrollToTop from './useScrollTop';
import './css/App.css';


export default function App() {
  useScrollToTop();
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />}>
              <Route path='' element={<AboutExterior />} />
              <Route path='interior' element={<AboutInterior />} />
              <Route path='shop' element={<AboutShopInfo />} />
            </Route>
            <Route path='/price' element={<Price />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/products' element={<Products />} />
            <Route path='/support' element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}