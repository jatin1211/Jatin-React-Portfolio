import sB from "../../../assets/project_screenshots/IMG1.png";
import bH from "../../../assets/project_screenshots/IMG2.JPG";
//import rP from '../../../assets/project_screenshots/IMG3.JPG';
import wD from "../../../assets/project_screenshots/IMG3.JPG";
// import pS from '../../../assets/project_screenshots/IMG5.JPG';
import eT from "../../../assets/project_screenshots/IMG4.png";
import Ts from "../../../assets/project_screenshots/IMG5.JPG";
import Icons from "../../../assets/icons";
const githubUrl = "https://jatin1211.github.io/";
const githubRepo = "https://github.com/jatin1211/";
const icon = Icons();

const works = [
  {
    name: "A-Night-In",
    repo: `${githubRepo}A-Night-In/`,
    url: `${githubUrl}A-Night-In/`,
    screenshot: sB,
    tech: [
      { name: "HTML", variant: "light", bg: "", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
    ],
    description:
      "Rainy evening? Car broke down? This application has your home entertainment needs covered.",
  },

  {
    name: "Team Profile Generator",
    repo: `${githubRepo}Team-Profile-Generator`,
    screenshot: bH,
    tech: [
      { name: "NodeJS", variant: "", bg: "lightGreen", icon: icon.nodeIcon },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "HTML", variant: "light", bg: "", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
      { name: "Inquirer", variant: "dark", icon: icon.inquirerIcon },
    ],
    description:
      "Used to generate a team of employees including manager, engineers and interns.",
  },
  {
    name: "Employee Tracker",
    repo: `${githubRepo}employee-tracker`,
    screenshot: wD,
    tech: [
      { name: "NodeJS", variant: "", bg: "lightGreen", icon: icon.nodeIcon },
      { name: "MySQL", variant: "secondary", icon: icon.mysqlIcon },
      { name: "Inquirer", variant: "dark", icon: icon.inquirerIcon },
    ],
    description:
      "Employee Tracker is a simple CLI for managing your MySQL Employee's database. Uses Node.js, MySQL/Sequelize, and the inquirer.js package",
  },
  // {
  //     name: 'Rent a Puppy',
  //     repo: `https://github.com/jatin1211/Tech-blog`,
  //     url: 'https://github.com/jatin1211/Tech-blog',
  //     screenshot: rP,
  //     tech: [
  //         { name: 'Express-Hbs', variant: 'light', bg: '', icon: icon.handleIcon },
  //         { name: 'TailwindsCSS', variant: 'secondary', icon: icon.twCssIcon },
  //         { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
  //         { name: 'Sequelize', variant: 'light', bg: '', icon: icon.sqlIze },
  //     ],
  //     description: "Rent A Puppy, connects those that love pets but are unable to have their own with pet owners that don't want their pets alone while at work or on vacation"
  // },
  // {
  //     name: 'Proximo',
  //     repo: `${githubRepo}proximo/`,
  //     url: `https://github.com/jatin1211/Tech-blog`,
  //     screenshot: pS,
  //     tech: [
  //         { name: 'TailwindsCSS', variant: 'secondary', icon: icon.twCssIcon },
  //         { name: 'JavaScript', variant: 'dark', bg: '', icon: icon.jsIcon },
  //     ],
  //     description: "Proximo is a user-friendly chat app that allows for one to open the app, see all of the geographically close users of proximo, chat on a global chat and add friends. Great for use in offices, schools, and just about everywhere else."
  // },
  {
    name: "Habitual Habits",
    repo: `https://github.com/jatin1211/Habitual-Habits`,
    url: `https://github.com/jatin1211/Habitual-Habits`,
    screenshot: eT,
    tech: [
      { name: "Express-Hbs", variant: "light", bg: "", icon: icon.handleIcon },
      { name: "Bootstrap", variant: "", bg: "purple", icon: icon.bootStrap },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "Sequelize", variant: "light", bg: "", icon: icon.sqlIze },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
    ],
    description:
      "A professional habit tracking site that allows logged in users to add, edit, comment on, and delete blogs and workouts.",
  },

  {
    name: "Weather Dashboard",
    repo: `${githubRepo}Weather-dashboard`,
    url: `https://github.com/jatin1211/Weather-Dashboard`,
    screenshot: Ts,
    tech: [
      { name: "Bootstrap", variant: "", bg: "purple", icon: icon.bootStrap },
      { name: "JavaScript", variant: "dark", bg: "", icon: icon.jsIcon },
      { name: "HTML", variant: "light", bg: "", icon: icon.htmlIcon },
      { name: "CSS", variant: "", bg: "rebeccaPurple", icon: icon.cssIcon },
    ],
    description:
      "Dashboard is your source for ad-free weather and the day's top news headlines.",
  },
];
export default works;
