import React from "react";
import { unstable_FormMessage as FormMessage } from "reakit/Form";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "./Form.module.scss";

const Tickets = ({ show = true, form }) => {
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
          <h3>please choose your ticket:</h3>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            // value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="best"
              control={<Radio />}
              label="The best!"
            />
            <FormControlLabel
              value="worst"
              control={<Radio />}
              label={Label("every ticket")}
            />
          </RadioGroup>
          <FormMessage {...form} name="ticket" />
        </>
      )}
    </div>
  );
};
export default Tickets;
