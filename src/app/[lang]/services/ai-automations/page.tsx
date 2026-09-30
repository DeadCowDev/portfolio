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
    "services_ai_meta_title",
    "services_ai_meta_description",
    params.lang
  );
}

const AIAutomations = ({ params }: { params: LanguageParams }) => {
  const { locale } = i18N(params.lang);
  return (
    <CurrentPageProvider>
      <main>
        <Header lang={params.lang} />
        <ServiceMainSection
          gradient="bg-purple-2 xl:bg-gradient-3"
          image="/images/web-app.svg"
          link="#ai-steps-section"
          title="services_ai_title"
          subtitle="services_ai_subtitle"
          imageAlt="services_ai_image_alt"
          button="services_ai_button"
          lang={locale}
        />
        <ServicesSteps
          id="ai-steps-section"
          lang={locale}
          title="services_ai_steps_title"
          subtitle="services_ai_steps_subtitle"
          steps={[
            {
              title: "services_ai_steps_1_title",
              subtitle: "services_ai_steps_1_subtitle",
              connectorBorderClass: "border-blue-1",
            },
            {
              title: "services_ai_steps_2_title",
              subtitle: "services_ai_steps_2_subtitle",
              connectorBorderClass: "border-orange-1",
            },
            {
              title: "services_ai_steps_3_title",
              subtitle: "services_ai_steps_3_subtitle",
              connectorBorderClass: "border-green-1",
            },
            {
              title: "services_ai_steps_4_title",
              subtitle: "services_ai_steps_4_subtitle",
              connectorBorderClass: "border-purple-1",
            },
            {
              title: "services_ai_steps_5_title",
              subtitle: "services_ai_steps_5_subtitle",
              connectorBorderClass: "border-red-1",
            },
            {
              title: "services_ai_steps_6_title",
              subtitle: "services_ai_steps_6_subtitle",
              connectorBorderClass: "border-yellow-1",
            },
            {
              title: "services_ai_steps_7_title",
              subtitle: "services_ai_steps_7_subtitle",
              connectorBorderClass: "",
            },
          ]}
          footer="services_ai_steps_footer"
          button="services_ai_steps_button"
        />
      </main>
    </CurrentPageProvider>
  );
};
export default AIAutomations;
