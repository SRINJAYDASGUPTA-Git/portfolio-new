export interface TExperience {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    tasks: string[];
}
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const projects = [
  {
    id: 1,
    title: "EnderMeet - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/endermeet.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/s.svg", "/c.svg"],
    link: "https://endermeet.vercel.app",
  },
  {
    id: 2,
    title: "EndrLink - Secure URL Shortener",
    des: "A secure and user-friendly URL shortening platform with full-stack integration. Backend built with Spring Boot, frontend with Next.js. Features robust JWT & OAuth2.0 authentication, Dockerized deployment, and PostgreSQL for scalable data storage.",
    img: "/endrlink.svg",
  // <a target="_blank" href="https://icons8.com/icon/90519/spring-boot">Spring Boot</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    iconLists: ["/spring.svg", "/pg.svg", "/next.svg", "/tail.svg", "/axios.svg", "/jwt.svg", "/oauth.svg", "/docker.svg", 'neon.svg'],
    link: "https://endrlink.srinjaydg.in",
  },
  {
    id: 4,
    title: "BookSocial - Social Network for Book Lovers",
    des: "A full-stack book-focused social networking platform. Backend is powered by Spring Boot with JPA, Security & Mail support. Frontend built using Angular 18 and Bootstrap, integrating OpenAPI for typed APIs. Dockerized for deployment with CI/CD via GitHub Actions.",
    img: "/booksocial.svg",
    iconLists: [
      "/spring.svg",
      "/angular.svg",
      "pg.svg",
      "/bootstrap.svg",
      "/openapi.svg",
      "/docker.svg",
      "/jwt.svg"
    ],
    link: "https://github.com/srinjaydg/bookSocialNetwork"  // or actual deployment link if available
  }
  ,
  {
    id: 3,
    title: "The Puneet Institute – Academic Coaching for Classes 5–12",
    des: "A comprehensive educational platform built for The Puneet Institute, offering expert-led coaching for students from Classes 5 to 12 across all English-medium boards. The site showcases a full range of subjects, modern learning tools, and a commitment to academic excellence.",
    img: "/tpi.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/jwt.svg", "/express.svg", "/neon.svg", "pg.svg"],
    link: "https://www.thepuneetinstitute.in",
  },
  {
    id: 5, // Assuming you want to assign a unique id for each project
    title: "Bharatiya Shotokan Karate Academy Website",
    des: "Website for the Bharatiya Federation of Shotokan Karate, showcasing their organization and programs.",
    link: "https://www.bfsk.co.in/",
    img: "/bfsk.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"], // Empty array initialization
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];
export const testimonials = [
  {
    quote:
      "Srinjay is a friend of mine from 1st year, he is very hardworking and dedicated towards his work, he mostly does his work days before the deadline, working with Srinjay is at ease as he also got good communication skills so that as a teammate I can rely on him.",
    name: "Prabuddha Chatterjee",
    title: "CTO and Co-Founder of Anthrovia Technologies Pvt. Ltd.",
    profile: "/pc.svg",
  },
  {
    quote:
      "Srinjay Das Gupta's technical skills, creativity, and professionalism consistently impressed me across web development projects. He transforms ideas into beautiful, functional websites that exceed expectations. His meticulousness, commitment to deadlines, and clear communication ensure a smooth process. Srinjoy's innovative problem-solving tackles complex challenges, making him a highly recommended web developer.",
    name: "Arghyadip Biswas",
    title: "Founder and CEO of Calorie Guard",
    profile: "/ab.svg",
  },
  {
    quote:
      "Collaborating with Srinjay was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Srinjay's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Srinjay is the ideal partner.",
    name: "Rajdip Bhattacharyya",
    title: "Co-Founder and CTO of Keyshade",
    profile: "/rb.svg",
  },
  {
    quote:
      "I'd like to commend Srinjay Das Gupta for his outstanding contributions to the KeyShade project. He's improving remarkably and consistently brings fresh ideas to the table. Beyond his technical skills, Srinjay is a great guy who fosters a collaborative and inclusive environment. Great to have him as an contributor. Keep up the fantastic work, Srinjay!",
    name: "Sawan Bhattacharya",
    title: "Co-Founder and CEO of Keyshade",
    profile: "/sb.svg",
  },
  {
    quote:
      "Mr. Srinjay Dasgupta is a dedicated and inspiring faculty member whose commitment, excellence, and passion for teaching make him one of the most respected educators at The Puneet Institute.",
    name: "Gurpreet Singh",
    title: "Founder of The Puneet Institute",
    profile: "/punit.svg",
  }
];

export const companies = [
  {
    id: 1,
    name: "Calorie Guard",
    img: "/cal.svg",
    nameImg: "/calName.svg",
  },
  {
    id: 2,
    name: "Faslane Agency",
    img: "/faslane.svg",
    nameImg: "/faslaneName.svg",
  },
  {
    id: 3,
    name: "Keyshade",
    img: "/keyshade.svg",
  },
    {
        id: 4,
        name: "Anthrovia Technologies Pvt. Ltd.",
        img: "/anthrovia.svg",
    }
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Dev Lead of Google DSC NiT 2023",
    desc: "Led a team of developers to create a website for the Google Developer Student Club of my college.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev Project",
    desc: "Developed a website for a local business, increasing their online presence and customer engagement.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];
export const experiences: TExperience[] = [
  {
    title: "Web Development Lead",
    company: "Google Developer Student Club, Narula Institute of Technology",
    location: "Kolkata, India",
    startDate: "Aug 2023",
    endDate: "July 2024",
    tasks: [
      "<strong>Mentored</strong> GDSC members on technical and project development skills.",
      "<strong>Led workshops</strong> on Git and Web Development Fundamentals with <strong>200+ attendees</strong>.",
      "<strong>Promoted</strong> version control best practices and advanced Git usage."
    ]
  },
  {
    title: "Web Development Associate",
    company: "Code Together, Narula Institute of Technology",
    location: "Kolkata, India",
    startDate: "Sept 2024",
    endDate: "Aug 2025",
    tasks: [
      "Helped establish <strong>Code Together</strong> as the official student coding community.",
      "Grew the club to over <strong>850 members</strong> through regular events and peer learning.",
      "Co-organized inauguration event attended by <strong>450+ students</strong>."
    ]
  },
  {
    title: "Backend & DevOps Intern",
    company: "Anthrovia Technologies Pvt. Ltd.",
    location: "Hybrid",
    startDate: "Feb 2025",
    endDate: "June 2025",
    tasks: [
      "Developed and deployed a scalable backend for a street vendor e-commerce platform using <strong>Spring Boot</strong>, <strong>Docker</strong>, and <strong>PostgreSQL</strong>.",
      "Implemented a multilingual fuzzy trigram search algorithm by phonetically encoding native languages in both the database and search tokens, enabling effective product search in <strong>Hindi</strong>, <strong>Bengali</strong>, and <strong>English</strong>.",
      "Built 15+ <strong>RESTful APIs</strong> for customer and employee apps; reduced response latency by 40%. Deployed via <strong>CI/CD (GitHub Actions)</strong> on <strong>Azure VMs</strong> with <strong>NGINX</strong> for load balancing."
    ]
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/SRINJAYDASGUPTA-Git/",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "https://x.com/SrinjayDasGupta",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/srinjay-das-gupta-441841214/",
  },
];
