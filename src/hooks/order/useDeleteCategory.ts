import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { DeleteCategoryMutation, DeleteCategoryMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useDeleteCategory = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        DeleteCategoryMutation,
        GraphQLErrorType,
        DeleteCategoryMutationVariables
    >(
        ["DeleteCategory"],
        async (variable) => {
            const result = queryClient.request<
                DeleteCategoryMutation,
                DeleteCategoryMutationVariables
            >(
                gql`
                    mutation DeleteCategory($id: Int_comparison_exp = {}) {
                        delete_category(where: { id: $id }) {
                            returning {
                                id
                            }
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

export default useDeleteCategory;
