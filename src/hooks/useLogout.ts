import { useNavigate } from "react-router-dom";


export default function useLogout() {
    const navigate = useNavigate()

    function logout() {
        // Удаляем куки при помощи даты, которая прошла
        document.cookie = "auth_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
        localStorage.removeItem("user");
        navigate('/', { replace: true })
    }

    return { logout }
}