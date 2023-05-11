import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Unit } from "src/generated/graphql";
import { IForm } from "src/utils/common";

import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextfieldBase from "src/components/BaseTextField";
import CardContainer from "src/components/Card/Container";

import CustomizeAutocomplete from "../CustomizedAutocomplete";
import { CurrencyFormatInput, NumberFormatInput } from "../NumberInput";

export interface UnitMutationType {
    id?: Unit["id"];
    name: Unit["name"];
    price: Unit["price"];
    productid: Unit["productid"];
    ratio: Unit["ratio"];
}

const UnitForm: React.FC<IForm<UnitMutationType>> = (props: IForm<UnitMutationType>) => {
    const { data: defaultData, isView } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
        unregister,
        control,
    } = useForm<UnitMutationType>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("name", defaultData.name);
        setValue("price", defaultData.price);
        setValue("productid", defaultData.productid);
        setValue("ratio", defaultData.ratio);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<UnitMutationType> = async (data: UnitMutationType) => {
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
                                ? "Chi tiết đơn vị tính"
                                : "Chỉnh sửa đơn vị tính"
                            : "Tạo mới đơn vị tính"}
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
                            label={"Tên đơn vị tính"}
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
                                    message: "Tên đơn vị tính là bắt buộc!",
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
                        <CurrencyFormatInput
                            control={control}
                            required
                            name="price"
                            label="Giá theo đơn vị"
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
                        <NumberFormatInput
                            control={control}
                            required
                            name="ratio"
                            label="Đơn vị theo đơn vị gốc (đơn vị gốc = 1)"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Đơn vị là bắt buộc",
                                },
                                min: {
                                    value: 1,
                                    message: "Đơn vị nhỏ nhất là 1",
                                },
                                max: {
                                    value: 100000000,
                                    message: "Đơn vị lớn nhất là 100000000",
                                },
                            }}
                            fullWidth
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
                            defaultId={defaultData.productid || 0}
                            conditionField=""
                            control={control}
                            rules={{
                                min: {
                                    value: 1,
                                    message: "Danh mục là bắt buộc",
                                },
                            }}
                            readonly={isView}
                            name="productid"
                            entity="product"
                            displayField="name"
                            label={"Sản phẩm"}
                            fullWidth
                            required
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
                                {defaultData.id ? "Chỉnh sửa" : "Tạo mới"}
                            </Button>
                        )}
                    </Box>
                </Grid>
            </CardContainer>
        </Modal>
    );
};

export default React.memo(UnitForm);
