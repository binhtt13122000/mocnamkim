import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Product } from "src/generated/graphql";
import { IForm } from "src/utils/common";

import {
    Button,
    Grid,
    MenuItem,
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
import TextfieldBase from "src/components/BaseTextField";
import CardContainer from "src/components/Card/Container";

import CustomizeAutocomplete from "../CustomizedAutocomplete";
import ReactHookFormSelect from "../SelectBase";

import useGetUnitByProduct from "src/hooks/unit/useGetUnitByProduct";

export interface ProductMutationType {
    id?: Product["id"];
    name: Product["name"];
    categoryid: Product["categoryid"];
    code: Product["code"];
    quantity: Product["quantity"];
    origin: Product["origin"];
}

const ProductForm: React.FC<IForm<ProductMutationType>> = (props: IForm<ProductMutationType>) => {
    const { data: defaultData, isView } = props;
    const { data: unitData } = useGetUnitByProduct(defaultData.id || 0);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
        unregister,
        control,
    } = useForm<ProductMutationType>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("name", defaultData.name);
        setValue("categoryid", defaultData.categoryid);
        setValue("code", defaultData.code);
        setValue("quantity", defaultData.quantity);
        setValue("origin", defaultData.origin);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<ProductMutationType> = async (data: ProductMutationType) => {
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
                                ? "Chi tiết sản phẩm"
                                : "Chỉnh sửa sản phẩm"
                            : "Tạo mới sản phẩm"}
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
                            label={"Tên sản phẩm"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            fullWidth
                            error={!!errors.name}
                            helperText={errors.name && errors.name.message}
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Tên sản phẩm là bắt buộc!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "name",
                                        getValues("name")
                                            ? getValues("name").trim()
                                            : getValues("name")
                                    ),
                            })}
                        />
                        <TextfieldBase
                            id="code"
                            label={"Mã sản phẩm"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            fullWidth
                            error={!!errors.code}
                            helperText={errors.code && errors.code.message}
                            {...register("code", {
                                required: {
                                    value: true,
                                    message: "Mã sản phẩm là bắt buộc!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "code",
                                        getValues("code")
                                            ? getValues("code").trim()
                                            : getValues("code")
                                    ),
                            })}
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
                        <ReactHookFormSelect
                            fullWidth
                            control={control}
                            label="Nguồn gốc"
                            name="origin"
                            readOnly={isView}
                        >
                            <MenuItem value={"Việt Nam"}>Việt Nam</MenuItem>
                            <MenuItem value={"Trung Quốc"}>Trung Quốc</MenuItem>
                            <MenuItem value={"Hàn Quốc"}>Hàn Quốc</MenuItem>
                        </ReactHookFormSelect>
                        <CustomizeAutocomplete
                            defaultId={!!defaultData.id ? defaultData.categoryid || 0 : undefined}
                            conditionField=""
                            control={control}
                            rules={{
                                min: {
                                    value: 1,
                                    message: "Danh mục là bắt buộc",
                                },
                            }}
                            readonly={isView}
                            name="categoryid"
                            entity="category"
                            displayField="name"
                            label={"Danh mục"}
                            fullWidth
                            required
                        />
                    </Grid>
                    {isView && (
                        <TableContainer>
                            <Table sx={{ maxWidth: "100%" }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>STT</TableCell>
                                        <TableCell>Tên đơn vị</TableCell>
                                        <TableCell>Quy đổi</TableCell>
                                        <TableCell>Số lượng/Đơn vị</TableCell>
                                        <TableCell>Giá tiền</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {unitData?.unit?.map((x, i) => {
                                        return (
                                            <TableRow key={x.id}>
                                                <TableCell>{i + 1}</TableCell>
                                                <TableCell>{x.name}</TableCell>
                                                <TableCell>{x.ratio}</TableCell>
                                                <TableCell>
                                                    {Math.floor(defaultData.quantity / x.ratio)}
                                                </TableCell>
                                                <TableCell>
                                                    {new Intl.NumberFormat("vi-VN", {
                                                        style: "currency",
                                                        currency: "VND",
                                                    }).format(x.price || 0)}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    )}

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
                                {defaultData.id ? "Chỉnh sửa" : "Tạo mới"}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </CardContainer>
        </Modal>
    );
};

export default React.memo(ProductForm);
