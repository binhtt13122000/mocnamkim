import { gql } from "graphql-request";
import { useQuery } from "react-query";
import {
    GetImportDetailByImportQuery,
    GetImportDetailByImportQueryVariables,
} from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetImportdetailByImport = (id: number) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetImportDetailByImportQuery, GetImportDetailByImportQueryVariables>(
        ["GetImportdetailByProduct"],
        async () => {
            const result = queryClient.request<
                GetImportDetailByImportQuery,
                GetImportDetailByImportQueryVariables
            >(
                gql`
                    query GetImportDetailByImport($_eq: Int = 10) {
                        importdetail(where: { importid: { _eq: $_eq } }) {
                            id
                            productid
                            quantity
                            price
                            total
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

export default useGetImportdetailByImport;
