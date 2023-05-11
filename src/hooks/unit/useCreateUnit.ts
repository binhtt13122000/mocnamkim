import { gql } from "graphql-request";
import { useMutation, useQueryClient } from "react-query";
import { CreateUnitMutation, CreateUnitMutationVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useCreateUnit = (queryKey: string) => {
    const queryClient = useCustomQueryClient();
    const cache = useQueryClient();
    const result = useMutation<CreateUnitMutation, GraphQLErrorType, CreateUnitMutationVariables>(
        ["CreateUnit"],
        async (variable) => {
            const result = queryClient.request<CreateUnitMutation, CreateUnitMutationVariables>(
                gql`
                    mutation CreateUnit($object: unit_insert_input = {}) {
                        insert_unit_one(object: $object) {
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

export default useCreateUnit;
