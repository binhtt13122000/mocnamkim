import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { UpdateUnitMutation, UpdateUnitMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useUpdateUnit = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<UpdateUnitMutation, GraphQLErrorType, UpdateUnitMutationVariables>(
        ["UpdateUnit"],
        async (variable) => {
            const result = queryClient.request<UpdateUnitMutation, UpdateUnitMutationVariables>(
                gql`
                    mutation UpdateUnit($id: Int = 10, $_set: unit_set_input = {}) {
                        update_unit_by_pk(pk_columns: { id: $id }, _set: $_set) {
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

export default useUpdateUnit;
