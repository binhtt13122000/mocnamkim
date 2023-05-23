import React, { useState } from "react";

import { CalendarToday as CalendarTodayIcon } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

import BarChartWithAmount from "../charts/BarChartWithAmount";
import { LineChartDay } from "../charts/LineChartDay";
import { LineChartMonth } from "../charts/LineChartMoonth";
import { LineChartYear } from "../charts/LineChartYear";

import useGetBillInByTime from "src/hooks/dashboard/useGetBillInByTime";
import useGetBillOutByTime from "src/hooks/dashboard/useGetBillOutByTime";
import useGetDebtByTime from "src/hooks/dashboard/useGetDebtByTime";
import useGetDebtByTimeOut from "src/hooks/dashboard/useGetDebtByTimeOut";

export function LastDayOfMonth(Year: number, Month: number) {
    return new Date((new Date(Year, Month, 1) as any) - 1).getDate();
}
const Home = () => {
    const [type, setType] = useState<"MONTH" | "DAY" | "YEAR">("DAY");

    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const day = new Date().getDate();
    const [min, setMin] = useState(`${year}/${month}/${day} 00:00:00`);
    const [max, setMax] = useState(`${year}/${month}/${day} 23:59:59`);

    React.useEffect(() => {
        switch (type) {
            case "DAY":
                setMin(`${year}/${month}/${day} 00:00:00`);
                setMax(`${year}/${month}/${day} 23:59:59`);
                break;
            case "MONTH":
                setMin(`${year}/${month}/01 00:00:00`);
                setMax(`${year}/${month}/${LastDayOfMonth(year, month)} 23:59:59`);
                break;
            case "YEAR":
                setMin(`${year}/01/01 00:00:00`);
                setMax(`${year}/12/31 23:59:59`);
                break;
            default:
                break;
        }
    }, [type, year, month, day]);

    const { data: totalBill } = useGetBillInByTime(min, max);
    const { data: totalDebt } = useGetDebtByTime(min, max);
    const { data: totalBillOut } = useGetBillOutByTime(min, max);
    const { data: totalDebtOut } = useGetDebtByTimeOut(min, max);

    return (
        <React.Fragment>
            <Box sx={{ width: "90%", mt: 2, display: "flex", justifyContent: "flex-end" }}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => setType("DAY")}>Ngày</Button>
                    <Button onClick={() => setType("MONTH")}>Tháng</Button>
                    <Button onClick={() => setType("YEAR")}>Năm</Button>
                </ButtonGroup>
            </Box>
            <Typography sx={{ marginLeft: 4 }} variant="h6">
                BÁN HÀNG
            </Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                alignItems="stretch"
                marginY={2}
                marginX={4}
            >
                <Box
                    sx={{
                        flexShrink: 0,
                        flexGrow: 1,
                        flexBasis: { lg: "25%", md: "50%", xs: "100%" },
                        paddingRight: { md: 5, xs: 0 },
                        cursor: "pointer",
                    }}
                    onClick={() => {}}
                >
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderLeft: ".25rem solid #4e73df",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: 6,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                rowGap: 1,
                            }}
                        >
                            <Typography
                                component="h2"
                                fontSize="18px"
                                fontWeight="700"
                                textTransform="uppercase"
                                color="#4e73df"
                                noWrap
                                pb={2}
                            >
                                {"Doanh thu"}
                            </Typography>
                            <Typography
                                component="h5"
                                fontSize="28px"
                                fontWeight="600"
                                lineHeight="24px"
                                color="#5a5c69"
                            >
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(totalBill?.Order_aggregate?.aggregate?.sum?.total || 0)}
                            </Typography>
                        </Box>
                        <CalendarTodayIcon
                            fontSize="large"
                            style={{
                                fontWeight: "900",
                                lineHeight: "32px",
                                color: "#dddfeb",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexShrink: 0,
                        flexGrow: 1,
                        flexBasis: { lg: "25%", md: "50%", xs: "100%" },
                        paddingRight: { md: 5, xs: 0 },
                        cursor: "pointer",
                    }}
                    onClick={() => {}}
                >
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderLeft: ".25rem solid #4e73df",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: 6,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                rowGap: 1,
                            }}
                        >
                            <Typography
                                component="h2"
                                fontSize="18px"
                                fontWeight="700"
                                textTransform="uppercase"
                                color="#4e73df"
                                noWrap
                                pb={2}
                            >
                                {"Đã thanh toán"}
                            </Typography>
                            <Typography
                                component="h5"
                                fontSize="28px"
                                fontWeight="600"
                                lineHeight="24px"
                                color="#5a5c69"
                            >
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(
                                    (totalBill?.Order_aggregate?.aggregate?.sum?.total || 0) +
                                        (totalDebt?.Order_aggregate?.aggregate?.sum?.backMoney || 0)
                                )}
                            </Typography>
                        </Box>
                        <CalendarTodayIcon
                            fontSize="large"
                            style={{
                                fontWeight: "900",
                                lineHeight: "32px",
                                color: "#dddfeb",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexShrink: 0,
                        flexGrow: 1,
                        flexBasis: { lg: "25%", md: "50%", xs: "100%" },
                        paddingRight: { md: 5, xs: 0 },
                        cursor: "pointer",
                    }}
                    onClick={() => {}}
                >
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderLeft: ".25rem solid #4e73df",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: 6,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                rowGap: 1,
                            }}
                        >
                            <Typography
                                component="h2"
                                fontSize="18px"
                                fontWeight="700"
                                textTransform="uppercase"
                                color="#4e73df"
                                noWrap
                                pb={2}
                            >
                                {"Chưa thanh toán"}
                            </Typography>
                            <Typography
                                component="h5"
                                fontSize="28px"
                                fontWeight="600"
                                lineHeight="24px"
                                color="#5a5c69"
                            >
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(
                                    0 - (totalDebt?.Order_aggregate?.aggregate?.sum?.backMoney || 0)
                                )}
                            </Typography>
                        </Box>
                        <CalendarTodayIcon
                            fontSize="large"
                            style={{
                                fontWeight: "900",
                                lineHeight: "32px",
                                color: "#dddfeb",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Typography sx={{ marginLeft: 4 }} variant="h6">
                NHẬP HÀNG
            </Typography>
            <Box
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                alignItems="stretch"
                marginY={2}
                marginX={4}
            >
                <Box
                    sx={{
                        flexShrink: 0,
                        flexGrow: 1,
                        flexBasis: { lg: "25%", md: "50%", xs: "100%" },
                        paddingRight: { md: 5, xs: 0 },
                        cursor: "pointer",
                    }}
                    onClick={() => {}}
                >
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderLeft: ".25rem solid #4e73df",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: 6,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                rowGap: 1,
                            }}
                        >
                            <Typography
                                component="h2"
                                fontSize="18px"
                                fontWeight="700"
                                textTransform="uppercase"
                                color="#4e73df"
                                noWrap
                                pb={2}
                            >
                                {"Phải trả"}
                            </Typography>
                            <Typography
                                component="h5"
                                fontSize="28px"
                                fontWeight="600"
                                lineHeight="24px"
                                color="#5a5c69"
                            >
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(
                                    totalBillOut?.import_aggregate?.aggregate?.sum?.total || 0
                                )}
                            </Typography>
                        </Box>
                        <CalendarTodayIcon
                            fontSize="large"
                            style={{
                                fontWeight: "900",
                                lineHeight: "32px",
                                color: "#dddfeb",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexShrink: 0,
                        flexGrow: 1,
                        flexBasis: { lg: "25%", md: "50%", xs: "100%" },
                        paddingRight: { md: 5, xs: 0 },
                        cursor: "pointer",
                    }}
                    onClick={() => {}}
                >
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderLeft: ".25rem solid #4e73df",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: 6,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                rowGap: 1,
                            }}
                        >
                            <Typography
                                component="h2"
                                fontSize="18px"
                                fontWeight="700"
                                textTransform="uppercase"
                                color="#4e73df"
                                noWrap
                                pb={2}
                            >
                                {"Đã trả"}
                            </Typography>
                            <Typography
                                component="h5"
                                fontSize="28px"
                                fontWeight="600"
                                lineHeight="24px"
                                color="#5a5c69"
                            >
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(
                                    (totalBillOut?.import_aggregate?.aggregate?.sum?.total || 0) +
                                        (totalDebtOut?.import_aggregate?.aggregate?.sum
                                            ?.backMoney || 0)
                                )}
                            </Typography>
                        </Box>
                        <CalendarTodayIcon
                            fontSize="large"
                            style={{
                                fontWeight: "900",
                                lineHeight: "32px",
                                color: "#dddfeb",
                            }}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexShrink: 0,
                        flexGrow: 1,
                        flexBasis: { lg: "25%", md: "50%", xs: "100%" },
                        paddingRight: { md: 5, xs: 0 },
                        cursor: "pointer",
                    }}
                    onClick={() => {}}
                >
                    <Box
                        sx={{
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderLeft: ".25rem solid #4e73df",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            boxShadow: 6,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                rowGap: 1,
                            }}
                        >
                            <Typography
                                component="h2"
                                fontSize="18px"
                                fontWeight="700"
                                textTransform="uppercase"
                                color="#4e73df"
                                noWrap
                                pb={2}
                            >
                                {"Chưa trả"}
                            </Typography>
                            <Typography
                                component="h5"
                                fontSize="28px"
                                fontWeight="600"
                                lineHeight="24px"
                                color="#5a5c69"
                            >
                                {new Intl.NumberFormat("vi-VN", {
                                    style: "currency",
                                    currency: "VND",
                                }).format(
                                    0 -
                                        (totalDebtOut?.import_aggregate?.aggregate?.sum
                                            ?.backMoney || 0)
                                )}
                            </Typography>
                        </Box>
                        <CalendarTodayIcon
                            fontSize="large"
                            style={{
                                fontWeight: "900",
                                lineHeight: "32px",
                                color: "#dddfeb",
                            }}
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box sx={{ width: "80%", mt: 2 }}>
                    {type === "YEAR" ? (
                        <LineChartYear />
                    ) : type === "MONTH" ? (
                        <LineChartMonth />
                    ) : type === "DAY" ? (
                        <LineChartDay />
                    ) : null}
                </Box>
                <Box sx={{ height: 5 }}></Box>
                <Box sx={{ width: "80%", minHeight: 500 }}>
                    <BarChartWithAmount min={min} max={max} />
                </Box>
            </Box>
        </React.Fragment>
    );
};

export default Home;
