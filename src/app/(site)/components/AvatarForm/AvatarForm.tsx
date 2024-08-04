import styles from "./AvatarForm.module.scss";
import { useState } from "react";

import { changeAvatar } from "../../_api/changeAvatar";

export function AvatarForm({ value }) {
  const { setLoading, user, setUser } = value;
  const [avatar, setAvatar] = useState({ file: {}, fileUrl: "" });
  console.log(avatar);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setLoading("load");
        changeAvatar(avatar.file, setLoading, setUser, user.token);
      }}
    >
      {avatar.fileUrl !== "" && (
        <div className={styles.avatar_box}>
          <img src={avatar.fileUrl} className={styles.avatar_img} alt="" />
        </div>
      )}

      <label className={styles.cloud}>
        <svg>
          <use href="../../../../../symbol-defs.svg#add_photo" />
        </svg>
        <input
          name="avatar"
          type="file"
          required
          accept="image/png, image/jpeg"
          className="phantom"
          onChange={({ target }) => {
            const reader = new FileReader();
            reader.readAsDataURL(target.files[0]);
            reader.onload = () =>
              setAvatar({
                file: target.files[0],
                fileUrl: reader.result,
              });
          }}
        />
      </label>

      <button type="submit" className={styles.button}>
        ZMĚNA FOTOGRAFIE
      </button>
    </form>
  );
}
