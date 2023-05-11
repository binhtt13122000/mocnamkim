import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateCustomerMutation, CreateCustomerMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateCustomer = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<
        CreateCustomerMutation,
        GraphQLErrorType,
        CreateCustomerMutationVariables
    >(
        ["CreateCustomer"],
        async (variable) => {
            const result = queryClient.request<
                CreateCustomerMutation,
                CreateCustomerMutationVariables
            >(
                gql`
                    mutation CreateCustomer($object: customer_insert_input = {}) {
                        insert_customer_one(object: $object) {
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

export default useCreateCustomer;
