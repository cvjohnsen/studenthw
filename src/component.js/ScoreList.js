import ScoreInfo from "./ScoreInfo";
const ScoreList = ({ info }) => {
  return (
    <div>
      {info.map((grade) => (
        <ScoreInfo users={grade} key={grade.score} />
      ))}
    </div>
  );
};

export default ScoreList;
