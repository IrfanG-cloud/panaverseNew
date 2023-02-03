"use client";

import HeroSection from "../components/HeroSection"
import Footer from "../components/Footer";
import StudyProgram from "@/components/StudyProgram";
import Coruses from "@/components/Courses";
import CoreCourses from "@/components/CoreCourses";
import ProgramParticipant from "@/components/ProgramParticipant";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <StudyProgram />
      <CoreCourses />
      <Coruses />
      <ProgramParticipant />
      <Footer />
    </>
  );
}
