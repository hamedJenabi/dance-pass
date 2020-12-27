import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import styles from "./Modal.module.scss";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
export default function InfoModal({ open, setOpen, info }) {
  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onBackdropClick={() => setOpen(false)}
        // closeAfterTransition
        className={styles.modal}
        open={open}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <h2 id="transition-modal-title">info about something</h2>
            <p id="transition-modal-description">
              here is more info about that thing
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
