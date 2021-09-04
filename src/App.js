import Cost from "./Components/Cost";
import Header from "./Components/Header";
import { TimeContextProvider } from "./Contexts/TimeContext";
import { AttendeesContextProvider } from "./Contexts/AttendeesContext";
import Attendees from "./Components/Attendees"

import './App.css';
import './Shared/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <TimeContextProvider>
        <AttendeesContextProvider>
          <div className="container">
            <Attendees />
            <Cost />
          </div>
        </AttendeesContextProvider>
      </TimeContextProvider>
    </div>
  );
}

export default App;
