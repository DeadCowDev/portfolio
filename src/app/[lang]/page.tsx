import {
  Header,
  HomeCreativity,
  HomeMembers,
  HomeTechnical,
  HomeWelcome,
} from "@/components";
import { LanguageParams } from "@/models";
import { getMetadataTitle } from "@/utils";
import { Metadata } from "next";

import "swiper/css";

export function generateMetadata({
  params,
}: {
  params: LanguageParams;
}): Metadata {
  return getMetadataTitle(
    "home_meta_title",
    "home_meta_description",
    params.lang
  );
}

export default function Home({ params }: { params: LanguageParams }) {
  return (
    <main>
      <Header lightOnDesktop cb={`/${params.lang}`} lang={params.lang} />
      <HomeWelcome lang={params.lang} />
      <HomeCreativity lang={params.lang} />
      <HomeTechnical lang={params.lang} />
      <HomeMembers lang={params.lang} />
    </main>
  );
}
