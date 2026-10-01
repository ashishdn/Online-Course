import Hero from "@/components/home/Hero";
import LearningTips from "@/components/home/LearningTips";
import PopularCourses from "@/components/home/PopularCourses";
import TopInstructors from "@/components/home/TopInstructors";
import Image from "next/image";

export default function Home() {
  return (
   <div >
    <Hero></Hero>
    <PopularCourses></PopularCourses>
    <LearningTips></LearningTips>
    <TopInstructors></TopInstructors>
   </div>
  );
}
