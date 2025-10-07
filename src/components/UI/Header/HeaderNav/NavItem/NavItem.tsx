import { NavLink } from "react-router-dom"
import styles from "./NavItem.module.scss"

type Props = {
    children: React.ReactNode,
    link: string,
}

export default function NavItem({ link, children }: Props) {
    return (
        <NavLink className={styles.link} to={link}>{children}</NavLink>
    )
}