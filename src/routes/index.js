import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import BasePage from "../pages/basePages"
import UserPage from "../pages/userPages"
import { PostRoutes } from "./PostRoutes";
import { AuthRoutes } from "./LoginRoutes";
import { UserRoutes } from "./UserRoutes";

export const RootRoute = (props) => {
    return (
        <BrowserRouter>
            <UserRoutes/>
            <PostRoutes/>
            <AuthRoutes/>
      </BrowserRouter>
    )
}