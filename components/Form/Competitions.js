import React, { useState } from "react";
import classNames from "classnames";

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
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
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
    const [open, setOpen] = useState(false);
    return (
      <>
        <button onClick={() => setOpen(true)}>
          here comes infos about {value}
        </button>
        <Modal
          onClose={() => setOpen(false)}
          onBackdropClick={() => setOpen(false)}
          closeAfterTransition
          className={styles.modal}
          open={open}
        >
          <Fade in={open}>
            <div
              className={styles.paper}
            >
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
            </div>
          </Fade>
        </Modal>
      </>
    );
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
