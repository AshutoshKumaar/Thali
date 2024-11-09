import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Who from './Components/Who';
import Specialmenu from './Components/Specialmenu';
import Catering from './Components/Catering';
import Delicious from './Components/Delicious';
import OurCatering from './Components/OurCatering';
import Menu from './Components/Menu';
import Booktable from './Components/Booktable';
import Testimonials from './Components/Testimonials';
import Footerimg from './Components/Footerimg';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="bg-[#171819]">
    <Navbar />
    <Herosection />
    <Who />
    <Specialmenu />
    <Catering />
    <Delicious />
    <OurCatering />
    <Menu />
    <Booktable />
    <Testimonials  />
    <Footerimg />
    <Footer />
    {/* <Herosection />
    <Who/>
    <Specialmenu />
    <Catering />
    <Delicious />
    <OurCatering />
    <Menu/>
    <Booktable />
    <Testimonials />
    <Footerimg />
    <Footer /> */}
  
    
    </div>
  );
}

export default App;
