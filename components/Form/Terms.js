import React, { useState, useEffect } from "react";
import InfoModal from "../InfoModal/InfoModal";
import styles from "./Form.module.scss";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormMessage as FormMessage,
  unstable_FormLabel as FormLabel,
  unstable_FormCheckbox as FormCheckbox,
  unstable_FormGroup as FormGroup,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
const Terms = ({
  form,
  terms = "By registering I agree with our terms&conditions",
}) => {
  return (
    <>
      <div className={styles.radioLabel} key={terms}>
        <label className={styles.itemRow}>
          <FormCheckbox
            className={styles.checkbox}
            {...form}
            name="terms"
            value={terms}
          />
          <p>{terms}</p>
          <InfoModal header={terms} info="this is some info" />
        </label>
      </div>
      <FormMessage className={styles.errorMessage} {...form} name="terms" />
    </>
  );
};
export default Terms;
