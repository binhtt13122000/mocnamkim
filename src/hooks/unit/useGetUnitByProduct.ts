import { gql } from "graphql-request";
import { useQuery } from "react-query";
import { GetUnitByProductQuery, GetUnitByProductQueryVariables } from "src/generated/graphql";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetUnitByProduct = (id: number) => {
    const queryClient = useCustomQueryClient();
    const result = useQuery<GetUnitByProductQuery, GetUnitByProductQueryVariables>(
        ["GetUnitByProduct"],
        async () => {
            const result = queryClient.request<
                GetUnitByProductQuery,
                GetUnitByProductQueryVariables
            >(
                gql`
                    query GetUnitByProduct($_eq: Int = 10) {
                        unit(where: { productid: { _eq: $_eq } }, order_by: { ratio: asc }) {
                            id
                            name
                            ratio
                            price
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

export default useGetUnitByProduct;
