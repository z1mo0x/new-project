export function getAuthToken() {
    const cookie = document.cookie.match('auth_token');

    return cookie ? cookie : null;
}

// Кастомный хук для проверки авторизации в куках
export default function useAuth() {
    const token = getAuthToken();

    if (token) {
        return { auth: true };
    }

    localStorage.removeItem("user");

    return { auth: false };

} 