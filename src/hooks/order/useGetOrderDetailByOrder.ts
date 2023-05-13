import { gql } from "graphql-request";
import { useQuery } from "react-query";
import {
    GetOrderDetailByOrderQuery,
    GetOrderDetailByOrderQueryVariables,
} from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetOrderdetailByOrder = (id: number) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetOrderDetailByOrderQuery, GetOrderDetailByOrderQueryVariables>(
        ["GetOrderdetailByProduct"],
        async () => {
            const result = queryClient.request<
                GetOrderDetailByOrderQuery,
                GetOrderDetailByOrderQueryVariables
            >(
                gql`
                    query GetOrderDetailByOrder($_eq: Int = 10) {
                        orderdetail(where: { orderid: { _eq: $_eq } }) {
                            id
                            productid
                            quantity
                            price
                            total
                            unitid
                            unit {
                                name
                            }
                            product {
                                name
                            }
                        }
                    }
                `,
                {
                    _eq: id,
                }
            );
            return result;
        },
        {
            enabled: Boolean(id),
        }
    );
    return result;
};

export default useGetOrderdetailByOrder;
