import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetBillInByTimeQuery, GetBillInByTimeQueryVariables } from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetBillInByTime = (gte: string, lte: string, index?: number) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetBillInByTimeQuery, GetBillInByTimeQueryVariables>(
        ["GetBillInByTime" + index || "", gte, lte, index],
        async () => {
            const result = queryClient.request<GetBillInByTimeQuery, GetBillInByTimeQueryVariables>(
                gql`
                    query GetBillInByTime($_gte: timestamptz = "", $_lte: timestamptz = "") {
                        Order_aggregate(where: { createTime: { _gte: $_gte, _lte: $_lte } }) {
                            aggregate {
                                count
                                sum {
                                    total
                                    pay
                                }
                            }
                        }
                    }
                `,
                {
                    _gte: gte,
                    _lte: lte,
                }
            );
            return result;
        }
    );
    return result;
};

export default useGetBillInByTime;
