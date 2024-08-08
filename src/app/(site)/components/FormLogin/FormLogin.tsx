import { useState, useContext } from "react";

import styles from "./FormLogin.module.scss";

import { login } from "../../_api/login";
import { resetPassword } from "../../_api/registerUser";

import { useUserContext } from "@/app/hooks/userHooks";

export function FormLogin({ setLoading }: { setLoading: Function }) {
  const { setUser } = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        checkbox
          ? resetPassword(email, setLoading)
          : login(email, password, setLoading, setUser);
      }}
    >
      <label className={styles.label}>
        <span> Email</span>
        <input
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <svg className={styles.icon}>
          <use href="symbol-defs.svg#email" />
        </svg>
      </label>
      {!checkbox && (
        <label className={styles.label}>
          <span>Heslo</span>
          <input
            type="text"
            required
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <svg className={styles.icon}>
            <use href="symbol-defs.svg#password" />
          </svg>
        </label>
      )}

      <label className={styles.label_checkbox}>
        <input
          type="checkbox"
          className="phantom"
          checked={checkbox}
          onChange={() => setCheckbox((prevState) => !prevState)}
        />
        <svg className={styles.svg_checked}>
          <use href="../../../../../symbol-defs.svg#checkbox-checked"></use>
        </svg>
        <svg className={styles.svg_unchecked}>
          <use href="../../../../../symbol-defs.svg#checkbox-unchecked"></use>
        </svg>
        Zapomněli jste heslo?
      </label>
      <button type="submit" className={styles.button}>
        {!checkbox ? "PŘIHLÁSIT SE" : "OBNOVIT HESLO"}
      </button>
    </form>
  );
}
