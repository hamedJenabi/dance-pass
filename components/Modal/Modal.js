import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop } from "reakit/Dialog";
import styles from "./Modal.module.scss";

const ErrorModal = ({ dialog, children }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(dialog.visible);
  }, [dialog.visible]);

  return (
    <DialogBackdrop {...dialog} className={styles.backdrop}>
      <Dialog {...dialog}>
        <div
          className={classNames(styles.card, {
            [styles.visible]: show,
          })}
        >
          <div className={styles.content}>{children}</div>
        </div>
      </Dialog>
    </DialogBackdrop>
  );
};
export default ErrorModal;
