const students = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

function calculateAverageScores(students) {
  let result = {};

  Object.keys(students).forEach((student) => {
    let subjects = students[student];
    let scores = Object.values(subjects);
    let total = scores.reduce((sum, score) => sum + score, 0);
    let average = total / scores.length;
    result[student] = { average: average };
  });

  return result;
}

// Example usage:
let averageScores = calculateAverageScores(students);
console.log(averageScores);
