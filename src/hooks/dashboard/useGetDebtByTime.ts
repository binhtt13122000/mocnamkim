import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetDebtByTimeQuery, GetDebtByTimeQueryVariables } from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetDebtByTime = (gte: string, lte: string) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetDebtByTimeQuery, GetDebtByTimeQueryVariables>(
        ["GetDebtByTime", gte, lte],
        async () => {
            const result = queryClient.request<GetDebtByTimeQuery, GetDebtByTimeQueryVariables>(
                gql`
                    query GetDebtByTime($_gte: timestamptz = "", $_lte: timestamptz = "") {
                        Order_aggregate(
                            where: {
                                createTime: { _gte: $_gte, _lte: $_lte }
                                backMoney: { _lt: 0 }
                            }
                        ) {
                            aggregate {
                                sum {
                                    backMoney
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

export default useGetDebtByTime;
