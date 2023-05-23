import { useCallback, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Order } from "src/generated/graphql";
import { v4 as uuidv4 } from "uuid";

import {
    Box,
    Button,
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import TextfieldBase from "src/components/BaseTextField";
import CustomerForm, { CustomerMutationType } from "src/components/CustomerForm";
import CustomizeAutocomplete from "src/components/CustomizedAutocomplete";
import { CurrencyFormatInput, NumberFormatInput } from "src/components/NumberInput";
import useSnackbar from "src/components/Snackbar/useSnackbar";

import useCreateCustomer from "src/hooks/customer/useCreateCustomer";
import useCreateOrder from "src/hooks/order/useCreateOrder";
import useGetProductByPk from "src/hooks/product/useGetProductByPk";
import useUpdateManyProduct from "src/hooks/product/useUpdateManyProduct";
import useGetUnitByPk from "src/hooks/unit/useGetUnitByPk";

export interface SellDto {
    customerid: Order["customerid"];
    status: Order["status"];
    total: Order["total"];
    pay: Order["pay"];
    backMoney: Order["backMoney"];
    createTime: Order["createTime"];
    paymentTime: Order["paymentTime"];
    phone: number;
    name: number;
    productName: number;
    productCode: number;
    unit: number;
    price: number;
    ratio: number;
    quantity: number;
    buyQuantity: number;
    nameOfProduct: string;
    nameOfUnit: string;
}

const Sell = () => {
    const navigate = useNavigate();
    const { mutate } = useCreateOrder("OrderQuery");
    const { mutate: updateMany } = useUpdateManyProduct("OrderQuery");
    const initData: SellDto = {
        status: "",
        customerid: 0,
        total: 0,
        backMoney: 0,
        pay: 0,
        paymentTime: "",
        createTime: "",
        phone: 0,
        name: 0,
        productCode: 0,
        productName: 0,
        quantity: 0,
        nameOfProduct: "",
        nameOfUnit: "",
        unit: 0,
        price: 0,
        ratio: 1,
        buyQuantity: 0,
    };

    const { mutate: mutateUnit } = useGetUnitByPk();
    const { mutate: mutateProduct } = useGetProductByPk();

    const { mutate: mutateCreate } = useCreateCustomer("CustomerQuery");

    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const showSnackbar = useSnackbar();

    const [orderDetails, setOrderDetails] = useState<
        Array<{
            orderid: string;
            productid: number;
            unitid: number;
            quantity: number;
            price: number;
            total: number;
            name: string;
            unitName: string;
            ratio: number;
            rootQuantity: number;
        }>
    >([]);

    const { setValue, watch, getValues, control, reset } = useForm<SellDto>({
        defaultValues: initData,
    });

    const watchName = watch("name");
    const watchPhone = watch("phone");
    const watchProductCode = watch("productCode");
    const watchProductName = watch("productName");
    const watchUnit = watch("unit");
    const watchMoney = watch("pay");

    useEffect(() => {
        if (!watchMoney) {
            setValue("backMoney", 0);
        } else {
            setValue("backMoney", (watchMoney ? watchMoney : 0) - getValues("total"));
        }
    }, [watchMoney, setValue, getValues]);

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: CustomerMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                        mutateCreate(
                            {
                                object: {
                                    name: data.name,
                                    phone: data.phone,
                                },
                            },
                            {
                                onSuccess: (data) => {
                                    setValue("name", data.insert_customer_one?.id || 0);
                                    showSnackbar({
                                        children: "Thêm mới thành công",
                                        severity: "success",
                                    });
                                },
                                onError: () => {
                                    showSnackbar({
                                        children: "Thêm mới thất bại",
                                        severity: "error",
                                    });
                                },
                            }
                        );
                    }
                }
            }
            if (clearErrors) {
                clearErrors();
            }
            setIsOpenForm(false);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    useEffect(() => {
        if (watchUnit && watchProductCode) {
            mutateUnit(
                {
                    id: watchUnit,
                },
                {
                    onSuccess: (data) => {
                        mutateProduct(
                            {
                                id: watchProductCode,
                            },
                            {
                                onSuccess: (data) => {
                                    setValue("quantity", data?.product_by_pk?.quantity || 0);
                                    setValue("nameOfProduct", data?.product_by_pk?.name || "");
                                },
                            }
                        );
                        setValue("nameOfUnit", data?.unit_by_pk?.name || "");
                        setValue("price", data?.unit_by_pk?.price || 0);
                        setValue("ratio", data?.unit_by_pk?.ratio || 0);
                    },
                }
            );
        }
    }, [watchUnit, mutateUnit, setValue, watchProductCode, mutateProduct]);

    useEffect(() => {
        if (watchName) {
            setValue("phone", watchName);
        }
    }, [watchName, setValue]);

    useEffect(() => {
        if (watchPhone) {
            setValue("name", watchPhone);
        }
    }, [watchPhone, setValue]);

    useEffect(() => {
        if (watchProductCode) {
            setValue("productName", watchProductCode);
        }
    }, [watchProductCode, setValue]);

    useEffect(() => {
        if (watchProductName) {
            setValue("productCode", watchProductName);
        }
    }, [watchProductName, setValue]);

    const removeRecord = (orderId: string, total: number) => {
        setOrderDetails([...orderDetails].filter((x) => x.orderid !== orderId));
        showSnackbar({
            children: "Xóa thành công",
            severity: "success",
        });
        setValue("total", getValues("total") - total);
    };

    const updateRecord = (k: {
        orderid: string;
        productid: number;
        unitid: number;
        quantity: number;
        price: number;
        total: number;
        name: string;
        unitName: string;
        ratio: number;
        rootQuantity: number;
    }) => {
        setOrderDetails([...orderDetails].filter((x) => x.orderid !== k.orderid));
        setValue("total", getValues("total") - k.total);
        setValue("productCode", k.productid);
        setValue("productName", k.productid);
        setValue("buyQuantity", k.quantity);
        setValue("price", k.price);
        setValue("unit", k.unitid);
        setValue("ratio", k.ratio);
        setValue("quantity", k.rootQuantity);
        setValue("nameOfProduct", k.name);
        setValue("nameOfUnit", k.unitName);
    };

    const addToOder = () => {
        if (!getValues("buyQuantity")) {
            showSnackbar({
                children: "Vui lòng nhập số lượng",
                severity: "error",
            });
            return;
        }
        if (getValues("buyQuantity") < 1) {
            showSnackbar({
                children: "Số lượng từ 1 trở lên",
                severity: "error",
            });
            return;
        }
        if (getValues("buyQuantity") > Math.floor(getValues("quantity") / getValues("ratio"))) {
            showSnackbar({
                children: "Số lượng lớn hơn tồn kho",
                severity: "error",
            });
            return;
        }
        const listOrderDetailWithSameProduct = orderDetails.filter(
            (x) => x.productid === getValues("productCode")
        );
        if (listOrderDetailWithSameProduct.length > 0) {
            const count = listOrderDetailWithSameProduct
                .map((x) => x.quantity * x.ratio)
                .reduce((a, b) => a + b, 0);
            if (count + getValues("buyQuantity") * getValues("ratio") > getValues("quantity")) {
                showSnackbar({
                    children: "Số lượng lớn hơn tồn kho",
                    severity: "error",
                });
                return;
            }
        }
        const indexOrderDetailWithSameProductAndUnit = orderDetails.findIndex(
            (x) => x.productid === getValues("productCode") && x.unitid === getValues("unit")
        );
        if (indexOrderDetailWithSameProductAndUnit !== -1) {
            orderDetails[indexOrderDetailWithSameProductAndUnit].quantity =
                orderDetails[indexOrderDetailWithSameProductAndUnit].quantity +
                getValues("buyQuantity");
            orderDetails[indexOrderDetailWithSameProductAndUnit].total =
                orderDetails[indexOrderDetailWithSameProductAndUnit].total +
                getValues("price") * getValues("buyQuantity");
            setOrderDetails([...orderDetails]);
        } else {
            setOrderDetails([
                ...orderDetails,
                {
                    productid: getValues("productCode"),
                    quantity: getValues("buyQuantity"),
                    price: getValues("price"),
                    total: getValues("price") * getValues("buyQuantity"),
                    unitid: getValues("unit"),
                    name: getValues("nameOfProduct"),
                    unitName: getValues("nameOfUnit"),
                    ratio: getValues("ratio"),
                    rootQuantity: getValues("quantity"),
                    orderid: uuidv4(),
                },
            ]);
        }
        setValue("total", getValues("total") + getValues("price") * getValues("buyQuantity"));
        setValue("productCode", 0);
        setValue("productName", 0);
        setValue("buyQuantity", 0);
        setValue("price", 0);
        setValue("unit", 0);
        setValue("ratio", 1);
        setValue("quantity", 0);
        setValue("nameOfProduct", "");
        setValue("nameOfUnit", "");
        showSnackbar({
            children: "Thêm thành công",
            severity: "success",
        });
    };

    return (
        <Container sx={{ mt: 3 }}>
            <CustomerForm
                opened={isOpenForm}
                isView={false}
                data={{
                    id: 0,
                    name: "",
                    phone: "",
                }}
                handleClose={handleClose}
            />
            <Typography align="center" variant="h5">
                TẠO MỚI ĐƠN HÀNG
            </Typography>
            <Grid
                component="form"
                sx={{
                    "& > :not(style)": {
                        m: 2,
                        display: "flex",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6">KHÁCH HÀNG</Typography>
                    <Button variant="contained" onClick={() => setIsOpenForm(true)}>
                        Tạo mới
                    </Button>
                </Box>
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
                        control={control}
                        defaultId={watchName || 0}
                        name="name"
                        entity="customer"
                        rules={{
                            min: {
                                value: 1,
                                message: "Khách hàng là bắt buộc",
                            },
                        }}
                        displayField="name"
                        label={"Tên khách hàng"}
                        fullWidth
                        required
                    />
                    <CustomizeAutocomplete
                        control={control}
                        defaultId={watchPhone || 0}
                        rules={{}}
                        name="phone"
                        entity="customer"
                        displayField="phone"
                        label={"Số điện thoại"}
                        fullWidth
                    />
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6">ĐƠN HÀNG</Typography>
                </Box>
                <Grid
                    item
                    xs={12}
                    gap={3}
                    display="flex"
                    sx={{
                        flexWrap: { xs: "wrap", md: "nowrap" },
                        alignItems: "center",
                    }}
                >
                    <CustomizeAutocomplete
                        control={control}
                        defaultId={watchProductCode || 0}
                        rules={{
                            min: {
                                value: 1,
                                message: "Sản phẩm là bắt buộc",
                            },
                        }}
                        name="productCode"
                        entity="product"
                        displayField="code"
                        label={"Mã sản phẩm"}
                        fullWidth
                        required
                    />
                    <CustomizeAutocomplete
                        control={control}
                        name="productName"
                        defaultId={watchProductName || 0}
                        rules={{
                            min: {
                                value: 1,
                                message: "Sản phẩm là bắt buộc",
                            },
                        }}
                        entity="product"
                        displayField="name"
                        label={"Tên sản phẩm"}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    gap={3}
                    display="flex"
                    sx={{
                        flexWrap: { xs: "wrap", md: "nowrap" },
                        alignItems: "center",
                    }}
                >
                    {watchProductCode ? (
                        <CustomizeAutocomplete
                            defaultId={watchUnit || 0}
                            control={control}
                            rules={{
                                min: {
                                    value: 1,
                                    message: "Đơn vị là bắt buộc",
                                },
                            }}
                            extra={`productid: {_eq: ${watchProductCode}}`}
                            name="unit"
                            entity="unit"
                            displayField="name"
                            label={"Đơn vị"}
                            fullWidth
                            required
                        />
                    ) : null}
                    {watchProductCode ? (
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="price"
                            label="Giá"
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
                            readOnly
                            fullWidth
                        />
                    ) : null}
                    {watchProductCode ? (
                        <TextfieldBase
                            label={"Số lượng tồn"}
                            variant="outlined"
                            InputProps={{
                                readOnly: true,
                            }}
                            required
                            fullWidth
                            value={Math.floor(getValues("quantity") / getValues("ratio"))}
                        />
                    ) : null}
                    {watchProductCode ? (
                        <NumberFormatInput
                            control={control}
                            required
                            name="buyQuantity"
                            label="Số lượng mua"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Số lượng mua là bắt buộc",
                                },
                                min: {
                                    value: 1,
                                    message: "Số lượng mua nhỏ nhất là 1",
                                },
                                max: {
                                    value: Math.floor(getValues("quantity") / getValues("ratio")),
                                    message:
                                        "Số lượng mua lớn nhất là " +
                                        Math.floor(getValues("quantity") / getValues("ratio")),
                                },
                            }}
                            fullWidth
                        />
                    ) : null}
                    {watchProductCode ? <Button onClick={() => addToOder()}>Thêm</Button> : null}
                </Grid>
                <TableContainer>
                    <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>STT</TableCell>
                                <TableCell>Tên sản phẩm</TableCell>
                                <TableCell align="right">Giá</TableCell>
                                <TableCell align="right">Số lượng</TableCell>
                                <TableCell>Đơn vị</TableCell>
                                <TableCell align="right">Thành tiền</TableCell>
                                <TableCell>Thao tác</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderDetails?.map((x, i) => {
                                return (
                                    <TableRow key={x.orderid}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{x.name}</TableCell>
                                        <TableCell align="right">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(x.price || 0)}
                                        </TableCell>
                                        <TableCell align="right">{x.quantity}</TableCell>
                                        <TableCell>{x.unitName}</TableCell>
                                        <TableCell align="right">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(x.total || 0)}
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                size="small"
                                                color="error"
                                                onClick={() => removeRecord(x.orderid, x.total)}
                                            >
                                                Xóa
                                            </Button>
                                            <Button
                                                size="small"
                                                color="secondary"
                                                onClick={() => updateRecord(x)}
                                            >
                                                Sửa
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableRow>
                                <TableCell colSpan={5}>Tổng tiền</TableCell>
                                <TableCell align="right">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(
                                        orderDetails
                                            .map((x) => x.total)
                                            .reduce((a, b) => a + b, 0) || 0
                                    )}
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 2,
                }}
            >
                <Typography variant="h6">THANH TOÁN</Typography>
            </Box>
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
                        reset();
                        setOrderDetails([]);
                    }}
                >
                    {"Xóa dữ liệu"}
                </Button>
                <Button
                    disabled={orderDetails.length === 0 || watchPhone === 0}
                    variant="contained"
                    onClick={() => {
                        if (watchPhone > 0 && orderDetails.length > 0) {
                            const result = orderDetails.reduce((res, obj) => {
                                (res as any)[obj.productid] = {
                                    quan:
                                        (obj.productid in res
                                            ? (res as any)[obj.productid].quan
                                            : 0) +
                                        obj.quantity * obj.ratio,
                                    root: obj.rootQuantity,
                                };
                                return res;
                            }, {});
                            const newArr = Object.keys(result).map((key: any) => {
                                return {
                                    productid: Number(key),
                                    quan: (result as any)[key].quan,
                                    root: (result as any)[key].root,
                                };
                            });
                            const today = new Date();
                            today.setHours(today.getHours() + 7);
                            mutate(
                                {
                                    object: {
                                        createTime: today.toISOString(),
                                        paymentTime: null,
                                        customerid: watchPhone,
                                        status:
                                            (getValues("backMoney") || 0) < 0
                                                ? "NOT_PAID"
                                                : "NOT_PAY",
                                        backMoney: getValues("backMoney") || 0,
                                        pay: getValues("pay") || 0,
                                        total:
                                            orderDetails
                                                .map((x) => x.total)
                                                .reduce((a, b) => a + b, 0) || 0,
                                        orderdetails: {
                                            data: orderDetails.map((x) => {
                                                return {
                                                    price: x.price,
                                                    productid: x.productid,
                                                    quantity: x.quantity,
                                                    total: x.total,
                                                    unitid: x.unitid,
                                                };
                                            }),
                                        },
                                    },
                                },
                                {
                                    onSuccess: () => {
                                        updateMany({
                                            updates: newArr?.map((x) => {
                                                return {
                                                    where: {
                                                        id: {
                                                            _eq: x.productid,
                                                        },
                                                    },
                                                    _set: {
                                                        quantity: x.root - x.quan,
                                                    },
                                                };
                                            }),
                                        });
                                        showSnackbar({
                                            children: "Tạo thành công",
                                            severity: "success",
                                        });
                                        navigate("/bill-out", { replace: true });
                                    },
                                }
                            );
                        }
                    }}
                >
                    Lưu
                </Button>
                <Button
                    variant="contained"
                    disabled={
                        orderDetails.length === 0 ||
                        watchPhone === 0 ||
                        !watchMoney ||
                        watchMoney < getValues("total")
                    }
                    color="success"
                    onClick={() => {
                        if (watchPhone > 0 && orderDetails.length > 0) {
                            const result = orderDetails.reduce((res, obj) => {
                                (res as any)[obj.productid] = {
                                    quan:
                                        (obj.productid in res
                                            ? (res as any)[obj.productid].quan
                                            : 0) +
                                        obj.quantity * obj.ratio,
                                    root: obj.rootQuantity,
                                };
                                return res;
                            }, {});
                            const newArr = Object.keys(result).map((key: any) => {
                                return {
                                    productid: Number(key),
                                    quan: (result as any)[key].quan,
                                    root: (result as any)[key].root,
                                };
                            });
                            const today = new Date();
                            today.setHours(today.getHours() + 7);
                            mutate(
                                {
                                    object: {
                                        createTime: today.toISOString(),
                                        paymentTime: today.toISOString(),
                                        backMoney: getValues("backMoney"),
                                        pay: getValues("pay"),
                                        customerid: watchPhone,
                                        status: "PAID",
                                        total:
                                            orderDetails
                                                .map((x) => x.total)
                                                .reduce((a, b) => a + b, 0) || 0,
                                        orderdetails: {
                                            data: orderDetails.map((x) => {
                                                return {
                                                    price: x.price,
                                                    productid: x.productid,
                                                    quantity: x.quantity,
                                                    total: x.total,
                                                    unitid: x.unitid,
                                                };
                                            }),
                                        },
                                    },
                                },
                                {
                                    onSuccess: () => {
                                        updateMany({
                                            updates: newArr?.map((x) => {
                                                return {
                                                    where: {
                                                        id: {
                                                            _eq: x.productid,
                                                        },
                                                    },
                                                    _set: {
                                                        quantity: x.root - x.quan,
                                                    },
                                                };
                                            }),
                                        });
                                        showSnackbar({
                                            children: "Tạo thành công",
                                            severity: "success",
                                        });
                                        navigate("/bill-out", { replace: true });
                                    },
                                }
                            );
                        }
                    }}
                >
                    Thanh toán
                </Button>
            </Box>
        </Container>
    );
};

export default Sell;
