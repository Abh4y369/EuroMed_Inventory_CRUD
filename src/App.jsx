import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import DashBoard from "./pages/DashBoard";
import Equipment from "./pages/Equipment";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/*" element={
            <ProtectedRoute>
              <div className="flex">
                <Sidebar />
                <div className="flex-1 bg-gray-100 min-h-screen">
                  <Header />
                  <div className="p-8">
                    <Routes>
                      <Route path="/dashboard" element={<DashBoard />} />
                      <Route path="/equipment" element={<Equipment />} />
                      <Route path="/reports" element={<Reports />} />
                      <Route path="/analytics" element={<Analytics />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </ProtectedRoute>
            
          }
        />
        
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;