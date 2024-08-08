import styles from "./Error.module.scss";

export function ErrorMessage({ type }: { type: string }) {
  switch (type) {
    case "error":
      return (
        <div className={styles.box}>
          <h2>Error!</h2>
          <p>
            Dobrý den, omlouváme se, ale došlo k chybě. Zkuste to prosím později
            nebo nás kontaktujte na:
            <a href="mailto: ivanodyanosh@gmail.com"> ivanodyanosh@gmail.com</a>
            .
          </p>
        </div>
      );
    case "emailRegistered":
      return (
        <div className={styles.box}>
          <p>Dobrý den, tento e-mail je již na naši stránce zaregistrován!</p>
        </div>
      );
    case "userNotFound":
      return (
        <div className={styles.box}>
          <p>Omlouváme se, ale nepodařilo se nám najít váš účet.</p>
        </div>
      );
    case "userBlocked":
      return (
        <div className={styles.box}>
          <p>Omlouváme se, ale váš účet byl zablokován vlastníkem!</p>
        </div>
      );
  }
}
