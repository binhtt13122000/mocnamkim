export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["Int"]>;
    _gt?: InputMaybe<Scalars["Int"]>;
    _gte?: InputMaybe<Scalars["Int"]>;
    _in?: InputMaybe<Array<Scalars["Int"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["Int"]>;
    _lte?: InputMaybe<Scalars["Int"]>;
    _neq?: InputMaybe<Scalars["Int"]>;
    _nin?: InputMaybe<Array<Scalars["Int"]>>;
};

/** columns and relationships of "Order" */
export type Order = {
    __typename?: "Order";
    /** An object relationship */
    customer?: Maybe<Customer>;
    customerid?: Maybe<Scalars["Int"]>;
    id: Scalars["Int"];
    /** An array relationship */
    orderdetails: Array<Orderdetail>;
    /** An aggregate relationship */
    orderdetails_aggregate: Orderdetail_Aggregate;
    status: Scalars["String"];
    total: Scalars["Int"];
};

/** columns and relationships of "Order" */
export type OrderOrderdetailsArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** columns and relationships of "Order" */
export type OrderOrderdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** aggregated selection of "Order" */
export type Order_Aggregate = {
    __typename?: "Order_aggregate";
    aggregate?: Maybe<Order_Aggregate_Fields>;
    nodes: Array<Order>;
};

/** aggregate fields of "Order" */
export type Order_Aggregate_Fields = {
    __typename?: "Order_aggregate_fields";
    avg?: Maybe<Order_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Order_Max_Fields>;
    min?: Maybe<Order_Min_Fields>;
    stddev?: Maybe<Order_Stddev_Fields>;
    stddev_pop?: Maybe<Order_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Order_Stddev_Samp_Fields>;
    sum?: Maybe<Order_Sum_Fields>;
    var_pop?: Maybe<Order_Var_Pop_Fields>;
    var_samp?: Maybe<Order_Var_Samp_Fields>;
    variance?: Maybe<Order_Variance_Fields>;
};

/** aggregate fields of "Order" */
export type Order_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Order_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "Order" */
export type Order_Aggregate_Order_By = {
    avg?: InputMaybe<Order_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Order_Max_Order_By>;
    min?: InputMaybe<Order_Min_Order_By>;
    stddev?: InputMaybe<Order_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Order_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Order_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Order_Sum_Order_By>;
    var_pop?: InputMaybe<Order_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Order_Var_Samp_Order_By>;
    variance?: InputMaybe<Order_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "Order" */
export type Order_Arr_Rel_Insert_Input = {
    data: Array<Order_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** aggregate avg on columns */
export type Order_Avg_Fields = {
    __typename?: "Order_avg_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "Order" */
export type Order_Avg_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
    _and?: InputMaybe<Array<Order_Bool_Exp>>;
    _not?: InputMaybe<Order_Bool_Exp>;
    _or?: InputMaybe<Array<Order_Bool_Exp>>;
    customer?: InputMaybe<Customer_Bool_Exp>;
    customerid?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    orderdetails?: InputMaybe<Orderdetail_Bool_Exp>;
    status?: InputMaybe<String_Comparison_Exp>;
    total?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Order" */
export enum Order_Constraint {
    /** unique or primary key constraint */
    OrderPkey = "Order_pkey",
}

/** input type for incrementing numeric columns in table "Order" */
export type Order_Inc_Input = {
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "Order" */
export type Order_Insert_Input = {
    customer?: InputMaybe<Customer_Obj_Rel_Insert_Input>;
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    orderdetails?: InputMaybe<Orderdetail_Arr_Rel_Insert_Input>;
    status?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
    __typename?: "Order_max_fields";
    customerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    status?: Maybe<Scalars["String"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "Order" */
export type Order_Max_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
    __typename?: "Order_min_fields";
    customerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    status?: Maybe<Scalars["String"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "Order" */
export type Order_Min_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "Order" */
export type Order_Mutation_Response = {
    __typename?: "Order_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Order>;
};

/** input type for inserting object relation for remote table "Order" */
export type Order_Obj_Rel_Insert_Input = {
    data: Order_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** on_conflict condition type for table "Order" */
export type Order_On_Conflict = {
    constraint: Order_Constraint;
    update_columns?: Array<Order_Update_Column>;
    where?: InputMaybe<Order_Bool_Exp>;
};

/** Ordering options when selecting data from "Order". */
export type Order_Order_By = {
    customer?: InputMaybe<Customer_Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Order_By>;
    status?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Order */
export type Order_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "Order" */
export enum Order_Select_Column {
    /** column name */
    Customerid = "customerid",
    /** column name */
    Id = "id",
    /** column name */
    Status = "status",
    /** column name */
    Total = "total",
}

/** input type for updating data in table "Order" */
export type Order_Set_Input = {
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    status?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
    __typename?: "Order_stddev_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "Order" */
export type Order_Stddev_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
    __typename?: "Order_stddev_pop_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "Order" */
export type Order_Stddev_Pop_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
    __typename?: "Order_stddev_samp_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "Order" */
export type Order_Stddev_Samp_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
    __typename?: "Order_sum_fields";
    customerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "Order" */
export type Order_Sum_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** update columns of table "Order" */
export enum Order_Update_Column {
    /** column name */
    Customerid = "customerid",
    /** column name */
    Id = "id",
    /** column name */
    Status = "status",
    /** column name */
    Total = "total",
}

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
    __typename?: "Order_var_pop_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "Order" */
export type Order_Var_Pop_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
    __typename?: "Order_var_samp_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "Order" */
export type Order_Var_Samp_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
    __typename?: "Order_variance_fields";
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "Order" */
export type Order_Variance_Order_By = {
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["String"]>;
    _gt?: InputMaybe<Scalars["String"]>;
    _gte?: InputMaybe<Scalars["String"]>;
    /** does the column match the given case-insensitive pattern */
    _ilike?: InputMaybe<Scalars["String"]>;
    _in?: InputMaybe<Array<Scalars["String"]>>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: InputMaybe<Scalars["String"]>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    /** does the column match the given pattern */
    _like?: InputMaybe<Scalars["String"]>;
    _lt?: InputMaybe<Scalars["String"]>;
    _lte?: InputMaybe<Scalars["String"]>;
    _neq?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: InputMaybe<Scalars["String"]>;
    _nin?: InputMaybe<Array<Scalars["String"]>>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given pattern */
    _nlike?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: InputMaybe<Scalars["String"]>;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: InputMaybe<Scalars["String"]>;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: InputMaybe<Scalars["String"]>;
    /** does the column match the given SQL regular expression */
    _similar?: InputMaybe<Scalars["String"]>;
};

/** columns and relationships of "account" */
export type Account = {
    __typename?: "account";
    id: Scalars["Int"];
    name: Scalars["String"];
    password: Scalars["String"];
    role: Scalars["String"];
    username: Scalars["String"];
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
    __typename?: "account_aggregate";
    aggregate?: Maybe<Account_Aggregate_Fields>;
    nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
    __typename?: "account_aggregate_fields";
    avg?: Maybe<Account_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Account_Max_Fields>;
    min?: Maybe<Account_Min_Fields>;
    stddev?: Maybe<Account_Stddev_Fields>;
    stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
    sum?: Maybe<Account_Sum_Fields>;
    var_pop?: Maybe<Account_Var_Pop_Fields>;
    var_samp?: Maybe<Account_Var_Samp_Fields>;
    variance?: Maybe<Account_Variance_Fields>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Account_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
    __typename?: "account_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
    _and?: InputMaybe<Array<Account_Bool_Exp>>;
    _not?: InputMaybe<Account_Bool_Exp>;
    _or?: InputMaybe<Array<Account_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    password?: InputMaybe<String_Comparison_Exp>;
    role?: InputMaybe<String_Comparison_Exp>;
    username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
    /** unique or primary key constraint */
    AccountPkey = "account_pkey",
}

/** input type for incrementing numeric columns in table "account" */
export type Account_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    password?: InputMaybe<Scalars["String"]>;
    role?: InputMaybe<Scalars["String"]>;
    username?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
    __typename?: "account_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    role?: Maybe<Scalars["String"]>;
    username?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
    __typename?: "account_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    role?: Maybe<Scalars["String"]>;
    username?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
    __typename?: "account_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Account>;
};

/** on_conflict condition type for table "account" */
export type Account_On_Conflict = {
    constraint: Account_Constraint;
    update_columns?: Array<Account_Update_Column>;
    where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    password?: InputMaybe<Order_By>;
    role?: InputMaybe<Order_By>;
    username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "account" */
export enum Account_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Password = "password",
    /** column name */
    Role = "role",
    /** column name */
    Username = "username",
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    password?: InputMaybe<Scalars["String"]>;
    role?: InputMaybe<Scalars["String"]>;
    username?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
    __typename?: "account_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
    __typename?: "account_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
    __typename?: "account_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
    __typename?: "account_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Password = "password",
    /** column name */
    Role = "role",
    /** column name */
    Username = "username",
}

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
    __typename?: "account_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
    __typename?: "account_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
    __typename?: "account_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "category" */
export type Category = {
    __typename?: "category";
    id: Scalars["Int"];
    name: Scalars["String"];
    /** An array relationship */
    products: Array<Product>;
    /** An aggregate relationship */
    products_aggregate: Product_Aggregate;
};

/** columns and relationships of "category" */
export type CategoryProductsArgs = {
    distinct_on?: InputMaybe<Array<Product_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Product_Order_By>>;
    where?: InputMaybe<Product_Bool_Exp>;
};

/** columns and relationships of "category" */
export type CategoryProducts_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Product_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Product_Order_By>>;
    where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
    __typename?: "category_aggregate";
    aggregate?: Maybe<Category_Aggregate_Fields>;
    nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
    __typename?: "category_aggregate_fields";
    avg?: Maybe<Category_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Category_Max_Fields>;
    min?: Maybe<Category_Min_Fields>;
    stddev?: Maybe<Category_Stddev_Fields>;
    stddev_pop?: Maybe<Category_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Category_Stddev_Samp_Fields>;
    sum?: Maybe<Category_Sum_Fields>;
    var_pop?: Maybe<Category_Var_Pop_Fields>;
    var_samp?: Maybe<Category_Var_Samp_Fields>;
    variance?: Maybe<Category_Variance_Fields>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Category_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Category_Avg_Fields = {
    __typename?: "category_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
    _and?: InputMaybe<Array<Category_Bool_Exp>>;
    _not?: InputMaybe<Category_Bool_Exp>;
    _or?: InputMaybe<Array<Category_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    products?: InputMaybe<Product_Bool_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
    /** unique or primary key constraint */
    CategoryPkey = "category_pkey",
}

/** input type for incrementing numeric columns in table "category" */
export type Category_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
    __typename?: "category_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
    __typename?: "category_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
    __typename?: "category_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
    data: Category_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on_conflict condition type for table "category" */
export type Category_On_Conflict = {
    constraint: Category_Constraint;
    update_columns?: Array<Category_Update_Column>;
    where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "category" */
export enum Category_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Category_Stddev_Fields = {
    __typename?: "category_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Category_Stddev_Pop_Fields = {
    __typename?: "category_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Category_Stddev_Samp_Fields = {
    __typename?: "category_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Category_Sum_Fields = {
    __typename?: "category_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
}

/** aggregate var_pop on columns */
export type Category_Var_Pop_Fields = {
    __typename?: "category_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Category_Var_Samp_Fields = {
    __typename?: "category_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Category_Variance_Fields = {
    __typename?: "category_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "customer" */
export type Customer = {
    __typename?: "customer";
    /** An array relationship */
    Orders: Array<Order>;
    /** An aggregate relationship */
    Orders_aggregate: Order_Aggregate;
    id: Scalars["Int"];
    name: Scalars["String"];
    phone: Scalars["String"];
};

/** columns and relationships of "customer" */
export type CustomerOrdersArgs = {
    distinct_on?: InputMaybe<Array<Order_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Order_Order_By>>;
    where?: InputMaybe<Order_Bool_Exp>;
};

/** columns and relationships of "customer" */
export type CustomerOrders_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Order_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Order_Order_By>>;
    where?: InputMaybe<Order_Bool_Exp>;
};

/** aggregated selection of "customer" */
export type Customer_Aggregate = {
    __typename?: "customer_aggregate";
    aggregate?: Maybe<Customer_Aggregate_Fields>;
    nodes: Array<Customer>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_Fields = {
    __typename?: "customer_aggregate_fields";
    avg?: Maybe<Customer_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Customer_Max_Fields>;
    min?: Maybe<Customer_Min_Fields>;
    stddev?: Maybe<Customer_Stddev_Fields>;
    stddev_pop?: Maybe<Customer_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Customer_Stddev_Samp_Fields>;
    sum?: Maybe<Customer_Sum_Fields>;
    var_pop?: Maybe<Customer_Var_Pop_Fields>;
    var_samp?: Maybe<Customer_Var_Samp_Fields>;
    variance?: Maybe<Customer_Variance_Fields>;
};

/** aggregate fields of "customer" */
export type Customer_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Customer_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Customer_Avg_Fields = {
    __typename?: "customer_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "customer". All fields are combined with a logical 'AND'. */
export type Customer_Bool_Exp = {
    Orders?: InputMaybe<Order_Bool_Exp>;
    _and?: InputMaybe<Array<Customer_Bool_Exp>>;
    _not?: InputMaybe<Customer_Bool_Exp>;
    _or?: InputMaybe<Array<Customer_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
    /** unique or primary key constraint */
    CustomerPkey = "customer_pkey",
}

/** input type for incrementing numeric columns in table "customer" */
export type Customer_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "customer" */
export type Customer_Insert_Input = {
    Orders?: InputMaybe<Order_Arr_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Customer_Max_Fields = {
    __typename?: "customer_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Customer_Min_Fields = {
    __typename?: "customer_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "customer" */
export type Customer_Mutation_Response = {
    __typename?: "customer_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Customer>;
};

/** input type for inserting object relation for remote table "customer" */
export type Customer_Obj_Rel_Insert_Input = {
    data: Customer_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Customer_On_Conflict>;
};

/** on_conflict condition type for table "customer" */
export type Customer_On_Conflict = {
    constraint: Customer_Constraint;
    update_columns?: Array<Customer_Update_Column>;
    where?: InputMaybe<Customer_Bool_Exp>;
};

/** Ordering options when selecting data from "customer". */
export type Customer_Order_By = {
    Orders_aggregate?: InputMaybe<Order_Aggregate_Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: customer */
export type Customer_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "customer" */
export enum Customer_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Phone = "phone",
}

/** input type for updating data in table "customer" */
export type Customer_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Customer_Stddev_Fields = {
    __typename?: "customer_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Customer_Stddev_Pop_Fields = {
    __typename?: "customer_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Customer_Stddev_Samp_Fields = {
    __typename?: "customer_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Customer_Sum_Fields = {
    __typename?: "customer_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "customer" */
export enum Customer_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Phone = "phone",
}

/** aggregate var_pop on columns */
export type Customer_Var_Pop_Fields = {
    __typename?: "customer_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Customer_Var_Samp_Fields = {
    __typename?: "customer_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Customer_Variance_Fields = {
    __typename?: "customer_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** mutation root */
export type Mutation_Root = {
    __typename?: "mutation_root";
    /** delete data from the table: "Order" */
    delete_Order?: Maybe<Order_Mutation_Response>;
    /** delete single row from the table: "Order" */
    delete_Order_by_pk?: Maybe<Order>;
    /** delete data from the table: "account" */
    delete_account?: Maybe<Account_Mutation_Response>;
    /** delete single row from the table: "account" */
    delete_account_by_pk?: Maybe<Account>;
    /** delete data from the table: "category" */
    delete_category?: Maybe<Category_Mutation_Response>;
    /** delete single row from the table: "category" */
    delete_category_by_pk?: Maybe<Category>;
    /** delete data from the table: "customer" */
    delete_customer?: Maybe<Customer_Mutation_Response>;
    /** delete single row from the table: "customer" */
    delete_customer_by_pk?: Maybe<Customer>;
    /** delete data from the table: "orderdetail" */
    delete_orderdetail?: Maybe<Orderdetail_Mutation_Response>;
    /** delete single row from the table: "orderdetail" */
    delete_orderdetail_by_pk?: Maybe<Orderdetail>;
    /** delete data from the table: "product" */
    delete_product?: Maybe<Product_Mutation_Response>;
    /** delete single row from the table: "product" */
    delete_product_by_pk?: Maybe<Product>;
    /** delete data from the table: "supplier" */
    delete_supplier?: Maybe<Supplier_Mutation_Response>;
    /** delete single row from the table: "supplier" */
    delete_supplier_by_pk?: Maybe<Supplier>;
    /** delete data from the table: "unit" */
    delete_unit?: Maybe<Unit_Mutation_Response>;
    /** delete single row from the table: "unit" */
    delete_unit_by_pk?: Maybe<Unit>;
    /** insert data into the table: "Order" */
    insert_Order?: Maybe<Order_Mutation_Response>;
    /** insert a single row into the table: "Order" */
    insert_Order_one?: Maybe<Order>;
    /** insert data into the table: "account" */
    insert_account?: Maybe<Account_Mutation_Response>;
    /** insert a single row into the table: "account" */
    insert_account_one?: Maybe<Account>;
    /** insert data into the table: "category" */
    insert_category?: Maybe<Category_Mutation_Response>;
    /** insert a single row into the table: "category" */
    insert_category_one?: Maybe<Category>;
    /** insert data into the table: "customer" */
    insert_customer?: Maybe<Customer_Mutation_Response>;
    /** insert a single row into the table: "customer" */
    insert_customer_one?: Maybe<Customer>;
    /** insert data into the table: "orderdetail" */
    insert_orderdetail?: Maybe<Orderdetail_Mutation_Response>;
    /** insert a single row into the table: "orderdetail" */
    insert_orderdetail_one?: Maybe<Orderdetail>;
    /** insert data into the table: "product" */
    insert_product?: Maybe<Product_Mutation_Response>;
    /** insert a single row into the table: "product" */
    insert_product_one?: Maybe<Product>;
    /** insert data into the table: "supplier" */
    insert_supplier?: Maybe<Supplier_Mutation_Response>;
    /** insert a single row into the table: "supplier" */
    insert_supplier_one?: Maybe<Supplier>;
    /** insert data into the table: "unit" */
    insert_unit?: Maybe<Unit_Mutation_Response>;
    /** insert a single row into the table: "unit" */
    insert_unit_one?: Maybe<Unit>;
    /** update data of the table: "Order" */
    update_Order?: Maybe<Order_Mutation_Response>;
    /** update single row of the table: "Order" */
    update_Order_by_pk?: Maybe<Order>;
    /** update data of the table: "account" */
    update_account?: Maybe<Account_Mutation_Response>;
    /** update single row of the table: "account" */
    update_account_by_pk?: Maybe<Account>;
    /** update data of the table: "category" */
    update_category?: Maybe<Category_Mutation_Response>;
    /** update single row of the table: "category" */
    update_category_by_pk?: Maybe<Category>;
    /** update data of the table: "customer" */
    update_customer?: Maybe<Customer_Mutation_Response>;
    /** update single row of the table: "customer" */
    update_customer_by_pk?: Maybe<Customer>;
    /** update data of the table: "orderdetail" */
    update_orderdetail?: Maybe<Orderdetail_Mutation_Response>;
    /** update single row of the table: "orderdetail" */
    update_orderdetail_by_pk?: Maybe<Orderdetail>;
    /** update data of the table: "product" */
    update_product?: Maybe<Product_Mutation_Response>;
    /** update single row of the table: "product" */
    update_product_by_pk?: Maybe<Product>;
    /** update data of the table: "supplier" */
    update_supplier?: Maybe<Supplier_Mutation_Response>;
    /** update single row of the table: "supplier" */
    update_supplier_by_pk?: Maybe<Supplier>;
    /** update data of the table: "unit" */
    update_unit?: Maybe<Unit_Mutation_Response>;
    /** update single row of the table: "unit" */
    update_unit_by_pk?: Maybe<Unit>;
};

/** mutation root */
export type Mutation_RootDelete_OrderArgs = {
    where: Order_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Order_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
    where: Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
    where: Category_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_CustomerArgs = {
    where: Customer_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Customer_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_OrderdetailArgs = {
    where: Orderdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Orderdetail_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
    where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_SupplierArgs = {
    where: Supplier_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Supplier_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_UnitArgs = {
    where: Unit_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Unit_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootInsert_OrderArgs = {
    objects: Array<Order_Insert_Input>;
    on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Order_OneArgs = {
    object: Order_Insert_Input;
    on_conflict?: InputMaybe<Order_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
    objects: Array<Account_Insert_Input>;
    on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
    object: Account_Insert_Input;
    on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
    objects: Array<Category_Insert_Input>;
    on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
    object: Category_Insert_Input;
    on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_CustomerArgs = {
    objects: Array<Customer_Insert_Input>;
    on_conflict?: InputMaybe<Customer_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Customer_OneArgs = {
    object: Customer_Insert_Input;
    on_conflict?: InputMaybe<Customer_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_OrderdetailArgs = {
    objects: Array<Orderdetail_Insert_Input>;
    on_conflict?: InputMaybe<Orderdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Orderdetail_OneArgs = {
    object: Orderdetail_Insert_Input;
    on_conflict?: InputMaybe<Orderdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
    objects: Array<Product_Insert_Input>;
    on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
    object: Product_Insert_Input;
    on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_SupplierArgs = {
    objects: Array<Supplier_Insert_Input>;
    on_conflict?: InputMaybe<Supplier_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Supplier_OneArgs = {
    object: Supplier_Insert_Input;
    on_conflict?: InputMaybe<Supplier_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UnitArgs = {
    objects: Array<Unit_Insert_Input>;
    on_conflict?: InputMaybe<Unit_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Unit_OneArgs = {
    object: Unit_Insert_Input;
    on_conflict?: InputMaybe<Unit_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_OrderArgs = {
    _inc?: InputMaybe<Order_Inc_Input>;
    _set?: InputMaybe<Order_Set_Input>;
    where: Order_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Order_By_PkArgs = {
    _inc?: InputMaybe<Order_Inc_Input>;
    _set?: InputMaybe<Order_Set_Input>;
    pk_columns: Order_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
    _inc?: InputMaybe<Account_Inc_Input>;
    _set?: InputMaybe<Account_Set_Input>;
    where: Account_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
    _inc?: InputMaybe<Account_Inc_Input>;
    _set?: InputMaybe<Account_Set_Input>;
    pk_columns: Account_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
    _inc?: InputMaybe<Category_Inc_Input>;
    _set?: InputMaybe<Category_Set_Input>;
    where: Category_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
    _inc?: InputMaybe<Category_Inc_Input>;
    _set?: InputMaybe<Category_Set_Input>;
    pk_columns: Category_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_CustomerArgs = {
    _inc?: InputMaybe<Customer_Inc_Input>;
    _set?: InputMaybe<Customer_Set_Input>;
    where: Customer_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Customer_By_PkArgs = {
    _inc?: InputMaybe<Customer_Inc_Input>;
    _set?: InputMaybe<Customer_Set_Input>;
    pk_columns: Customer_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_OrderdetailArgs = {
    _inc?: InputMaybe<Orderdetail_Inc_Input>;
    _set?: InputMaybe<Orderdetail_Set_Input>;
    where: Orderdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Orderdetail_By_PkArgs = {
    _inc?: InputMaybe<Orderdetail_Inc_Input>;
    _set?: InputMaybe<Orderdetail_Set_Input>;
    pk_columns: Orderdetail_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
    _inc?: InputMaybe<Product_Inc_Input>;
    _set?: InputMaybe<Product_Set_Input>;
    where: Product_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
    _inc?: InputMaybe<Product_Inc_Input>;
    _set?: InputMaybe<Product_Set_Input>;
    pk_columns: Product_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_SupplierArgs = {
    _inc?: InputMaybe<Supplier_Inc_Input>;
    _set?: InputMaybe<Supplier_Set_Input>;
    where: Supplier_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Supplier_By_PkArgs = {
    _inc?: InputMaybe<Supplier_Inc_Input>;
    _set?: InputMaybe<Supplier_Set_Input>;
    pk_columns: Supplier_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UnitArgs = {
    _inc?: InputMaybe<Unit_Inc_Input>;
    _set?: InputMaybe<Unit_Set_Input>;
    where: Unit_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Unit_By_PkArgs = {
    _inc?: InputMaybe<Unit_Inc_Input>;
    _set?: InputMaybe<Unit_Set_Input>;
    pk_columns: Unit_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
    /** in ascending order, nulls last */
    Asc = "asc",
    /** in ascending order, nulls first */
    AscNullsFirst = "asc_nulls_first",
    /** in ascending order, nulls last */
    AscNullsLast = "asc_nulls_last",
    /** in descending order, nulls first */
    Desc = "desc",
    /** in descending order, nulls first */
    DescNullsFirst = "desc_nulls_first",
    /** in descending order, nulls last */
    DescNullsLast = "desc_nulls_last",
}

/** columns and relationships of "orderdetail" */
export type Orderdetail = {
    __typename?: "orderdetail";
    /** An object relationship */
    Order?: Maybe<Order>;
    id: Scalars["Int"];
    orderid?: Maybe<Scalars["Int"]>;
    price: Scalars["Int"];
    /** An object relationship */
    product?: Maybe<Product>;
    productid?: Maybe<Scalars["Int"]>;
    quantity: Scalars["Int"];
    total: Scalars["Int"];
};

/** aggregated selection of "orderdetail" */
export type Orderdetail_Aggregate = {
    __typename?: "orderdetail_aggregate";
    aggregate?: Maybe<Orderdetail_Aggregate_Fields>;
    nodes: Array<Orderdetail>;
};

/** aggregate fields of "orderdetail" */
export type Orderdetail_Aggregate_Fields = {
    __typename?: "orderdetail_aggregate_fields";
    avg?: Maybe<Orderdetail_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Orderdetail_Max_Fields>;
    min?: Maybe<Orderdetail_Min_Fields>;
    stddev?: Maybe<Orderdetail_Stddev_Fields>;
    stddev_pop?: Maybe<Orderdetail_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Orderdetail_Stddev_Samp_Fields>;
    sum?: Maybe<Orderdetail_Sum_Fields>;
    var_pop?: Maybe<Orderdetail_Var_Pop_Fields>;
    var_samp?: Maybe<Orderdetail_Var_Samp_Fields>;
    variance?: Maybe<Orderdetail_Variance_Fields>;
};

/** aggregate fields of "orderdetail" */
export type Orderdetail_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Orderdetail_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "orderdetail" */
export type Orderdetail_Aggregate_Order_By = {
    avg?: InputMaybe<Orderdetail_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Orderdetail_Max_Order_By>;
    min?: InputMaybe<Orderdetail_Min_Order_By>;
    stddev?: InputMaybe<Orderdetail_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Orderdetail_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Orderdetail_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Orderdetail_Sum_Order_By>;
    var_pop?: InputMaybe<Orderdetail_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Orderdetail_Var_Samp_Order_By>;
    variance?: InputMaybe<Orderdetail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orderdetail" */
export type Orderdetail_Arr_Rel_Insert_Input = {
    data: Array<Orderdetail_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Orderdetail_On_Conflict>;
};

/** aggregate avg on columns */
export type Orderdetail_Avg_Fields = {
    __typename?: "orderdetail_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "orderdetail" */
export type Orderdetail_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orderdetail". All fields are combined with a logical 'AND'. */
export type Orderdetail_Bool_Exp = {
    Order?: InputMaybe<Order_Bool_Exp>;
    _and?: InputMaybe<Array<Orderdetail_Bool_Exp>>;
    _not?: InputMaybe<Orderdetail_Bool_Exp>;
    _or?: InputMaybe<Array<Orderdetail_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    orderid?: InputMaybe<Int_Comparison_Exp>;
    price?: InputMaybe<Int_Comparison_Exp>;
    product?: InputMaybe<Product_Bool_Exp>;
    productid?: InputMaybe<Int_Comparison_Exp>;
    quantity?: InputMaybe<Int_Comparison_Exp>;
    total?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orderdetail" */
export enum Orderdetail_Constraint {
    /** unique or primary key constraint */
    OrderdetailPkey = "orderdetail_pkey",
}

/** input type for incrementing numeric columns in table "orderdetail" */
export type Orderdetail_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    orderid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "orderdetail" */
export type Orderdetail_Insert_Input = {
    Order?: InputMaybe<Order_Obj_Rel_Insert_Input>;
    id?: InputMaybe<Scalars["Int"]>;
    orderid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Orderdetail_Max_Fields = {
    __typename?: "orderdetail_max_fields";
    id?: Maybe<Scalars["Int"]>;
    orderid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "orderdetail" */
export type Orderdetail_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orderdetail_Min_Fields = {
    __typename?: "orderdetail_min_fields";
    id?: Maybe<Scalars["Int"]>;
    orderid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "orderdetail" */
export type Orderdetail_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orderdetail" */
export type Orderdetail_Mutation_Response = {
    __typename?: "orderdetail_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Orderdetail>;
};

/** on_conflict condition type for table "orderdetail" */
export type Orderdetail_On_Conflict = {
    constraint: Orderdetail_Constraint;
    update_columns?: Array<Orderdetail_Update_Column>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** Ordering options when selecting data from "orderdetail". */
export type Orderdetail_Order_By = {
    Order?: InputMaybe<Order_Order_By>;
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    product?: InputMaybe<Product_Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orderdetail */
export type Orderdetail_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "orderdetail" */
export enum Orderdetail_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Orderid = "orderid",
    /** column name */
    Price = "price",
    /** column name */
    Productid = "productid",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Total = "total",
}

/** input type for updating data in table "orderdetail" */
export type Orderdetail_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    orderid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Orderdetail_Stddev_Fields = {
    __typename?: "orderdetail_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "orderdetail" */
export type Orderdetail_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orderdetail_Stddev_Pop_Fields = {
    __typename?: "orderdetail_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "orderdetail" */
export type Orderdetail_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orderdetail_Stddev_Samp_Fields = {
    __typename?: "orderdetail_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "orderdetail" */
export type Orderdetail_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Orderdetail_Sum_Fields = {
    __typename?: "orderdetail_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    orderid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "orderdetail" */
export type Orderdetail_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** update columns of table "orderdetail" */
export enum Orderdetail_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Orderid = "orderid",
    /** column name */
    Price = "price",
    /** column name */
    Productid = "productid",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Total = "total",
}

/** aggregate var_pop on columns */
export type Orderdetail_Var_Pop_Fields = {
    __typename?: "orderdetail_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "orderdetail" */
export type Orderdetail_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orderdetail_Var_Samp_Fields = {
    __typename?: "orderdetail_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "orderdetail" */
export type Orderdetail_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orderdetail_Variance_Fields = {
    __typename?: "orderdetail_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "orderdetail" */
export type Orderdetail_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
    __typename?: "product";
    /** An object relationship */
    category?: Maybe<Category>;
    categoryid?: Maybe<Scalars["Int"]>;
    code: Scalars["String"];
    id: Scalars["Int"];
    name: Scalars["String"];
    /** An array relationship */
    orderdetails: Array<Orderdetail>;
    /** An aggregate relationship */
    orderdetails_aggregate: Orderdetail_Aggregate;
    origin: Scalars["String"];
    quantity: Scalars["Int"];
    /** An array relationship */
    units: Array<Unit>;
    /** An aggregate relationship */
    units_aggregate: Unit_Aggregate;
};

/** columns and relationships of "product" */
export type ProductOrderdetailsArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductOrderdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductUnitsArgs = {
    distinct_on?: InputMaybe<Array<Unit_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Unit_Order_By>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductUnits_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Unit_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Unit_Order_By>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
    __typename?: "product_aggregate";
    aggregate?: Maybe<Product_Aggregate_Fields>;
    nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
    __typename?: "product_aggregate_fields";
    avg?: Maybe<Product_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Product_Max_Fields>;
    min?: Maybe<Product_Min_Fields>;
    stddev?: Maybe<Product_Stddev_Fields>;
    stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
    sum?: Maybe<Product_Sum_Fields>;
    var_pop?: Maybe<Product_Var_Pop_Fields>;
    var_samp?: Maybe<Product_Var_Samp_Fields>;
    variance?: Maybe<Product_Variance_Fields>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Product_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
    avg?: InputMaybe<Product_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Product_Max_Order_By>;
    min?: InputMaybe<Product_Min_Order_By>;
    stddev?: InputMaybe<Product_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Product_Sum_Order_By>;
    var_pop?: InputMaybe<Product_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Product_Var_Samp_Order_By>;
    variance?: InputMaybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
    data: Array<Product_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
    __typename?: "product_avg_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
    _and?: InputMaybe<Array<Product_Bool_Exp>>;
    _not?: InputMaybe<Product_Bool_Exp>;
    _or?: InputMaybe<Array<Product_Bool_Exp>>;
    category?: InputMaybe<Category_Bool_Exp>;
    categoryid?: InputMaybe<Int_Comparison_Exp>;
    code?: InputMaybe<String_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    orderdetails?: InputMaybe<Orderdetail_Bool_Exp>;
    origin?: InputMaybe<String_Comparison_Exp>;
    quantity?: InputMaybe<Int_Comparison_Exp>;
    units?: InputMaybe<Unit_Bool_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
    /** unique or primary key constraint */
    ProductPkey = "product_pkey",
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
    categoryid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
    category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
    categoryid?: InputMaybe<Scalars["Int"]>;
    code?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    orderdetails?: InputMaybe<Orderdetail_Arr_Rel_Insert_Input>;
    origin?: InputMaybe<Scalars["String"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    units?: InputMaybe<Unit_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
    __typename?: "product_max_fields";
    categoryid?: Maybe<Scalars["Int"]>;
    code?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    origin?: Maybe<Scalars["String"]>;
    quantity?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    code?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    origin?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
    __typename?: "product_min_fields";
    categoryid?: Maybe<Scalars["Int"]>;
    code?: Maybe<Scalars["String"]>;
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    origin?: Maybe<Scalars["String"]>;
    quantity?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    code?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    origin?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
    __typename?: "product_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
    data: Product_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on_conflict condition type for table "product" */
export type Product_On_Conflict = {
    constraint: Product_Constraint;
    update_columns?: Array<Product_Update_Column>;
    where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
    category?: InputMaybe<Category_Order_By>;
    categoryid?: InputMaybe<Order_By>;
    code?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Order_By>;
    origin?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    units_aggregate?: InputMaybe<Unit_Aggregate_Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "product" */
export enum Product_Select_Column {
    /** column name */
    Categoryid = "categoryid",
    /** column name */
    Code = "code",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Origin = "origin",
    /** column name */
    Quantity = "quantity",
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
    categoryid?: InputMaybe<Scalars["Int"]>;
    code?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    origin?: InputMaybe<Scalars["String"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
    __typename?: "product_stddev_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
    __typename?: "product_stddev_pop_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
    __typename?: "product_stddev_samp_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
    __typename?: "product_sum_fields";
    categoryid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
    /** column name */
    Categoryid = "categoryid",
    /** column name */
    Code = "code",
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Origin = "origin",
    /** column name */
    Quantity = "quantity",
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
    __typename?: "product_var_pop_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
    __typename?: "product_var_samp_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
    __typename?: "product_variance_fields";
    categoryid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
    categoryid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
};

export type Query_Root = {
    __typename?: "query_root";
    /** fetch data from the table: "Order" */
    Order: Array<Order>;
    /** fetch aggregated fields from the table: "Order" */
    Order_aggregate: Order_Aggregate;
    /** fetch data from the table: "Order" using primary key columns */
    Order_by_pk?: Maybe<Order>;
    /** fetch data from the table: "account" */
    account: Array<Account>;
    /** fetch aggregated fields from the table: "account" */
    account_aggregate: Account_Aggregate;
    /** fetch data from the table: "account" using primary key columns */
    account_by_pk?: Maybe<Account>;
    /** fetch data from the table: "category" */
    category: Array<Category>;
    /** fetch aggregated fields from the table: "category" */
    category_aggregate: Category_Aggregate;
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk?: Maybe<Category>;
    /** fetch data from the table: "customer" */
    customer: Array<Customer>;
    /** fetch aggregated fields from the table: "customer" */
    customer_aggregate: Customer_Aggregate;
    /** fetch data from the table: "customer" using primary key columns */
    customer_by_pk?: Maybe<Customer>;
    /** fetch data from the table: "orderdetail" */
    orderdetail: Array<Orderdetail>;
    /** fetch aggregated fields from the table: "orderdetail" */
    orderdetail_aggregate: Orderdetail_Aggregate;
    /** fetch data from the table: "orderdetail" using primary key columns */
    orderdetail_by_pk?: Maybe<Orderdetail>;
    /** fetch data from the table: "product" */
    product: Array<Product>;
    /** fetch aggregated fields from the table: "product" */
    product_aggregate: Product_Aggregate;
    /** fetch data from the table: "product" using primary key columns */
    product_by_pk?: Maybe<Product>;
    /** fetch data from the table: "supplier" */
    supplier: Array<Supplier>;
    /** fetch aggregated fields from the table: "supplier" */
    supplier_aggregate: Supplier_Aggregate;
    /** fetch data from the table: "supplier" using primary key columns */
    supplier_by_pk?: Maybe<Supplier>;
    /** fetch data from the table: "unit" */
    unit: Array<Unit>;
    /** fetch aggregated fields from the table: "unit" */
    unit_aggregate: Unit_Aggregate;
    /** fetch data from the table: "unit" using primary key columns */
    unit_by_pk?: Maybe<Unit>;
};

export type Query_RootOrderArgs = {
    distinct_on?: InputMaybe<Array<Order_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Order_Order_By>>;
    where?: InputMaybe<Order_Bool_Exp>;
};

export type Query_RootOrder_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Order_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Order_Order_By>>;
    where?: InputMaybe<Order_Bool_Exp>;
};

export type Query_RootOrder_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootAccountArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Query_RootAccount_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Query_RootAccount_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootCategoryArgs = {
    distinct_on?: InputMaybe<Array<Category_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Category_Order_By>>;
    where?: InputMaybe<Category_Bool_Exp>;
};

export type Query_RootCategory_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Category_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Category_Order_By>>;
    where?: InputMaybe<Category_Bool_Exp>;
};

export type Query_RootCategory_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootCustomerArgs = {
    distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Customer_Order_By>>;
    where?: InputMaybe<Customer_Bool_Exp>;
};

export type Query_RootCustomer_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Customer_Order_By>>;
    where?: InputMaybe<Customer_Bool_Exp>;
};

export type Query_RootCustomer_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootOrderdetailArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

export type Query_RootOrderdetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

export type Query_RootOrderdetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootProductArgs = {
    distinct_on?: InputMaybe<Array<Product_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Product_Order_By>>;
    where?: InputMaybe<Product_Bool_Exp>;
};

export type Query_RootProduct_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Product_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Product_Order_By>>;
    where?: InputMaybe<Product_Bool_Exp>;
};

export type Query_RootProduct_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootSupplierArgs = {
    distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Supplier_Order_By>>;
    where?: InputMaybe<Supplier_Bool_Exp>;
};

export type Query_RootSupplier_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Supplier_Order_By>>;
    where?: InputMaybe<Supplier_Bool_Exp>;
};

export type Query_RootSupplier_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootUnitArgs = {
    distinct_on?: InputMaybe<Array<Unit_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Unit_Order_By>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

export type Query_RootUnit_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Unit_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Unit_Order_By>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

export type Query_RootUnit_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_Root = {
    __typename?: "subscription_root";
    /** fetch data from the table: "Order" */
    Order: Array<Order>;
    /** fetch aggregated fields from the table: "Order" */
    Order_aggregate: Order_Aggregate;
    /** fetch data from the table: "Order" using primary key columns */
    Order_by_pk?: Maybe<Order>;
    /** fetch data from the table: "account" */
    account: Array<Account>;
    /** fetch aggregated fields from the table: "account" */
    account_aggregate: Account_Aggregate;
    /** fetch data from the table: "account" using primary key columns */
    account_by_pk?: Maybe<Account>;
    /** fetch data from the table: "category" */
    category: Array<Category>;
    /** fetch aggregated fields from the table: "category" */
    category_aggregate: Category_Aggregate;
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk?: Maybe<Category>;
    /** fetch data from the table: "customer" */
    customer: Array<Customer>;
    /** fetch aggregated fields from the table: "customer" */
    customer_aggregate: Customer_Aggregate;
    /** fetch data from the table: "customer" using primary key columns */
    customer_by_pk?: Maybe<Customer>;
    /** fetch data from the table: "orderdetail" */
    orderdetail: Array<Orderdetail>;
    /** fetch aggregated fields from the table: "orderdetail" */
    orderdetail_aggregate: Orderdetail_Aggregate;
    /** fetch data from the table: "orderdetail" using primary key columns */
    orderdetail_by_pk?: Maybe<Orderdetail>;
    /** fetch data from the table: "product" */
    product: Array<Product>;
    /** fetch aggregated fields from the table: "product" */
    product_aggregate: Product_Aggregate;
    /** fetch data from the table: "product" using primary key columns */
    product_by_pk?: Maybe<Product>;
    /** fetch data from the table: "supplier" */
    supplier: Array<Supplier>;
    /** fetch aggregated fields from the table: "supplier" */
    supplier_aggregate: Supplier_Aggregate;
    /** fetch data from the table: "supplier" using primary key columns */
    supplier_by_pk?: Maybe<Supplier>;
    /** fetch data from the table: "unit" */
    unit: Array<Unit>;
    /** fetch aggregated fields from the table: "unit" */
    unit_aggregate: Unit_Aggregate;
    /** fetch data from the table: "unit" using primary key columns */
    unit_by_pk?: Maybe<Unit>;
};

export type Subscription_RootOrderArgs = {
    distinct_on?: InputMaybe<Array<Order_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Order_Order_By>>;
    where?: InputMaybe<Order_Bool_Exp>;
};

export type Subscription_RootOrder_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Order_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Order_Order_By>>;
    where?: InputMaybe<Order_Bool_Exp>;
};

export type Subscription_RootOrder_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootAccountArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Account_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Account_Order_By>>;
    where?: InputMaybe<Account_Bool_Exp>;
};

export type Subscription_RootAccount_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootCategoryArgs = {
    distinct_on?: InputMaybe<Array<Category_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Category_Order_By>>;
    where?: InputMaybe<Category_Bool_Exp>;
};

export type Subscription_RootCategory_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Category_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Category_Order_By>>;
    where?: InputMaybe<Category_Bool_Exp>;
};

export type Subscription_RootCategory_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootCustomerArgs = {
    distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Customer_Order_By>>;
    where?: InputMaybe<Customer_Bool_Exp>;
};

export type Subscription_RootCustomer_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Customer_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Customer_Order_By>>;
    where?: InputMaybe<Customer_Bool_Exp>;
};

export type Subscription_RootCustomer_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootOrderdetailArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

export type Subscription_RootOrderdetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

export type Subscription_RootOrderdetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootProductArgs = {
    distinct_on?: InputMaybe<Array<Product_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Product_Order_By>>;
    where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProduct_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Product_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Product_Order_By>>;
    where?: InputMaybe<Product_Bool_Exp>;
};

export type Subscription_RootProduct_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootSupplierArgs = {
    distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Supplier_Order_By>>;
    where?: InputMaybe<Supplier_Bool_Exp>;
};

export type Subscription_RootSupplier_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Supplier_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Supplier_Order_By>>;
    where?: InputMaybe<Supplier_Bool_Exp>;
};

export type Subscription_RootSupplier_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootUnitArgs = {
    distinct_on?: InputMaybe<Array<Unit_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Unit_Order_By>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

export type Subscription_RootUnit_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Unit_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Unit_Order_By>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

export type Subscription_RootUnit_By_PkArgs = {
    id: Scalars["Int"];
};

/** columns and relationships of "supplier" */
export type Supplier = {
    __typename?: "supplier";
    id: Scalars["Int"];
    name: Scalars["String"];
    phone: Scalars["String"];
};

/** aggregated selection of "supplier" */
export type Supplier_Aggregate = {
    __typename?: "supplier_aggregate";
    aggregate?: Maybe<Supplier_Aggregate_Fields>;
    nodes: Array<Supplier>;
};

/** aggregate fields of "supplier" */
export type Supplier_Aggregate_Fields = {
    __typename?: "supplier_aggregate_fields";
    avg?: Maybe<Supplier_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Supplier_Max_Fields>;
    min?: Maybe<Supplier_Min_Fields>;
    stddev?: Maybe<Supplier_Stddev_Fields>;
    stddev_pop?: Maybe<Supplier_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Supplier_Stddev_Samp_Fields>;
    sum?: Maybe<Supplier_Sum_Fields>;
    var_pop?: Maybe<Supplier_Var_Pop_Fields>;
    var_samp?: Maybe<Supplier_Var_Samp_Fields>;
    variance?: Maybe<Supplier_Variance_Fields>;
};

/** aggregate fields of "supplier" */
export type Supplier_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Supplier_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** aggregate avg on columns */
export type Supplier_Avg_Fields = {
    __typename?: "supplier_avg_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** Boolean expression to filter rows from the table "supplier". All fields are combined with a logical 'AND'. */
export type Supplier_Bool_Exp = {
    _and?: InputMaybe<Array<Supplier_Bool_Exp>>;
    _not?: InputMaybe<Supplier_Bool_Exp>;
    _or?: InputMaybe<Array<Supplier_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "supplier" */
export enum Supplier_Constraint {
    /** unique or primary key constraint */
    SupplierPkey = "supplier_pkey",
}

/** input type for incrementing numeric columns in table "supplier" */
export type Supplier_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "supplier" */
export type Supplier_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
};

/** aggregate max on columns */
export type Supplier_Max_Fields = {
    __typename?: "supplier_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
};

/** aggregate min on columns */
export type Supplier_Min_Fields = {
    __typename?: "supplier_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    phone?: Maybe<Scalars["String"]>;
};

/** response of any mutation on the table "supplier" */
export type Supplier_Mutation_Response = {
    __typename?: "supplier_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Supplier>;
};

/** on_conflict condition type for table "supplier" */
export type Supplier_On_Conflict = {
    constraint: Supplier_Constraint;
    update_columns?: Array<Supplier_Update_Column>;
    where?: InputMaybe<Supplier_Bool_Exp>;
};

/** Ordering options when selecting data from "supplier". */
export type Supplier_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    phone?: InputMaybe<Order_By>;
};

/** primary key columns input for table: supplier */
export type Supplier_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "supplier" */
export enum Supplier_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Phone = "phone",
}

/** input type for updating data in table "supplier" */
export type Supplier_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
};

/** aggregate stddev on columns */
export type Supplier_Stddev_Fields = {
    __typename?: "supplier_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_pop on columns */
export type Supplier_Stddev_Pop_Fields = {
    __typename?: "supplier_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate stddev_samp on columns */
export type Supplier_Stddev_Samp_Fields = {
    __typename?: "supplier_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate sum on columns */
export type Supplier_Sum_Fields = {
    __typename?: "supplier_sum_fields";
    id?: Maybe<Scalars["Int"]>;
};

/** update columns of table "supplier" */
export enum Supplier_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Phone = "phone",
}

/** aggregate var_pop on columns */
export type Supplier_Var_Pop_Fields = {
    __typename?: "supplier_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate var_samp on columns */
export type Supplier_Var_Samp_Fields = {
    __typename?: "supplier_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** aggregate variance on columns */
export type Supplier_Variance_Fields = {
    __typename?: "supplier_variance_fields";
    id?: Maybe<Scalars["Float"]>;
};

/** columns and relationships of "unit" */
export type Unit = {
    __typename?: "unit";
    id: Scalars["Int"];
    name: Scalars["String"];
    price: Scalars["Int"];
    /** An object relationship */
    product?: Maybe<Product>;
    productid?: Maybe<Scalars["Int"]>;
    ratio: Scalars["Int"];
};

/** aggregated selection of "unit" */
export type Unit_Aggregate = {
    __typename?: "unit_aggregate";
    aggregate?: Maybe<Unit_Aggregate_Fields>;
    nodes: Array<Unit>;
};

/** aggregate fields of "unit" */
export type Unit_Aggregate_Fields = {
    __typename?: "unit_aggregate_fields";
    avg?: Maybe<Unit_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Unit_Max_Fields>;
    min?: Maybe<Unit_Min_Fields>;
    stddev?: Maybe<Unit_Stddev_Fields>;
    stddev_pop?: Maybe<Unit_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Unit_Stddev_Samp_Fields>;
    sum?: Maybe<Unit_Sum_Fields>;
    var_pop?: Maybe<Unit_Var_Pop_Fields>;
    var_samp?: Maybe<Unit_Var_Samp_Fields>;
    variance?: Maybe<Unit_Variance_Fields>;
};

/** aggregate fields of "unit" */
export type Unit_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Unit_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "unit" */
export type Unit_Aggregate_Order_By = {
    avg?: InputMaybe<Unit_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Unit_Max_Order_By>;
    min?: InputMaybe<Unit_Min_Order_By>;
    stddev?: InputMaybe<Unit_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Unit_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Unit_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Unit_Sum_Order_By>;
    var_pop?: InputMaybe<Unit_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Unit_Var_Samp_Order_By>;
    variance?: InputMaybe<Unit_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "unit" */
export type Unit_Arr_Rel_Insert_Input = {
    data: Array<Unit_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Unit_On_Conflict>;
};

/** aggregate avg on columns */
export type Unit_Avg_Fields = {
    __typename?: "unit_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "unit" */
export type Unit_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "unit". All fields are combined with a logical 'AND'. */
export type Unit_Bool_Exp = {
    _and?: InputMaybe<Array<Unit_Bool_Exp>>;
    _not?: InputMaybe<Unit_Bool_Exp>;
    _or?: InputMaybe<Array<Unit_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    price?: InputMaybe<Int_Comparison_Exp>;
    product?: InputMaybe<Product_Bool_Exp>;
    productid?: InputMaybe<Int_Comparison_Exp>;
    ratio?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "unit" */
export enum Unit_Constraint {
    /** unique or primary key constraint */
    UnitPkey = "unit_pkey",
}

/** input type for incrementing numeric columns in table "unit" */
export type Unit_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    ratio?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "unit" */
export type Unit_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Int"]>;
    product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
    productid?: InputMaybe<Scalars["Int"]>;
    ratio?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Unit_Max_Fields = {
    __typename?: "unit_max_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    ratio?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "unit" */
export type Unit_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Unit_Min_Fields = {
    __typename?: "unit_min_fields";
    id?: Maybe<Scalars["Int"]>;
    name?: Maybe<Scalars["String"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    ratio?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "unit" */
export type Unit_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "unit" */
export type Unit_Mutation_Response = {
    __typename?: "unit_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Unit>;
};

/** on_conflict condition type for table "unit" */
export type Unit_On_Conflict = {
    constraint: Unit_Constraint;
    update_columns?: Array<Unit_Update_Column>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

/** Ordering options when selecting data from "unit". */
export type Unit_Order_By = {
    id?: InputMaybe<Order_By>;
    name?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    product?: InputMaybe<Product_Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** primary key columns input for table: unit */
export type Unit_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "unit" */
export enum Unit_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Price = "price",
    /** column name */
    Productid = "productid",
    /** column name */
    Ratio = "ratio",
}

/** input type for updating data in table "unit" */
export type Unit_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    ratio?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Unit_Stddev_Fields = {
    __typename?: "unit_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "unit" */
export type Unit_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Unit_Stddev_Pop_Fields = {
    __typename?: "unit_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "unit" */
export type Unit_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Unit_Stddev_Samp_Fields = {
    __typename?: "unit_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "unit" */
export type Unit_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Unit_Sum_Fields = {
    __typename?: "unit_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    ratio?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "unit" */
export type Unit_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** update columns of table "unit" */
export enum Unit_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Name = "name",
    /** column name */
    Price = "price",
    /** column name */
    Productid = "productid",
    /** column name */
    Ratio = "ratio",
}

/** aggregate var_pop on columns */
export type Unit_Var_Pop_Fields = {
    __typename?: "unit_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "unit" */
export type Unit_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Unit_Var_Samp_Fields = {
    __typename?: "unit_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "unit" */
export type Unit_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Unit_Variance_Fields = {
    __typename?: "unit_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    ratio?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "unit" */
export type Unit_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    ratio?: InputMaybe<Order_By>;
};

export type CreateCategoryMutationVariables = Exact<{
    object?: InputMaybe<Category_Insert_Input>;
}>;

export type CreateCategoryMutation = {
    __typename?: "mutation_root";
    insert_category_one?: { __typename?: "category"; id: number } | null;
};

export type DeleteCategoryMutationVariables = Exact<{
    id?: InputMaybe<Int_Comparison_Exp>;
}>;

export type DeleteCategoryMutation = {
    __typename?: "mutation_root";
    delete_category?: {
        __typename?: "category_mutation_response";
        returning: Array<{ __typename?: "category"; id: number }>;
    } | null;
};

export type UpdateCategoryMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Category_Set_Input>;
}>;

export type UpdateCategoryMutation = {
    __typename?: "mutation_root";
    update_category_by_pk?: { __typename?: "category"; id: number } | null;
};

export type CreateCustomerMutationVariables = Exact<{
    object?: InputMaybe<Customer_Insert_Input>;
}>;

export type CreateCustomerMutation = {
    __typename?: "mutation_root";
    insert_customer_one?: { __typename?: "customer"; id: number } | null;
};

export type UpdateCustomerMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Customer_Set_Input>;
}>;

export type UpdateCustomerMutation = {
    __typename?: "mutation_root";
    update_customer_by_pk?: { __typename?: "customer"; id: number } | null;
};

export type CreateProductMutationVariables = Exact<{
    object?: InputMaybe<Product_Insert_Input>;
}>;

export type CreateProductMutation = {
    __typename?: "mutation_root";
    insert_product_one?: { __typename?: "product"; id: number } | null;
};

export type UpdateProductMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Product_Set_Input>;
}>;

export type UpdateProductMutation = {
    __typename?: "mutation_root";
    update_product_by_pk?: { __typename?: "product"; id: number } | null;
};

export type CreateSupplierMutationVariables = Exact<{
    object?: InputMaybe<Supplier_Insert_Input>;
}>;

export type CreateSupplierMutation = {
    __typename?: "mutation_root";
    insert_supplier_one?: { __typename?: "supplier"; id: number } | null;
};

export type UpdateSupplierMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Supplier_Set_Input>;
}>;

export type UpdateSupplierMutation = {
    __typename?: "mutation_root";
    update_supplier_by_pk?: { __typename?: "supplier"; id: number } | null;
};

export type CreateUnitMutationVariables = Exact<{
    object?: InputMaybe<Unit_Insert_Input>;
}>;

export type CreateUnitMutation = {
    __typename?: "mutation_root";
    insert_unit_one?: { __typename?: "unit"; id: number } | null;
};

export type GetUnitByProductQueryVariables = Exact<{
    _eq?: InputMaybe<Scalars["Int"]>;
}>;

export type GetUnitByProductQuery = {
    __typename?: "query_root";
    unit: Array<{ __typename?: "unit"; id: number; name: string; ratio: number; price: number }>;
};

export type UpdateUnitMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Unit_Set_Input>;
}>;

export type UpdateUnitMutation = {
    __typename?: "mutation_root";
    update_unit_by_pk?: { __typename?: "unit"; id: number } | null;
};
