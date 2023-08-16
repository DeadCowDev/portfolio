import { useI18n } from "@/i18n";
import { FC, useState } from "react";
import { HeaderSmall } from "../header-small";
import { usePreventScrollOnFlag } from "@/hooks";
import { Content } from "../content";
import { Typography } from "../typography";
import { Input } from "../input";
import { Button } from "../button";

var mailformat =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function isValidEmail(email: string) {
  return email.match(mailformat);
}

type services = "webApp" | "Backend";

const ContactUs: FC = () => {
  const { t } = useI18n();
  usePreventScrollOnFlag(true);

  const projectTypes: { value: services; text: string }[] = [
    {
      text: "Web App",
      value: "webApp",
    },
    {
      text: "Backend",
      value: "Backend",
    },
  ];

  const [form, setForm] = useState({
    name: {
      value: "",
      invalid: false,
    },
    email: {
      value: "",
      invalid: false,
    },
    project: {
      value: "",
      invalid: false,
    },
    type: {
      value: projectTypes[0].text,
      invalid: false,
    },
    about: {
      value: "",
      invalid: false,
    },
    date: {
      value: "",
      invalid: false,
    },
  });

  function changeProperty(property: keyof typeof form, value: string) {
    setForm((prev) => ({
      ...prev,
      [property]: {
        ...prev[property],
        value,
      },
    }));
  }
  function setError(property: keyof typeof form, invalid: boolean) {
    setForm((prev) => ({
      ...prev,
      [property]: {
        ...prev[property],
        invalid,
      },
    }));
  }

  function onChangeName(e: any) {
    changeProperty("name", e.target.value);
  }
  function onChangeEmail(e: any) {
    changeProperty("email", e.target.value);
  }
  function onChangeProject(e: any) {
    changeProperty("project", e.target.value);
  }
  function onChangeType(e: any) {
    changeProperty("type", e.target.value);
  }
  function onChangeAbout(e: any) {
    changeProperty("about", e.target.value);
  }
  function onChangeDate(e: any) {
    changeProperty("date", e.target.value);
  }

  function isValid() {
    const nameInvalid = !form.name.value.length;
    setError("name", nameInvalid);

    const emailInvalid = !isValidEmail(form.email.value);
    setError("email", emailInvalid);

    const projectInvalid = !form.project.value.length;
    setError("project", projectInvalid);

    const aboutInvalid = !form.about.value.length;
    setError("about", aboutInvalid);

    return !nameInvalid && !emailInvalid && !projectInvalid && !aboutInvalid;
  }

  function onSubmit(e: any) {
    e.preventDefault();
    if (!isValid()) return;
    alert("Form submitted");
  }

  return (
    <main className="fixed top-0 left-0 w-full bottom-0 overflow-y-scroll z-30">
      <HeaderSmall
        closeAltText={t("contact_header")}
        closeLink="/"
        text="Contact us"
      />
      <Content className="bg-grey-4 pt-6 pb-10 px-4 flex flex-col justify-start items-center">
        <Typography variant="titleLBold" className="text-grey-1 text-center">
          {t("contact_title")}
        </Typography>

        <Typography
          variant="mobileLongTextRegular"
          className="text-grey-3 text-center mt-4"
        >
          {t("contact_subtitle")}
        </Typography>
        <form
          className="flex flex-col justify-start items-center w-full gap-4 mt-8"
          onSubmit={onSubmit}
        >
          <Input
            autoFocus
            label={t("contact_name")}
            id="name"
            value={form.name.value}
            onChange={onChangeName}
            hasError={form.name.invalid}
          ></Input>
          <Input
            label={t("contact_email")}
            id="email"
            value={form.email.value}
            onChange={onChangeEmail}
            hasError={form.email.invalid}
          ></Input>
          <Input
            label={t("contact_project_name")}
            id="project"
            value={form.project.value}
            onChange={onChangeProject}
            hasError={form.project.invalid}
          ></Input>
          <Input
            value={form.type.value}
            onChange={onChangeType}
            id="project-type"
            label={t("contact_project_type")}
            inputType="select"
            options={projectTypes.map((x) => x.text)}
          ></Input>
          <Input
            value={form.about.value}
            onChange={onChangeAbout}
            id="about"
            label={t("contact_about")}
            inputType="textarea"
            hasError={form.about.invalid}
          ></Input>
          <Input
            value={form.date.value}
            onChange={onChangeDate}
            id="date"
            label={t("contact_time")}
            type="datetime-local"
          ></Input>
          <div className="w-full px-6 mt-6">
            <Button
              buttonSize="small"
              color="blue"
              type="submit"
              className="w-full"
            >
              {t("contact_submit")}
            </Button>
          </div>
        </form>
      </Content>
    </main>
  );
};
export default ContactUs;
