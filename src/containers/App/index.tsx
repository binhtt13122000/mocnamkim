import React from "react";

import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Home from "src/components/Home";
import GraphQLQueryClientContextProvider from "src/components/Table/context/QueryClientContext";

import Category from "../Categories";
import Customer from "../Customer";
import Layout from "../Layout";
import Login from "../Login";
import Product from "../Product";
import Supplier from "../Supplier";

import SnackbarProvider from "src/context/SnackbarProvider.context";
import PrivateRoutes from "src/routes/PrivateRoute";
import PublicRoutes from "src/routes/PublicRoute";

const App = () => {
    const queryClient = new QueryClient({
        queryCache: new QueryCache(),
    });

    return (
        <React.Fragment>
            <QueryClientProvider client={queryClient}>
                <GraphQLQueryClientContextProvider>
                    <BrowserRouter>
                        <SnackbarProvider>
                            <Routes>
                                <Route element={<PublicRoutes />}>
                                    <Route path="/" element={<Login />} />
                                    <Route path="/login" element={<Login />} />
                                </Route>
                                <Route element={<PrivateRoutes />}>
                                    <Route
                                        path="/home"
                                        element={
                                            <Layout>
                                                <Home />
                                            </Layout>
                                        }
                                    />
                                    <Route
                                        element={
                                            <Layout>
                                                <Outlet />
                                            </Layout>
                                        }
                                    >
                                        <Route path="/categories" element={<Category />} />
                                        <Route path="/customers" element={<Customer />} />
                                        <Route path="/suppliers" element={<Supplier />} />
                                        <Route path="/products" element={<Product />} />
                                    </Route>
                                    <Route path="/rooms/:id" element={<Layout></Layout>} />
                                </Route>
                            </Routes>
                        </SnackbarProvider>
                    </BrowserRouter>
                </GraphQLQueryClientContextProvider>
            </QueryClientProvider>
        </React.Fragment>
    );
};

export default App;
