"use client";
import { Header, HomeCreativity, HomeWelcome } from "@/components";
import { Content } from "@/components/content";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeWelcome />
      <HomeCreativity />
      <Content className="bg-orange-1" id="technical"></Content>
      <Content className="bg-yellow-1" id="members"></Content>
    </main>
  );
}
