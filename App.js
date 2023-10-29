import { Text, View } from "react-native";
import Nav from "./nav";
import { store } from "./store";
import { Provider } from "react-redux";
import { AUTH0_ISSUER_BASE_URL, AUTH0_CLIENT_ID } from "@env";

import * as AuthSession from "expo-auth-session";

import { useAuth0, Auth0Provider } from "react-native-auth0";

export default function App() {
  return (
    <Provider store={store}>
      <Auth0Provider domain={AUTH0_ISSUER_BASE_URL} clientId={AUTH0_CLIENT_ID}>
        <Nav />
      </Auth0Provider>
    </Provider>
  );
}
