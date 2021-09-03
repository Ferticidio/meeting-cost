import Cost from "./Components/Cost";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import { TimeContextProvider } from "./Contexts/TimeContext";

function App() {
  return (
    <div className="App">
      <Header />
      <TimeContextProvider>
        <Timer />
        <Cost />
      </TimeContextProvider>
    </div>
  );
}

export default App;
