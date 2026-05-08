// scripts/course.js

const courses = [
  {
    code: "WDD130",
    name: "Web Fundamentals",
    credits: 2,
    subject: "WDD",
    completed: true
  },
  {
    code: "WDD131",
    name: "Dynamic Web Fundamentals",
    credits: 2,
    subject: "WDD",
    completed: true
  },
  {
    code: "WDD231",
    name: "Web Frontend Development I",
    credits: 2,
    subject: "WDD",
    completed: false
  },
  {
    code: "CSE110",
    name: "Introduction to Programming",
    credits: 2,
    subject: "CSE",
    completed: true
  },
  {
    code: "CSE111",
    name: "Programming with Functions",
    credits: 2,
    subject: "CSE",
    completed: false
  },
  {
    code: "CSE210",
    name: "Programming with Classes",
    credits: 2,
    subject: "CSE",
    completed: false
  }
];

const coursesContainer = document.getElementById("coursesContainer");
const credits = document.getElementById("credits");

function displayCourses(courseList) {

  coursesContainer.innerHTML = "";

  courseList.forEach(course => {

    const div = document.createElement("div");

    div.classList.add("course-card");

    if (course.completed) {
      div.classList.add("completed");
    } else {
      div.classList.add("not-completed");
    }

    div.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} Credits</p>
    `;

    coursesContainer.appendChild(div);
  });

  const totalCredits = courseList.reduce(
    (sum, course) => sum + course.credits,
    0
  );

  credits.textContent = `Total Credits: ${totalCredits}`;
}

// Default Display
displayCourses(courses);

// Buttons
document.getElementById("allBtn").addEventListener("click", () => {
  displayCourses(courses);
});

document.getElementById("wddBtn").addEventListener("click", () => {

  const wddCourses = courses.filter(
    course => course.subject === "WDD"
  );

  displayCourses(wddCourses);
});

document.getElementById("cseBtn").addEventListener("click", () => {

  const cseCourses = courses.filter(
    course => course.subject === "CSE"
  );

  displayCourses(cseCourses);
});