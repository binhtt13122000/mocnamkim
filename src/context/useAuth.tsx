import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";

import useSnackbar from "src/components/Snackbar/useSnackbar";

interface AuthContextType {
    token?: string;
    loading: boolean;
    error?: any;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }): JSX.Element {
    const [token, setToken] = useState<string>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const showSnackbar = useSnackbar();
    useEffect(() => {
        const data = window.localStorage.getItem("token");
        if (data) {
            setToken(data);
        }
    }, []);

    const login = useCallback(
        (username: string, password: string) => {
            setLoading(true);

            fetch("http://localhost:4000/auth/login", {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
                method: "POST",
            })
                .then((data) => {
                    if (data.status === 200) {
                        return data.json();
                    }
                })
                .then((res) => {
                    setToken(res.data);
                    window.localStorage.setItem("token", res.data);
                    window.location.reload();
                    showSnackbar({
                        severity: "success",
                        children: "Đăng nhập thành công",
                    });
                })
                .catch((error) => {
                    showSnackbar({
                        severity: "error",
                        children: "Đăng nhập thất bại",
                    });
                    setError(error);
                })
                .finally(() => setLoading(false));
        },
        [showSnackbar]
    );

    const logout = useCallback(() => {
        window.localStorage.clear();
        setToken(undefined);
    }, []);

    const memoedValue = useMemo(
        () => ({
            token,
            loading,
            error,
            login,
            logout,
        }),
        [token, loading, error, login, logout]
    );

    return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}

export default function useAuth() {
    return useContext(AuthContext);
}
