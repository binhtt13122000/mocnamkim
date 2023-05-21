import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import {
    UpdateManyProductMutation,
    UpdateManyProductMutationVariables,
} from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateManyProduct = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        UpdateManyProductMutation,
        GraphQLErrorType,
        UpdateManyProductMutationVariables
    >(
        ["UpdateManyProduct"],
        async (variable) => {
            const result = queryClient.request<
                UpdateManyProductMutation,
                UpdateManyProductMutationVariables
            >(
                gql`
                    mutation UpdateManyProduct($updates: [product_updates!] = { where: {} }) {
                        update_product_many(updates: $updates) {
                            returning {
                                id
                            }
                            affected_rows
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

export default useUpdateManyProduct;
