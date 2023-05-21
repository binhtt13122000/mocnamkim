import React, { useCallback, useState } from "react";

import BwipJs from "bwip-js";

import CellTableTypography from "src/components/CellTableTypography";
import ProductForm, { ProductMutationType } from "src/components/ProductForm";
import useSnackbar from "src/components/Snackbar/useSnackbar";
import CRUDTable from "src/components/Table";
import { IColumn } from "src/components/Table/models";
import UnitForm, { UnitMutationType } from "src/components/UnitForm";

import useCreateProduct from "src/hooks/product/useCreateProduct";
import useUpdateProduct from "src/hooks/product/useUpdateProduct";
import useCreateUnit from "src/hooks/unit/useCreateUnit";
import useUpdateUnit from "src/hooks/unit/useUpdateUnit";

function removeAccents(str: string) {
    var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ",
        "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ",
    ];
    for (var i = 0; i < AccentsMap.length; i++) {
        var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
    }
    return str;
}

const Product = () => {
    const initData: ProductMutationType = {
        id: 0,
        name: "",
        origin: "Việt Nam",
        categoryid: 0,
        code: "",
        quantity: 0,
    };

    const initUnitData: UnitMutationType = {
        id: 0,
        name: "",
        price: 0,
        productid: 0,
        ratio: 0,
    };
    const [product, setProduct] = useState<ProductMutationType>(initData);

    const { mutate: mutateCreate } = useCreateProduct("ProductQuery");
    const { mutate: mutateUpdate } = useUpdateProduct("ProductQuery");
    const { mutate: mutateCreateUnit } = useCreateUnit("UnitProductQuery");
    const { mutate: mutateUpdateUnit } = useUpdateUnit("UnitProductQuery");
    const showSnackbar = useSnackbar();
    const [data, setData] = useState<ProductMutationType>(initData);
    const [dataUnit, setDataUnit] = useState<UnitMutationType>(initUnitData);
    const [isOpenForm, setIsOpenForm] = useState<boolean>(false);
    const [isOpenUnitForm, setIsOpenUnitForm] = useState<boolean>(false);
    const addRowData = () => {
        setIsOpenForm(true);
        setData(initData);
    };
    const addRowUnitData = (productId: number) => {
        setIsOpenUnitForm(true);
        if (productId > 0) {
            initUnitData.productid = productId;
        }
        setDataUnit(initUnitData);
    };
    const updateRowData = (rowData: ProductMutationType) => {
        const data: ProductMutationType = {
            name: rowData.name,
            id: rowData.id,
            categoryid: rowData.categoryid,
            code: rowData.code,
            origin: rowData.origin,
            quantity: rowData.quantity,
        };
        setIsOpenForm(true);
        setData(data);
    };

    const updateRowUnitData = (rowData: UnitMutationType, productId: number) => {
        const data: UnitMutationType = {
            name: rowData.name,
            id: rowData.id,
            price: rowData.price,
            productid: rowData.productid,
            ratio: rowData.ratio,
        };
        if (productId > 0) {
            data.productid = productId;
        }
        setIsOpenUnitForm(true);
        setDataUnit(data);
    };

    const [isViewAction, setViewAction] = useState<boolean>(false);
    const [isViewUnitAction, setViewUnitAction] = useState<boolean>(false);

    const columnUnits: IColumn[] = [
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
            field: "price",
            title: "Mã vạch",
            index: 2,
            type: "string",
            width: "100px",
            disableFilter: true,
            disableSort: true,
            // eslint-disable-next-line unused-imports/no-unused-vars
            render: (data, _, all) => {
                return (
                    <a
                        style={{ color: "green", cursor: "pointer" }}
                        onClick={(event) => {
                            let canvas = document.createElement("canvas");
                            let val = new Intl.NumberFormat("vi-VN", {
                                style: "currency",
                                currency: "VND",
                            }).format(data || 0);
                            try {
                                BwipJs.toCanvas(canvas, {
                                    bcid: "code128", // Barcode type
                                    text: String(
                                        `${product.code} - 1 ${removeAccents(all.name)} - ${String(
                                            val
                                        ).slice(0, val.length - 2)} VND`
                                    ), // Text to encode
                                    scale: 3, // 3x scaling factor
                                    // height: 10, // Bar height, in millimeters
                                    width: 15,
                                    includetext: true, // Show human-readable text
                                    textxalign: "center", // Always good to set this
                                });
                                if (canvas && canvas.toDataURL("image/png") && String(data)) {
                                    let link = event.currentTarget;
                                    link.setAttribute(
                                        "download",
                                        String(
                                            `${product.code} - 1 ${all.name} - ${String(val).slice(
                                                0,
                                                val.length - 2
                                            )} VND`
                                        ) + ".png"
                                    );
                                    let image = canvas.toDataURL("image/png");
                                    link.setAttribute("href", image);
                                }
                            } catch (e) {
                                // `e` may be a string or Error object
                            }
                        }}
                    >
                        IN MÃ
                    </a>
                );
            },
        },
        {
            field: "name",
            title: "Tên đơn vị",
            index: 3,
            type: "string",
        },
        {
            field: "ratio",
            title: "Quy đổi",
            index: 4,
            type: "number",
        },
        {
            field: "ratio",
            title: "Số lượng/Đơn Vị",
            index: 5,
            disableFilter: true,
            disableSort: true,
            type: "number",
            render: (data) => {
                return (
                    <CellTableTypography>{Math.floor(product.quantity / data)}</CellTableTypography>
                );
            },
        },
        {
            field: "price",
            title: "Giá tiền",
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
    ];

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
            field: "name",
            title: "Tên sản phẩm",
            index: 2,
            type: "string",
        },
        {
            field: "code",
            title: "Mã sản phẩm",
            index: 3,
            type: "string",
        },
        {
            field: "origin",
            title: "Nguồn Gốc",
            index: 4,
            type: "string",
        },
        {
            field: "category",
            title: "Danh mục",
            index: 5,
            type: "object",
            subField: "name",
            subFieldType: "string",
        },
        {
            field: "categoryid",
            title: "",
            index: 6,
            type: "number",
            disable: true,
        },
        {
            field: "quantity",
            title: "Số lượng (so với đơn vị gốc)",
            index: 7,
            type: "number",
        },
    ];

    const handleClose = useCallback(
        (type: "SAVE" | "CANCEL", data?: ProductMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                        mutateCreate(
                            {
                                object: {
                                    name: data.name,
                                    categoryid: data.categoryid,
                                    code: data.code,
                                    origin: data.origin,
                                    quantity: data.quantity,
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
                                    categoryid: data.categoryid,
                                    code: data.code,
                                    origin: data.origin,
                                    quantity: data.quantity,
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

    const handleCloseUnit = useCallback(
        (type: "SAVE" | "CANCEL", data?: UnitMutationType, clearErrors?: Function) => {
            if (type === "SAVE") {
                if (data) {
                    if (!data.id) {
                        data.id = undefined;
                        mutateCreateUnit(
                            {
                                object: {
                                    name: data.name,
                                    price: data.price,
                                    productid: data.productid,
                                    ratio: data.ratio,
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
                        mutateUpdateUnit(
                            {
                                id: data.id,
                                _set: {
                                    name: data.name,
                                    price: data.price,
                                    productid: data.productid,
                                    ratio: data.ratio,
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
            resetUnitData();
            setViewUnitAction(false);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );

    const viewUnitProfile = (rowData: ProductMutationType) => {
        const data: ProductMutationType = {
            id: rowData.id,
            name: rowData.name,
            categoryid: rowData.categoryid,
            code: rowData.code,
            origin: rowData.origin,
            quantity: rowData.quantity,
        };
        setProduct(data);
    };

    const viewRowData = (rowData: ProductMutationType) => {
        const data: ProductMutationType = {
            id: rowData.id,
            name: rowData.name,
            categoryid: rowData.categoryid,
            code: rowData.code,
            origin: rowData.origin,
            quantity: rowData.quantity,
        };
        setIsOpenForm(true);
        setData(data);
        setViewAction(true);
    };

    const resetData = () => {
        setData(initData);
        setIsOpenForm(false);
    };

    const resetUnitData = () => {
        setDataUnit(initUnitData);
        setIsOpenUnitForm(false);
    };

    return (
        <>
            <ProductForm
                opened={isOpenForm}
                isView={isViewAction}
                data={data}
                handleClose={handleClose}
            />
            <CRUDTable
                queryKey="ProductQuery"
                columns={columns}
                title={"Quản lý sản phẩm"}
                entity="product"
                firstOrderField="id"
                sort
                enableFilter
                maxWidth="100%"
                action={{
                    onView: (rowData: ProductMutationType) => viewRowData(rowData),
                    onAdd: () => addRowData(),
                    onEdit: (rowData: ProductMutationType) => updateRowData(rowData),
                    onChangeStatus: (rowData: ProductMutationType) => viewUnitProfile(rowData),
                }}
            />
            <UnitForm
                opened={isOpenUnitForm}
                isView={isViewUnitAction}
                data={dataUnit}
                handleClose={handleCloseUnit}
            />
            {product.id ? (
                <CRUDTable
                    queryKey="UnitProductQuery"
                    columns={columnUnits}
                    title={"Quản lý giá thành sản phẩm: " + product.name}
                    entity="unit"
                    firstOrderField="ratio"
                    sort
                    enableFilter
                    maxWidth="100%"
                    typeOrder="asc"
                    defaultFilter={`{productid: {_eq: ${product.id || 0}}}`}
                    defaultFilterForCount={`{productid: {_eq: ${product.id || 0}}}`}
                    action={{
                        onAdd: () => addRowUnitData(product.id || 0),
                        onEdit: (rowData: UnitMutationType) =>
                            updateRowUnitData(rowData, product.id || 0),
                    }}
                />
            ) : null}
        </>
    );
};

export default Product;
