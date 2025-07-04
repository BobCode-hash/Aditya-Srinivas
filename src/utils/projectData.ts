export interface Project {
  title: string;
  description: string;
  image: string;
  liveLink: string;
  githubLink: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "This is a description of project one.",
    image: "/project1.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Two",
    description: "This is a description of project two.",
    image: "/project2.jpg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Project Three",
    description: "This is a description of project three.",
    image: "/project3.jpg",
    liveLink: "#",
    githubLink: "#",
  },
];
