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
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InfoModal from "../Modal/Modal.tsx";
import styles from "./Form.module.scss";

const Competitions = ({ show = true, form }) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
  }));
  // to make a ticket info modal
  const Label = (value) => {
    return <p>here comes infos about {value}</p>;
  };
  const handleRadioChange = (event) => {
    form.values.ticket = event.target.value;
  };
  return (
    <div className={styles.radioGroup}>
      {show && (
        <>
          <h3>Comps you wanna choose:</h3>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            onChange={handleRadioChange}
          >
            <FormControlLabel value="best" control={<Radio />} label="MnM!" />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label={Label(
                "every competitioevery competitioevery competitioevery competition"
              )}
            />
          </RadioGroup>
          <FormMessage {...form} name="ticket" />
        </>
      )}
    </div>
  );
};
export default Competitions;
