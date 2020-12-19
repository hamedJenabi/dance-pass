import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormInput as FormInput,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import TextField from "@material-ui/core/TextField";

import styles from "./Form.module.scss";

export default function RegistrationForm() {
  const form = useFormState({
    values: { firstName: "", lastName: "", email: "" },
    onValidate: (values) => {
      if (!values.firstName) {
        const errors = {
          firstName: "please write your name",
        };
        throw errors;
      }
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store",
        },
        body: JSON.stringify(form.values),
      })
        .then((response) => {
          if (response.ok !== true) {
            setStatus("sign up failed");
          }

          return response.json();
        })
        .then((json) => {
          if (json.register === true) {
            alert("yuhu");
          } else {
            alert("MHMH");
          }
        })
        .catch((error) => console.log(error));
    },
  });
  return (
    <Form className={styles.container} {...form}>
      <TextField
        label="First Name"
        variant="outlined"
        className={styles.input}
        onChange={(event) => {
          form.values.firstName = event.target.value;
        }}
        name="firstName"
        placeholder="first name"
      />
      <TextField
        label="last Name"
        variant="outlined"
        className={styles.input}
        onChange={(event) => {
          form.values.lastName = event.target.value;
        }}
        name="lastName"
        placeholder="last name"
      />
      <TextField
        label="email"
        variant="outlined"
        className={styles.input}
        onChange={(event) => {
          form.values.email = event.target.value;
        }}
        name="email"
        placeholder="email"
      />
      <FormMessage {...form} name="firstName" />
      <FormSubmitButton className={styles.button} {...form}>
        Submit
      </FormSubmitButton>
    </Form>
  );
}
