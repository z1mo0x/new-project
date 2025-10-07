import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../components/UX/Buttons/Button/Button'
import Layout from '../../components/UX/Layout/Layout'
import Title from '../../components/UX/Title/Title'
import type { User } from '../../shared/user.types'
import styles from './Profile.module.scss'
import { useEffect } from 'react'
import useLogout from '../../hooks/useLogout'

type Props = {}

export default function Profile({ }: Props) {

    const userData = localStorage.getItem("user")
    const user: User = userData ? JSON.parse(userData) : null;
    const navigate = useNavigate();
    const { logout } = useLogout()

    useEffect(() => {
        if (!user) {
            navigate("/", { replace: true })
        }
    }, [user])

    if (!user) {
        return null;
    }


    return (
        <Layout>
            <div className="container">
                <div className={styles.profile}>
                    <Title>Привет, {user.name}</Title>
                    <div className={styles.profile__buttons}>
                        <Button onClick={logout} variant="red" size='md'>Выйти из аккаунта</Button>
                        <NavLink to={'/contacts'}>
                            <Button variant="border" size='md'>Перейти в контакты</Button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </Layout >
    )
}