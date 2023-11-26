import { CurrentPageProvider } from "@/components/current-page.provider";
import { Header } from "@/components/header";
import { ServiceMainSection } from "@/components/services/main";
import { ServicesSteps } from "@/components/services/steps";
import { i18N } from "@/i18n";
import { LanguageParams } from "@/models";
import { getMetadataTitle } from "@/utils";
import { Metadata } from "next";

export function generateMetadata({
  params,
}: {
  params: LanguageParams;
}): Metadata {
  return getMetadataTitle(
    "services_backend_meta_title",
    "services_backend_meta_description",
    params.lang
  );
}

const BackendDevelopment = ({ params }: { params: LanguageParams }) => {
  const { locale } = i18N(params.lang);
  return (
    <CurrentPageProvider>
      <main>
        <Header lang={locale} />
        <ServiceMainSection
          gradient="bg-purple-2 xl:bg-gradient-3"
          image="/images/backend.svg"
          link="#backend-steps-section"
          title="services_backend_title"
          subtitle="services_backend_subtitle"
          imageAlt="services_backend_image_alt"
          button="services_backend_button"
          lang={locale}
        />
        <ServicesSteps
          id="backend-steps-section"
          title="services_backend_steps_title"
          subtitle="services_backend_steps_subtitle"
          lang={locale}
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
    </CurrentPageProvider>
  );
};
export default BackendDevelopment;
