import { gql } from "graphql-request";
import { useMutation } from "react-query";
import { GetUnitByPkQuery, GetUnitByPkQueryVariables } from "src/generated/graphql";
import { GraphQLErrorType } from "src/utils/common";

import useCustomQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetUnitByPk = () => {
    const queryClient = useCustomQueryClient();
    const result = useMutation<GetUnitByPkQuery, GraphQLErrorType, GetUnitByPkQueryVariables>(
        ["GetUnitByPk"],
        async (variavble) => {
            const result = queryClient.request<GetUnitByPkQuery, GetUnitByPkQueryVariables>(
                gql`
                    query GetUnitByPk($id: Int = 10) {
                        unit_by_pk(id: $id) {
                            ratio
                            price
                            name
                        }
                    }
                `,
                variavble
            );
            return result;
        }
    );
    return result;
};

export default useGetUnitByPk;
