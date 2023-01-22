export type CareerEntry = {
  companyLogo: string;
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  present: boolean;
  description?: string;
  techStackHeaderText?: string;
  techStack?: string[];
};

const defaultEntryValues = {
  present: false,
  endDate: new Date(),
};

export const workEntries: Array<CareerEntry> = [
  {
    ...defaultEntryValues,
    companyLogo: "/assets/au_standard_logo.jpg",
    companyName: "Aarhus University",
    position: "Student Mentor",
    description:
      "As a part-time student mentor I'm helping my mentees out with homework, understanding subjects, Uni-Life or everything in between. This has improven my sense of understanding issues and providing pedagogical explanations on tough subjects.",
    present: true,
    startDate: new Date("2021-02-01"),
    techStackHeaderText: "Subjects that are usually mentioned",
    techStack: [
      "Software Architecture",
      "Software Design Patterns",
      "Web Development",
      "Object Oriented Programming",
      "IT Security",
    ],
  },
  {
    ...defaultEntryValues,
    companyLogo: "/assets/bestseller.avif",
    companyName: "Bestseller",
    position: "Fullstack Software Developer",
    present: false,
    description:
      "During my time here @Bestseller I've grown more than I could imagine. We've not only built various products from scratch, but also managed to do so with much sparring and considerations to keep the code quality at it's highests.",
    startDate: new Date("2020-12-01"),
    endDate: new Date("2022-07-01"),
    techStack: [
      "React",
      "ASP.NET Core",
      "TypeScript",
      "C#",
      "Next.js",
      "Storybook",
      "Kubernetes",
      "Terraform",
      "Azure",
      "Kafka",
    ],
  },
  {
    ...defaultEntryValues,
    companyLogo: "/assets/db.png",
    companyName: "Danske Bank",
    position: "Software Engineer Student Worker",
    startDate: new Date("2019-02-01"),
    endDate: new Date("2020-11-01"),
    description:
      "The first 5 months I worked as an intern, I was then hired as a student worker right after. I worked in the Anti Money Laundry sector in one of Danske Bank's High Performance Teams. I have been blessed to have such competent and skilled team mates to spar with.",
    techStack: ["Angular", "ASP.NET Core", "TypeScript", "C#", "HTML & CSS"],
  },
];

export const educationEntries: Array<CareerEntry> = [
  {
    ...defaultEntryValues,
    companyLogo: "/assets/au_standard_logo.jpg",
    companyName: "Software Technology (Bachelor)",
    position: "Graduate",
    present: false,
    description:
      "During my education I've studied and experimented with a vast variety of technologies expanding my domain knowledge of programming.",
    startDate: new Date("2017-02-01"),
    endDate: new Date("2020-07-01"),
    techStackHeaderText: "A handful of those technologies I studied",
    techStack: [
      "Software Design Patterns",
      "Web Development",
      "Object Oriented Programming",
      "Unit testing",
      "Database management",
      "IT Security",
    ],
  },
  {
    ...defaultEntryValues,
    companyLogo: "/assets/systematic.jpg",
    companyName: "Systematic (Scrum Course)",
    position: "Participant",
    present: false,
    description:
      "Three day Scrum course which consisted of lectures and exercises regarding Scrum elements. From the course I've gained basic allround knowledge of Scrum. ",
    startDate: new Date("2018-03-01"),
    endDate: new Date("2018-04-01"),
    techStackHeaderText: "Topics that were explained:",
    techStack: [
      "Planning",
      "Sprints",
      "Retrospective",
      "Refinement",
      "Standup",
      "Review",
      "Scrum roles",
    ],
  },
];

export const additionalWorkEntries: Array<CareerEntry> = [
  {
    ...defaultEntryValues,
    companyLogo: "/assets/elgiganten.png",
    companyName: "Elgiganten",
    position: "Operations Worker",
    description:
      "My time at Elgiganten has improven my skills a lot within customer service, complaint handling, inventory management, responsibility taking, and decisions making independently.",
    startDate: new Date("2017-02-01"),
    endDate: new Date("2019-01-01"),
    techStackHeaderText: "An operations worker handles",
    techStack: ["Inventory", "Products", "Complaints", "Deliveries"],
  },
  {
    ...defaultEntryValues,
    companyLogo: "/assets/stofa.png",
    companyName: "Stofa",
    position: "Customer Service Consultant",
    description:
      "Being a consultant @Stofa has taught me a lot in terms of customer service, communication, and handling complaints",
    startDate: new Date("2016-02-01"),
    endDate: new Date("2017-01-01"),
    techStackHeaderText: " ",
    techStack: [],
  },
  {
    ...defaultEntryValues,
    companyLogo: "/assets/tdc.png",
    companyName: "TDC",
    position: "IT Support",
    startDate: new Date("2014-01-01"),
    endDate: new Date("2014-09-01"),
    description:
      "Being an IT supporter @TDC has taught me a lot in terms of communication and handling complaints",
    techStackHeaderText: " ",
    techStack: [],
  },
];
