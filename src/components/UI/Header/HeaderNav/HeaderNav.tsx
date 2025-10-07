import { useCallback } from "react"
import { config } from "../../../../config/siteConfig"
import NavItem from "./NavItem/NavItem"
import styles from './HeaderNav.module.scss'
import useAuth from "../../../../hooks/useAuth"

type IProps = {}

interface NavLink {
    title: string,
    link: string,
    secure: boolean
}

export default function HeaderNav({ }: IProps) {

    const { auth } = useAuth()

    const getNavItems = useCallback((items: NavLink[]) => {
        const unsecured = items.filter(item => item.secure === false)
        if (auth) {
            return items.map((item) => { return <NavItem key={item.title} link={item.link}>{item.title}</NavItem> })
        }
        else {
            return unsecured.map((item) => { return <NavItem key={item.title} link={item.link}>{item.title}</NavItem> })
        }
    }, [])

    return (
        <div className={styles.nav__items}>
            {
                getNavItems(config.links)
            }
        </div>
    )
}