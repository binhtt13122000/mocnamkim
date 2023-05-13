import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateOrderMutation, CreateOrderMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateOrder = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<CreateOrderMutation, GraphQLErrorType, CreateOrderMutationVariables>(
        ["CreateOrder"],
        async (variable) => {
            const result = queryClient.request<CreateOrderMutation, CreateOrderMutationVariables>(
                gql`
                    mutation CreateOrder($object: Order_insert_input = {}) {
                        insert_Order_one(object: $object) {
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

export default useCreateOrder;
