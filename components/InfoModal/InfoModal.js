// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import Backdrop from "@material-ui/core/Backdrop";
// import Fade from "@material-ui/core/Fade";
// import InfoIcon from "@material-ui/icons/Info";
// import styles from "./InfoModal.module.scss";

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   paper: {
//     backgroundColor: theme.palette.background.paper,
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

// export default function InfoModal() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <InfoIcon className={styles.infoIcon} onClick={handleOpen} />
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         className={classes.modal}
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
//           <div className={classes.paper}>
//             <h2 id="transition-modal-title">Transition modal</h2>
//             <p id="transition-modal-description">
//               react-transition-group animates me.
//             </p>
//           </div>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }

import InfoIcon from "@material-ui/icons/Info";
import styles from "./InfoModal.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import {
  useDialogState,
  Dialog,
  DialogBackdrop,
  DialogDisclosure,
} from "reakit/Dialog";

const InfoModal = ({ header, info }) => {
  const dialog = useDialogState();

  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(dialog.visible);
  }, [dialog.visible]);

  return (
    <>
      <DialogDisclosure className={styles.iconContainer} {...dialog}>
        <InfoIcon className={styles.infoIcon} />
      </DialogDisclosure>
      <DialogBackdrop {...dialog} className={styles.backdrop}>
        <Dialog
          {...dialog}
          preventBodyScroll={false} // disable built-in preventBodyScr  oll from reakit
        >
          <div
            className={classNames(styles.card, {
              [styles.visible]: show,
            })}
          >
            <div className={styles.content}>
              <h2 id="transition-modal-title">{header}</h2>
              <p id="transition-modal-description">{info}</p>
            </div>
          </div>
        </Dialog>
      </DialogBackdrop>
    </>
  );
};
export default InfoModal;
