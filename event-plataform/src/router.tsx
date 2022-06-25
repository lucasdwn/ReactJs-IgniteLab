import { BrowserRouter as Rout, Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
    return(
        <Rout>
            <Routes>
                <Route path="/" element={<Subscribe/>}/>
                <Route path="/event" element={<Event />}/>
                <Route path="/event/lesson/:slug" element={<Event />}/>
            </Routes>
        </Rout>
    )
}