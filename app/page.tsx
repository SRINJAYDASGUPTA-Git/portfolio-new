import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import dynamic from "next/dynamic";
export default function Home() {
  const Grid = dynamic(() => import("@/components/Grid"), {
    ssr: false,
  });
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        {/* Navigation Bar */}
        <FloatingNav navItems={navItems} />
        {/* Hero Section */}
        <Hero />
        {/* Bento Grid */}
        <Grid />
        {/* Projects */}
        <RecentProjects />
        {/* Client Remarks */}
        <Clients />
        {/* Experience */}
        <Experience />
        {/* SDE Approach */}
        <Approach />
        {/* Contact & Footer */}
        <Footer />
      </div>
    </main>
  );
}
