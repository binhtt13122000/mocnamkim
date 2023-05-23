import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetProductByAmountQuery, GetProductByAmountQueryVariables } from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetProductByAmount = (start: string, end: string) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetProductByAmountQuery, GetProductByAmountQueryVariables>(
        ["GetProductByAmount", start, end],
        async () => {
            const result = queryClient.request<
                GetProductByAmountQuery,
                GetProductByAmountQueryVariables
            >(
                gql`
                    query GetProductByAmount($_gte: timestamptz = "", $_lte: timestamptz = "") {
                        product {
                            id
                            name
                            orderdetails_aggregate(
                                where: {
                                    Order: { createTime: { _gte: $_gte, _lte: $_lte }, status: {} }
                                }
                            ) {
                                aggregate {
                                    sum {
                                        total
                                    }
                                }
                            }
                        }
                    }
                `,
                {
                    _gte: start,
                    _lte: end,
                }
            );
            return result;
        }
    );
    return result;
};

export default useGetProductByAmount;
