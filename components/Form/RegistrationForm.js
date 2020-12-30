import React, { useState, useEffect } from "react";

import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormRadioGroup as FormRadioGroup,
  unstable_FormRadio as FormRadio,
  unstable_FormInput as FormInput,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
import classNames from "classnames";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Tickets from "./Ticket";
import Terms from "./Terms";
import Divider from "@material-ui/core/Divider";
import styles from "./Form.module.scss";
import Competitions from "./Competitions";
import countries from "../../utils/countries";
import ErrorModal from "../Modal/Modal";
import { useDialogState } from "reakit/Dialog";
const flatProps = {
  options: countries.map((option) => option.title),
};

export default function RegistrationForm({ form, data }) {
  const [step, setStep] = useState(1);
  const [disable, setDisable] = useState(true);
  const dialog = useDialogState();

  console.log("form", form);
  const { tickets, levels, competitions } = data;
  const handleNext = (event) => {
    // if(form.values.firstName === '')
    // ‎{
    //   alert('hello')
    // }
    event.preventDefault();
    if (!form.values.firstName || !form.values.lastName || !form.values.email) {
      // alert("haha");
      dialog.show();
    } else {
      setStep((prev) => prev + 1);
    }
  };
  const handleBack = (event) => {
    event.preventDefault();
    setStep((prev) => prev - 1);
  };

  return (
    <Form className={styles.container} {...form}>
      <TextField
        required
        onBlur={() => () => form.validate()}
        label="First Name"
        defaultValue={form.values.firstName}
        variant="outlined"
        className={styles.input}
        onChange={(event) => {
          form.values.firstName = event.target.value;
        }}
        name="firstName"
        placeholder="first name"
      />
      <FormMessage className={styles.errorMessage} {...form} name="firstName" />
      <TextField
        required
        label="Last Name"
        variant="outlined"
        defaultValue={form.values.lastName}
        className={styles.input}
        onChange={(event) => {
          form.values.lastName = event.target.value;
        }}
        name="lastName"
        placeholder="last name"
      />
      <FormMessage className={styles.errorMessage} {...form} name="lastName" />
      <TextField
        required
        label="E-mail"
        variant="outlined"
        className={styles.input}
        defaultValue={form.values.email}
        onChange={(event) => {
          form.values.email = event.target.value;
        }}
        onBlur={() =>
          form.values.lastName && form.values.firstName && form.values.email
            ? setDisable(false)
            : (setDisable(true), form.validate())
        }
        name="email"
        placeholder="email"
      />
      <FormMessage className={styles.errorMessage} {...form} name="email" />
      <Autocomplete
        {...flatProps}
        id="debug"
        debug
        className={styles.input}
        renderInput={(params) => (
          <TextField
            variant="outlined"
            {...params}
            label="Country"
            onChange={(event) => {
              form.values.country = event.target.value;
            }}
          />
        )}
      />
      <Divider light className={styles.devider} />
      <Tickets form={form} tickets={tickets} levels={levels} />
      <Divider light className={styles.devider} />
      <Competitions form={form} competitions={competitions} />
      <Divider light className={styles.devider} />
      <Terms form={form} />
      <FormSubmitButton className={styles.button} {...form}>
        Proceed to checkout
      </FormSubmitButton>
    </Form>
  );
}
