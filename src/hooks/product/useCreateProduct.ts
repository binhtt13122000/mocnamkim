import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateProductMutation, CreateProductMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateProduct = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        CreateProductMutation,
        GraphQLErrorType,
        CreateProductMutationVariables
    >(
        ["CreateProduct"],
        async (variable) => {
            const result = queryClient.request<
                CreateProductMutation,
                CreateProductMutationVariables
            >(
                gql`
                    mutation CreateProduct($object: product_insert_input = {}) {
                        insert_product_one(object: $object) {
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

export default useCreateProduct;
