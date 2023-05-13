import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { GetProductByPkQuery, GetProductByPkQueryVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetProductByPk = () => {
    const queryClient = useCustomQueryClient();
    const result = useMutation<GetProductByPkQuery, GraphQLErrorType, GetProductByPkQueryVariables>(
        ["GetProductByPk"],
        async (variavble) => {
            const result = queryClient.request<GetProductByPkQuery, GetProductByPkQueryVariables>(
                gql`
                    query GetProductByPk($id: Int = 10) {
                        product_by_pk(id: $id) {
                            id
                            quantity
                            name
                        }
                    }
                `,
                variavble
            );
            return result;
        }
    );
    return result;
};

export default useGetProductByPk;
