import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/authPages/LoginPage"
import RegisterPage from "../pages/authPages/RegisterPage"

export const AuthRoutes = () => {
    return(
        <Routes>
            <Route exact path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
        </Routes>
    )
}