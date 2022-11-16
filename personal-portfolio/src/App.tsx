import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route path='/' element={(
          <>
            <Header />
          </>
        )}>
      </Route>

      <Route path='/projects' element={(
          <>
            <Header />
            <Projects />
          </>
        )}>
      </Route>

      <Route path='/about' element={(
          <>
            <Header />
            <About />
          </>
        )}>
      </Route>
    </Routes>
    </Router>
    </div>
  )
}

export default App
