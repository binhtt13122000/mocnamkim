import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetDebtByTimeOutQuery, GetDebtByTimeOutQueryVariables } from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetDebtByTimeOut = (gte: string, lte: string) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetDebtByTimeOutQuery, GetDebtByTimeOutQueryVariables>(
        ["GetDebtByTimeOut", gte, lte],
        async () => {
            const result = queryClient.request<
                GetDebtByTimeOutQuery,
                GetDebtByTimeOutQueryVariables
            >(
                gql`
                    query GetDebtByTimeOut($_gte: timestamptz = "", $_lte: timestamptz = "") {
                        import_aggregate(
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

export default useGetDebtByTimeOut;
