import { trefoil } from "ldrs";
import { Heading } from "./components/Heading";
import { Start } from "./components/Start";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Main } from "./components/Main";

trefoil.register();

export default function App() {
  return (
    <div className="font-His">
      <Heading />
      <Start />
      <Intro />
      <About />
      <Main />
    </div>
  );
}
