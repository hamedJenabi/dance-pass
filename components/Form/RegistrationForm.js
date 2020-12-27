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
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Tickets from "./Ticket";
import Divider from "@material-ui/core/Divider";
import styles from "./Form.module.scss";
import Competitions from "./Competitions";
import countries from "../../utils/countries";

const flatProps = {
  options: countries.map((option) => option.title),
};
console.log("flasprosp", countries);
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
      <Autocomplete
        {...flatProps}
        id="debug"
        debug
        className={styles.input}
        renderInput={(params) => (
          <TextField
            {...params}
            label="countries"
            margin="normal"
            onChange={(event) => {
              form.values.country = event.target.value;
            }}
          />
        )}
      />
      <Tickets form={form} tickets={tickets} levels={levels} />

      <Divider style={{ minWidth: "400px" }} />
      <Competitions form={form} competitions={competitions} />
      <FormSubmitButton className={styles.button} {...form}>
        submit
      </FormSubmitButton>
    </Form>
  );
}
