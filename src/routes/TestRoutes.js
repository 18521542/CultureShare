import React from "react"
import { Route, Routes } from "react-router-dom";
import Test from "../pages/testPages/Test";
import Test2 from "../pages/testPages/Test2";
import Test3 from "../pages/testPages/Test3";

export const TestRoutes = (props) => {
    return (
        <Routes>
            <Route path="/test" element={<Test/>}/>
            <Route path="/test2" element={<Test2/>}/>
            <Route path="/test3" element={<Test3/>}/>
        </Routes>
    )
}