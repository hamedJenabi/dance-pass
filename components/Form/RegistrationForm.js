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
import Tickets from "./Ticket";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";

import styles from "./Form.module.scss";
import Competitions from "./Competitions";

export default function RegistrationForm({ form, data }) {
  const { tickets, levels, competitions } = data;
  console.log("datadatadatadata", tickets);
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
        label="Last Name"
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
      <Tickets form={form} tickets={tickets} levels={levels} />

      <Divider style={{ minWidth: "400px" }} string />
      <Competitions form={form} competitions={competitions} />
      <FormSubmitButton className={styles.button} {...form}>
        submit
      </FormSubmitButton>
    </Form>
  );
}
