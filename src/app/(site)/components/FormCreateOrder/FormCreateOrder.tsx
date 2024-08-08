import styles from "./FormCreateOrder.module.scss";
import { createOrder, registerOrder } from "../../_api/orders";
import { useState, ChangeEvent } from "react";

export function FormCreateOrder({
  value,
}: {
  value: { setLoading: Function; user: { token: string } };
}) {
  const { setLoading, user } = value;
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[] | []>([]);
  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setLoading("load");
        user.token !== ""
          ? registerOrder(user.token, message, files, setLoading)
          : createOrder(
              name,
              surname,
              email,
              phone,
              message,
              files,
              setLoading
            );
      }}
    >
      <h2 className={styles.header}>Zaregistrujte svu objednávku!</h2>
      {user.token === "" && (
        <>
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
        </>
      )}
      <label className={styles.label}>
        <span>Zpráva</span>
        <textarea
          name=""
          onChange={({ target }) => setMessage(target.value)}
          value={message}
        ></textarea>
        <svg className={styles.icon}>
          <use href="symbol-defs.svg#mail" />
        </svg>
      </label>
      <label className={styles.cloud}>
        <svg>
          <use href="symbol-defs.svg#cloud" />
        </svg>
        <input
          name="files[]"
          type="file"
          accept="video/*, audio/*, image/*, .pdf, .txt"
          multiple
          className="phantom"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const { files } = event.target;

            if (files) {
              // Преобразування FileList в масив
              const newFiles = Array.from(files);

              setFiles((prevState: File[] | [])=> {
                // Фільтруємо файли, щоб уникнути дублікатів
                const existingFiles = prevState.map((file) => file.name);
                const uniqueFiles = newFiles.filter(
                  (file) => !existingFiles.includes(file.name)
                );
                return [...prevState, ...uniqueFiles];
              });
            }
          }}
        />
        <span className={styles.cloud_text}>Nahrát souborz (do 25 MB)</span>
      </label>
      <ul className={styles.files_list}>
        {files.map((file) => (
          <li className={styles.files_item} key={file.name}>
            <svg>
              <use href="symbol-defs.svg#folder" />
            </svg>
            <p>{file.name}</p>
            <button
              type="button"
              className={styles.button_delete}
              data-id={file.name}
              onClick={({ currentTarget }) => {
                setFiles((prevState) =>
                  prevState.filter(
                    (data) => data.name !== currentTarget.dataset.id
                  )
                );
              }}
            >
              <svg>
                <use href="symbol-defs.svg#cancel" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      <button type="submit" className={styles.button}>
        ODESLAT
      </button>
    </form>
  );
}
