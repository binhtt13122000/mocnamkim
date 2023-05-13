import { gql } from "graphql-request";
import { useQuery } from "react-query";

import useQueryClient from "src/components/Table/hooks/useQueryClient";

const useGetListEntity = (entity: string, displayField: string, search: string, extra: string) => {
    const quyeryClient = useQueryClient();
    search = `%${search}%`;
    return useQuery(["Get" + entity + displayField + extra, search], async () => {
        return quyeryClient.request(
            gql`
            query GetEntityList($search: String = "%%") {
                ${entity}(limit: 100, where: {${displayField}: {_ilike: $search}, ${extra}}) {
                    key: id
                    value: ${displayField}
                }
            }
        `,
            { search: search }
        );
    });
};

export default useGetListEntity;
