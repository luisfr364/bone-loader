import { GenericLoadingEl, LoadingLine, LoadingLines } from "bone-loader";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Appdiv}>
      <GenericLoadingEl
        $height='70px'
        $width='70px'
        $borderRadius='50%'
        $margin='0 20px 0 0'
      />-
      
      <LoadingLines
        containerProps={{ $linesCount: 4, $margin: "2% 0 0 0" }}
        lineProps={{ $margin: "10px" }}
      />
    </div>
  );
}

export default App;
