import styles from "./AvatarForm.module.scss";
import { useState, ChangeEvent } from "react";

import { changeAvatar } from "../../_api/changeAvatar";

interface Avatar {
  file: File | null;
  fileUrl: string;
}

export function AvatarForm({
  value,
}: {
  value: { setLoading: Function; user: { token: string }; setUser: Function };
}) {
  const { setLoading, user, setUser } = value;
  const [avatar, setAvatar] = useState<Avatar>({ file: null, fileUrl: "" });

  const { file } = avatar;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () =>
        setAvatar({
          file: files[0],
          fileUrl: reader.result as string, // Type assertion
        });
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        setLoading("load");
        changeAvatar(file, setLoading, setUser, user.token);
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
          onChange={(e) => handleFileChange(e)}
        />
      </label>

      <button type="submit" className={styles.button}>
        ZMĚNA FOTOGRAFIE
      </button>
    </form>
  );
}
