// Slide data and structure for the interactive presentation website
export type SlideType = {
  id: string;
  heading: string;
  points?: string[];
  image?: string;
  projects?: Array<{
    name: string;
    details: string;
    images: string[];
  }>;
  isProjectSlide?: boolean;
  isCarousel?: boolean;
  colorfulHeading?: boolean;
};

export const slides: SlideType[] = [
  {
    id: "intro",
    heading: "Introduction",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&w=800&q=80", // Reliable career growth image
    points: [
      "Agenda: Job Preparation, Interview Experience, How it is after joining GSS, Projects, Future Goals",
      "How I prepared for my career and the GSS interview",
      "What I learned and built after joining GSS",
      "Showcase of my major projects and achievements",
      "My future goals and closing thoughts",
    ],
    colorfulHeading: true,
  },
  {
    id: "prep-start",
    heading: "Starting Job Preparation",
    points: [
      "Final year, second semester",
      "Strong foundation in atleast one programmin language",
      "Decided to learn Java and solve problems",
    ],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=compress&w=800&q=80",
  },
  {
    id: "tap-academy",
    heading: "Joining TAP Academy",
    points: [
      "Campus drive, free selection, joined TAP Academy",
      "On January , 2025",
    ],
    image:
      "https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&w=800&q=80", // Classroom/learning group
  },
  {
    id: "competition",
    heading: "Facing Competition",
    points: [
      "Realized competition is tough",
      "One post many applicants like minimum of 1000 people",
    ],
    image:
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&w=800&q=80", // Teamwork/collaboration/competition
  },
  {
    id: "technologies",
    heading: "Learning Key Technologies",
    points: [
      "Servlet, JSP, Spring, UI frameworks",
      "React",
      "Node.js , express.js",
      "Mysql",
      "Version control tools : Git",
    ],
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&w=800&q=80", // Technology
  },
  {
    id: "projects",
    heading: "Projects",
    points: [
      "Military Asset Management System: React, Node.js, Express, Postgres",
      "Student Portfolio Management System: Spring, JSP, MySQL",
    ],
    image:
      "https://images.pexels.com/photos/256219/pexels-photo-256219.jpeg?auto=compress&w=800&q=80", // Projects
    isProjectSlide: true,
    projects: [
      {
        name: "Military Asset Management System",
        details: "React, Node.js, Express, Postgres",
        images: [
          "/assets/MAM/Admin Dashboard.png",
          "/assets/MAM/admin asset page.png",
          "/assets/MAM/admin Base page.png",
          "/assets/MAM/admin user page.png",
          "/assets/MAM/assignments page.png",
          "/assets/MAM/Base commander dashboard.png",
          "/assets/MAM/expenditures page.png",
          "/assets/MAM/forgot password page.png",
          "/assets/MAM/purchase page.png",
          "/assets/MAM/Screenshot 2026-01-06 140358.png",
          "/assets/MAM/transfers page.png",
        ],
      },
      {
        name: "Student Portfolio Management System",
        details: "Spring, JSP, MySQL",
        images: ["/assets/portfolio-1.jpg", "/assets/portfolio-2.jpg"],
      },
    ],
  },
  {
    id: "interview-opportunity",
    heading: "How I Got the GSS Opportunity",
    points: [
      "TAP Academy contacted me",
      "Attended GSS campus drive",
      "Cleared all interview rounds",
      "Joined on August 18, 2025",
    ],
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&w=800&q=80", // Interview/Business meeting
  },
  {
    id: "interview-details",
    heading: "Interview Rounds & Lessons Learned",
    points: [
      "Aptitude ,Communication , Technical  and Managerial rounds",
      "Learned about communication and problem-solving",
    ],
    image:
      "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&w=800&q=80", // Interview details
  },
  {
    id: "expo-learning",
    heading: "Learning Expo",
    points: [
      "Expo is a platform for building universal React apps",
      "Allows rapid prototyping and deployment",
      "We used Expo to create and showcase the Sudarshan Academy app at the event",
      "Expo simplifies mobile development with easy build and publish tools",
    ],
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&w=800&q=80", // Mobile app development
  },
  {
    id: "sudarshini-app",
    heading: "Sudarshini App (Built with Expo)",
    points: [
      "Developed a mobile app for Sudarshini Academy using Expo",
      "Built for both Android and iOS with a single codebase",
      "Learned how to create an mobile app.",
    ],
    image: "/assets/sudarshini/1.jpg",
    isProjectSlide: true,
    projects: [
      {
        name: "Sudarshini Academy Mobile App UI",
        details: "Screenshots of the Sudarshini Academy app UI",
        images: [
          "/assets/sudarshini/1.jpg",
          "/assets/sudarshini/2.jpg",
          "/assets/sudarshini/3.jpg",
          "/assets/sudarshini/4.jpg",
          "/assets/sudarshini/5.jpg",
          "/assets/sudarshini/6.jpg",
          "/assets/sudarshini/7.jpg",
        ],
      },
    ],
  },
  {
    id: "typeform-project",
    heading: "Typeform Project",
    points: [
      "Assigned to replicate Typeform (Google Forms / Microsoft Forms)",
      "Implemented exact features in our app",
    ],
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&w=800&q=80", // Typeform project
    isCarousel: true,
    projects: [
      {
        name: "Typeform Project",
        details: "Typeform-like UI screens",
        images: [
          "/assets/typeform/1.png",
          "/assets/typeform/2.png",
          "/assets/typeform/3.png",
          "/assets/typeform/4.png",
          "/assets/typeform/5.png",
        ],
      },
    ],
  },
  {
    id: "future-goals",
    heading: "Future Goals",
    points: ["Master all technologies learned", "Learn .NET"],
    image:
      "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&w=800&q=80", // Future/Motivation
    colorfulHeading: true,
  },
  {
    id: "thank-you",
    heading: "Thank You",
    points: ["Thank You"],
    image:
      "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&w=800&q=80", // Thank You
    colorfulHeading: true,
  },
];
