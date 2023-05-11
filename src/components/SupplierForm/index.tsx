import React, { useEffect } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { Supplier } from "src/generated/graphql";
import { IForm } from "src/utils/common";

import { Button, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TextfieldBase from "src/components/BaseTextField";
import CardContainer from "src/components/Card/Container";

export interface SupplierMutationType {
    id?: Supplier["id"];
    name: Supplier["name"];
    phone: Supplier["phone"];
}

const SupplierForm: React.FC<IForm<SupplierMutationType>> = (
    props: IForm<SupplierMutationType>
) => {
    const { data: defaultData, isView } = props;
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        getValues,
        clearErrors,
        unregister,
    } = useForm<SupplierMutationType>({});

    useEffect(() => {
        setValue("id", defaultData.id);
        setValue("name", defaultData.name);
        setValue("phone", defaultData.phone);
    }, [defaultData, setValue]);

    const submitHandler: SubmitHandler<SupplierMutationType> = async (
        data: SupplierMutationType
    ) => {
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
                                ? "Chi tiết nhà cung cấp"
                                : "Chỉnh sửa nhà cung cấp"
                            : "Tạo mới nhà cung cấp"}
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
                            label={"Tên nhà cung cấp"}
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
                                    message: "Tên nhà cung cấp là bắt buộc!",
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
                            id="phone"
                            label={"Số điện thoại"}
                            variant="outlined"
                            InputProps={{
                                readOnly: isView,
                            }}
                            required
                            fullWidth
                            error={!!errors.phone}
                            helperText={errors.phone && errors.phone.message}
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Số điện thoại là bắt buộc!",
                                },
                                onBlur: () =>
                                    setValue(
                                        "phone",
                                        getValues("phone")
                                            ? getValues("phone").trim()
                                            : getValues("phone")
                                    ),
                            })}
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

export default React.memo(SupplierForm);
