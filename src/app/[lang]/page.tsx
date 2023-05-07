"use client";
import {
  Header,
  HomeCreativity,
  HomeTechnical,
  HomeWelcome,
} from "@/components";
import { Content } from "@/components/content";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeWelcome />
      <HomeCreativity />
      <HomeTechnical />
    </main>
  );
}
