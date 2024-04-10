import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import About from '../About/About';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Release from '../Release/Release'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/releases' element={<Release />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App;
