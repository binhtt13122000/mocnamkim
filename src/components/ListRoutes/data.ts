import artificial from "src/assets/ai.png";

export const routes = [
    {
        id: 1,
        name: "Tổng quan",
        path: "/home",
        icon: artificial,
    },
    {
        id: 2,
        name: "Bán hàng",
        path: "/sell",
        icon: artificial,
    },
    {
        id: 3,
        name: "Nhập hàng",
        path: "/sell",
        icon: artificial,
    },
    {
        id: 4,
        name: "Quản lí thu chi",
        path: "/invoice",
        icon: artificial,
    },
    {
        id: 5,
        name: "Quản lí hóa đơn",
        icon: artificial,
        children: [
            {
                id: 5.1,
                name: "Hóa đơn bán hàng",
                path: "/bill-out",
                icon: artificial,
            },
            {
                id: 5.2,
                name: "Hóa đơn nhập hàng",
                path: "/bill-in",
                icon: artificial,
            },
        ],
    },
    {
        id: 6,
        name: "Báo cáo",
        icon: artificial,
        children: [
            {
                id: 6.1,
                name: "Báo cáo 1",
                path: "/report1",
                icon: artificial,
            },
            {
                id: 6.2,
                name: "Báo cáo 2",
                path: "/report2",
                icon: artificial,
            },
        ],
    },
    {
        id: 7,
        name: "Dữ liệu chủ",
        icon: artificial,
        children: [
            {
                id: 7.1,
                name: "Sản Phẩm",
                path: "/products",
                icon: artificial,
            },
            {
                id: 7.2,
                name: "Loại Sản Phẩm",
                path: "/categories",
                icon: artificial,
            },
            {
                id: 7.3,
                name: "Khách hàng",
                path: "/customers",
                icon: artificial,
            },
            {
                id: 7.4,
                name: "Nhà cung cấp",
                path: "/suppliers",
                icon: artificial,
            },
        ],
    },
];
