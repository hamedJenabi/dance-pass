// import React from "react";

// import {
//   unstable_Form as Form,
//   unstable_FormInput as FormInput,
//   unstable_FormMessage as FormMessage,
//   unstable_FormSubmitButton as FormSubmitButton,
// } from "reakit/Form";
// import countries from "../../utils/countries";
// const flatProps = {
//   options: countries.map((option) => option.title),
// };
// import styles from "./login.module.scss";

// const LoginForm = ({ form }) => {
//   return (
//     <Form className={styles.form} {...form}>
//       <h1>Sign in to your account</h1>
//       <div className={styles.label}>
//         <FormInput
//           className={styles.input}
//           {...form}
//           name="email"
//           placeholder="your email"
//         />
//         <FormMessage {...form} name="email" />
//       </div>
//       <div className={styles.label}>
//         <FormInput
//           className={styles.input}
//           {...form}
//           name="password"
//           type="password"
//           placeholder="your password"
//         />
//         {status === "failed" && (
//           <p style={{ margin: 0 }}>Check your username or password!</p>
//         )}
//       </div>
//       <FormSubmitButton className={styles.button} {...form}>
//         login
//       </FormSubmitButton>
//     </Form>
//   );
// };
// export default LoginForm;
