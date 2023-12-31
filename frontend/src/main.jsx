import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./pages/Dashboard.jsx"
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Auth0Provider
            domain={ import.meta.env.VITE_DOMAIN }
            clientId={ import.meta.env.VITE_CLIENT_ID }
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_REDIRECT_URI
            }}
        >
			<App />
		</Auth0Provider>
	</React.StrictMode>
)
