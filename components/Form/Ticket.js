import React, { useState } from "react";
import { unstable_FormMessage as FormMessage } from "reakit/Form";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfoIcon from "@material-ui/icons/Info";
// import InfoModal from "../Modal/Modal.js";
import InfoModal from "../InfoModal/InfoModal";
import styles from "./Form.module.scss";
import Divider from "@material-ui/core/Divider";

const Tickets = ({ form, tickets, levels, roles }) => {
  const [levelShown, setLevelShown] = useState(false);
  const [openModal, setOpenModal] = useState(false);
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
    return (
      <div className={styles.radioLabel}>
        <p>{value}</p>
        <InfoModal header={value} info="this is some info" />
      </div>
    );
  };
  const handleTicketChange = (event) => {
    form.values.ticket = event.target.value;
    if (form.values.ticket === "Fullpass") {
      setLevelShown(true);
    } else {
      setLevelShown(false);
    }
  };
  const handleLevelChange = (event) => {
    form.values.level = event.target.value;
  };
  const handleRoleChange = (event) => {
    form.values.role = event.target.value;
  };
  return (
    <div className={styles.radioGroup}>
      <h3>please choose your ticket:</h3>

      <RadioGroup
        aria-label="ticket"
        name="ticket"
        onChange={handleTicketChange}
      >
        {tickets.map((ticket) => (
          <FormControlLabel
            value={ticket}
            key={ticket}
            control={<Radio color="primary" />}
            label={Label(ticket)}
          />
        ))}
      </RadioGroup>
      <FormMessage {...form} name="ticket" />
      {levelShown && (
        <div className={styles.radioGroup}>
          <Divider light className={styles.devider} />

          <h3>please choose your level:</h3>
          <RadioGroup
            aria-label="level"
            name="level"
            onChange={handleLevelChange}
          >
            <div className={styles.levelGroup}>
              {levels.map((level) => (
                <FormControlLabel
                  value={level}
                  key={level}
                  control={<Radio color="primary" />}
                  label={Label(level)}
                />
              ))}
            </div>
          </RadioGroup>
          <FormMessage {...form} name="levels" />
        </div>
      )}
      {levelShown && (
        <div className={styles.radioGroup}>
          <Divider light className={styles.devider} />

          <h3>please choose your level:</h3>
          <RadioGroup aria-label="role" name="role" onChange={handleRoleChange}>
            <div className={styles.roleGroup}>
              {roles.map((role) => (
                <FormControlLabel
                  value={role}
                  key={role}
                  control={<Radio color="primary" />}
                  label={Label(role)}
                />
              ))}
            </div>
          </RadioGroup>
          <FormMessage {...form} name="levels" />
        </div>
      )}
    </div>
  );
};
export default Tickets;
