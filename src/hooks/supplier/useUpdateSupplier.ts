import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateSupplierMutation, UpdateSupplierMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateSupplier = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        UpdateSupplierMutation,
        GraphQLErrorType,
        UpdateSupplierMutationVariables
    >(
        ["UpdateSupplier"],
        async (variable) => {
            const result = queryClient.request<
                UpdateSupplierMutation,
                UpdateSupplierMutationVariables
            >(
                gql`
                    mutation UpdateSupplier($id: Int = 10, $_set: supplier_set_input = {}) {
                        update_supplier_by_pk(pk_columns: { id: $id }, _set: $_set) {
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

export default useUpdateSupplier;
