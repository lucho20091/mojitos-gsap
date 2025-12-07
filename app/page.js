"use client";
import Image from "next/image";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";
import About from "@/components/About";
import Art from "@/components/Art";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
gsap.registerPlugin(ScrollTrigger, SplitText);
export default function Home() {
  return (
    <main>
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
