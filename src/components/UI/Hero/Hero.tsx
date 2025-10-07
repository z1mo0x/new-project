import { NavLink } from 'react-router-dom';
import { config } from '../../../config/siteConfig';
import Button from '../../UX/Buttons/Button/Button';
import styles from './Hero.module.scss';
import { usePopup } from '../../../hooks/usePopup';
import LoginPopup from '../../UX/Popup/LoginPopup';
import Title from '../../UX/Title/Title';

export default function Hero() {

    const { isOpen, openPopup, closePopup } = usePopup()
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.hero__wrapper}>
                    <Title>{config.mainTitle}</Title>
                    <div className={styles.hero__buttons}>
                        <Button onClick={openPopup} variant="red" size="md">Войти</Button>
                        <NavLink to={'/contacts'}>
                            <Button variant="border" size="md">Контакты</Button>
                        </NavLink>
                        <LoginPopup title='Вход в аккаунт' open={isOpen} onClose={closePopup} />
                    </div>
                </div>
            </div>
        </section>
    )
}