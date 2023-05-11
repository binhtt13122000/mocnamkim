import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateCategoryMutation, UpdateCategoryMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateCategory = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        UpdateCategoryMutation,
        GraphQLErrorType,
        UpdateCategoryMutationVariables
    >(
        ["UpdateCategory"],
        async (variable) => {
            const result = queryClient.request<
                UpdateCategoryMutation,
                UpdateCategoryMutationVariables
            >(
                gql`
                    mutation UpdateCategory($id: Int = 10, $_set: category_set_input = {}) {
                        update_category_by_pk(pk_columns: { id: $id }, _set: $_set) {
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

export default useUpdateCategory;
