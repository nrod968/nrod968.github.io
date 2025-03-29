import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ClippedDrawer from "./components/ClippedDrawer";

// Get the root element and ensure it's not null
const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);

// Render the app
root.render(
    <React.StrictMode>
        <ClippedDrawer>
            <App />
        </ClippedDrawer>
    </React.StrictMode>
);
