import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

it("renders the App component", () => {
    act(() => {
        ReactDOM.render(
            <React.StrictMode>
                <Toaster />
                <App />
            </React.StrictMode>,
            container
        );
    });

    const app = container.querySelector(".App");
    expect(app).toBeTruthy();
});
