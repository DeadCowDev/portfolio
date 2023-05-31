import { useI18n } from "@/i18n";
import { FC } from "react";
import { HeaderSmall } from "../header-small";
import { useHash, usePreventScrollOnFlag } from "@/hooks";
import { Content } from "../content";
import { Typography } from "../typography";
import { Input } from "../input";

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = () => {
  const { t } = useI18n();
  const { set } = useHash();
  usePreventScrollOnFlag(true);
  return (
    <main className="fixed top-0 left-0 w-full bottom-0 overflow-y-scroll z-30">
      <HeaderSmall
        closeAltText="Contact us"
        closeLink={() => {
          set("");
        }}
        text="Contact us"
      />
      <Content className="bg-grey-4 pt-6 pb-10 px-4 flex flex-col justify-start items-center">
        <Typography variant="titleLBold" className="text-grey-1 text-center">
          Tell us more about what you are looking for
        </Typography>

        <Typography
          variant="mobileLongTextRegular"
          className="text-grey-3 text-center mt-4"
        >
          This information will help us have a better understanding of your
          goals before we set up a formal meeting
        </Typography>
        <form className="flex flex-col justify-start items-center w-full gap-4 mt-8">
          <Input label="Name"></Input>
          <Input label="Email"></Input>
          <Input label="Project Name"></Input>
        </form>
      </Content>
    </main>
  );
};
export default ContactUs;
