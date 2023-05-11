import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateProductMutation, UpdateProductMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateProduct = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        UpdateProductMutation,
        GraphQLErrorType,
        UpdateProductMutationVariables
    >(
        ["UpdateProduct"],
        async (variable) => {
            const result = queryClient.request<
                UpdateProductMutation,
                UpdateProductMutationVariables
            >(
                gql`
                    mutation UpdateProduct($id: Int = 10, $_set: product_set_input = {}) {
                        update_product_by_pk(pk_columns: { id: $id }, _set: $_set) {
                            id
                        }
                    }
                `,
                variable
            );
            return result;
        },
        {
            onSuccess: () => {
                cache.invalidateQueries(queryKey);
            },
        }
    );
    return result;
};

export default useUpdateProduct;
