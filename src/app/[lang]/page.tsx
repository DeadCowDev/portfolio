"use client";
import {
  Header,
  HomeCreativity,
  HomeMembers,
  HomeTechnical,
  HomeWelcome,
} from "@/components";
import ContactUs from "@/components/form";
import { useHashAsKV } from "@/hooks";

import "swiper/css";

export default function Home() {
  const { contact } = useHashAsKV();
  return (
    <main>
      <Header />
      <HomeWelcome />
      <HomeCreativity />
      <HomeTechnical />
      <HomeMembers />
      {contact && <ContactUs />}
    </main>
  );
}
