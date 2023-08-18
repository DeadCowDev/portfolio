"use client";
import {
  Header,
  HomeCreativity,
  HomeMembers,
  HomeTechnical,
  HomeWelcome,
} from "@/components";
import ContactUs from "@/components/form";

import "swiper/css";

export default function Home() {
  return (
    <main>
      <Header lightOnDesktop />
      <HomeWelcome />
      <HomeCreativity />
      <HomeTechnical />
      <HomeMembers />
    </main>
  );
}
