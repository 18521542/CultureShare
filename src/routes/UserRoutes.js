import { Route, Routes } from "react-router-dom"
import UserPage from "../pages/userPages/UserPage"
import { AddCommentForm } from "../components/Comment/AddCommentForm";

export const UserRoutes = () => {
    return (
        <Routes>
            <Route path="/user/*" element={<UserPage/>}/>
            <Route path="/comment" element={<AddCommentForm/>}/>
        </Routes>
    )
}