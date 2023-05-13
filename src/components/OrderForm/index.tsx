import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Order } from "src/generated/graphql";
import { IForm, getTimeFromStringDate } from "src/utils/common";

import {
    Button,
    Grid,
    Modal,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CardContainer from "src/components/Card/Container";

import TextfieldBase from "../BaseTextField";
import CustomizeAutocomplete from "../CustomizedAutocomplete";
import { CurrencyFormatInput } from "../NumberInput";

import useGetOrderdetailByOrder from "src/hooks/order/useGetOrderDetailByOrder";

export interface OrderMutationType {
    id?: Order["id"];
    customerid: Order["customerid"];
    status: Order["status"];
    total: Order["total"];
    pay: Order["pay"];
    backMoney: Order["backMoney"];
    createTime: Order["createTime"];
    paymentTime: Order["paymentTime"];
}

const OrderForm: React.FC<IForm<OrderMutationType>> = (props: IForm<OrderMutationType>) => {
    const { data: defaultData, isView } = props;
    const { register, handleSubmit, setValue, watch, getValues, control, clearErrors, unregister } =
        useForm<OrderMutationType>({});

    const watchMoney = watch("pay");

    const { data: detailData } = useGetOrderdetailByOrder(defaultData.id || 0);

    useEffect(() => {
        if (!watchMoney) {
            setValue("backMoney", 0);
        } else {
            setValue("backMoney", (watchMoney ? watchMoney : 0) - getValues("total"));
        }
    }, [watchMoney, setValue, getValues]);
    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("customerid", defaultData.customerid);
        setValue("status", defaultData.status);
        setValue("total", defaultData.total);
        setValue("createTime", getTimeFromStringDate(defaultData.createTime));
        setValue("paymentTime", getTimeFromStringDate(defaultData.paymentTime));
        setValue("backMoney", defaultData.backMoney);
        setValue("pay", defaultData.pay);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<OrderMutationType> = async (data: OrderMutationType) => {
        try {
            if (data) {
                props.handleClose("SAVE", data, () => {
                    clearErrors();
                    unregister();
                });
            }
        } catch (error) {
            // eslint-disable-next-line no-console
            console.log(error);
        }
    };

    return (
        <Modal open={props.opened}>
            <CardContainer width="90%" maxWidth={820}>
                <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
                    <Typography variant="h6" component="h2">
                        {defaultData.id
                            ? props.isView
                                ? "Chi tiết đơn hàng"
                                : "Chỉnh sửa và thanh toán đưa hàng"
                            : "Tạo mới đơn hàng"}
                    </Typography>
                </Box>
                <Grid
                    component="form"
                    onSubmit={handleSubmit(submitHandler)}
                    sx={{
                        "& > :not(style)": {
                            m: 2,
                            display: "flex",
                        },
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <TextfieldBase
                            id="name"
                            label={"Trạng thái"}
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            fullWidth
                            {...register("status", {})}
                        />
                        <TextfieldBase
                            id="createTime"
                            label={"Thời gian tạo đơn hàng"}
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            fullWidth
                            {...register("createTime", {})}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <CustomizeAutocomplete
                            defaultId={!!defaultData.id ? defaultData.customerid || 0 : undefined}
                            conditionField=""
                            control={control}
                            rules={{
                                min: {
                                    value: 1,
                                    message: "Khách hàng là bắt buộc",
                                },
                            }}
                            readonly={isView}
                            name="customerid"
                            entity="customer"
                            displayField="name"
                            label={"Khách hàng"}
                            fullWidth
                            required
                        />
                        <TextfieldBase
                            id="paymentTime"
                            label={"Thời gian thanh toán"}
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            fullWidth
                            {...register("paymentTime", {})}
                        />
                    </Grid>
                    <TableContainer>
                        <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>STT</TableCell>
                                    <TableCell>Tên sản phẩm</TableCell>
                                    <TableCell>Giá</TableCell>
                                    <TableCell>Số lượng</TableCell>
                                    <TableCell>Đơn vị</TableCell>
                                    <TableCell>Thành tiền</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {detailData?.orderdetail?.map((x, i) => {
                                    return (
                                        <TableRow key={x.id}>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{x.product?.name}</TableCell>
                                            <TableCell>
                                                {new Intl.NumberFormat("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                }).format(x.price || 0)}
                                            </TableCell>
                                            <TableCell>{x.quantity}</TableCell>
                                            <TableCell>{x.unit?.name}</TableCell>
                                            <TableCell>
                                                {new Intl.NumberFormat("vi-VN", {
                                                    style: "currency",
                                                    currency: "VND",
                                                }).format(x.total || 0)}
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Grid
                        item
                        xs={12}
                        gap={3}
                        display="flex"
                        sx={{
                            flexWrap: { xs: "wrap", md: "nowrap" },
                        }}
                    >
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="total"
                            label="Thành tiền"
                            readOnly
                            rules={{
                                required: {
                                    value: true,
                                    message: "Giá theo đơn vị là bắt buộc",
                                },
                                min: {
                                    value: 500,
                                    message: "Giá nhỏ nhất là 500VNĐ",
                                },
                                max: {
                                    value: 100000000,
                                    message: "Giá lớn nhất là 100.000.000VNĐ",
                                },
                            }}
                            fullWidth
                        />
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="pay"
                            label="Khách hàng thanh toán"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Khách hàng thanh toán là bắt buộc",
                                },
                                min: {
                                    value: 500,
                                    message: "Giá nhỏ nhất là 500VNĐ",
                                },
                                max: {
                                    value: 100000000,
                                    message: "Giá lớn nhất là 100.000.000VNĐ",
                                },
                            }}
                            fullWidth
                        />
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="backMoney"
                            label="Hoàn lại"
                            haveInitValue
                            readOnly
                            rules={{
                                required: {
                                    value: true,
                                    message: "Khách hàng thanh toán là bắt buộc",
                                },
                                min: {
                                    value: 500,
                                    message: "Giá nhỏ nhất là 500VNĐ",
                                },
                                max: {
                                    value: 100000000,
                                    message: "Giá lớn nhất là 100.000.000VNĐ",
                                },
                            }}
                            fullWidth
                        />
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column-reverse", sm: "row" },
                            justifyContent: "center",
                            mx: "auto",
                            p: 1,
                            m: 1,
                            "& > :not(style)": { m: 1 },
                        }}
                    >
                        <Button
                            variant="outlined"
                            onClick={() => {
                                props.handleClose("CANCEL", undefined, clearErrors);
                            }}
                        >
                            {"Trở về"}
                        </Button>
                        {isView || (
                            <Button variant="contained" type="submit" autoFocus>
                                {defaultData.id ? "Chỉnh sửa và thanh toán" : "Tạo mới"}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </CardContainer>
        </Modal>
    );
};

export default React.memo(OrderForm);
