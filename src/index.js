import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./root";
import RootContext from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RootContext>
        <Root />
      </RootContext>
    </BrowserRouter>
  </React.StrictMode>
);

/* 
utils => papkasida projectda o'chib ketmaydigan doimy o'zgaruvchilarni saqlab ketamiz
mock => ma'lumotlarni vaqtincha saqlab turish uchun ishlatiladi
*/
