import React from "react";
import styles from "./App.module.scss";
import AllRoutes from "./routes";

function App() {
  return (
    <div className={styles.app}>
      <AllRoutes />
    </div>
  );
}

export default App;
