// @flow strict

import * as React from "react";
import { Navigate, Route, Routes } from "react-router";
import HomeLayout from "./pages/home/home";
import SingleDynamicFetch from "./pages/single-dynamic-fetch/single-dynamic-fetch";

export component AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route
                path="/single-dynamic-fetch"
                element={<SingleDynamicFetch />}
            />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
}
