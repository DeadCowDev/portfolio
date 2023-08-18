"use client";

import { Header, ServiceMainSection, ServicesSteps } from "@/components";
import ContactUs from "@/components/form";
import { useI18n } from "@/i18n";

const BackendDevelopment = () => {
  const { locale } = useI18n();
  return (
    <main>
      <Header />
      <ServiceMainSection
        gradient="bg-purple-2 xl:bg-gradient-3"
        image="/images/backend.svg"
        link="#steps-section"
        title="services_backend_title"
        subtitle="services_backend_subtitle"
        imageAlt="services_backend_image_alt"
        button="services_backend_button"
      />
      <ServicesSteps
        title="services_backend_steps_title"
        subtitle="services_backend_steps_subtitle"
        lang={locale}
        cb={`/${locale}/services/backend-development`}
        steps={[
          {
            title: "services_backend_steps_1_title",
            subtitle: "services_backend_steps_1_subtitle",
            connectorBorderClass: "border-blue-1",
          },
          {
            title: "services_backend_steps_2_title",
            subtitle: "services_backend_steps_2_subtitle",
            connectorBorderClass: "border-orange-1",
          },
          {
            title: "services_backend_steps_3_title",
            subtitle: "services_backend_steps_3_subtitle",
            connectorBorderClass: "border-green-1",
          },
          {
            title: "services_backend_steps_4_title",
            subtitle: "services_backend_steps_4_subtitle",
            connectorBorderClass: "border-purple-1",
          },
          {
            title: "services_backend_steps_5_title",
            subtitle: "services_backend_steps_5_subtitle",
            connectorBorderClass: "border-red-1",
          },
          {
            title: "services_backend_steps_6_title",
            subtitle: "services_backend_steps_6_subtitle",
            connectorBorderClass: "border-yellow-1",
          },
          {
            title: "services_backend_steps_7_title",
            subtitle: "services_backend_steps_7_subtitle",
            connectorBorderClass: "",
          },
        ]}
        footer="services_backend_steps_footer"
        button="services_backend_steps_button"
      />
    </main>
  );
};
export default BackendDevelopment;
