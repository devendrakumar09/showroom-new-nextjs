
import './globals.css';
import Navbar from '../ui/home/navabr/Navbar';
import Footer from '../ui/home/footer/Footer';

function Layout({children, Component, pageProps }) {
  return (
    <>
      <main >
          <Navbar />    
          {children}
          <div className="mt-5">
            <Footer />
          </div>
          
      </main>
    </>
  )
}

export default Layout