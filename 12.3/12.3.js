const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
  findPerson(type, id) {
    return this[type].find((person) => person.id === id);
  },
  assignStudent(id, subject) {
    this.teachers
      .find((teacher) => teacher.subjects.includes(subject))
      .students.push(school.findPerson("students", id));
    if (
      this.teachers.find((teacher) => teacher.subjects.includes(subject))
        .capacityLeft
    ) {
      this.teachers.find((teacher) =>
        teacher.subjects.includes(subject)
      ).capacityLeft -= 1;
    }
    else {
        return 'Sorry, no available teachers left';
    }
  },
};

// console.log(school.findPerson("teachers", 1));
school.assignStudent(10, "history");
school.assignStudent(10, "history");
school.assignStudent(10, "history");
school.assignStudent(10, "history");
console.log(school.teachers);
