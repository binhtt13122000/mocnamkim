import React, { useCallback, useState } from "react";

import CellTableTypography from "src/components/CellTableTypography";
import ImportForm, { ImportMutationType } from "src/components/ImportUpdateForm";
import useSnackbar from "src/components/Snackbar/useSnackbar";
import CRUDTable from "src/components/Table";
import { IColumn } from "src/components/Table/models";

import useUpdateImport from "src/hooks/import/useUpdateImport";

const BillIn = () => {
    const initData: ImportMutationType = {
        id: 0,
        status: "",
        supplierid: 0,
        total: 0,
        backMoney: 0,
        pay: 0,
        paymentTime: "",
        createTime: "",
    };

    const { mutate: mutateUpdate } = useUpdateImport("ImportQuery");
    const showSnackbar = useSnackbar();
    const [data, setData] = useState<ImportMutationType>(initData);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const updateRowData = (rowData: ImportMutationType) => {
        if (rowData?.status === "PAID") {
            showSnackbar({
                children: "Không thể chỉnh sửa",
                severity: "error",
            });
            return;
        }
        const data: ImportMutationType = {
            status: rowData.status,
            id: rowData.id,
            supplierid: rowData.supplierid,
            total: rowData.total,
            backMoney: rowData.backMoney,
            createTime: rowData.createTime,
            pay: rowData.pay,
            paymentTime: rowData.paymentTime,
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
            width: "40px",
        },
        {
            field: "createTime",
            title: "Thời gian mua",
            index: 2,
            type: "timestamptz",
        },
        {
            field: "status",
            title: "Trạng thái",
            index: 3,
            type: "enum",
            enumValue: [
                {
                    value: "Chưa thanh toán",
                    key: "NOT_PAY",
                },
                {
                    value: "Đã thanh toán",
                    key: "PAID",
                },
                {
                    value: "Đang thanh toán",
                    key: "NOT_PAID",
                },
            ],
            render: (x) => {
                switch (x) {
                    case "NOT_PAY":
                        return <CellTableTypography>Chưa thanh toán</CellTableTypography>;
                    case "PAID":
                        return <CellTableTypography>Đã thanh toán</CellTableTypography>;
                    case "NOT_PAID":
                        return <CellTableTypography>Đang thanh toán</CellTableTypography>;
                    default:
                        return <CellTableTypography></CellTableTypography>;
                }
            },
        },
        {
            field: "supplier",
            title: "Nhà cung cấp",
            index: 4,
            type: "object",
            subField: "name",
            subFieldType: "string",
        },
        {
            field: "supplierid",
            title: "Khách hàng",
            index: 5,
            type: "number",
            disable: true,
        },
        {
            field: "total",
            title: "Thành tiền",
            index: 6,
            type: "number",
            render: (data) => {
                return (
                    <CellTableTypography>
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(data || 0)}
                    </CellTableTypography>
                );
            },
        },
        {
            field: "pay",
            title: "Tiền thanh toán",
            index: 7,
            type: "number",
            render: (data) => {
                return (
                    <CellTableTypography>
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(data || 0)}
                    </CellTableTypography>
                );
            },
        },
        {
            field: "backMoney",
            title: "Tiền hoàn",
            index: 8,
            type: "number",
            render: (data) => {
                return (
                    <CellTableTypography>
                        {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        }).format(data || 0)}
                    </CellTableTypography>
                );
            },
        },
        {
            field: "paymentTime",
            title: "Thời gian thanh toan",
            index: 9,
            disable: true,
            type: "timestamptz",
        },
    ];

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: ImportMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                    } else {
                        const today = new Date();
                        today.setHours(today.getHours() + 7);
                        mutateUpdate(
                            {
                                id: data.id,
                                _set: {
                                    supplierid: data.supplierid,
                                    status:
                                        data.backMoney === 0 ||
                                        (data.backMoney && data.backMoney > 0)
                                            ? "PAID"
                                            : "NOT_PAID",
                                    total: data.total,
                                    backMoney: data.backMoney,
                                    pay: data.pay,
                                    paymentTime: today.toISOString(),
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

    const viewRowData = (rowData: ImportMutationType) => {
        const data: ImportMutationType = {
            status: rowData.status,
            id: rowData.id,
            supplierid: rowData.supplierid,
            total: rowData.total,
            backMoney: rowData.backMoney,
            createTime: rowData.createTime,
            pay: rowData.pay,
            paymentTime: rowData.paymentTime,
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
            <ImportForm
                opened={isOpenForm}
                isView={isViewAction}
                data={data}
                handleClose={handleClose}
            />
            <CRUDTable
                queryKey="ImportQuery"
                columns={columns}
                title={"Quản lý hóa đơn nhập hàng"}
                entity="import"
                firstOrderField="id"
                sort
                typeOrder="desc"
                enableFilter
                maxWidth="100%"
                action={{
                    onView: (rowData: ImportMutationType) => viewRowData(rowData),
                    onEdit: (rowData: ImportMutationType) => updateRowData(rowData),
                }}
            />
        </>
    );
};

export default BillIn;
