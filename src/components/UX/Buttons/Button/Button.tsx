import styles from './Button.module.scss'

type ButtonProps = {
    children: React.ReactNode,
    variant: string,
    loading?: boolean
    size?: 'xl' | 'md',
}

export default function Button({ children, variant, size, loading, ...props }: ButtonProps & React.ComponentProps<'button'>) {

    return (
        <button className={`
        ${styles[`button-${variant}`]}
        ${styles[`size-${size || 'xl'}`]}
        ${loading ? styles.loading : ''}
        `}
            disabled={loading}
            {...props}
        >
            {children}
        </button >
    )
}

