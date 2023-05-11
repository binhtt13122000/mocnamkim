import { ReactNode, useCallback, useState, useMemo, createContext } from "react";

import { GraphQLClient } from "graphql-request";

interface QueryClientContextProps {
    queryClient: GraphQLClient;
    updateQueryClient: (token: string) => void;
}

export const GraphQLQueryClientContext = createContext({} as QueryClientContextProps);
const GraphQLQueryClientContextProvider = ({ children }: { children: ReactNode }) => {
    const defaultQueryClient = useMemo(() => {
        const queryClient = new GraphQLClient("http://localhost:8080/v1/graphql", {
            headers: {
                "x-hasura-admin-secret":
                    "1a17b69d8e567b6dca0543de4635cf102258d51e1325249f4302de2a41d77b0f",
            },
        });
        return queryClient;
    }, []);

    const [queryClient, setQueryClient] = useState<GraphQLClient>(defaultQueryClient);

    const updateQueryClient = useCallback((token: string) => {
        const queryClient = new GraphQLClient("http://localhost:8080/v1/graphql", {
            headers: {
                Authorization: `Bearer ${token}`,
                "x-hasura-admin-secret":
                    "1a17b69d8e567b6dca0543de4635cf102258d51e1325249f4302de2a41d77b0f",
            },
        });
        setQueryClient(queryClient);
    }, []);

    const memoValue = useMemo(() => {
        return {
            queryClient,
            updateQueryClient,
        };
    }, [queryClient, updateQueryClient]);

    return (
        <GraphQLQueryClientContext.Provider value={memoValue}>
            {children}
        </GraphQLQueryClientContext.Provider>
    );
};

export default GraphQLQueryClientContextProvider;
