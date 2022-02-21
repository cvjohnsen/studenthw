import StudentInfo from "./StudentInfo";

const StudentList = ({ student }) => {
  //calls on student in app Key!
  return (
    <div>
      {student.map((person) => (
        <StudentInfo user={person} key={person.name} />
      ))}
    </div>
  );
};

export default StudentList;
