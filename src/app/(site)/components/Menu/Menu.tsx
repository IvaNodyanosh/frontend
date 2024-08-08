import classNames from "classnames";
import styles from "./Menu.module.scss";
import Link from "next/link";

import { logout } from "../../_api/logout";

import { usePathname } from "next/navigation";

import { useUserContext } from "@/app/hooks/userHooks";

export default function Menu({ setOpenMenu }: { setOpenMenu: Function }) {
  const { user, setUser } = useUserContext();

  const currentPath = usePathname();

  console.log(currentPath);

  return (
    <div className={classNames(styles.back_drop, "container")}>
      <div className={styles.menu_box}>
        <button
          onClick={() => setOpenMenu(false)}
          className={styles.button_close}
        >
          <svg className={styles.icon_cancel}>
            <use href="../../../../../symbol-defs.svg#cancel" />
          </svg>
        </button>
        <nav>
          {user.token === "" ? (
            <ul>
              <li>
                <Link href="/login" className={styles.button_login}>
                  Přihlásit se
                </Link>
              </li>
              <li>
                <Link href="/register" className={styles.button_registration}>
                  Zaregistrovat se
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  href="/"
                  className={classNames([styles.home_link], {
                    [styles.active]: currentPath === "/",
                  })}
                >
                  Hlavní
                </Link>
              </li>
              <li>
                <Link
                  href="/user"
                  className={classNames([styles.personal_link], {
                    [styles.active]: currentPath === "/user",
                  })}
                >
                  Osobní
                </Link>
              </li>
            </ul>
          )}
        </nav>
        {user.token !== "" && (
          <button
            type="button"
            onClick={() => logout(setUser, user.token)}
            className={styles.button_logout}
          >
            Odhlásit se
          </button>
        )}
      </div>
    </div>
  );
}
