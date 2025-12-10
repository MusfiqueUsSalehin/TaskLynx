const employees = [
  {
    name: "Kakashi",
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create homepage layout using Figma.",
        date: "2025-10-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Login Bug",
        description: "Debug authentication issue in the login page.",
        date: "2025-10-16",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Team Meeting",
        description: "Attend project status meeting with the manager.",
        date: "2025-10-17",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    name: "Might Guy",
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Run full backup for production database.",
        date: "2025-10-14",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Write API Docs",
        description: "Document endpoints for the user dashboard APIs.",
        date: "2025-10-18",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy Update",
        description: "Push latest features to staging server.",
        date: "2025-10-20",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    name: "Asuma",
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Create Dashboard UI",
        description: "Develop dashboard page using React.",
        date: "2025-10-19",
        category: "Frontend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Add Search Feature",
        description: "Implement search bar in user list component.",
        date: "2025-10-21",
        category: "Frontend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress all product images for faster load times.",
        date: "2025-10-17",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    name: "Kurenai",
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Security Audit",
        description: "Review and patch potential security vulnerabilities.",
        date: "2025-10-13",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Test Cases",
        description: "Write unit tests for login and registration modules.",
        date: "2025-10-18",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review pull requests from other team members.",
        date: "2025-10-20",
        category: "Collaboration",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    name: "Orochimaru",
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Customer Feedback",
        description: "Analyze recent feedback from app users.",
        date: "2025-10-19",
        category: "Analysis",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Bug Tracking",
        description: "Log new bugs found during the latest QA session.",
        date: "2025-10-16",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Content Update",
        description: "Update landing page texts and banner images.",
        date: "2025-10-18",
        category: "Content",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];


// TaskCounts
employees.forEach(emp => {
  emp.taskCount = {
    active: emp.tasks.filter(t => t.active).length,
    newTask: emp.tasks.filter(t => t.newTask).length,
    completed: emp.tasks.filter(t => t.completed).length,
    failed: emp.tasks.filter(t => t.failed).length
  };
});




const admins = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];



export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admins", JSON.stringify(admins));

}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admins = JSON.parse(localStorage.getItem("admins"));

  return {employees, admins};



}