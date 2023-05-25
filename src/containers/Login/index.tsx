import { useForm } from "react-hook-form";

import WarningIcon from "@mui/icons-material/Warning";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import useAuth from "src/context/useAuth";

interface LoginModel {
    username: string;
    password: string;
}

const Login = () => {
    const { login } = useAuth();
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<LoginModel>();

    const submitHandler = (data: LoginModel) => {
        if (data) {
            login(data.username, data.password);
        }
    };
    return (
        <Box
            sx={{
                width: "auto",
                height: "100vh",
                backgroundImage: "url(/img/login.jpg)",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    maxWidth: 700,
                    width: "80%",
                }}
            >
                <Typography variant="h4" mb={3} align="center">
                    Hệ thống quản lý cửa hàng
                </Typography>
                <Box
                    sx={{
                        ml: 12,
                        mr: 12,
                        backgroundColor: "white",
                        borderRadius: 1,
                        p: 2,
                    }}
                >
                    <form noValidate autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Tên đăng nhập"
                            autoFocus
                            error={errors["username"] !== null && errors["username"] !== undefined}
                            {...register("username", {
                                required: "Yêu cầu nhập tên đăng nhập!",
                            })}
                        />
                        {errors["username"] && errors["username"].message && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <WarningIcon
                                    color="error"
                                    sx={{
                                        mr: 1,
                                    }}
                                />
                                <Typography variant="inherit" color="red">
                                    {`${String(errors["username"].message || "")}`}
                                </Typography>
                            </Box>
                        )}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            error={errors["password"] !== null && errors["password"] !== undefined}
                            {...register("password", {
                                required: "Yêu cầu nhập mật khẩu!",
                            })}
                        />
                        {errors["password"] && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <WarningIcon
                                    color="error"
                                    sx={{
                                        mr: 1,
                                    }}
                                />
                                <Typography variant="inherit" color="red">
                                    {`${String(errors["password"].message || "")}`}
                                </Typography>
                            </Box>
                        )}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mt: 2,
                            }}
                        >
                            <Button type="submit" variant="contained" color="primary">
                                Đăng nhập
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
