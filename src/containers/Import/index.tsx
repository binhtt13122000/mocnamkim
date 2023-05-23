import { useCallback, useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Import } from "src/generated/graphql";
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
import CustomizeAutocomplete from "src/components/CustomizedAutocomplete";
import { CurrencyFormatInput, NumberFormatInput } from "src/components/NumberInput";
import ProductForm, { ProductMutationType } from "src/components/ProductForm";
import useSnackbar from "src/components/Snackbar/useSnackbar";
import SupplierForm, { SupplierMutationType } from "src/components/SupplierForm";

import useCreateImport from "src/hooks/import/useCreateImport";
import useCreateProduct from "src/hooks/product/useCreateProduct";
import useGetProductByPk from "src/hooks/product/useGetProductByPk";
import useUpdateManyProduct from "src/hooks/product/useUpdateManyProduct";
import useCreateSupplier from "src/hooks/supplier/useCreateSupplier";

export interface ImportDto {
    supplierid: Import["supplierid"];
    status: Import["status"];
    total: Import["total"];
    pay: Import["pay"];
    backMoney: Import["backMoney"];
    createTime: Import["createTime"];
    paymentTime: Import["paymentTime"];
    phone: number;
    name: number;
    productName: number;
    productCode: number;
    price: number;
    quantity: number;
    buyTotal: number;
    nameOfProduct: string;
}

const ImportForm = () => {
    const navigate = useNavigate();
    const { mutate } = useCreateImport("ImportQuery");
    const { mutate: updateMany } = useUpdateManyProduct("ImportQuery");
    const initData: ImportDto = {
        status: "",
        supplierid: 0,
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
        price: 0,
        buyTotal: 0,
    };

    const { mutate: mutateCreate } = useCreateSupplier("SupplierQuery");
    const { mutate: mutateCreateProduct } = useCreateProduct("ProductQuery");
    const { mutate: mutateProduct } = useGetProductByPk();

    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const [isOpenProductForm, setIsOpenProductForm] = useState<boolean>(false);
    const showSnackbar = useSnackbar();

    const [importDetails, setimportDetails] = useState<
        Array<{
            productid: number;
            quantity: number;
            price: number;
            total: number;
            name: string;
            importid: string;
        }>
    >([]);

    const { setValue, watch, getValues, control, reset } = useForm<ImportDto>({
        defaultValues: initData,
    });

    const watchName = watch("name");
    const watchPhone = watch("phone");
    const watchProductCode = watch("productCode");
    const watchProductName = watch("productName");
    const watchMoney = watch("pay");
    const watchQuantity = watch("quantity");
    const watchPrice = watch("price");

    useEffect(() => {
        if (!watchQuantity) {
            setValue("buyTotal", 0);
        } else {
            setValue("buyTotal", getValues("price") * getValues("quantity"));
        }
    }, [watchQuantity, setValue, getValues]);

    useEffect(() => {
        if (!watchPrice) {
            setValue("buyTotal", 0);
        } else {
            setValue("buyTotal", 0 || getValues("price") * getValues("quantity"));
        }
    }, [watchPrice, setValue, getValues]);

    useEffect(() => {
        if (!watchMoney) {
            setValue("backMoney", 0);
        } else {
            setValue("backMoney", (watchMoney ? watchMoney : 0) - (getValues("total") || 0));
        }
    }, [watchMoney, setValue, getValues]);

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: SupplierMutationType, clearErrors?: Function) => {
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
                                    setValue("name", data.insert_supplier_one?.id || 0);
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

    const handleCloseProduct = useCallback(
        (type: "SAVE" | "CANCEL", data?: ProductMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                        mutateCreateProduct(
                            {
                                object: {
                                    name: data.name,
                                    categoryid: data.categoryid,
                                    code: data.code,
                                    origin: data.origin,
                                    quantity: 0,
                                },
                            },
                            {
                                onSuccess: (data) => {
                                    setValue("productName", data.insert_product_one?.id || 0);
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
            setIsOpenProductForm(false);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

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

    useEffect(() => {
        if (watchProductCode) {
            mutateProduct(
                {
                    id: watchProductCode,
                },
                {
                    onSuccess: (data) => {
                        setValue("nameOfProduct", data?.product_by_pk?.name || "");
                    },
                }
            );
        }
    }, [setValue, watchProductCode, mutateProduct]);

    const removeRecord = (importid: string, total: number) => {
        setimportDetails([...importDetails].filter((x) => x.importid !== importid));
        showSnackbar({
            children: "Xóa thành công",
            severity: "success",
        });
        setValue("total", (getValues("total") || 0) - total);
    };

    const updateRecord = (k: {
        productid: number;
        quantity: number;
        price: number;
        total: number;
        name: string;
        importid: string;
    }) => {
        setimportDetails([...importDetails].filter((x) => x.importid !== k.importid));
        setValue("total", (getValues("total") || 0) - k.total);
        setValue("productCode", k.productid);
        setValue("productName", k.productid);
        setValue("buyTotal", k.total);
        setValue("price", k.price);
        setValue("quantity", k.quantity);
        setValue("nameOfProduct", k.name);
    };

    const addToOder = () => {
        if (!getValues("quantity")) {
            showSnackbar({
                children: "Vui lòng nhập số lượng",
                severity: "error",
            });
            return;
        }
        if (getValues("quantity") < 1) {
            showSnackbar({
                children: "Số lượng từ 1 trở lên",
                severity: "error",
            });
            return;
        }
        if (!getValues("price")) {
            showSnackbar({
                children: "Vui lòng nhập giá tiền",
                severity: "error",
            });
            return;
        }
        if (getValues("price") < 1) {
            showSnackbar({
                children: "Giá tiền nhỏ nhất là 1VND",
                severity: "error",
            });
            return;
        }

        const listOrderDetailWithSameProductIndex = importDetails.findIndex(
            (x) => x.productid === getValues("productCode") && x.price === getValues("price")
        );
        if (listOrderDetailWithSameProductIndex !== -1) {
            importDetails[listOrderDetailWithSameProductIndex].quantity =
                importDetails[listOrderDetailWithSameProductIndex].quantity + getValues("quantity");
            importDetails[listOrderDetailWithSameProductIndex].total =
                importDetails[listOrderDetailWithSameProductIndex].total +
                (getValues("buyTotal") || 0);
            setimportDetails([...importDetails]);
        } else {
            setimportDetails([
                ...importDetails,
                {
                    productid: getValues("productCode"),
                    quantity: getValues("quantity"),
                    price: getValues("price"),
                    total: getValues("buyTotal"),
                    name: getValues("nameOfProduct"),
                    importid: uuidv4(),
                },
            ]);
        }
        setValue("total", (getValues("total") || 0) + getValues("buyTotal"));
        setValue("productCode", 0);
        setValue("productName", 0);
        setValue("buyTotal", 0);
        setValue("price", 0);
        setValue("quantity", 0);
        setValue("nameOfProduct", "");
        showSnackbar({
            children: "Thêm thành công",
            severity: "success",
        });
    };

    return (
        <Container sx={{ mt: 3 }}>
            <SupplierForm
                opened={isOpenForm}
                isView={false}
                data={{
                    id: 0,
                    name: "",
                    phone: "",
                }}
                handleClose={handleClose}
            />
            <ProductForm
                opened={isOpenProductForm}
                isView={false}
                data={{
                    id: 0,
                    name: "",
                    categoryid: 0,
                    code: "",
                    origin: "",
                    quantity: 0,
                }}
                handleClose={handleCloseProduct}
            />
            <Typography align="center" variant="h5">
                TẠO MỚI ĐƠN NHẬP
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
                    <Typography variant="h6">NHÀ CUNG CẤP</Typography>
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
                        entity="supplier"
                        rules={{
                            min: {
                                value: 1,
                                message: "Nhà cung cấp là bắt buộc",
                            },
                        }}
                        displayField="name"
                        label={"Tên nhà cung cấp"}
                        fullWidth
                        required
                    />
                    <CustomizeAutocomplete
                        control={control}
                        defaultId={watchPhone || 0}
                        rules={{}}
                        name="phone"
                        entity="supplier"
                        displayField="phone"
                        label={"Số điện thoại nhà cung cấp"}
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
                    <Typography variant="h6">ĐƠN NHẬP</Typography>
                    <Button variant="contained" onClick={() => setIsOpenProductForm(true)}>
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
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="price"
                            label="Giá"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Giá theo sản phẩm là bắt buộc",
                                },
                                min: {
                                    value: 1,
                                    message: "Giá nhỏ nhất là 1VNĐ",
                                },
                                max: {
                                    value: 100000000,
                                    message: "Giá lớn nhất là 100.000.000VNĐ",
                                },
                            }}
                            fullWidth
                        />
                    ) : null}
                    {watchProductCode ? (
                        <NumberFormatInput
                            control={control}
                            required
                            name="quantity"
                            label="Số lượng mua"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Số lượng mua là bắt buộc",
                                },
                                min: {
                                    value: 1,
                                    message: "Số lượng nhỏ nhất là 1",
                                },
                                max: {
                                    value: 100000000,
                                    message: "Số lượng lớn nhất là 100.000.000",
                                },
                            }}
                            fullWidth
                        />
                    ) : null}
                    {watchProductCode ? (
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="buyTotal"
                            label="Thành tiền"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Thành tiền là bắt buộc",
                                },
                            }}
                            readOnly
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
                                <TableCell align="right">Thành tiền</TableCell>
                                <TableCell>Thao tác</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {importDetails?.map((x, i) => {
                                return (
                                    <TableRow key={x.importid}>
                                        <TableCell>{i + 1}</TableCell>
                                        <TableCell>{x.name}</TableCell>
                                        <TableCell align="right">
                                            {new Intl.NumberFormat("vi-VN", {
                                                style: "currency",
                                                currency: "VND",
                                            }).format(x.price || 0)}
                                        </TableCell>
                                        <TableCell align="right">{x.quantity}</TableCell>
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
                                                onClick={() => removeRecord(x.importid, x.total)}
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
                                <TableCell colSpan={4}>Tổng tiền</TableCell>
                                <TableCell align="right">
                                    {new Intl.NumberFormat("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    }).format(
                                        importDetails
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
                            message: "Thành tiền là bắt buộc",
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
                    label="Số tiền thanh toán"
                    rules={{
                        required: {
                            value: true,
                            message: "Số tiền thanh toán là bắt buộc",
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
                        setimportDetails([]);
                    }}
                >
                    {"Xóa dữ liệu"}
                </Button>
                <Button
                    disabled={importDetails.length === 0 || watchPhone === 0}
                    variant="contained"
                    onClick={() => {
                        if (watchPhone > 0 && importDetails.length > 0) {
                            const result = importDetails.reduce((res, obj) => {
                                (res as any)[obj.productid] = {
                                    quan:
                                        (obj.productid in res
                                            ? (res as any)[obj.productid].quan
                                            : 0) + obj.quantity,
                                    // root: obj.rootQuantity,
                                };
                                return res;
                            }, {});
                            const newArr = Object.keys(result).map((key: any) => {
                                return {
                                    productid: Number(key),
                                    quan: (result as any)[key].quan,
                                };
                            });
                            const today = new Date();
                            today.setHours(today.getHours() + 7);
                            mutate(
                                {
                                    object: {
                                        createTime: today.toISOString(),
                                        paymentTime: null,
                                        supplierid: watchPhone,
                                        status:
                                            (getValues("backMoney") || 0) < 0
                                                ? "NOT_PAID"
                                                : "NOT_PAY",
                                        backMoney: getValues("backMoney") || 0,
                                        pay: getValues("pay") || 0,
                                        total:
                                            importDetails
                                                .map((x) => x.total)
                                                .reduce((a, b) => a + b, 0) || 0,
                                        importdetails: {
                                            data: importDetails.map((x) => {
                                                return {
                                                    price: x.price,
                                                    productid: x.productid,
                                                    quantity: x.quantity,
                                                    total: x.total,
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
                                                        quantity: x.quan,
                                                    },
                                                };
                                            }),
                                        });
                                        showSnackbar({
                                            children: "Tạo thành công",
                                            severity: "success",
                                        });
                                        navigate("/bill-in", { replace: true });
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
                        importDetails.length === 0 ||
                        watchPhone === 0 ||
                        !watchMoney ||
                        watchMoney < (getValues("total") || 0)
                    }
                    color="success"
                    onClick={() => {
                        if (watchPhone > 0 && importDetails.length > 0) {
                            const result = importDetails.reduce((res, obj) => {
                                (res as any)[obj.productid] = {
                                    quan:
                                        (obj.productid in res
                                            ? (res as any)[obj.productid].quan
                                            : 0) + obj.quantity,
                                    // root: obj.rootQuantity,
                                };
                                return res;
                            }, {});
                            const newArr = Object.keys(result).map((key: any) => {
                                return {
                                    productid: Number(key),
                                    quan: (result as any)[key].quan,
                                };
                            });
                            if (newArr.length) {
                                const today = new Date();
                                today.setHours(today.getHours() + 7);
                                mutate(
                                    {
                                        object: {
                                            createTime: today.toISOString(),
                                            paymentTime: today.toISOString(),
                                            backMoney: getValues("backMoney"),
                                            pay: getValues("pay"),
                                            supplierid: watchPhone,
                                            status: "PAID",
                                            total:
                                                importDetails
                                                    .map((x) => x.total)
                                                    .reduce((a, b) => a + b, 0) || 0,
                                            importdetails: {
                                                data: importDetails.map((x) => {
                                                    return {
                                                        price: x.price,
                                                        productid: x.productid,
                                                        quantity: x.quantity,
                                                        total: x.total,
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
                                                            quantity: x.quan,
                                                        },
                                                    };
                                                }),
                                            });
                                            showSnackbar({
                                                children: "Tạo thành công",
                                                severity: "success",
                                            });
                                            navigate("/bill-in", { replace: true });
                                        },
                                    }
                                );
                            }
                        }
                    }}
                >
                    Thanh toán
                </Button>
            </Box>
        </Container>
    );
};

export default ImportForm;
