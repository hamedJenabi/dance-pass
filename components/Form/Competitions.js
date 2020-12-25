import React, { useState } from "react";
import classNames from "classnames";
import Zoom from "@material-ui/core/Zoom";
import { unstable_FormMessage as FormMessage } from "reakit/Form";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InfoModal from "../Modal/Modal.js";
import styles from "./Form.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const Competitions = ({ show = true, form }) => {
  // to make a ticket info modal
  const Label = (value) => {
    const [openModal, setOpenModal] = useState(false);

    return (
      <div className={styles.radioLabel}>
        <p>here comes infos about {value}</p>
        <FontAwesomeIcon
          className={styles.infoIcon}
          size="2x"
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
      {show && (
        <>
          <h3>Do you want to do comps?</h3>
          <RadioGroup
            aria-label="competition"
            name="competition"
            onChange={handleRadioChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
            <FormControlLabel
              value="later"
              control={<Radio />}
              label="I will decide later"
            />
          </RadioGroup>
          <FormMessage {...form} name="competition" />
          {true && (
            <>
              <h3>Comps you wanna choose:</h3>
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="best"
                  control={<Radio />}
                  label="MnM!"
                />
                <FormControlLabel
                  value="worst"
                  control={<Radio />}
                  label={Label("com")}
                />
              </RadioGroup>
              <FormMessage {...form} name="ticket" />
            </>
          )}
        </>
      )}
    </div>
  );
};
export default Competitions;
