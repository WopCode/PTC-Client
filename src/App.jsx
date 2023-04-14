import { Route, Routes } from "react-router-dom";

// pages
import NotFound from "./pages/404/NotFound";
import Navbar from "./components/Navbar";
import WelcomePage from "./pages/welcomePage";
import CreateUser from "./pages/users/create/CreateUser";
import AllUser from "./pages/users/all/AllUser";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<NotFound />} />

                <Route path="/" element={<WelcomePage />} />
                <Route path="/createuser" element={<CreateUser />} />
                <Route path="/alluser" element={<AllUser />} />
            </Routes>
        </>
    );
}

export default App;
