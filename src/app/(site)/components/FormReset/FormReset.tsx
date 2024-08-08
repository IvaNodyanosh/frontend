import styles from "./FormReset.module.scss";

import { reset } from "../../_api/resetPassword";

import { useState } from "react";

export default function FormReset({ value }: { value: { setLoading: Function, token: string}}) {
  const { setLoading, token } = value;
  console.log(token);
  const [password, setPassword] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        reset(password, token, setLoading);
      }}
    >
      <label className={styles.label}>
        <span>Heslo</span>
        <input
          type="text"
          required
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <svg className={styles.icon}>
          <use href="../../../../../symbol-defs.svg#password" />
        </svg>
      </label>
      <button type="submit" className={styles.button}>
        OBNOVIT HESLO
      </button>
    </form>
  );
}
