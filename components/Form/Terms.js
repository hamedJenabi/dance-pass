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

const Terms = ({
  form,
  terms = "By registering I agree with our terms&conditions",
}) => {
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleTermCheckBoxChange = (event) => {
    // form.values.terms = [...form.values.comps, event.target.value];
  };
  return (
    <div className={styles.radioGroup}>
      <div className={styles.itemRow}>
        <FormControlLabel
          className={styles.compeitionItem}
          control={
            <Checkbox
              color="primary"
              name="comps"
              value={terms}
              onChange={handleTermCheckBoxChange}
            />
          }
          label={terms}
        />

        <InfoModal header="Terms & Conditions" info="this is some info" />
      </div>
    </div>
  );
};
export default Terms;
