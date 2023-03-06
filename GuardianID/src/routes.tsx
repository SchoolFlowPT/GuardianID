import { BrowserRouter, Routes, Route } from "react-router-dom";

import Default from './style';
// import Load from "./Components/Load";
import Dashboard from "./Views/Dashboard";

export default function Router(){
    return (
        <BrowserRouter>
            <Default />
            {/* <Load /> */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}