import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './Style.css';
import UserLoginStore from "./context/user/UserLoginStore";
import WalletStore from "./context/wallet/WalletStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <UserLoginStore>
      <WalletStore>
        <App />
      </WalletStore>
    </UserLoginStore>
  </React.StrictMode>
);
