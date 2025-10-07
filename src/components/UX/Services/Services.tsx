import { config } from '../../../config/siteConfig'
import styles from './Services.module.scss'
import ServicesItem from './ServicesItem/ServicesItem'

export default function Services() {

    return (
        <div className={styles.services}>
            <div className="container">
                <div className={styles.services__wrapper}>
                    {config.services.map(service => (
                        <ServicesItem
                            key={service.name + service.id}
                            icon={service.icon}
                            text={service.text}
                            name={service.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}