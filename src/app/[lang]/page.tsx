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

export default function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <main>
      <Header lightOnDesktop cb={`/${lang}`} />
      <HomeWelcome />
      <HomeCreativity />
      <HomeTechnical />
      <HomeMembers />
    </main>
  );
}
