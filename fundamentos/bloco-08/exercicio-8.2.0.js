const students = [
  {nome: 'Maria', grade: 70, aproved: '' },
  {nome: 'José', grade: 56, aproved: '' },
  {nome: 'Roberto', grade: 90, aproved: '' },
  {nome: 'Mônica', grade: 81, aproved: '' },
];

function verifyGrades() {
  for (let index = 0; index < students.length; index += 1) {
    const student = students[index];
      if (student.grade >= 60) {
        student.aproved = 'Aprovado';
      } else {
        student.aproved = 'Reprovado';
    }
    return student;
  }
}
verifyGrades();
  console.log(students);

// usando o forEach

const students = [
  {nome: 'Maria', grade: 70, aproved: '' },
  {nome: 'José', grade: 56, aproved: '' },
  {nome: 'Roberto', grade: 90, aproved: '' },
  {nome: 'Mônica', grade: 81, aproved: '' },
];

function verifyGrades() {
  students.forEach((student, index) => {
    if (student.grade >= 70) {
      students[index].aproved = 'Aprovado';
    } else {
      students[index].aproved = 'Reprovado';
    }
  });
}
console.log(verifyGrades());
  // console.log(students);

