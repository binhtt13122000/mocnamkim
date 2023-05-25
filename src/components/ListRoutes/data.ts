export const routes = [
    {
        id: 1,
        name: "Tổng quan",
        path: "/home",
    },
    {
        id: 2,
        name: "Bán hàng",
        path: "/sell",
    },
    {
        id: 3,
        name: "Nhập hàng",
        path: "/import",
    },
    {
        id: 4,
        name: "Quản lí hóa đơn",
        children: [
            {
                id: 5.1,
                name: "Hóa đơn bán hàng",
                path: "/bill-out",
            },
            {
                id: 5.2,
                name: "Hóa đơn nhập hàng",
                path: "/bill-in",
            },
        ],
    },
    {
        id: 5,
        name: "Báo cáo",
        children: [
            {
                id: 5.1,
                name: "Báo cáo 1",
                path: "/login",
            },
            {
                id: 5.2,
                name: "Báo cáo 2",
                path: "/report2",
            },
        ],
    },
    {
        id: 6,
        name: "Dữ liệu chủ",
        children: [
            {
                id: 6.1,
                name: "Sản Phẩm",
                path: "/products",
            },
            {
                id: 6.2,
                name: "Loại Sản Phẩm",
                path: "/categories",
            },
            {
                id: 6.3,
                name: "Khách hàng",
                path: "/customers",
            },
            {
                id: 6.4,
                name: "Nhà cung cấp",
                path: "/suppliers",
            },
        ],
    },
];
