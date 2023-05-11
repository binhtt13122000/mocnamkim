import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateCategoryMutation, CreateCategoryMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateCategory = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        CreateCategoryMutation,
        GraphQLErrorType,
        CreateCategoryMutationVariables
    >(
        ["CreateCategory"],
        async (variable) => {
            const result = queryClient.request<
                CreateCategoryMutation,
                CreateCategoryMutationVariables
            >(
                gql`
                    mutation CreateCategory($object: category_insert_input = {}) {
                        insert_category_one(object: $object) {
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

export default useCreateCategory;
