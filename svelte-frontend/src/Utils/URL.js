const HOME_PAGE_URL = [
  {
    key: "LOGIN",
    link: "/",
    name: "Connexion",
  },
  {
    key: "SUBSCRIBE",
    link: "/subscribe",
    name: "Inscription",
  },
];

const HOME_URL = [
  {
    key: "HOME",
    link: "/home",
    name: "Accueil",
  }
];

const INTERNSHIP_MANAGER_URL = HOME_URL.concat([
  {
    key: "VALID_CV",
    link: "/studentList/validation/cv",
    name: "Validation CV étudiant",
  }
]);

const STUDENT_URL = [  ];

const MONITOR_URL = [  ];

const SUPERVISOR_URL = [  ];

export { HOME_PAGE_URL, INTERNSHIP_MANAGER_URL, STUDENT_URL, MONITOR_URL, SUPERVISOR_URL };
