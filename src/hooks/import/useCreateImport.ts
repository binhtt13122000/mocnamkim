import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateImportMutation, CreateImportMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateImport = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        CreateImportMutation,
        GraphQLErrorType,
        CreateImportMutationVariables
    >(
        ["CreateImport"],
        async (variable) => {
            const result = queryClient.request<CreateImportMutation, CreateImportMutationVariables>(
                gql`
                    mutation CreateImport($object: import_insert_input = {}) {
                        insert_import_one(object: $object) {
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

export default useCreateImport;
