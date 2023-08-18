"use client";

import { Header, ServiceMainSection, ServicesSteps } from "@/components";
import ContactUs from "@/components/form";
import { useI18n } from "@/i18n";

const FrontendDevelopment = () => {
  const { locale } = useI18n();
  return (
    <main>
      <Header cb={`/${locale}/services/application-development`} />
      <ServiceMainSection
        gradient="bg-gradient-2"
        image="/images/web-app.svg"
        link="#steps-section"
        title="services_frontend_title"
        subtitle="services_frontend_subtitle"
        imageAlt="services_frontend_image_alt"
        button="services_frontend_button"
      />
      <ServicesSteps
        lang={locale}
        title="services_frontend_steps_title"
        subtitle="services_frontend_steps_subtitle"
        cb={`/${locale}/services/application-development`}
        steps={[
          {
            title: "services_frontend_steps_1_title",
            subtitle: "services_frontend_steps_1_subtitle",
            connectorBorderClass: "border-blue-1",
          },
          {
            title: "services_frontend_steps_2_title",
            subtitle: "services_frontend_steps_2_subtitle",
            connectorBorderClass: "border-orange-1",
          },
          {
            title: "services_frontend_steps_3_title",
            subtitle: "services_frontend_steps_3_subtitle",
            connectorBorderClass: "border-green-1",
          },
          {
            title: "services_frontend_steps_4_title",
            subtitle: "services_frontend_steps_4_subtitle",
            connectorBorderClass: "border-purple-1",
          },
          {
            title: "services_frontend_steps_5_title",
            subtitle: "services_frontend_steps_5_subtitle",
            connectorBorderClass: "border-red-1",
          },
          {
            title: "services_frontend_steps_6_title",
            subtitle: "services_frontend_steps_6_subtitle",
            connectorBorderClass: "border-yellow-1",
          },
          {
            title: "services_frontend_steps_7_title",
            subtitle: "services_frontend_steps_7_subtitle",
            connectorBorderClass: "",
          },
        ]}
        footer="services_frontend_steps_footer"
        button="services_frontend_steps_button"
      />
    </main>
  );
};
export default FrontendDevelopment;
