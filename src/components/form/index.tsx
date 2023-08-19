import { useI18n } from "@/i18n";
import { FC, useState } from "react";
import { HeaderSmall } from "../header-small";
import { useInMediaQuery, usePreventScrollOnFlag } from "@/hooks";
import { Content } from "../content";
import { Typography } from "../typography";
import { Input } from "../input";
import { Button } from "../button";
import Link from "next/link";
import Image from "next/image";
import { sendEmail } from "@/actions/send-email";
import { Toast } from "../toast";

var mailformat =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

function isValidEmail(email: string) {
  return email.match(mailformat);
}

type services = "web" | "mobile" | "web+mobile" | "other";

const ContactUs: FC<{ link: string }> = ({ link }) => {
  const { t } = useI18n();
  const isXl = useInMediaQuery("xl");

  const [sending, setSending] = useState(false);

  const [toastState, setToastState] = useState({
    visible: false,
    text: "",
    type: "success" as "success" | "error",
  });

  const projectTypes: { value: services; text: string }[] = [
    {
      text: t("contact_project_type_option_1"),
      value: "web",
    },
    {
      text: t("contact_project_type_option_2"),
      value: "mobile",
    },
    {
      text: t("contact_project_type_option_3"),
      value: "web+mobile",
    },
    {
      text: t("contact_project_type_option_4"),
      value: "other",
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

  async function onSubmit(e: any) {
    e.preventDefault();
    if (sending || !isValid()) return;

    setSending(true);

    const res = await sendEmail({
      name: form.name.value,
      email: form.email.value,
      project: form.project.value,
      type: projectTypes.find((t) => t.text === form.type.value)!.value,
      about: form.about.value,
      date: form.date.value,
    });

    setSending(false);

    setToastState({
      visible: true,
      text: t(res ? "contact_toastSuccess" : "contact_toastError"),
      type: res ? "success" : "error",
    });
  }

  return (
    <main className="w-full h-[100dvh] xl:flex xl:justify-center xl:items-center xl:p-8 xl:bg-grey-1 xl:relative">
      {!isXl && (
        <HeaderSmall
          closeAltText={t("contact_header")}
          closeLink={link}
          text="Contact us"
        />
      )}
      {isXl && (
        <Link
          className="w-10 aspect-square flex items-center justify-center rounded-full bg-white shadow-card absolute top-8 right-12 z-10"
          href={link}
        >
          <Image src="/icons/close-dark.svg" width={24} height={24} alt="" />
        </Link>
      )}
      <Content className="bg-grey-4 pt-6 pb-10 px-4 flex flex-col justify-start items-center xl:shadow-card xl:rounded-xl xl:bg-white xl:min-h-[unset]">
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
          className="flex flex-col justify-start items-center w-full gap-4 mt-8 xl:grid xl:grid-cols-2"
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
            className="xl:col-span-2"
            value={form.about.value}
            onChange={onChangeAbout}
            id="about"
            label={t("contact_about")}
            inputType="textarea"
            hasError={form.about.invalid}
          ></Input>
          <Input
            className="xl:col-span-2"
            value={form.date.value}
            onChange={onChangeDate}
            id="date"
            label={t("contact_time")}
            type="datetime-local"
          ></Input>
          <div className="hidden xl:block"></div>
          <div className="w-full px-6 mt-6 ">
            <Button
              disabled={sending}
              buttonSize="small"
              color="blue"
              type="submit"
              className="w-full"
            >
              {sending ? (
                <div
                  className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              ) : (
                t("contact_submit")
              )}
            </Button>
          </div>
        </form>
      </Content>
      {toastState.visible && (
        <Toast
          type={toastState.type}
          text={toastState.text}
          close={() => {
            setToastState((prev) => ({
              ...prev,
              visible: false,
            }));
          }}
        />
      )}
    </main>
  );
};
export default ContactUs;
