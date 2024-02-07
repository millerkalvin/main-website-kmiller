import LandingPage from "./components/landing-page";
import "./App.css";
import { ThemeContextProvider } from "./contexts/themeContext";

// TODO: Add routes for different pages
function App() {
  return (
    <>
      <ThemeContextProvider>
        <LandingPage />
      </ThemeContextProvider>
    </>
  );
}

export default App;
