import Button from '../../../UX/Buttons/Button/Button'
import styles from './HeaderActions.module.scss'
import LoginPopup from '../../../UX/Popup/LoginPopup'
import { usePopup } from '../../../../hooks/usePopup'
import useAuth from '../../../../hooks/useAuth'
import useLogout from '../../../../hooks/useLogout'



export default function HeaderActions() {

    const { isOpen, openPopup, closePopup } = usePopup()

    const { auth } = useAuth();
    const { logout } = useLogout();

    return (
        <div className={styles.header__actions}>
            {auth
                ?
                <Button onClick={logout} variant='header' size="xl">Выйти</Button>
                :
                <Button onClick={openPopup} variant='header' size="xl">Войти</Button>
            }
            <LoginPopup open={isOpen} onClose={closePopup} title='Вход в личный кабинет' />
        </div>
    )
}