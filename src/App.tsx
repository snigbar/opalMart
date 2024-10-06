import "./App.css";
import { useAppSelector } from "./store/hooks/hooks";

function App() {
  const { isLoading } = useAppSelector((state) => state.authReducer);

  console.log(isLoading);

  return <>helloe</>;
}

export default App;
