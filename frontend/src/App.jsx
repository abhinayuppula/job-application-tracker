

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ApplicationList from './components/ApplicationList';
import AddApplication from './components/AddApplication';

function App() {

    return (
        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Dashboard />} />

                <Route path="/applications" element={<ApplicationList />} />

                <Route path="/add" element={<AddApplication />} />

            </Routes>

        </BrowserRouter>
    );
}

export default App;

