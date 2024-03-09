import { BrowserRouter, Router, createRoutesFromElements } from "react-router-dom";
import "./App.scss";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import AppStack from "./navigation/AppStack";
import AuthStack from "./navigation/AuthStack";
import { useEffect } from "react";




function App() {
  return (
    <AuthProvider>

      <AppNavigator />

    </AuthProvider>
  );
}
function AppNavigator() {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    console.log('its logged in');
    return <AppStack />;
  }
  else {
    console.log('its not logged in');
    return <AuthStack />;
  }


}

export default App;
