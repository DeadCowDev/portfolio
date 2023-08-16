import { htmlClass } from "@/utils";
import { FC } from "react";
import { typographyVariants } from "./typography";

type InputType = "text" | "textarea" | "select";

type InputProps = {
  label?: string;
  inputType?: InputType;
  options?: string[];
  hasError?: boolean;
} & React.ComponentProps<"input">;

function HtmlInput({
  id,
  hasError,
  ...props
}: Omit<InputProps, "label" | "className" | "inputType">) {
  return (
    <input
      {...props}
      className={htmlClass(
        typographyVariants.inputContent,
        "text-grey-1 px-3 py-2 border w-full rounded-[4px] bg-transparent h-10",
        hasError ? "border-red-1" : "border-grey-3"
      )}
      id={id}
    />
  );
}

function HtmlTextArea({
  id,
  onChange,
  value,
  hasError,
}: Omit<InputProps, "label" | "className" | "inputType">) {
  return (
    <textarea
      onChange={onChange as any}
      value={value}
      rows={8}
      className={htmlClass(
        typographyVariants.inputContent,
        "resize-none text-grey-1 px-3 py-2 border w-full rounded-[4px] bg-transparent",
        hasError ? "border-red-1" : "border-grey-3"
      )}
      id={id}
    />
  );
}

function HtmlSelect({
  id,
  options,
  onChange,
  value,
  hasError,
}: Omit<InputProps, "label" | "className" | "inputType">) {
  return (
    <select
      name={id}
      id={id}
      value={value}
      onChange={onChange as any}
      className={htmlClass(
        typographyVariants.inputContent,
        "text-grey-1 px-3 py-2  border w-full rounded-[4px] bg-transparent h-10 cursor-pointer",
        hasError ? "border-red-1" : "border-grey-3"
      )}
    >
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export const Input: FC<InputProps> = ({
  label,
  className,
  inputType = "text",
  options,
  hasError = false,
  id,
  ...props
}) => {
  function getInput(
    inputType: InputType,
    hasError: boolean,
    options?: string[]
  ) {
    switch (inputType) {
      case "select":
        return (
          <HtmlSelect
            hasError={hasError}
            id={id}
            {...props}
            options={options ?? []}
          />
        );
      case "textarea":
        return <HtmlTextArea hasError={hasError} id={id} {...props} />;
      case "text":
        return <HtmlInput hasError={hasError} id={id} {...props} />;
    }
  }

  return (
    <div
      className={htmlClass(
        className ?? "",
        "flex flex-col justify-start items-start gap-1 w-full"
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={htmlClass(
            "text-grey-3 w-full",
            typographyVariants.inputLabel
          )}
        >
          {label}
        </label>
      )}
      {getInput(inputType, hasError, options)}
    </div>
  );
};
