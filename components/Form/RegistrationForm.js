import React, { useState } from "react";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormRadioGroup as FormRadioGroup,
  unstable_FormRadio as FormRadio,
  unstable_FormInput as FormInput,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tickets from "./Ticket";
import TextField from "@material-ui/core/TextField";

import styles from "./Form.module.scss";
import Competitions from "./Competitions";

export default function RegistrationForm({ form }) {
  console.log("formherere", form);
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
      <FormMessage {...form} name="firstName" />
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
      <FormMessage {...form} name="lastName" />
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
      <FormMessage {...form} name="email" />
      <Tickets form={form} />


      <Competitions form={form} />
      <FormSubmitButton className={styles.button} {...form}>
        submit
      </FormSubmitButton>
    </Form>
  );
}
