import styles from "./App.module.css";
import { FormRegistration } from "./components";

function App() {
  return (
    <div className={styles.app}>
      <h2>Cтраница регистрации </h2>
      <FormRegistration />
    </div>
  );
}

export default App;
