import React from "react";

import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Home from "src/components/Home";
import GraphQLQueryClientContextProvider from "src/components/Table/context/QueryClientContext";

import BillIn from "../BillIn";
import BillOut from "../BillOut";
import Category from "../Categories";
import Customer from "../Customer";
import ImportForm from "../Import";
import Layout from "../Layout";
import Login from "../Login";
import Product from "../Product";
import Sell from "../Sell";
import Supplier from "../Supplier";

import SnackbarProvider from "src/context/SnackbarProvider.context";
import { AuthProvider } from "src/context/useAuth";
import PrivateRoutes from "src/routes/PrivateRoute";
import PublicRoutes from "src/routes/PublicRoute";

const App = () => {
    const queryClient = new QueryClient({
        queryCache: new QueryCache(),
    });

    return (
        <React.Fragment>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <QueryClientProvider client={queryClient}>
                    <GraphQLQueryClientContextProvider>
                        <BrowserRouter>
                            <SnackbarProvider>
                                <AuthProvider>
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
                                                <Route path="/import" element={<ImportForm />} />
                                                <Route path="/sell" element={<Sell />} />
                                                <Route path="/bill-out" element={<BillOut />} />
                                                <Route path="/bill-in" element={<BillIn />} />
                                                <Route path="/categories" element={<Category />} />
                                                <Route path="/customers" element={<Customer />} />
                                                <Route path="/suppliers" element={<Supplier />} />
                                                <Route path="/products" element={<Product />} />
                                            </Route>
                                            <Route path="/rooms/:id" element={<Layout></Layout>} />
                                        </Route>
                                    </Routes>
                                </AuthProvider>
                            </SnackbarProvider>
                        </BrowserRouter>
                    </GraphQLQueryClientContextProvider>
                </QueryClientProvider>
            </LocalizationProvider>
        </React.Fragment>
    );
};

export default App;
