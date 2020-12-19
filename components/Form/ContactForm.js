import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import { Button } from "reakit/Button";
import TextField from "@material-ui/core/TextField";

import styles from "./Form.module.scss";

export default function RegistrationForm({ setStep, form }) {
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
      <Button className={styles.button} onClick={() => setStep(2)}>
        Submit
      </Button>
    </Form>
  );
}
