export function getAuthToken() {
    const cookie = document.cookie.match('auth_token');

    return cookie ? cookie : null;
}

export default function useAuth() {
    const token = getAuthToken();

    if (token) {
        return { auth: true };
    }

    localStorage.removeItem("user");

    return { auth: false };

} 