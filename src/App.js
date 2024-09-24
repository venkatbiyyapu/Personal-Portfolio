import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import HomePage from './components/HomePage';
import { Line } from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <HomePage/>
      {/* <Router>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
