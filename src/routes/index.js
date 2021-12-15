import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
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