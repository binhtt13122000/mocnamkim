import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateCustomerMutation, UpdateCustomerMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateCustomer = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        UpdateCustomerMutation,
        GraphQLErrorType,
        UpdateCustomerMutationVariables
    >(
        ["UpdateCustomer"],
        async (variable) => {
            const result = queryClient.request<
                UpdateCustomerMutation,
                UpdateCustomerMutationVariables
            >(
                gql`
                    mutation UpdateCustomer($id: Int = 10, $_set: customer_set_input = {}) {
                        update_customer_by_pk(pk_columns: { id: $id }, _set: $_set) {
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

export default useUpdateCustomer;
