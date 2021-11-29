import React from "react"
import { Route } from "react-router-dom";
import AuthPage from "../../pages/authPages";

export const AuthRoute = (props) => {
    return (
        <Route path="/auth/*" element={<AuthPage />} />
    )
}