import { useState, useTransition } from "react";
import type { User } from "../shared/user.types";
import { useNavigate } from "react-router-dom";

interface AuthResult {
    success: boolean,
    user?: User;
    error?: string
}

export const useLogin = () => {

    const navigate = useNavigate()
    const [error, setError] = useState<string | null>(null);
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formData: { login: string, password: string }, users: User[]) => {
        e.preventDefault();
        setIsPending(true);
        try {
            // setTimeout для имитации сетевой задержки
            await new Promise<AuthResult>((resolve) => setTimeout(resolve, 1000))
            let user = users?.find(user => user.login === formData.login)

            if (!user) {
                console.log(formData);
                setError("Пользователь не найден")
                return { success: false, error: "Пользователь не найден" }
            }

            if (user && user.password === formData.password) {
                document.cookie = `auth_token=${user.id}; max-age=3600; path=/; samesite=strict;`
                setError(null)
                localStorage.setItem("user", JSON.stringify(user))
                navigate("/account", { replace: true })
                return { success: true, user }
            }

            else {
                setError("Неправильный логин или пароль")
                console.log(formData);
                return { success: false, error: "Неправильный логин или пароль" }
            }
        }
        finally {
            setIsPending(false);
        }
    }

    return { handleSubmit, isPending, error }

}
