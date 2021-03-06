import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Zoom from "@material-ui/core/Zoom";
import { unstable_FormMessage as FormMessage } from "reakit/Form";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InfoModal from "../InfoModal/InfoModal";
import styles from "./Form.module.scss";
import { Checkbox } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import {
  unstable_useFormState as useFormState,
  unstable_Form as Form,
  unstable_FormLabel as FormLabel,
  unstable_FormCheckbox as FormCheckbox,
  unstable_FormGroup as FormGroup,
  unstable_FormSubmitButton as FormSubmitButton,
} from "reakit/Form";
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
      <h3>Do you want to do comps?</h3>
      <RadioGroup
        aria-label="competition"
        name="competition"
        className={styles.radioWrapper}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="yes"
          control={<Radio color="primary" />}
          label="Yes"
        />
        <FormControlLabel
          value="no"
          control={<Radio color="primary" />}
          label="No"
        />
        <FormControlLabel
          value="later"
          control={<Radio color="primary" />}
          label="I will decide later"
        />
      </RadioGroup>
      <FormMessage {...form} name="competition" />
      {show && (
        <div className={styles.radioGroup}>
          <h3>Choose them here:</h3>
          <div className={styles.levelGroup}>
            {/* {competitions.map((competition) => {
              return (
                <div className={styles.itemRow} key={competition}>
                  <FormControlLabel
                    className={styles.compeitionItem}
                    control={
                      <Checkbox
                        color="primary"
                        name="comps"
                        value={competition}
                        onChange={handleCheckBoxChange}
                      />
                    }
                    label={competition}
                  />

                  <InfoModal header={competition} info="this is some info" />
                </div>
              );
            })} */}
            {competitions.map((competition) => {
              return (
                <div className={styles.radioLabel} key={competition}>
                  <label className={styles.itemRow}>
                    <FormCheckbox
                      className={styles.checkbox}
                      {...form}
                      name="comps"
                      value={competition}
                    />
                    <p>{competition}</p>
                    <InfoModal header={competition} info="this is some info" />
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default Competitions;
