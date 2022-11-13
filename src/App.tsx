import { 
  BrowserRouter as Router, 
  Route,
  Routes,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/register" element={ <Register /> }/>
        </Routes>
      </Router>
  </div>
  )
}

export default App
