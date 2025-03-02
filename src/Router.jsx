import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            {/* <Route element={<DefaultLayout />}>
                <Route path="/exemploEndpoint" element={<ExemploNomeComponente />} />
            </Route> */}
        </Routes>
    );
}