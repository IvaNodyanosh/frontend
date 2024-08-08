import styles from "./SuccessMessage.module.scss";

export function SuccessMessage({ type }: {type: string}) {
  switch (type) {
    case "order-create":
      return (
        <div className={styles.box}>
          <p className={styles.text}>
            Děkujeme vám, zaregistrovali jsme vaši objednávku a brzy se s vámi
            spojíme!
          </p>
        </div>
      );
    case "register-user":
      return (
        <div className={styles.box}>
          <p className={styles.text}>
            Děkujeme za registraci na naši strance, prosím, podívejte se na svůj
            e-mail a ověřte svou e-mailovou adresu.
          </p>
        </div>
      );
    case "verify-email":
      return (
        <div className={styles.box}>
          <p className={styles.text}>
            Děkujeme, váš e-mail byl úspěšně ověřen!
          </p>
        </div>
      );
    case "reset-password":
      return (
        <div className={styles.box}>
          <p className={styles.text}>Heslo bylo úspěšně změněno.</p>
        </div>
      );
    case "changed-avatar":
      return (
        <div className={styles.box}>
          <p className={styles.text}>Photo bylo úspěšně změněno.</p>
        </div>
      );
    case "change-status_order":
      return (
        <div className={styles.box}>
          <p className={styles.text}>Stav objednávky byl uspěšně změněn.</p>
        </div>
      );
  }
}
