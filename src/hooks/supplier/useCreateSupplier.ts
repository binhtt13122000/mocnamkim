import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateSupplierMutation, CreateSupplierMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateSupplier = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        CreateSupplierMutation,
        GraphQLErrorType,
        CreateSupplierMutationVariables
    >(
        ["CreateSupplier"],
        async (variable) => {
            const result = queryClient.request<
                CreateSupplierMutation,
                CreateSupplierMutationVariables
            >(
                gql`
                    mutation CreateSupplier($object: supplier_insert_input = {}) {
                        insert_supplier_one(object: $object) {
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

export default useCreateSupplier;
