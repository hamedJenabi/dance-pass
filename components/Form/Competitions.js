import React, { useState, useEffect } from "react";
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
import { Checkbox } from "@material-ui/core";

const style = (theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: "flex",
  },
  paper: {
    margin: theme.spacing.unit,
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
});

const Competitions = ({ form, competitions }) => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleRadioChange = (event) => {
    form.values.competition = event.target.value;
    if (form.values.competition === "yes") {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleCheckBoxChange = (event) => {
    form.values.comps = [...form.values.comps, event.target.value];
  };
  return (
    <div className={styles.radioGroup}>
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
        {show && (
          <div className={styles.radioGroup}>
            <h3>Comps you wanna choose:</h3>
            {competitions.map((competition) => {
              return (
                <div key={competition}>
                  <FormControlLabel
                    className={styles.compeitionItem}
                    control={
                      <Checkbox
                        name="comps"
                        value={competition}
                        onChange={handleCheckBoxChange}
                      />
                    }
                    label={competition}
                  />
                  <FontAwesomeIcon
                    className={styles.infoIcon}
                    icon={faInfoCircle}
                    onClick={() => setOpenModal(true)}
                  />
                  <InfoModal
                    info="hello"
                    setOpen={setOpenModal}
                    open={openModal}
                  />
                </div>
              );
            })}
            {/* <RadioGroup
              aria-label="quiz"
              name="quiz"
              onChange={handleRadioChange}
            >
              <FormControlLabel value="best" control={<Radio />} label="MnM!" />
              <FormControlLabel
                value="worst"
                control={<Radio />}
                label={Label("com")}
              />
            </RadioGroup>
            <FormMessage {...form} name="competition" /> */}
          </div>
        )}
      </>
    </div>
  );
};
export default Competitions;
