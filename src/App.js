import "./styles.css";
import Btn from "./Btn";
export default function App() {
  return (
    <div className="App">
      <h1>Hello Welcome to React</h1>
      <h2>Problem Statement : Create a customizable button component.</h2>
      <h2>
        Solution : Below are the customizable button components,which can be
        customized based on size and color.
      </h2>
      <Btn type="primary" size="small" text="Blue" />
      <Btn type="secondary" size="medium" text="Green" />
      <Btn type="danger" size="large" text="Red" />
    </div>
  );
}
