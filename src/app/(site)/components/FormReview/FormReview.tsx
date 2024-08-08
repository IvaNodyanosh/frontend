"use client";

import { useState, ChangeEvent } from "react";
import styles from "./FormReview.module.scss";

import { addReview } from "../../_api/addReview";

export default function FormReview({
  value,
}: {
  value: { setLoading: Function; orderId: string };
}) {
  const { setLoading, orderId } = value;

  const [comment, setComment] = useState("");
  const [files, setFiles] = useState<File[] | []>([]);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setLoading("load");
        addReview(orderId, comment, files, setLoading);
      }}
    >
      <label className={styles.label}>
        <textarea
          name=""
          onChange={({ target }) => setComment(target.value)}
          value={comment}
        ></textarea>
        <svg className={styles.icon}>
          <use href="../../../../../symbol-defs.svg#mail" />
        </svg>
      </label>
      <label className={styles.cloud}>
        <svg>
          <use href="../../../../../symbol-defs.svg#add_photo" />
        </svg>
        <input
          name="files[]"
          type="file"
          accept="video/*, image/*"
          multiple
          className="phantom"
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            const { files } = event.target;

            if (files) {
              // Преобразування FileList в масив
              const newFiles = Array.from(files);

              setFiles((prevState: File[] | []) => {
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
      </label>
      <ul className={styles.files_list}>
        {files.map((file) => (
          <li className={styles.files_item} key={file.name}>
            <svg>
              <use href="../../../../../symbol-defs.svg#folder" />
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
                <use href="../../../../../symbol-defs.svg#cancel" />
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
