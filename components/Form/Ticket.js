import React, { useState } from "react";
import { unstable_FormMessage as FormMessage } from "reakit/Form";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import InfoModal from "../Modal/Modal.js";

import styles from "./Form.module.scss";

const Tickets = ({ show = true, form, tickets }) => {
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
    const [openModal, setOpenModal] = useState(false);

    return (
      <div className={styles.radioLabel}>
        <p>{value}</p>
        <FontAwesomeIcon
          className={styles.infoIcon}
          icon={faInfoCircle}
          onClick={() => setOpenModal(true)}
        />
        <InfoModal info="hello" setOpen={setOpenModal} open={openModal} />
      </div>
    );
  };
  const handleRadioChange = (event) => {
    form.values.ticket = event.target.value;
  };
  return (
    <div className={styles.radioGroup}>
      <h3>please choose your ticket:</h3>

      <RadioGroup
        aria-label="ticket"
        name="ticket"
        // value={value}
        onChange={handleRadioChange}
      >
        {tickets.map((ticket) => (
          <FormControlLabel
            value={ticket}
            key={ticket}
            control={<Radio />}
            label={Label(ticket)}
          />
        ))}
      </RadioGroup>
      <FormMessage {...form} name="ticket" />
    </div>
  );
};
export default Tickets;
