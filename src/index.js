import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";

const element = 
<React.StrictMode>
    <App />
</React.StrictMode>
const root = createRoot(document.getElementById('root'));
root.render(element);