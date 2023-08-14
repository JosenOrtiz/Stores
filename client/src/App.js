import './App.css';
import { Routes, Route} from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import EditPage from './views/EditPage';

import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <h1>Stores</h1>
      <Routes>
        <Route path ="/" element={<DashboardPage />} />
        <Route path ="/stores/create" element={<CreatePage />} />
        <Route path ="/stores/:id/edit" element={<EditPage />} />
      </Routes>
    
    </div>
  );
}

export default App;
