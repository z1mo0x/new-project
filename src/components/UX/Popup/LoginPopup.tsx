
import { useEffect, useState, type FormEvent } from 'react';
import styles from './LoginPopup.module.scss';
import Button from '../Buttons/Button/Button';
import type { User, UserLogin } from '../../../shared/user.types';
import { useLogin } from '../../../hooks/useLogin';
import { useSelector } from 'react-redux';
import { type UsersState } from '../../../store/store';

type Props = {
    title: string,
    open: boolean,
    onClose: () => void,
}


export default function LoginPopup({ title, open, onClose }: Props) {

    const users: User[] = useSelector((state: UsersState) => state.users)

    const [formData, setFormData] = useState<UserLogin>({
        login: "",
        password: "",
    });

    const [validateErrors, setValidateErrors] = useState({
        login: '',
        password: ''
    })

    const { handleSubmit, isPending, error } = useLogin()




    function validate() {
        const errors = {
            login: "",
            password: ""
        }

        let isValid = true;

        if (!formData.login.trim()) {
            errors.login = "Введите логин"
            isValid = false
        }

        if (!formData.password.trim()) {
            errors.password = "Поле не может быть пустым"
            isValid = false
        } else if (formData.password.length < 8) {
            errors.password = "Пароль должен быть больше 8 символов"
            isValid = false
        }

        setValidateErrors(errors)

        return isValid;
    }


    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const isValid = validate()

        if (!isValid) {
            return;
        }

        if (users) {
            handleSubmit(e, formData, users)
                .then(result => {
                    if (result.success) {
                        setFormData({ login: '', password: "" })
                    }
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <div className={`${open ? styles.active : ''} ${styles.popup} `} onClick={onClose}>
            <div className={styles.popup__wrapper} onClick={(e) => { e.stopPropagation() }}>
                <div onClick={onClose} className={styles.popup__close}>✖</div>
                <div className={styles.popup__head}>
                    {title}
                    <div className={styles.popup__error}>
                        {error ? error : ''}
                    </div>
                </div>
                <div className={styles.popup__body}>
                    <form onSubmit={onSubmit} className={styles.popup__form}>
                        <div className={styles.popup__input}>
                            <input
                                className={`${validateErrors.login ? styles.error : ''}`}
                                name='login'
                                type="text"
                                value={formData.login}
                                placeholder="Логин"
                                onChange={(e) => { setFormData({ ...formData, login: e.target.value }) }}
                            />
                            <div className={styles.input__error}>
                                {validateErrors.login ? validateErrors.login : ''}
                            </div>
                        </div>
                        <div className={styles.popup__input}>
                            <input
                                className={`${validateErrors.password ? styles.error : ''}`}
                                name='password'
                                type="password"
                                value={formData.password}
                                placeholder="Пароль"
                                onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }}

                            />
                            <div className={styles.input__error}>
                                {validateErrors.password ? validateErrors.password : ''}
                            </div>
                        </div>
                        <Button loading={isPending} type='submit' variant="red">{isPending ? 'Загрузка...' : 'Войти'}</Button>
                    </form>
                </div>
            </div>
        </div>
    )

}