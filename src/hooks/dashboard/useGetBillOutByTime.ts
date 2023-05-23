import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetBillOutByTimeQuery, GetBillOutByTimeQueryVariables } from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetBillOutByTime = (gte: string, lte: string) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetBillOutByTimeQuery, GetBillOutByTimeQueryVariables>(
        ["GetBillOutByTime", gte, lte],
        async () => {
            const result = queryClient.request<
                GetBillOutByTimeQuery,
                GetBillOutByTimeQueryVariables
            >(
                gql`
                    query GetBillOutByTime($_gte: timestamptz = "", $_lte: timestamptz = "") {
                        import_aggregate(where: { createTime: { _gte: $_gte, _lte: $_lte } }) {
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

export default useGetBillOutByTime;
