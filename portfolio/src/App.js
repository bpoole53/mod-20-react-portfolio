import { Header, Footer } from './components'
import { Home, About, Contact, Portfolio, Resume } from './pages'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  return (
  <>
    <Header />
      <div className='inside-body'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
      </div>
    <Footer />  
      

  </>
  );
}

export default App;
