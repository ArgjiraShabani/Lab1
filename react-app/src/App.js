import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


function App() {
  return (
    <>
    <div className="d-flex flex-column min-vh-100">
    <Navbar/>
    <main className="flex-grow-1"></main>
    <Footer/>
    </div>
    </>

  );
}

export default App;
