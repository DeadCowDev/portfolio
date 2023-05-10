"use client";

import { Header, ServiceMainSection } from "@/components";

const FrontendDevelopment = () => {
  return (
    <main>
      <Header />
      <ServiceMainSection
        gradient="bg-gradient-2"
        image="/images/web-app.svg"
        link="#steps-section"
        title="services_frontend_title"
        subtitle="services_frontend_subtitle"
        imageAlt="services_frontend_image_alt"
        button="services_frontend_button"
      />
    </main>
  );
};
export default FrontendDevelopment;
