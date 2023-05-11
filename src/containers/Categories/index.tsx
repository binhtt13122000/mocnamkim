import React, { useCallback, useState } from "react";

import CategoryForm, { CategoryMutationType } from "src/components/CategoryForm";
import useSnackbar from "src/components/Snackbar/useSnackbar";
import CRUDTable from "src/components/Table";
import { IColumn } from "src/components/Table/models";

import useCreateCategory from "src/hooks/category/useCreateCategory";
import useDeleteCategory from "src/hooks/category/useDeleteCategory";
import useUpdateCategory from "src/hooks/category/useUpdateCategory";

const Category = () => {
    const initData: CategoryMutationType = {
        id: 0,
        name: "",
    };

    const { mutate: mutateCreate } = useCreateCategory("CategoryQuery");
    const { mutate: mutateUpdate } = useUpdateCategory("CategoryQuery");
    const { mutate: mutateDelete } = useDeleteCategory("CategoryQuery");
    const showSnackbar = useSnackbar();
    const [data, setData] = useState<CategoryMutationType>(initData);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const addRowData = () => {
        setIsOpenForm(true);
        setData(initData);
    };
    const updateRowData = (rowData: CategoryMutationType) => {
        const data: CategoryMutationType = {
            name: rowData.name,
            id: rowData.id,
        };
        setIsOpenForm(true);
        setData(data);
    };

    const deleteRowData = (rowData: CategoryMutationType) => {
        mutateDelete(
            {
                id: {
                    _eq: rowData.id || 0,
                },
            },
            {
                onSuccess: () => {
                    showSnackbar({
                        children: "Xóa thành công",
                        severity: "success",
                    });
                },
                onError: (e) => {
                    if (e?.response?.errors[0].extensions?.code === "constraint-violation") {
                        showSnackbar({
                            children: "Danh mục đang được sử dụng",
                            severity: "error",
                        });
                    } else
                        showSnackbar({
                            children: "Xóa thất bại",
                            severity: "error",
                        });
                },
            }
        );
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
            title: "Tên danh mục",
            index: 2,
            type: "string",
        },
    ];

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: CategoryMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                        mutateCreate(
                            {
                                object: {
                                    name: data.name,
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

    const viewRowData = (rowData: CategoryMutationType) => {
        const data: CategoryMutationType = {
            name: rowData.name,
            id: rowData.id,
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
            <CategoryForm
                opened={isOpenForm}
                isView={isViewAction}
                data={data}
                handleClose={handleClose}
            />
            <CRUDTable
                queryKey="CategoryQuery"
                columns={columns}
                title={"Quản lý danh mục"}
                entity="category"
                firstOrderField="id"
                sort
                enableFilter
                maxWidth="100%"
                action={{
                    onView: (rowData: CategoryMutationType) => viewRowData(rowData),
                    onAdd: () => addRowData(),
                    onEdit: (rowData: CategoryMutationType) => updateRowData(rowData),
                    onDeleteRecord: (rowData: CategoryMutationType) => deleteRowData(rowData),
                }}
            />
        </>
    );
};

export default Category;
