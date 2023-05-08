"use client";
import {
  Header,
  HomeCreativity,
  HomeMembers,
  HomeTechnical,
  HomeWelcome,
} from "@/components";

import "swiper/css";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeWelcome />
      <HomeCreativity />
      <HomeTechnical />
      <HomeMembers />
    </main>
  );
}
