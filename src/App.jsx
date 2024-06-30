import { useState } from "react";
import AppContext from "./context/AppContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [ darkMode, setDarkMode ] = useState(false);

  const active = darkMode ? "dark" : "";

  return (
    <div className={`app-container font-nunito ${active}`}>
      <AppContext.Provider value={{ setDarkMode }}>
        <Header />
        <Main />
        <Footer />
      </AppContext.Provider>
    </div>
  );
};

export default App;