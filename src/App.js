import React from "react";
import { RootRoute } from "./routes";
import { AppProvider } from "./utils/AppContext";

//root URL
function App() {
  return (
    <AppProvider>
      <div className="App vh-100">
        <RootRoute />
      </div>
    </AppProvider>
  );
}

export default App;
