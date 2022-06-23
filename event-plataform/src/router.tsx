import { BrowserRouter as Rout, Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";

export function Router() {
    return(
        <Rout>
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/event" element={<Event />}/>
                <Route path="/event/lesson/:slug" element={<Event />}/>
            </Routes>
        </Rout>
    )
}