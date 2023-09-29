import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { About } from "../components/pages/About";
import { Question} from "../components/pages/Question";
import { NotFound } from "../components/pages/NotFound";

export const Router: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/question" element={<Question />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}