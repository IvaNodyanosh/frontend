import { useState } from "react";
import { registerUser } from "../../_api/registerUser";
import styles from "./FormRegisterUser.module.scss";

export function FormRegisterUser({ setLoading }: {setLoading: Function}) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        registerUser(name, surname, email, phone, password, setLoading);
      }}
    >
      <label className={styles.label}>
        <span>Jméno</span>
        <input
          type="text"
          required
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <svg className={styles.icon}>
          <use href="symbol-defs.svg#user" />
        </svg>
      </label>
      <label className={styles.label}>
        <span>Příjmení</span>
        <input
          type="text"
          required
          value={surname}
          onChange={({ target }) => setSurname(target.value)}
        />
        <svg className={styles.icon}>
          <use href="symbol-defs.svg#user" />
        </svg>
      </label>
      <label className={styles.label}>
        <span>Telefonní číslo</span>
        <input
          type="tel"
          required
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
        <svg className={styles.icon}>
          <use href="symbol-defs.svg#phone" />
        </svg>
      </label>
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
      <button type="submit" className={styles.button}>
        ZAREGISTROVAT SE
      </button>
    </form>
  );
}
