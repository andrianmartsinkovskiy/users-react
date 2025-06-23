// src/router/app-routes.tsx

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import {APP_ROUTES} from "../const/app-routes";
import {UsersPage} from "../pages/users";
import {UserFormPage} from "../pages/user-form";
import {Navbar} from "../containers/navbar";
import React from "react";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={APP_ROUTES.users} replace />} />
        <Route path={APP_ROUTES.users} element={<UsersPage />} />
        <Route path={APP_ROUTES.userForm} element={<UserFormPage />} />
      </Routes>
    </Router>
  )
}

export { AppRoutes }
