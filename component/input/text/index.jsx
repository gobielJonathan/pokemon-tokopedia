/** @jsxImportSource @emotion/react */
import TextError from "@/component/error";
import { ColorSecondary } from "@/styles/variable";
import { useField } from "formik";

export default function InputText({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div
      css={{
        marginTop: ".5rem",
        marginBottom: ".5rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {label && <label htmlFor={field.name} css={{marginBottom : ".5rem"}}>{label}</label>}
      <input
        name={field.name}
        css={{
          border: "1px solid rgba(0,0,0,.1)",
          padding: ".5rem",
          color: ColorSecondary,
          borderRadius: "3px",
          "&:focus": {
            outline: "none",
          },
        }}
        {...field}
        {...props}
      />
      {meta.error && <TextError>{meta.error}</TextError>}
    </div>
  );
}
