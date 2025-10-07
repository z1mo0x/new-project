import Header from '../../UI/Header/Header'
import styles from './Layout.module.scss'

type Props = {
    children: React.ReactNode,
}

export default function Layout({ children }: Props) {
    return (
        <div className={styles.layout}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}