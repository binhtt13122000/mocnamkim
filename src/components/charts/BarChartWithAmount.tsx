import { Chart, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";
import useGetProductByAmount from "src/hooks/dashboard/useGetProductByAmount";

Chart.register(CategoryScale, LinearScale, BarElement);

const BarChartWithAmount = ({ min, max }: { min: string; max: string }) => {
    const { data, isLoading } = useGetProductByAmount(min, max);

    if (isLoading) {
        return null;
    }
    return (
        <Bar
            data={{
                labels: data?.product
                    ?.filter((x) => x.orderdetails_aggregate?.aggregate?.sum?.total || 0)
                    .sort(
                        (a, b) =>
                            (b.orderdetails_aggregate.aggregate?.sum?.total || 0) -
                            (a.orderdetails_aggregate.aggregate?.sum?.total || 0)
                    )
                    .slice(0, 5)
                    .map((x) => x.name),
                datasets: [
                    {
                        label: "Số tiền",
                        indexAxis: "x" as "x" | "y",
                        data: data?.product
                            ?.filter((x) => x.orderdetails_aggregate?.aggregate?.sum?.total || 0)
                            .sort(
                                (a, b) =>
                                    (b.orderdetails_aggregate.aggregate?.sum?.total || 0) -
                                    (a.orderdetails_aggregate.aggregate?.sum?.total || 0)
                            )
                            .slice(0, 5)
                            .map((x) => x.orderdetails_aggregate?.aggregate?.sum?.total || 0),
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                            "rgba(255, 159, 64, 0.2)",
                            "rgba(255, 205, 86, 0.2)",
                            "rgba(75, 192, 192, 0.2)",
                            "rgba(54, 162, 235, 0.2)",
                            "rgba(153, 102, 255, 0.2)",
                            "rgba(201, 203, 207, 0.2)",
                        ],
                        borderColor: [
                            "rgb(255, 99, 132)",
                            "rgb(255, 159, 64)",
                            "rgb(255, 205, 86)",
                            "rgb(75, 192, 192)",
                            "rgb(54, 162, 235)",
                            "rgb(153, 102, 255)",
                            "rgb(201, 203, 207)",
                        ],
                        borderWidth: 1,
                    },
                ],
            }}
            options={{
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        align: "start",
                        text: "Top 5 sản phẩm bán chạy nhất theo số tiền",
                        font: {
                            size: 24,
                        },
                    },
                },
            }}
        />
    );
};

export default BarChartWithAmount;
