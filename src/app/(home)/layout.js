
import './globals.css';
import Navbar from '../ui/home/navabr/Navbar';
import Footer from '../ui/home/footer/Footer';

function Layout({children, Component, pageProps }) {
  return (
    <>
      <div className="main ">
          <Navbar />    
          {children}
          <Footer />                   
      </div>
    </>
  )
}

export default Layout