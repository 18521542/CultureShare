import { Route, Routes } from "react-router-dom"
import BlogEdit from "../pages/BlogEdit"
import Home from "../pages/Home"
import PostsPage from "../pages/postPages/PostsPage"

export const PostRoutes = () => {
    const postRoute = "/Post"
    return(
        <Routes>
            <Route exact path={`${postRoute}`} element={<Home />} />
            <Route path={`${postRoute}/edit`} element={<BlogEdit />} />
            <Route path={`${postRoute}/list`} element={<PostsPage/>}/>
        </Routes>
    )
}