import { Route, Routes } from "react-router-dom"
import UserPage from "../pages/userPages"

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/user/*" element={<UserPage/>}/>
        </Routes>
    )
}