import { config } from "../../../config/siteConfig"
import styles from "./Header.module.scss"
import HeaderActions from "./HeaderActions/HeaderActions"
import HeaderNav from "./HeaderNav/HeaderNav"
import { NavLink } from "react-router-dom"
type HeaderProps = {}


export default function Header({ }: HeaderProps) {

    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__left}>
                    <NavLink to={'/'} className={styles.header__logo}>
                        <img src={config.logo} alt="" />
                    </NavLink>
                </div>

                <div className={styles.header__right}>
                    <HeaderNav />
                    <HeaderActions />
                </div>
            </div>
        </header>
    )
}