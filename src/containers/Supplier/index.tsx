import React, { useCallback, useState } from "react";

import useSnackbar from "src/components/Snackbar/useSnackbar";
import SupplierForm, { SupplierMutationType } from "src/components/SupplierForm";
import CRUDTable from "src/components/Table";
import { IColumn } from "src/components/Table/models";

import useCreateSupplier from "src/hooks/supplier/useCreateSupplier";
import useUpdateSupplier from "src/hooks/supplier/useUpdateSupplier";

const Supplier = () => {
    const initData: SupplierMutationType = {
        id: 0,
        name: "",
        phone: "",
    };

    const { mutate: mutateCreate } = useCreateSupplier("SupplierQuery");
    const { mutate: mutateUpdate } = useUpdateSupplier("SupplierQuery");
    const showSnackbar = useSnackbar();
    const [data, setData] = useState<SupplierMutationType>(initData);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const addRowData = () => {
        setIsOpenForm(true);
        setData(initData);
    };
    const updateRowData = (rowData: SupplierMutationType) => {
        const data: SupplierMutationType = {
            name: rowData.name,
            id: rowData.id,
            phone: rowData.phone,
        };
        setIsOpenForm(true);
        setData(data);
    };

    const [isViewAction, setViewAction] = useState<boolean>(false);

    const columns: IColumn[] = [
        {
            field: "id",
            title: "STT",
            index: 1,
            type: "index",
            disableSort: true,
            disableFilter: true,
        },
        {
            field: "name",
            title: "Tên nhà cung cấp",
            index: 2,
            type: "string",
        },
        {
            field: "phone",
            title: "Số điện thoại",
            index: 3,
            type: "string",
        },
    ];

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
                                onSuccess: () => {
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
                    } else {
                        mutateUpdate(
                            {
                                id: data.id,
                                _set: {
                                    phone: data.phone,
                                    name: data.name,
                                },
                            },
                            {
                                onSuccess: () => {
                                    showSnackbar({
                                        children: "Chỉnh sửa thành công",
                                        severity: "success",
                                    });
                                },
                                onError: () => {
                                    showSnackbar({
                                        children: "Chỉnh sửa thất bại",
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
            resetData();
            setViewAction(false);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const viewRowData = (rowData: SupplierMutationType) => {
        const data: SupplierMutationType = {
            name: rowData.name,
            id: rowData.id,
            phone: rowData.phone,
        };
        setIsOpenForm(true);
        setData(data);
        setViewAction(true);
    };

    const resetData = () => {
        setData(initData);
        setIsOpenForm(false);
    };

    return (
        <>
            <SupplierForm
                opened={isOpenForm}
                isView={isViewAction}
                data={data}
                handleClose={handleClose}
            />
            <CRUDTable
                queryKey="SupplierQuery"
                columns={columns}
                title={"Quản lý nhà cung cấp"}
                entity="supplier"
                firstOrderField="id"
                sort
                enableFilter
                maxWidth="100%"
                action={{
                    onView: (rowData: SupplierMutationType) => viewRowData(rowData),
                    onAdd: () => addRowData(),
                    onEdit: (rowData: SupplierMutationType) => updateRowData(rowData),
                }}
            />
        </>
    );
};

export default Supplier;
