import React, { useCallback, useState } from "react";

import CellTableTypography from "src/components/CellTableTypography";
import OrderForm, { OrderMutationType } from "src/components/OrderForm";
import useSnackbar from "src/components/Snackbar/useSnackbar";
import CRUDTable from "src/components/Table";
import { IColumn } from "src/components/Table/models";

import useUpdateOrder from "src/hooks/order/useUpdateOrder";

const BillOut = () => {
    const initData: OrderMutationType = {
        id: 0,
        status: "",
        customerid: 0,
        total: 0,
        backMoney: 0,
        pay: 0,
        paymentTime: "",
        createTime: "",
    };

    const { mutate: mutateUpdate } = useUpdateOrder("OrderQuery");
    const showSnackbar = useSnackbar();
    const [data, setData] = useState<OrderMutationType>(initData);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const updateRowData = (rowData: OrderMutationType) => {
        if (rowData?.status === "Đã thanh toán") {
            showSnackbar({
                children: "Không thể chỉnh sửa",
                severity: "error",
            });
            return;
        }
        const data: OrderMutationType = {
            status: rowData.status,
            id: rowData.id,
            customerid: rowData.customerid,
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
            disableFilter: true,
            type: "timestamp",
        },
        {
            field: "status",
            title: "Trạng thái",
            index: 3,
            type: "string",
        },
        {
            field: "customer",
            title: "Khách hàng",
            index: 4,
            type: "object",
            subField: "name",
            subFieldType: "string",
        },
        {
            field: "customerid",
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
            type: "timestamp",
        },
    ];

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: OrderMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                    } else {
                        mutateUpdate(
                            {
                                id: data.id,
                                _set: {
                                    customerid: data.customerid,
                                    status: "Đã thanh toán",
                                    total: data.total,
                                    backMoney: data.backMoney,
                                    pay: data.pay,
                                    paymentTime: new Date().toISOString(),
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

    const viewRowData = (rowData: OrderMutationType) => {
        const data: OrderMutationType = {
            status: rowData.status,
            id: rowData.id,
            customerid: rowData.customerid,
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
            <OrderForm
                opened={isOpenForm}
                isView={isViewAction}
                data={data}
                handleClose={handleClose}
            />
            <CRUDTable
                queryKey="OrderQuery"
                columns={columns}
                title={"Quản lý hóa đơn bán hàng"}
                entity="Order"
                firstOrderField="id"
                sort
                typeOrder="desc"
                enableFilter
                maxWidth="100%"
                action={{
                    onView: (rowData: OrderMutationType) => viewRowData(rowData),
                    onEdit: (rowData: OrderMutationType) => updateRowData(rowData),
                }}
            />
        </>
    );
};

export default BillOut;
