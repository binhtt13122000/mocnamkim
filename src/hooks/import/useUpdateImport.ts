import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateImportMutation, UpdateImportMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateImport = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        UpdateImportMutation,
        GraphQLErrorType,
        UpdateImportMutationVariables
    >(
        ["UpdateImport"],
        async (variable) => {
            const result = queryClient.request<UpdateImportMutation, UpdateImportMutationVariables>(
                gql`
                    mutation UpdateImport($id: Int = 10, $_set: import_set_input = {}) {
                        update_import_by_pk(pk_columns: { id: $id }, _set: $_set) {
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

export default useUpdateImport;
