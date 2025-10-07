import { NavLink } from 'react-router-dom'
import styles from '../Services.module.scss'

type ServiceProps = {
    icon: string,
    name: string,
    text: string
}

export default function ServicesItem({ icon, name, text }: ServiceProps) {
    return (
        <NavLink to={'#'} className={styles.services__item}>
            <div className={styles.services__icon}>
                <img src={icon} alt="" />
            </div>
            <div className={styles.services__name}>
                {name}
            </div>
            <div className={styles.services__text}>
                {text}
            </div>
        </NavLink>
    )
}