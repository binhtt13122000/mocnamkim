import React from "react";

import { LastDayOfMonth } from "../Home";

import {
    Chart,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    SubTitle,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useGetBillInByTime from "src/hooks/dashboard/useGetBillInByTime";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, SubTitle, Tooltip);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
        title: {
            display: true,
            text: "Biểu đồ tổng quan doanh thu",
            align: "start" as "start" | "end" | "center",
            font: {
                size: 24,
            },
        },
        subtitle: {
            display: true,
            text: "Nhấn vào bất cứ điểm nào trên biểu đồ để xem chi tiết",
            align: "start" as "start" | "end" | "center",
            font: {
                size: 18,
            },
            padding: {
                bottom: 30,
            },
        },
    },
};

export const LineChartMonth = () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    const { data: t1 } = useGetBillInByTime(
        `${year}/${month}/01 00:00:00`,
        `${year}/${month}/01 23:59:59`,
        101
    );
    const { data: t2 } = useGetBillInByTime(
        `${year}/${month}/02 00:00:00`,
        `${year}/${month}/02 23:59:59`,
        102
    );
    const { data: t3 } = useGetBillInByTime(
        `${year}/${month}/03 00:00:00`,
        `${year}/${month}/03 23:59:59`,
        103
    );
    const { data: t4 } = useGetBillInByTime(
        `${year}/${month}/04 00:00:00`,
        `${year}/${month}/04 23:59:59`,
        104
    );
    const { data: t5 } = useGetBillInByTime(
        `${year}/${month}/05 00:00:00`,
        `${year}/${month}/05 23:59:59`,
        105
    );
    const { data: t6 } = useGetBillInByTime(
        `${year}/${month}/06 00:00:00`,
        `${year}/${month}/06 23:59:59`,
        106
    );
    const { data: t7 } = useGetBillInByTime(
        `${year}/${month}/07 00:00:00`,
        `${year}/${month}/07 23:59:59`,
        107
    );
    const { data: t8 } = useGetBillInByTime(
        `${year}/${month}/08 00:00:00`,
        `${year}/${month}/08 23:59:59`,
        108
    );
    const { data: t9 } = useGetBillInByTime(
        `${year}/${month}/09 00:00:00`,
        `${year}/${month}/09 23:59:59`,
        109
    );
    const { data: t10 } = useGetBillInByTime(
        `${year}/${month}/10 00:00:00`,
        `${year}/${month}/10 23:59:59`,
        110
    );
    const { data: t11 } = useGetBillInByTime(
        `${year}/${month}/11 00:00:00`,
        `${year}/${month}/11 23:59:59`,
        111
    );
    const { data: t12 } = useGetBillInByTime(
        `${year}/${month}/12 00:00:00`,
        `${year}/${month}/12 23:59:59`,
        112
    );
    const { data: t13 } = useGetBillInByTime(
        `${year}/${month}/13 00:00:00`,
        `${year}/${month}/13 23:59:59`,
        113
    );
    const { data: t14 } = useGetBillInByTime(
        `${year}/${month}/14 00:00:00`,
        `${year}/${month}/14 23:59:59`,
        114
    );
    const { data: t15 } = useGetBillInByTime(
        `${year}/${month}/15 00:00:00`,
        `${year}/${month}/15 23:59:59`,
        115
    );
    const { data: t16 } = useGetBillInByTime(
        `${year}/${month}/16 00:00:00`,
        `${year}/${month}/16 23:59:59`,
        116
    );
    const { data: t17 } = useGetBillInByTime(
        `${year}/${month}/17 00:00:00`,
        `${year}/${month}/17 23:59:59`,
        117
    );
    const { data: t18 } = useGetBillInByTime(
        `${year}/${month}/18 00:00:00`,
        `${year}/${month}/18 23:59:59`,
        118
    );
    const { data: t19 } = useGetBillInByTime(
        `${year}/${month}/19 00:00:00`,
        `${year}/${month}/19 23:59:59`,
        119
    );
    const { data: t20 } = useGetBillInByTime(
        `${year}/${month}/20 00:00:00`,
        `${year}/${month}/20 23:59:59`,
        120
    );
    const { data: t21 } = useGetBillInByTime(
        `${year}/${month}/21 00:00:00`,
        `${year}/${month}/21 23:59:59`,
        121
    );
    const { data: t22 } = useGetBillInByTime(
        `${year}/${month}/22 00:00:00`,
        `${year}/${month}/22 23:59:59`,
        122
    );
    const { data: t23 } = useGetBillInByTime(
        `${year}/${month}/23 00:00:00`,
        `${year}/${month}/23 23:59:59`,
        123
    );
    const { data: t24 } = useGetBillInByTime(
        `${year}/${month}/24 00:00:00`,
        `${year}/${month}/24 23:59:59`,
        124
    );
    const { data: t25 } = useGetBillInByTime(
        `${year}/${month}/25 00:00:00`,
        `${year}/${month}/25 23:59:59`,
        125
    );
    const { data: t26 } = useGetBillInByTime(
        `${year}/${month}/26 00:00:00`,
        `${year}/${month}/26 23:59:59`,
        126
    );
    const { data: t27 } = useGetBillInByTime(
        `${year}/${month}/27 00:00:00`,
        `${year}/${month}/27 23:59:59`,
        127
    );
    const { data: t28 } = useGetBillInByTime(
        `${year}/${month}/28 00:00:00`,
        `${year}/${month}/28 23:59:59`,
        128
    );
    const { data: t29 } = useGetBillInByTime(
        `${year}/${month}/29 00:00:00`,
        `${year}/${month}/29 23:59:59`,
        129
    );
    const { data: t30 } = useGetBillInByTime(
        `${year}/${month}/30 00:00:00`,
        `${year}/${month}/30 23:59:59`,
        130
    );
    const { data: t31 } = useGetBillInByTime(
        `${year}/${month}/31 00:00:00`,
        `${year}/${month}/31 23:59:59`,
        131
    );

    const labelInMonth: string[] = Array.from({ length: LastDayOfMonth(year, month) }, (_, i) =>
        String("t" + (i + 1))
    );

    const monthWith31 = [
        t1?.Order_aggregate.aggregate?.sum?.total || 0,
        t2?.Order_aggregate.aggregate?.sum?.total || 0,
        t3?.Order_aggregate.aggregate?.sum?.total || 0,
        t4?.Order_aggregate.aggregate?.sum?.total || 0,
        t5?.Order_aggregate.aggregate?.sum?.total || 0,
        t6?.Order_aggregate.aggregate?.sum?.total || 0,
        t7?.Order_aggregate.aggregate?.sum?.total || 0,
        t8?.Order_aggregate.aggregate?.sum?.total || 0,
        t9?.Order_aggregate.aggregate?.sum?.total || 0,
        t10?.Order_aggregate.aggregate?.sum?.total || 0,
        t11?.Order_aggregate.aggregate?.sum?.total || 0,
        t12?.Order_aggregate.aggregate?.sum?.total || 0,
        t13?.Order_aggregate.aggregate?.sum?.total || 0,
        t14?.Order_aggregate.aggregate?.sum?.total || 0,
        t15?.Order_aggregate.aggregate?.sum?.total || 0,
        t16?.Order_aggregate.aggregate?.sum?.total || 0,
        t17?.Order_aggregate.aggregate?.sum?.total || 0,
        t18?.Order_aggregate.aggregate?.sum?.total || 0,
        t19?.Order_aggregate.aggregate?.sum?.total || 0,
        t20?.Order_aggregate.aggregate?.sum?.total || 0,
        t21?.Order_aggregate.aggregate?.sum?.total || 0,
        t22?.Order_aggregate.aggregate?.sum?.total || 0,
        t23?.Order_aggregate.aggregate?.sum?.total || 0,
        t24?.Order_aggregate.aggregate?.sum?.total || 0,
        t25?.Order_aggregate.aggregate?.sum?.total || 0,
        t26?.Order_aggregate.aggregate?.sum?.total || 0,
        t27?.Order_aggregate.aggregate?.sum?.total || 0,
        t28?.Order_aggregate.aggregate?.sum?.total || 0,
        t29?.Order_aggregate.aggregate?.sum?.total || 0,
        t30?.Order_aggregate.aggregate?.sum?.total || 0,
        t31?.Order_aggregate.aggregate?.sum?.total || 0,
    ];

    const monthWith30 = [
        t1?.Order_aggregate.aggregate?.sum?.total || 0,
        t2?.Order_aggregate.aggregate?.sum?.total || 0,
        t3?.Order_aggregate.aggregate?.sum?.total || 0,
        t4?.Order_aggregate.aggregate?.sum?.total || 0,
        t5?.Order_aggregate.aggregate?.sum?.total || 0,
        t6?.Order_aggregate.aggregate?.sum?.total || 0,
        t7?.Order_aggregate.aggregate?.sum?.total || 0,
        t8?.Order_aggregate.aggregate?.sum?.total || 0,
        t9?.Order_aggregate.aggregate?.sum?.total || 0,
        t10?.Order_aggregate.aggregate?.sum?.total || 0,
        t11?.Order_aggregate.aggregate?.sum?.total || 0,
        t12?.Order_aggregate.aggregate?.sum?.total || 0,
        t13?.Order_aggregate.aggregate?.sum?.total || 0,
        t14?.Order_aggregate.aggregate?.sum?.total || 0,
        t15?.Order_aggregate.aggregate?.sum?.total || 0,
        t16?.Order_aggregate.aggregate?.sum?.total || 0,
        t17?.Order_aggregate.aggregate?.sum?.total || 0,
        t18?.Order_aggregate.aggregate?.sum?.total || 0,
        t19?.Order_aggregate.aggregate?.sum?.total || 0,
        t20?.Order_aggregate.aggregate?.sum?.total || 0,
        t21?.Order_aggregate.aggregate?.sum?.total || 0,
        t22?.Order_aggregate.aggregate?.sum?.total || 0,
        t23?.Order_aggregate.aggregate?.sum?.total || 0,
        t24?.Order_aggregate.aggregate?.sum?.total || 0,
        t25?.Order_aggregate.aggregate?.sum?.total || 0,
        t26?.Order_aggregate.aggregate?.sum?.total || 0,
        t27?.Order_aggregate.aggregate?.sum?.total || 0,
        t28?.Order_aggregate.aggregate?.sum?.total || 0,
        t29?.Order_aggregate.aggregate?.sum?.total || 0,
        t30?.Order_aggregate.aggregate?.sum?.total || 0,
    ];

    const monthWith29 = [
        t1?.Order_aggregate.aggregate?.sum?.total || 0,
        t2?.Order_aggregate.aggregate?.sum?.total || 0,
        t3?.Order_aggregate.aggregate?.sum?.total || 0,
        t4?.Order_aggregate.aggregate?.sum?.total || 0,
        t5?.Order_aggregate.aggregate?.sum?.total || 0,
        t6?.Order_aggregate.aggregate?.sum?.total || 0,
        t7?.Order_aggregate.aggregate?.sum?.total || 0,
        t8?.Order_aggregate.aggregate?.sum?.total || 0,
        t9?.Order_aggregate.aggregate?.sum?.total || 0,
        t10?.Order_aggregate.aggregate?.sum?.total || 0,
        t11?.Order_aggregate.aggregate?.sum?.total || 0,
        t12?.Order_aggregate.aggregate?.sum?.total || 0,
        t13?.Order_aggregate.aggregate?.sum?.total || 0,
        t14?.Order_aggregate.aggregate?.sum?.total || 0,
        t15?.Order_aggregate.aggregate?.sum?.total || 0,
        t16?.Order_aggregate.aggregate?.sum?.total || 0,
        t17?.Order_aggregate.aggregate?.sum?.total || 0,
        t18?.Order_aggregate.aggregate?.sum?.total || 0,
        t19?.Order_aggregate.aggregate?.sum?.total || 0,
        t20?.Order_aggregate.aggregate?.sum?.total || 0,
        t21?.Order_aggregate.aggregate?.sum?.total || 0,
        t22?.Order_aggregate.aggregate?.sum?.total || 0,
        t23?.Order_aggregate.aggregate?.sum?.total || 0,
        t24?.Order_aggregate.aggregate?.sum?.total || 0,
        t25?.Order_aggregate.aggregate?.sum?.total || 0,
        t26?.Order_aggregate.aggregate?.sum?.total || 0,
        t27?.Order_aggregate.aggregate?.sum?.total || 0,
        t28?.Order_aggregate.aggregate?.sum?.total || 0,
        t29?.Order_aggregate.aggregate?.sum?.total || 0,
    ];

    const monthWith28 = [
        t1?.Order_aggregate.aggregate?.sum?.total || 0,
        t2?.Order_aggregate.aggregate?.sum?.total || 0,
        t3?.Order_aggregate.aggregate?.sum?.total || 0,
        t4?.Order_aggregate.aggregate?.sum?.total || 0,
        t5?.Order_aggregate.aggregate?.sum?.total || 0,
        t6?.Order_aggregate.aggregate?.sum?.total || 0,
        t7?.Order_aggregate.aggregate?.sum?.total || 0,
        t8?.Order_aggregate.aggregate?.sum?.total || 0,
        t9?.Order_aggregate.aggregate?.sum?.total || 0,
        t10?.Order_aggregate.aggregate?.sum?.total || 0,
        t11?.Order_aggregate.aggregate?.sum?.total || 0,
        t12?.Order_aggregate.aggregate?.sum?.total || 0,
        t13?.Order_aggregate.aggregate?.sum?.total || 0,
        t14?.Order_aggregate.aggregate?.sum?.total || 0,
        t15?.Order_aggregate.aggregate?.sum?.total || 0,
        t16?.Order_aggregate.aggregate?.sum?.total || 0,
        t17?.Order_aggregate.aggregate?.sum?.total || 0,
        t18?.Order_aggregate.aggregate?.sum?.total || 0,
        t19?.Order_aggregate.aggregate?.sum?.total || 0,
        t20?.Order_aggregate.aggregate?.sum?.total || 0,
        t21?.Order_aggregate.aggregate?.sum?.total || 0,
        t22?.Order_aggregate.aggregate?.sum?.total || 0,
        t23?.Order_aggregate.aggregate?.sum?.total || 0,
        t24?.Order_aggregate.aggregate?.sum?.total || 0,
        t25?.Order_aggregate.aggregate?.sum?.total || 0,
        t26?.Order_aggregate.aggregate?.sum?.total || 0,
        t27?.Order_aggregate.aggregate?.sum?.total || 0,
        t28?.Order_aggregate.aggregate?.sum?.total || 0,
    ];

    const dataset = () => {
        const check = LastDayOfMonth(year, month);
        switch (check) {
            case 28:
                return monthWith28;
            case 29:
                return monthWith29;
            case 30:
                return monthWith30;
            case 31:
                return monthWith31;
            default:
                break;
        }
    };

    return (
        <Line
            options={options}
            data={{
                labels: labelInMonth,
                datasets: [
                    {
                        data: dataset(),
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                ],
            }}
        />
    );
};
