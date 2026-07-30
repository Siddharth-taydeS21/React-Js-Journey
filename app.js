import { createRoot } from "react-dom/client";
import AppCounter from "./components/AppCounter";

// const root = createRoot(document.getElementById('root'))

export default function App ({root}) {
  return <AppCounter root={root} />
}