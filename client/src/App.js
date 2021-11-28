import React from "react";
import Routes from "./routes";
import ScrollToTop from "./components/common/scrollToTop";

function App() {
  // main return
  return (
    <div className="app">
      <ScrollToTop />
      <Routes />
    </div>
  );
}

export default App;
