import React from "react";

import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    IconButton,
    Menu,
    Toolbar,
    Typography,
    useTheme,
    MenuItem,
} from "@mui/material";

import logo from "src/assets/handcraft.png";

type IAppBarWithDrawer = {
    appbarHeight: number;
    handleDrawerToggle: () => void;
};

const AppBarWithDrawer: React.FC<IAppBarWithDrawer> = ({ appbarHeight, handleDrawerToggle }) => {
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const logout = () => {
        if (window) {
            window.localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <AppBar
            position="fixed"
            style={{
                zIndex: theme.zIndex.drawer + 1,
                height: appbarHeight,
                flexGrow: 1,
                backgroundColor: "#FF9800",
            }}
        >
            <Toolbar
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    flexGrow: 1,
                }}
            >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Box
                    sx={{ flexGrow: 1, cursor: "pointer" }}
                    display="flex"
                    gap={1}
                    alignItems="center"
                >
                    <img src={logo} width={60} height={60} alt="logo" />
                    <Typography variant="h5">Quản lý cửa hàng</Typography>
                </Box>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle fontSize="large" />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                >
                    <MenuItem onClick={logout}>Đăng xuất</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default AppBarWithDrawer;
