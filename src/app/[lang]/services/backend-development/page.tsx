"use client";

import { Header, ServiceMainSection } from "@/components";

const BackendDevelopment = () => {
  return (
    <main>
      <Header />
      <ServiceMainSection
        gradient="bg-purple-2"
        image="/images/backend.svg"
        link="#steps-section"
        title="services_backend_title"
        subtitle="services_backend_subtitle"
        imageAlt="services_backend_image_alt"
        button="services_backend_button"
      />
    </main>
  );
};
export default BackendDevelopment;
