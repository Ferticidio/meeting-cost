import Cost from "./Components/Cost";
import Header from "./Components/Header";
import Timer from "./Components/Timer";
import { TimeContextProvider } from "./Contexts/TimeContext";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TimeContextProvider>
        <div className="container">
          <Timer />
          <Cost />
        </div>
      </TimeContextProvider>
    </div>
  );
}

export default App;
