import LandingPage from "./components/landing-page";
import "./App.css";
import { ThemeContextProvider } from "./contexts/themeContext";

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
