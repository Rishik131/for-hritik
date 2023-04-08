import Home from './home/Home.jsx'
// import Hospital from './Hospital'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
