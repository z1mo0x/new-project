import styles from './Title.module.scss'

type Props = {
    children: React.ReactNode,
    additionalClass?: string
}

export default function Title({ children, additionalClass }: Props) {
    return (
        <h1 className={`${styles.title} ${additionalClass || ''}`}>{children}</h1>
    )
}