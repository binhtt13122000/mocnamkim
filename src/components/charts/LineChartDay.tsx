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

const labels: string[] = [
    "0h",
    "1h",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "11h",
    "12h",
    "13h",
    "14h",
    "15h",
    "16h",
    "17h",
    "18h",
    "19h",
    "20h",
    "21h",
    "22h",
    "23h",
];

// const daysInMonth = (month: number, year: number) => {
//     // Use 1 for January, 2 for February, etc.
//     return new Date(year, month, 0).getDate();
// };

export const LineChartDay = () => {
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const day = new Date().getDate();

    const { data: t1 } = useGetBillInByTime(
        `${year}/${month}/${day} 00:00:00`,
        `${year}/${month}/${day} 01:00:00`,
        201
    );
    const { data: t2 } = useGetBillInByTime(
        `${year}/${month}/${day} 01:00:00`,
        `${year}/${month}/${day} 02:00:00`,
        202
    );
    const { data: t3 } = useGetBillInByTime(
        `${year}/${month}/${day} 02:00:00`,
        `${year}/${month}/${day} 03:00:00`,
        203
    );
    const { data: t4 } = useGetBillInByTime(
        `${year}/${month}/${day} 03:00:00`,
        `${year}/${month}/${day} 04:00:00`,
        204
    );
    const { data: t5 } = useGetBillInByTime(
        `${year}/${month}/${day} 04:00:00`,
        `${year}/${month}/${day} 05:00:00`,
        205
    );
    const { data: t6 } = useGetBillInByTime(
        `${year}/${month}/${day} 05:00:00`,
        `${year}/${month}/${day} 06:00:00`,
        206
    );
    const { data: t7 } = useGetBillInByTime(
        `${year}/${month}/${day} 06:00:00`,
        `${year}/${month}/${day} 07:00:00`,
        207
    );
    const { data: t8 } = useGetBillInByTime(
        `${year}/${month}/${day} 07:00:00`,
        `${year}/${month}/${day} 08:00:00`,
        208
    );
    const { data: t9 } = useGetBillInByTime(
        `${year}/${month}/${day} 08:00:00`,
        `${year}/${month}/${day} 09:00:00`,
        209
    );
    const { data: t10 } = useGetBillInByTime(
        `${year}/${month}/${day} 09:00:00`,
        `${year}/${month}/${day} 10:00:00`,
        210
    );
    const { data: t11 } = useGetBillInByTime(
        `${year}/${month}/${day} 10:00:00`,
        `${year}/${month}/${day} 11:00:00`,
        211
    );
    const { data: t12 } = useGetBillInByTime(
        `${year}/${month}/${day} 11:00:00`,
        `${year}/${month}/${day} 12:00:00`,
        212
    );
    const { data: t13 } = useGetBillInByTime(
        `${year}/${month}/${day} 12:00:00`,
        `${year}/${month}/${day} 13:00:00`,
        213
    );
    const { data: t14 } = useGetBillInByTime(
        `${year}/${month}/${day} 13:00:00`,
        `${year}/${month}/${day} 14:00:00`,
        214
    );
    const { data: t15 } = useGetBillInByTime(
        `${year}/${month}/${day} 14:00:00`,
        `${year}/${month}/${day} 15:00:00`,
        215
    );
    const { data: t16 } = useGetBillInByTime(
        `${year}/${month}/${day} 15:00:00`,
        `${year}/${month}/${day} 16:00:00`,
        216
    );
    const { data: t17 } = useGetBillInByTime(
        `${year}/${month}/${day} 16:00:00`,
        `${year}/${month}/${day} 17:00:00`,
        217
    );
    const { data: t18 } = useGetBillInByTime(
        `${year}/${month}/${day} 17:00:00`,
        `${year}/${month}/${day} 18:00:00`,
        218
    );
    const { data: t19 } = useGetBillInByTime(
        `${year}/${month}/${day} 18:00:00`,
        `${year}/${month}/${day} 19:00:00`,
        219
    );
    const { data: t20 } = useGetBillInByTime(
        `${year}/${month}/${day} 19:00:00`,
        `${year}/${month}/${day} 20:00:00`,
        220
    );
    const { data: t21 } = useGetBillInByTime(
        `${year}/${month}/${day} 20:00:00`,
        `${year}/${month}/${day} 21:00:00`,
        221
    );
    const { data: t22 } = useGetBillInByTime(
        `${year}/${month}/${day} 21:00:00`,
        `${year}/${month}/${day} 22:00:00`,
        222
    );
    const { data: t23 } = useGetBillInByTime(
        `${year}/${month}/${day} 22:00:00`,
        `${year}/${month}/${day} 23:00:00`,
        223
    );
    return (
        <Line
            options={options}
            data={{
                labels,
                datasets: [
                    {
                        data: [
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
                        ].filter((_, i) => i < new Date().getHours()),
                        borderColor: "rgb(53, 162, 235)",
                        backgroundColor: "rgba(53, 162, 235, 0.5)",
                    },
                ],
            }}
        />
    );
};
