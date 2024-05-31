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
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://endermeet.vercel.app",
  },
  {
    id: 2,
    title: "KickStart - Scam free freelancing platform",
    des: "A platform that connects freelancers with clients, ensuring a scam-free experience for both parties.",
    img: "/kickstart.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fb.svg", "/c.svg"],
    link: "https://www.kickstart.ltd",
  },
  {
    id: 3,
    title: "Building a Love for Numbers: Because of Maths",
    des: "A website designed to make learning mathematics engaging and accessible. Built for a passionate math tutor.",
    img: "/maths.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fb.svg", "/c.svg"],
    link: "https://www.becauseofmaths.in",
  },
  {
    id: 4, // Assuming you want to assign a unique id for each project
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
    title: "CEO of KickStart and CTO and Co-Founder of Calorie Guard",
    profile: "/pc.svg",
  },
  {
    quote:
      "Srinjay Das Gupta's technical skills, creativity, and professionalism consistently impressed me across web development projects. He transforms ideas into beautiful, functional websites that exceed expectations. His meticulousness, commitment to deadlines, and clear communication ensure a smooth process. Srinjoy's innovative problem-solving tackles complex challenges, making him a highly recommended web developer.",
    name: "Arghyadip Biswas",
    title: "Founder and CEO of Calorie Guard and CEO of Faslane Agency",
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
    name: "Kickstart",
    img: "/kickstart-logo.svg",
    nameImg: "/kickstartName.svg",
  },
  {
    id: 4,
    name: "Keyshade",
    img: "/keyshade.svg",
  },
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
