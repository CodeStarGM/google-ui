import { Switch, Route } from "react-router";
import Home from "./pages/Home";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/gmail" exact component={Gmail} />

        <Route path="/images" exact component={Images} />
      </Switch>
    </>
  );
}

export default App;
