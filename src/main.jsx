// @flow

import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import { AppRouter } from "./router";
import reportWebVitals from "./reportWebVitals";

const environment = import.meta.env as { DEV?: boolean };

if (environment.DEV === true) {
    void import("virtual:stylex:runtime");
}

const rootElement = document.getElementById("app");

if (rootElement != null && !rootElement.innerHTML) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </React.StrictMode>
    );
}

reportWebVitals();
