import ScoreList from "./ScoreList";

const StudentInfo = (props) => {
  return (
    <div style={container}>
      <h3>Name: {props.user.name}</h3>
      <h3>Bio: {props.user.bio}</h3>
      <h3>Score: {props.user.score} </h3>
    </div>
  );
};

const container = {
  backgroundColor: "#ced6e0",
};

export default StudentInfo;
