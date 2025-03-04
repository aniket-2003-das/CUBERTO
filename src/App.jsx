import "./App.css";
import Page1 from "./screens/Page1";
import Page2 from "./screens/Page2";
import { ReactLenis } from "@studio-freight/react-lenis";
import Page3 from "./screens/Page3";
import Page4 from "./screens/Page4";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Page5 from "./screens/Page5";
import Page9 from "./screens/Page9";
function App() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);
  return (
    <>
      <ReactLenis root>
        <Page1 />
        <Page2 />
        <Page3/>
        <Page4/>
        <Page5/>
        <Page9/>
      </ReactLenis>
    </>
  );
}

export default App;
