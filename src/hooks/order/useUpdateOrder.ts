import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateOrderMutation, UpdateOrderMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateOrder = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<UpdateOrderMutation, GraphQLErrorType, UpdateOrderMutationVariables>(
        ["UpdateOrder"],
        async (variable) => {
            const result = queryClient.request<UpdateOrderMutation, UpdateOrderMutationVariables>(
                gql`
                    mutation UpdateOrder($id: Int = 10, $_set: Order_set_input = {}) {
                        update_Order_by_pk(pk_columns: { id: $id }, _set: $_set) {
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

export default useUpdateOrder;
