import { useState } from "react";
import "./App.css";
import students from "./data";
import StudentList from "./component.js/StudentList";
import Header from "./component.js/Header";
import ScoreList from "./component.js/ScoreList";

function App() {
  const [studentData, setStudentData] = useState(students);
  // const [scoresData, setScoresData] = useState(scores);

  return (
    <div className="App">
      <Header />
      <StudentList student={studentData} />
      {/* <ScoreList info={scoresData} /> */}
    </div>
  );
}

export default App;
