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
    timestamptz: any;
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
    backMoney?: Maybe<Scalars["Int"]>;
    createTime?: Maybe<Scalars["timestamptz"]>;
    /** An object relationship */
    customer?: Maybe<Customer>;
    customerid?: Maybe<Scalars["Int"]>;
    id: Scalars["Int"];
    /** An array relationship */
    orderdetails: Array<Orderdetail>;
    /** An aggregate relationship */
    orderdetails_aggregate: Orderdetail_Aggregate;
    pay?: Maybe<Scalars["Int"]>;
    paymentTime?: Maybe<Scalars["timestamptz"]>;
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

export type Order_Aggregate_Bool_Exp = {
    count?: InputMaybe<Order_Aggregate_Bool_Exp_Count>;
};

export type Order_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Order_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
    filter?: InputMaybe<Order_Bool_Exp>;
    predicate: Int_Comparison_Exp;
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
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "Order" */
export type Order_Avg_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Order". All fields are combined with a logical 'AND'. */
export type Order_Bool_Exp = {
    _and?: InputMaybe<Array<Order_Bool_Exp>>;
    _not?: InputMaybe<Order_Bool_Exp>;
    _or?: InputMaybe<Array<Order_Bool_Exp>>;
    backMoney?: InputMaybe<Int_Comparison_Exp>;
    createTime?: InputMaybe<Timestamptz_Comparison_Exp>;
    customer?: InputMaybe<Customer_Bool_Exp>;
    customerid?: InputMaybe<Int_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    orderdetails?: InputMaybe<Orderdetail_Bool_Exp>;
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Bool_Exp>;
    pay?: InputMaybe<Int_Comparison_Exp>;
    paymentTime?: InputMaybe<Timestamptz_Comparison_Exp>;
    status?: InputMaybe<String_Comparison_Exp>;
    total?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "Order" */
export enum Order_Constraint {
    /** unique or primary key constraint on columns "id" */
    OrderPkey = "Order_pkey",
}

/** input type for incrementing numeric columns in table "Order" */
export type Order_Inc_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    pay?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "Order" */
export type Order_Insert_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    createTime?: InputMaybe<Scalars["timestamptz"]>;
    customer?: InputMaybe<Customer_Obj_Rel_Insert_Input>;
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    orderdetails?: InputMaybe<Orderdetail_Arr_Rel_Insert_Input>;
    pay?: InputMaybe<Scalars["Int"]>;
    paymentTime?: InputMaybe<Scalars["timestamptz"]>;
    status?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Order_Max_Fields = {
    __typename?: "Order_max_fields";
    backMoney?: Maybe<Scalars["Int"]>;
    createTime?: Maybe<Scalars["timestamptz"]>;
    customerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    pay?: Maybe<Scalars["Int"]>;
    paymentTime?: Maybe<Scalars["timestamptz"]>;
    status?: Maybe<Scalars["String"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "Order" */
export type Order_Max_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    createTime?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    paymentTime?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Order_Min_Fields = {
    __typename?: "Order_min_fields";
    backMoney?: Maybe<Scalars["Int"]>;
    createTime?: Maybe<Scalars["timestamptz"]>;
    customerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    pay?: Maybe<Scalars["Int"]>;
    paymentTime?: Maybe<Scalars["timestamptz"]>;
    status?: Maybe<Scalars["String"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "Order" */
export type Order_Min_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    createTime?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    paymentTime?: InputMaybe<Order_By>;
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
    backMoney?: InputMaybe<Order_By>;
    createTime?: InputMaybe<Order_By>;
    customer?: InputMaybe<Customer_Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Order_By>;
    pay?: InputMaybe<Order_By>;
    paymentTime?: InputMaybe<Order_By>;
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
    BackMoney = "backMoney",
    /** column name */
    CreateTime = "createTime",
    /** column name */
    Customerid = "customerid",
    /** column name */
    Id = "id",
    /** column name */
    Pay = "pay",
    /** column name */
    PaymentTime = "paymentTime",
    /** column name */
    Status = "status",
    /** column name */
    Total = "total",
}

/** input type for updating data in table "Order" */
export type Order_Set_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    createTime?: InputMaybe<Scalars["timestamptz"]>;
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    pay?: InputMaybe<Scalars["Int"]>;
    paymentTime?: InputMaybe<Scalars["timestamptz"]>;
    status?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Order_Stddev_Fields = {
    __typename?: "Order_stddev_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "Order" */
export type Order_Stddev_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Order_Stddev_Pop_Fields = {
    __typename?: "Order_stddev_pop_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "Order" */
export type Order_Stddev_Pop_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Order_Stddev_Samp_Fields = {
    __typename?: "Order_stddev_samp_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "Order" */
export type Order_Stddev_Samp_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Order" */
export type Order_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Order_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Order_Stream_Cursor_Value_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    createTime?: InputMaybe<Scalars["timestamptz"]>;
    customerid?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    pay?: InputMaybe<Scalars["Int"]>;
    paymentTime?: InputMaybe<Scalars["timestamptz"]>;
    status?: InputMaybe<Scalars["String"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Order_Sum_Fields = {
    __typename?: "Order_sum_fields";
    backMoney?: Maybe<Scalars["Int"]>;
    customerid?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    pay?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "Order" */
export type Order_Sum_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** update columns of table "Order" */
export enum Order_Update_Column {
    /** column name */
    BackMoney = "backMoney",
    /** column name */
    CreateTime = "createTime",
    /** column name */
    Customerid = "customerid",
    /** column name */
    Id = "id",
    /** column name */
    Pay = "pay",
    /** column name */
    PaymentTime = "paymentTime",
    /** column name */
    Status = "status",
    /** column name */
    Total = "total",
}

export type Order_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Order_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Order_Set_Input>;
    /** filter the rows which have to be updated */
    where: Order_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Order_Var_Pop_Fields = {
    __typename?: "Order_var_pop_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "Order" */
export type Order_Var_Pop_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Order_Var_Samp_Fields = {
    __typename?: "Order_var_samp_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "Order" */
export type Order_Var_Samp_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Order_Variance_Fields = {
    __typename?: "Order_variance_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    customerid?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "Order" */
export type Order_Variance_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    customerid?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
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
    /** unique or primary key constraint on columns "id" */
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

/** Streaming cursor of the table "account" */
export type Account_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Account_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Account_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    password?: InputMaybe<Scalars["String"]>;
    role?: InputMaybe<Scalars["String"]>;
    username?: InputMaybe<Scalars["String"]>;
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

export type Account_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Account_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Account_Set_Input>;
    /** filter the rows which have to be updated */
    where: Account_Bool_Exp;
};

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
    products_aggregate?: InputMaybe<Product_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
    /** unique or primary key constraint on columns "id" */
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

/** Streaming cursor of the table "category" */
export type Category_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Category_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Category_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
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

export type Category_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Category_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Category_Set_Input>;
    /** filter the rows which have to be updated */
    where: Category_Bool_Exp;
};

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

/** ordering argument of a cursor */
export enum Cursor_Ordering {
    /** ascending ordering of the cursor */
    Asc = "ASC",
    /** descending ordering of the cursor */
    Desc = "DESC",
}

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
    Orders_aggregate?: InputMaybe<Order_Aggregate_Bool_Exp>;
    _and?: InputMaybe<Array<Customer_Bool_Exp>>;
    _not?: InputMaybe<Customer_Bool_Exp>;
    _or?: InputMaybe<Array<Customer_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "customer" */
export enum Customer_Constraint {
    /** unique or primary key constraint on columns "id" */
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

/** Streaming cursor of the table "customer" */
export type Customer_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Customer_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Customer_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
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

export type Customer_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Customer_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Customer_Set_Input>;
    /** filter the rows which have to be updated */
    where: Customer_Bool_Exp;
};

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

/** columns and relationships of "import" */
export type Import = {
    __typename?: "import";
    backMoney?: Maybe<Scalars["Int"]>;
    createTime?: Maybe<Scalars["timestamptz"]>;
    id: Scalars["Int"];
    /** An array relationship */
    importdetails: Array<Importdetail>;
    /** An aggregate relationship */
    importdetails_aggregate: Importdetail_Aggregate;
    pay?: Maybe<Scalars["Int"]>;
    paymentTime?: Maybe<Scalars["timestamptz"]>;
    status?: Maybe<Scalars["String"]>;
    /** An object relationship */
    supplier?: Maybe<Supplier>;
    supplierid?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** columns and relationships of "import" */
export type ImportImportdetailsArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

/** columns and relationships of "import" */
export type ImportImportdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

/** aggregated selection of "import" */
export type Import_Aggregate = {
    __typename?: "import_aggregate";
    aggregate?: Maybe<Import_Aggregate_Fields>;
    nodes: Array<Import>;
};

export type Import_Aggregate_Bool_Exp = {
    count?: InputMaybe<Import_Aggregate_Bool_Exp_Count>;
};

export type Import_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Import_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
    filter?: InputMaybe<Import_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "import" */
export type Import_Aggregate_Fields = {
    __typename?: "import_aggregate_fields";
    avg?: Maybe<Import_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Import_Max_Fields>;
    min?: Maybe<Import_Min_Fields>;
    stddev?: Maybe<Import_Stddev_Fields>;
    stddev_pop?: Maybe<Import_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Import_Stddev_Samp_Fields>;
    sum?: Maybe<Import_Sum_Fields>;
    var_pop?: Maybe<Import_Var_Pop_Fields>;
    var_samp?: Maybe<Import_Var_Samp_Fields>;
    variance?: Maybe<Import_Variance_Fields>;
};

/** aggregate fields of "import" */
export type Import_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Import_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "import" */
export type Import_Aggregate_Order_By = {
    avg?: InputMaybe<Import_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Import_Max_Order_By>;
    min?: InputMaybe<Import_Min_Order_By>;
    stddev?: InputMaybe<Import_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Import_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Import_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Import_Sum_Order_By>;
    var_pop?: InputMaybe<Import_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Import_Var_Samp_Order_By>;
    variance?: InputMaybe<Import_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "import" */
export type Import_Arr_Rel_Insert_Input = {
    data: Array<Import_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Import_On_Conflict>;
};

/** aggregate avg on columns */
export type Import_Avg_Fields = {
    __typename?: "import_avg_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "import" */
export type Import_Avg_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "import". All fields are combined with a logical 'AND'. */
export type Import_Bool_Exp = {
    _and?: InputMaybe<Array<Import_Bool_Exp>>;
    _not?: InputMaybe<Import_Bool_Exp>;
    _or?: InputMaybe<Array<Import_Bool_Exp>>;
    backMoney?: InputMaybe<Int_Comparison_Exp>;
    createTime?: InputMaybe<Timestamptz_Comparison_Exp>;
    id?: InputMaybe<Int_Comparison_Exp>;
    importdetails?: InputMaybe<Importdetail_Bool_Exp>;
    importdetails_aggregate?: InputMaybe<Importdetail_Aggregate_Bool_Exp>;
    pay?: InputMaybe<Int_Comparison_Exp>;
    paymentTime?: InputMaybe<Timestamptz_Comparison_Exp>;
    status?: InputMaybe<String_Comparison_Exp>;
    supplier?: InputMaybe<Supplier_Bool_Exp>;
    supplierid?: InputMaybe<Int_Comparison_Exp>;
    total?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "import" */
export enum Import_Constraint {
    /** unique or primary key constraint on columns "id" */
    ImportPkey = "import_pkey",
}

/** input type for incrementing numeric columns in table "import" */
export type Import_Inc_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    id?: InputMaybe<Scalars["Int"]>;
    pay?: InputMaybe<Scalars["Int"]>;
    supplierid?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "import" */
export type Import_Insert_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    createTime?: InputMaybe<Scalars["timestamptz"]>;
    id?: InputMaybe<Scalars["Int"]>;
    importdetails?: InputMaybe<Importdetail_Arr_Rel_Insert_Input>;
    pay?: InputMaybe<Scalars["Int"]>;
    paymentTime?: InputMaybe<Scalars["timestamptz"]>;
    status?: InputMaybe<Scalars["String"]>;
    supplier?: InputMaybe<Supplier_Obj_Rel_Insert_Input>;
    supplierid?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Import_Max_Fields = {
    __typename?: "import_max_fields";
    backMoney?: Maybe<Scalars["Int"]>;
    createTime?: Maybe<Scalars["timestamptz"]>;
    id?: Maybe<Scalars["Int"]>;
    pay?: Maybe<Scalars["Int"]>;
    paymentTime?: Maybe<Scalars["timestamptz"]>;
    status?: Maybe<Scalars["String"]>;
    supplierid?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "import" */
export type Import_Max_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    createTime?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    paymentTime?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Import_Min_Fields = {
    __typename?: "import_min_fields";
    backMoney?: Maybe<Scalars["Int"]>;
    createTime?: Maybe<Scalars["timestamptz"]>;
    id?: Maybe<Scalars["Int"]>;
    pay?: Maybe<Scalars["Int"]>;
    paymentTime?: Maybe<Scalars["timestamptz"]>;
    status?: Maybe<Scalars["String"]>;
    supplierid?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "import" */
export type Import_Min_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    createTime?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    paymentTime?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "import" */
export type Import_Mutation_Response = {
    __typename?: "import_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Import>;
};

/** input type for inserting object relation for remote table "import" */
export type Import_Obj_Rel_Insert_Input = {
    data: Import_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Import_On_Conflict>;
};

/** on_conflict condition type for table "import" */
export type Import_On_Conflict = {
    constraint: Import_Constraint;
    update_columns?: Array<Import_Update_Column>;
    where?: InputMaybe<Import_Bool_Exp>;
};

/** Ordering options when selecting data from "import". */
export type Import_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    createTime?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    importdetails_aggregate?: InputMaybe<Importdetail_Aggregate_Order_By>;
    pay?: InputMaybe<Order_By>;
    paymentTime?: InputMaybe<Order_By>;
    status?: InputMaybe<Order_By>;
    supplier?: InputMaybe<Supplier_Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: import */
export type Import_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "import" */
export enum Import_Select_Column {
    /** column name */
    BackMoney = "backMoney",
    /** column name */
    CreateTime = "createTime",
    /** column name */
    Id = "id",
    /** column name */
    Pay = "pay",
    /** column name */
    PaymentTime = "paymentTime",
    /** column name */
    Status = "status",
    /** column name */
    Supplierid = "supplierid",
    /** column name */
    Total = "total",
}

/** input type for updating data in table "import" */
export type Import_Set_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    createTime?: InputMaybe<Scalars["timestamptz"]>;
    id?: InputMaybe<Scalars["Int"]>;
    pay?: InputMaybe<Scalars["Int"]>;
    paymentTime?: InputMaybe<Scalars["timestamptz"]>;
    status?: InputMaybe<Scalars["String"]>;
    supplierid?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Import_Stddev_Fields = {
    __typename?: "import_stddev_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "import" */
export type Import_Stddev_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Import_Stddev_Pop_Fields = {
    __typename?: "import_stddev_pop_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "import" */
export type Import_Stddev_Pop_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Import_Stddev_Samp_Fields = {
    __typename?: "import_stddev_samp_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "import" */
export type Import_Stddev_Samp_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "import" */
export type Import_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Import_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Import_Stream_Cursor_Value_Input = {
    backMoney?: InputMaybe<Scalars["Int"]>;
    createTime?: InputMaybe<Scalars["timestamptz"]>;
    id?: InputMaybe<Scalars["Int"]>;
    pay?: InputMaybe<Scalars["Int"]>;
    paymentTime?: InputMaybe<Scalars["timestamptz"]>;
    status?: InputMaybe<Scalars["String"]>;
    supplierid?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Import_Sum_Fields = {
    __typename?: "import_sum_fields";
    backMoney?: Maybe<Scalars["Int"]>;
    id?: Maybe<Scalars["Int"]>;
    pay?: Maybe<Scalars["Int"]>;
    supplierid?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "import" */
export type Import_Sum_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** update columns of table "import" */
export enum Import_Update_Column {
    /** column name */
    BackMoney = "backMoney",
    /** column name */
    CreateTime = "createTime",
    /** column name */
    Id = "id",
    /** column name */
    Pay = "pay",
    /** column name */
    PaymentTime = "paymentTime",
    /** column name */
    Status = "status",
    /** column name */
    Supplierid = "supplierid",
    /** column name */
    Total = "total",
}

export type Import_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Import_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Import_Set_Input>;
    /** filter the rows which have to be updated */
    where: Import_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Import_Var_Pop_Fields = {
    __typename?: "import_var_pop_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "import" */
export type Import_Var_Pop_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Import_Var_Samp_Fields = {
    __typename?: "import_var_samp_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "import" */
export type Import_Var_Samp_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Import_Variance_Fields = {
    __typename?: "import_variance_fields";
    backMoney?: Maybe<Scalars["Float"]>;
    id?: Maybe<Scalars["Float"]>;
    pay?: Maybe<Scalars["Float"]>;
    supplierid?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "import" */
export type Import_Variance_Order_By = {
    backMoney?: InputMaybe<Order_By>;
    id?: InputMaybe<Order_By>;
    pay?: InputMaybe<Order_By>;
    supplierid?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** columns and relationships of "importdetail" */
export type Importdetail = {
    __typename?: "importdetail";
    id: Scalars["Int"];
    /** An object relationship */
    import: Import;
    importid: Scalars["Int"];
    price?: Maybe<Scalars["Int"]>;
    /** An object relationship */
    product: Product;
    productid: Scalars["Int"];
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "importdetail" */
export type Importdetail_Aggregate = {
    __typename?: "importdetail_aggregate";
    aggregate?: Maybe<Importdetail_Aggregate_Fields>;
    nodes: Array<Importdetail>;
};

export type Importdetail_Aggregate_Bool_Exp = {
    count?: InputMaybe<Importdetail_Aggregate_Bool_Exp_Count>;
};

export type Importdetail_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Importdetail_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
    filter?: InputMaybe<Importdetail_Bool_Exp>;
    predicate: Int_Comparison_Exp;
};

/** aggregate fields of "importdetail" */
export type Importdetail_Aggregate_Fields = {
    __typename?: "importdetail_aggregate_fields";
    avg?: Maybe<Importdetail_Avg_Fields>;
    count: Scalars["Int"];
    max?: Maybe<Importdetail_Max_Fields>;
    min?: Maybe<Importdetail_Min_Fields>;
    stddev?: Maybe<Importdetail_Stddev_Fields>;
    stddev_pop?: Maybe<Importdetail_Stddev_Pop_Fields>;
    stddev_samp?: Maybe<Importdetail_Stddev_Samp_Fields>;
    sum?: Maybe<Importdetail_Sum_Fields>;
    var_pop?: Maybe<Importdetail_Var_Pop_Fields>;
    var_samp?: Maybe<Importdetail_Var_Samp_Fields>;
    variance?: Maybe<Importdetail_Variance_Fields>;
};

/** aggregate fields of "importdetail" */
export type Importdetail_Aggregate_FieldsCountArgs = {
    columns?: InputMaybe<Array<Importdetail_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
};

/** order by aggregate values of table "importdetail" */
export type Importdetail_Aggregate_Order_By = {
    avg?: InputMaybe<Importdetail_Avg_Order_By>;
    count?: InputMaybe<Order_By>;
    max?: InputMaybe<Importdetail_Max_Order_By>;
    min?: InputMaybe<Importdetail_Min_Order_By>;
    stddev?: InputMaybe<Importdetail_Stddev_Order_By>;
    stddev_pop?: InputMaybe<Importdetail_Stddev_Pop_Order_By>;
    stddev_samp?: InputMaybe<Importdetail_Stddev_Samp_Order_By>;
    sum?: InputMaybe<Importdetail_Sum_Order_By>;
    var_pop?: InputMaybe<Importdetail_Var_Pop_Order_By>;
    var_samp?: InputMaybe<Importdetail_Var_Samp_Order_By>;
    variance?: InputMaybe<Importdetail_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "importdetail" */
export type Importdetail_Arr_Rel_Insert_Input = {
    data: Array<Importdetail_Insert_Input>;
    /** upsert condition */
    on_conflict?: InputMaybe<Importdetail_On_Conflict>;
};

/** aggregate avg on columns */
export type Importdetail_Avg_Fields = {
    __typename?: "importdetail_avg_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "importdetail" */
export type Importdetail_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "importdetail". All fields are combined with a logical 'AND'. */
export type Importdetail_Bool_Exp = {
    _and?: InputMaybe<Array<Importdetail_Bool_Exp>>;
    _not?: InputMaybe<Importdetail_Bool_Exp>;
    _or?: InputMaybe<Array<Importdetail_Bool_Exp>>;
    id?: InputMaybe<Int_Comparison_Exp>;
    import?: InputMaybe<Import_Bool_Exp>;
    importid?: InputMaybe<Int_Comparison_Exp>;
    price?: InputMaybe<Int_Comparison_Exp>;
    product?: InputMaybe<Product_Bool_Exp>;
    productid?: InputMaybe<Int_Comparison_Exp>;
    quantity?: InputMaybe<Int_Comparison_Exp>;
    total?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "importdetail" */
export enum Importdetail_Constraint {
    /** unique or primary key constraint on columns "id" */
    ImportdetailPkey = "importdetail_pkey",
}

/** input type for incrementing numeric columns in table "importdetail" */
export type Importdetail_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    importid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "importdetail" */
export type Importdetail_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    import?: InputMaybe<Import_Obj_Rel_Insert_Input>;
    importid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate max on columns */
export type Importdetail_Max_Fields = {
    __typename?: "importdetail_max_fields";
    id?: Maybe<Scalars["Int"]>;
    importid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "importdetail" */
export type Importdetail_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Importdetail_Min_Fields = {
    __typename?: "importdetail_min_fields";
    id?: Maybe<Scalars["Int"]>;
    importid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "importdetail" */
export type Importdetail_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "importdetail" */
export type Importdetail_Mutation_Response = {
    __typename?: "importdetail_mutation_response";
    /** number of rows affected by the mutation */
    affected_rows: Scalars["Int"];
    /** data from the rows affected by the mutation */
    returning: Array<Importdetail>;
};

/** on_conflict condition type for table "importdetail" */
export type Importdetail_On_Conflict = {
    constraint: Importdetail_Constraint;
    update_columns?: Array<Importdetail_Update_Column>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

/** Ordering options when selecting data from "importdetail". */
export type Importdetail_Order_By = {
    id?: InputMaybe<Order_By>;
    import?: InputMaybe<Import_Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    product?: InputMaybe<Product_Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** primary key columns input for table: importdetail */
export type Importdetail_Pk_Columns_Input = {
    id: Scalars["Int"];
};

/** select columns of table "importdetail" */
export enum Importdetail_Select_Column {
    /** column name */
    Id = "id",
    /** column name */
    Importid = "importid",
    /** column name */
    Price = "price",
    /** column name */
    Productid = "productid",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Total = "total",
}

/** input type for updating data in table "importdetail" */
export type Importdetail_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    importid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate stddev on columns */
export type Importdetail_Stddev_Fields = {
    __typename?: "importdetail_stddev_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "importdetail" */
export type Importdetail_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Importdetail_Stddev_Pop_Fields = {
    __typename?: "importdetail_stddev_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "importdetail" */
export type Importdetail_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Importdetail_Stddev_Samp_Fields = {
    __typename?: "importdetail_stddev_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "importdetail" */
export type Importdetail_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "importdetail" */
export type Importdetail_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Importdetail_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Importdetail_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    importid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
};

/** aggregate sum on columns */
export type Importdetail_Sum_Fields = {
    __typename?: "importdetail_sum_fields";
    id?: Maybe<Scalars["Int"]>;
    importid?: Maybe<Scalars["Int"]>;
    price?: Maybe<Scalars["Int"]>;
    productid?: Maybe<Scalars["Int"]>;
    quantity?: Maybe<Scalars["Int"]>;
    total?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "importdetail" */
export type Importdetail_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** update columns of table "importdetail" */
export enum Importdetail_Update_Column {
    /** column name */
    Id = "id",
    /** column name */
    Importid = "importid",
    /** column name */
    Price = "price",
    /** column name */
    Productid = "productid",
    /** column name */
    Quantity = "quantity",
    /** column name */
    Total = "total",
}

export type Importdetail_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Importdetail_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Importdetail_Set_Input>;
    /** filter the rows which have to be updated */
    where: Importdetail_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Importdetail_Var_Pop_Fields = {
    __typename?: "importdetail_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "importdetail" */
export type Importdetail_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Importdetail_Var_Samp_Fields = {
    __typename?: "importdetail_var_samp_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "importdetail" */
export type Importdetail_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Importdetail_Variance_Fields = {
    __typename?: "importdetail_variance_fields";
    id?: Maybe<Scalars["Float"]>;
    importid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "importdetail" */
export type Importdetail_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    importid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
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
    /** delete data from the table: "import" */
    delete_import?: Maybe<Import_Mutation_Response>;
    /** delete single row from the table: "import" */
    delete_import_by_pk?: Maybe<Import>;
    /** delete data from the table: "importdetail" */
    delete_importdetail?: Maybe<Importdetail_Mutation_Response>;
    /** delete single row from the table: "importdetail" */
    delete_importdetail_by_pk?: Maybe<Importdetail>;
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
    /** insert data into the table: "import" */
    insert_import?: Maybe<Import_Mutation_Response>;
    /** insert a single row into the table: "import" */
    insert_import_one?: Maybe<Import>;
    /** insert data into the table: "importdetail" */
    insert_importdetail?: Maybe<Importdetail_Mutation_Response>;
    /** insert a single row into the table: "importdetail" */
    insert_importdetail_one?: Maybe<Importdetail>;
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
    /** update multiples rows of table: "Order" */
    update_Order_many?: Maybe<Array<Maybe<Order_Mutation_Response>>>;
    /** update data of the table: "account" */
    update_account?: Maybe<Account_Mutation_Response>;
    /** update single row of the table: "account" */
    update_account_by_pk?: Maybe<Account>;
    /** update multiples rows of table: "account" */
    update_account_many?: Maybe<Array<Maybe<Account_Mutation_Response>>>;
    /** update data of the table: "category" */
    update_category?: Maybe<Category_Mutation_Response>;
    /** update single row of the table: "category" */
    update_category_by_pk?: Maybe<Category>;
    /** update multiples rows of table: "category" */
    update_category_many?: Maybe<Array<Maybe<Category_Mutation_Response>>>;
    /** update data of the table: "customer" */
    update_customer?: Maybe<Customer_Mutation_Response>;
    /** update single row of the table: "customer" */
    update_customer_by_pk?: Maybe<Customer>;
    /** update multiples rows of table: "customer" */
    update_customer_many?: Maybe<Array<Maybe<Customer_Mutation_Response>>>;
    /** update data of the table: "import" */
    update_import?: Maybe<Import_Mutation_Response>;
    /** update single row of the table: "import" */
    update_import_by_pk?: Maybe<Import>;
    /** update multiples rows of table: "import" */
    update_import_many?: Maybe<Array<Maybe<Import_Mutation_Response>>>;
    /** update data of the table: "importdetail" */
    update_importdetail?: Maybe<Importdetail_Mutation_Response>;
    /** update single row of the table: "importdetail" */
    update_importdetail_by_pk?: Maybe<Importdetail>;
    /** update multiples rows of table: "importdetail" */
    update_importdetail_many?: Maybe<Array<Maybe<Importdetail_Mutation_Response>>>;
    /** update data of the table: "orderdetail" */
    update_orderdetail?: Maybe<Orderdetail_Mutation_Response>;
    /** update single row of the table: "orderdetail" */
    update_orderdetail_by_pk?: Maybe<Orderdetail>;
    /** update multiples rows of table: "orderdetail" */
    update_orderdetail_many?: Maybe<Array<Maybe<Orderdetail_Mutation_Response>>>;
    /** update data of the table: "product" */
    update_product?: Maybe<Product_Mutation_Response>;
    /** update single row of the table: "product" */
    update_product_by_pk?: Maybe<Product>;
    /** update multiples rows of table: "product" */
    update_product_many?: Maybe<Array<Maybe<Product_Mutation_Response>>>;
    /** update data of the table: "supplier" */
    update_supplier?: Maybe<Supplier_Mutation_Response>;
    /** update single row of the table: "supplier" */
    update_supplier_by_pk?: Maybe<Supplier>;
    /** update multiples rows of table: "supplier" */
    update_supplier_many?: Maybe<Array<Maybe<Supplier_Mutation_Response>>>;
    /** update data of the table: "unit" */
    update_unit?: Maybe<Unit_Mutation_Response>;
    /** update single row of the table: "unit" */
    update_unit_by_pk?: Maybe<Unit>;
    /** update multiples rows of table: "unit" */
    update_unit_many?: Maybe<Array<Maybe<Unit_Mutation_Response>>>;
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
export type Mutation_RootDelete_ImportArgs = {
    where: Import_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Import_By_PkArgs = {
    id: Scalars["Int"];
};

/** mutation root */
export type Mutation_RootDelete_ImportdetailArgs = {
    where: Importdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Importdetail_By_PkArgs = {
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
export type Mutation_RootInsert_ImportArgs = {
    objects: Array<Import_Insert_Input>;
    on_conflict?: InputMaybe<Import_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Import_OneArgs = {
    object: Import_Insert_Input;
    on_conflict?: InputMaybe<Import_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ImportdetailArgs = {
    objects: Array<Importdetail_Insert_Input>;
    on_conflict?: InputMaybe<Importdetail_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Importdetail_OneArgs = {
    object: Importdetail_Insert_Input;
    on_conflict?: InputMaybe<Importdetail_On_Conflict>;
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
export type Mutation_RootUpdate_Order_ManyArgs = {
    updates: Array<Order_Updates>;
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
export type Mutation_RootUpdate_Account_ManyArgs = {
    updates: Array<Account_Updates>;
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
export type Mutation_RootUpdate_Category_ManyArgs = {
    updates: Array<Category_Updates>;
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
export type Mutation_RootUpdate_Customer_ManyArgs = {
    updates: Array<Customer_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ImportArgs = {
    _inc?: InputMaybe<Import_Inc_Input>;
    _set?: InputMaybe<Import_Set_Input>;
    where: Import_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Import_By_PkArgs = {
    _inc?: InputMaybe<Import_Inc_Input>;
    _set?: InputMaybe<Import_Set_Input>;
    pk_columns: Import_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Import_ManyArgs = {
    updates: Array<Import_Updates>;
};

/** mutation root */
export type Mutation_RootUpdate_ImportdetailArgs = {
    _inc?: InputMaybe<Importdetail_Inc_Input>;
    _set?: InputMaybe<Importdetail_Set_Input>;
    where: Importdetail_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Importdetail_By_PkArgs = {
    _inc?: InputMaybe<Importdetail_Inc_Input>;
    _set?: InputMaybe<Importdetail_Set_Input>;
    pk_columns: Importdetail_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Importdetail_ManyArgs = {
    updates: Array<Importdetail_Updates>;
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
export type Mutation_RootUpdate_Orderdetail_ManyArgs = {
    updates: Array<Orderdetail_Updates>;
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
export type Mutation_RootUpdate_Product_ManyArgs = {
    updates: Array<Product_Updates>;
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
export type Mutation_RootUpdate_Supplier_ManyArgs = {
    updates: Array<Supplier_Updates>;
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

/** mutation root */
export type Mutation_RootUpdate_Unit_ManyArgs = {
    updates: Array<Unit_Updates>;
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
    /** An object relationship */
    unit?: Maybe<Unit>;
    unitid?: Maybe<Scalars["Int"]>;
};

/** aggregated selection of "orderdetail" */
export type Orderdetail_Aggregate = {
    __typename?: "orderdetail_aggregate";
    aggregate?: Maybe<Orderdetail_Aggregate_Fields>;
    nodes: Array<Orderdetail>;
};

export type Orderdetail_Aggregate_Bool_Exp = {
    count?: InputMaybe<Orderdetail_Aggregate_Bool_Exp_Count>;
};

export type Orderdetail_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Orderdetail_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
    filter?: InputMaybe<Orderdetail_Bool_Exp>;
    predicate: Int_Comparison_Exp;
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
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by avg() on columns of table "orderdetail" */
export type Orderdetail_Avg_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unit?: InputMaybe<Unit_Bool_Exp>;
    unitid?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "orderdetail" */
export enum Orderdetail_Constraint {
    /** unique or primary key constraint on columns "id" */
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
    unitid?: InputMaybe<Scalars["Int"]>;
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
    unit?: InputMaybe<Unit_Obj_Rel_Insert_Input>;
    unitid?: InputMaybe<Scalars["Int"]>;
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
    unitid?: Maybe<Scalars["Int"]>;
};

/** order by max() on columns of table "orderdetail" */
export type Orderdetail_Max_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unitid?: Maybe<Scalars["Int"]>;
};

/** order by min() on columns of table "orderdetail" */
export type Orderdetail_Min_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unit?: InputMaybe<Unit_Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    /** column name */
    Unitid = "unitid",
}

/** input type for updating data in table "orderdetail" */
export type Orderdetail_Set_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    orderid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
    unitid?: InputMaybe<Scalars["Int"]>;
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
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by stddev() on columns of table "orderdetail" */
export type Orderdetail_Stddev_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_pop() on columns of table "orderdetail" */
export type Orderdetail_Stddev_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by stddev_samp() on columns of table "orderdetail" */
export type Orderdetail_Stddev_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orderdetail" */
export type Orderdetail_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Orderdetail_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orderdetail_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    orderid?: InputMaybe<Scalars["Int"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
    total?: InputMaybe<Scalars["Int"]>;
    unitid?: InputMaybe<Scalars["Int"]>;
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
    unitid?: Maybe<Scalars["Int"]>;
};

/** order by sum() on columns of table "orderdetail" */
export type Orderdetail_Sum_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    /** column name */
    Unitid = "unitid",
}

export type Orderdetail_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Orderdetail_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Orderdetail_Set_Input>;
    /** filter the rows which have to be updated */
    where: Orderdetail_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orderdetail_Var_Pop_Fields = {
    __typename?: "orderdetail_var_pop_fields";
    id?: Maybe<Scalars["Float"]>;
    orderid?: Maybe<Scalars["Float"]>;
    price?: Maybe<Scalars["Float"]>;
    productid?: Maybe<Scalars["Float"]>;
    quantity?: Maybe<Scalars["Float"]>;
    total?: Maybe<Scalars["Float"]>;
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by var_pop() on columns of table "orderdetail" */
export type Orderdetail_Var_Pop_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by var_samp() on columns of table "orderdetail" */
export type Orderdetail_Var_Samp_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
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
    unitid?: Maybe<Scalars["Float"]>;
};

/** order by variance() on columns of table "orderdetail" */
export type Orderdetail_Variance_Order_By = {
    id?: InputMaybe<Order_By>;
    orderid?: InputMaybe<Order_By>;
    price?: InputMaybe<Order_By>;
    productid?: InputMaybe<Order_By>;
    quantity?: InputMaybe<Order_By>;
    total?: InputMaybe<Order_By>;
    unitid?: InputMaybe<Order_By>;
};

/** columns and relationships of "product" */
export type Product = {
    __typename?: "product";
    /** An object relationship */
    category?: Maybe<Category>;
    categoryid?: Maybe<Scalars["Int"]>;
    code: Scalars["String"];
    id: Scalars["Int"];
    /** An array relationship */
    importdetails: Array<Importdetail>;
    /** An aggregate relationship */
    importdetails_aggregate: Importdetail_Aggregate;
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
export type ProductImportdetailsArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

/** columns and relationships of "product" */
export type ProductImportdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
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

export type Product_Aggregate_Bool_Exp = {
    count?: InputMaybe<Product_Aggregate_Bool_Exp_Count>;
};

export type Product_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Product_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
    filter?: InputMaybe<Product_Bool_Exp>;
    predicate: Int_Comparison_Exp;
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
    importdetails?: InputMaybe<Importdetail_Bool_Exp>;
    importdetails_aggregate?: InputMaybe<Importdetail_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    orderdetails?: InputMaybe<Orderdetail_Bool_Exp>;
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Bool_Exp>;
    origin?: InputMaybe<String_Comparison_Exp>;
    quantity?: InputMaybe<Int_Comparison_Exp>;
    units?: InputMaybe<Unit_Bool_Exp>;
    units_aggregate?: InputMaybe<Unit_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
    /** unique or primary key constraint on columns "id" */
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
    importdetails?: InputMaybe<Importdetail_Arr_Rel_Insert_Input>;
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
    importdetails_aggregate?: InputMaybe<Importdetail_Aggregate_Order_By>;
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

/** Streaming cursor of the table "product" */
export type Product_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Product_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Product_Stream_Cursor_Value_Input = {
    categoryid?: InputMaybe<Scalars["Int"]>;
    code?: InputMaybe<Scalars["String"]>;
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    origin?: InputMaybe<Scalars["String"]>;
    quantity?: InputMaybe<Scalars["Int"]>;
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

export type Product_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Product_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Product_Set_Input>;
    /** filter the rows which have to be updated */
    where: Product_Bool_Exp;
};

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
    /** fetch data from the table: "import" */
    import: Array<Import>;
    /** fetch aggregated fields from the table: "import" */
    import_aggregate: Import_Aggregate;
    /** fetch data from the table: "import" using primary key columns */
    import_by_pk?: Maybe<Import>;
    /** fetch data from the table: "importdetail" */
    importdetail: Array<Importdetail>;
    /** fetch aggregated fields from the table: "importdetail" */
    importdetail_aggregate: Importdetail_Aggregate;
    /** fetch data from the table: "importdetail" using primary key columns */
    importdetail_by_pk?: Maybe<Importdetail>;
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

export type Query_RootImportArgs = {
    distinct_on?: InputMaybe<Array<Import_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Import_Order_By>>;
    where?: InputMaybe<Import_Bool_Exp>;
};

export type Query_RootImport_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Import_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Import_Order_By>>;
    where?: InputMaybe<Import_Bool_Exp>;
};

export type Query_RootImport_By_PkArgs = {
    id: Scalars["Int"];
};

export type Query_RootImportdetailArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

export type Query_RootImportdetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

export type Query_RootImportdetail_By_PkArgs = {
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
    /** fetch data from the table in a streaming manner: "Order" */
    Order_stream: Array<Order>;
    /** fetch data from the table: "account" */
    account: Array<Account>;
    /** fetch aggregated fields from the table: "account" */
    account_aggregate: Account_Aggregate;
    /** fetch data from the table: "account" using primary key columns */
    account_by_pk?: Maybe<Account>;
    /** fetch data from the table in a streaming manner: "account" */
    account_stream: Array<Account>;
    /** fetch data from the table: "category" */
    category: Array<Category>;
    /** fetch aggregated fields from the table: "category" */
    category_aggregate: Category_Aggregate;
    /** fetch data from the table: "category" using primary key columns */
    category_by_pk?: Maybe<Category>;
    /** fetch data from the table in a streaming manner: "category" */
    category_stream: Array<Category>;
    /** fetch data from the table: "customer" */
    customer: Array<Customer>;
    /** fetch aggregated fields from the table: "customer" */
    customer_aggregate: Customer_Aggregate;
    /** fetch data from the table: "customer" using primary key columns */
    customer_by_pk?: Maybe<Customer>;
    /** fetch data from the table in a streaming manner: "customer" */
    customer_stream: Array<Customer>;
    /** fetch data from the table: "import" */
    import: Array<Import>;
    /** fetch aggregated fields from the table: "import" */
    import_aggregate: Import_Aggregate;
    /** fetch data from the table: "import" using primary key columns */
    import_by_pk?: Maybe<Import>;
    /** fetch data from the table in a streaming manner: "import" */
    import_stream: Array<Import>;
    /** fetch data from the table: "importdetail" */
    importdetail: Array<Importdetail>;
    /** fetch aggregated fields from the table: "importdetail" */
    importdetail_aggregate: Importdetail_Aggregate;
    /** fetch data from the table: "importdetail" using primary key columns */
    importdetail_by_pk?: Maybe<Importdetail>;
    /** fetch data from the table in a streaming manner: "importdetail" */
    importdetail_stream: Array<Importdetail>;
    /** fetch data from the table: "orderdetail" */
    orderdetail: Array<Orderdetail>;
    /** fetch aggregated fields from the table: "orderdetail" */
    orderdetail_aggregate: Orderdetail_Aggregate;
    /** fetch data from the table: "orderdetail" using primary key columns */
    orderdetail_by_pk?: Maybe<Orderdetail>;
    /** fetch data from the table in a streaming manner: "orderdetail" */
    orderdetail_stream: Array<Orderdetail>;
    /** fetch data from the table: "product" */
    product: Array<Product>;
    /** fetch aggregated fields from the table: "product" */
    product_aggregate: Product_Aggregate;
    /** fetch data from the table: "product" using primary key columns */
    product_by_pk?: Maybe<Product>;
    /** fetch data from the table in a streaming manner: "product" */
    product_stream: Array<Product>;
    /** fetch data from the table: "supplier" */
    supplier: Array<Supplier>;
    /** fetch aggregated fields from the table: "supplier" */
    supplier_aggregate: Supplier_Aggregate;
    /** fetch data from the table: "supplier" using primary key columns */
    supplier_by_pk?: Maybe<Supplier>;
    /** fetch data from the table in a streaming manner: "supplier" */
    supplier_stream: Array<Supplier>;
    /** fetch data from the table: "unit" */
    unit: Array<Unit>;
    /** fetch aggregated fields from the table: "unit" */
    unit_aggregate: Unit_Aggregate;
    /** fetch data from the table: "unit" using primary key columns */
    unit_by_pk?: Maybe<Unit>;
    /** fetch data from the table in a streaming manner: "unit" */
    unit_stream: Array<Unit>;
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

export type Subscription_RootOrder_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Order_Stream_Cursor_Input>>;
    where?: InputMaybe<Order_Bool_Exp>;
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

export type Subscription_RootAccount_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Account_Stream_Cursor_Input>>;
    where?: InputMaybe<Account_Bool_Exp>;
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

export type Subscription_RootCategory_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Category_Stream_Cursor_Input>>;
    where?: InputMaybe<Category_Bool_Exp>;
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

export type Subscription_RootCustomer_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Customer_Stream_Cursor_Input>>;
    where?: InputMaybe<Customer_Bool_Exp>;
};

export type Subscription_RootImportArgs = {
    distinct_on?: InputMaybe<Array<Import_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Import_Order_By>>;
    where?: InputMaybe<Import_Bool_Exp>;
};

export type Subscription_RootImport_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Import_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Import_Order_By>>;
    where?: InputMaybe<Import_Bool_Exp>;
};

export type Subscription_RootImport_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootImport_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Import_Stream_Cursor_Input>>;
    where?: InputMaybe<Import_Bool_Exp>;
};

export type Subscription_RootImportdetailArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

export type Subscription_RootImportdetail_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Importdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Importdetail_Order_By>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
};

export type Subscription_RootImportdetail_By_PkArgs = {
    id: Scalars["Int"];
};

export type Subscription_RootImportdetail_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Importdetail_Stream_Cursor_Input>>;
    where?: InputMaybe<Importdetail_Bool_Exp>;
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

export type Subscription_RootOrderdetail_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Orderdetail_Stream_Cursor_Input>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
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

export type Subscription_RootProduct_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Product_Stream_Cursor_Input>>;
    where?: InputMaybe<Product_Bool_Exp>;
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

export type Subscription_RootSupplier_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Supplier_Stream_Cursor_Input>>;
    where?: InputMaybe<Supplier_Bool_Exp>;
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

export type Subscription_RootUnit_StreamArgs = {
    batch_size: Scalars["Int"];
    cursor: Array<InputMaybe<Unit_Stream_Cursor_Input>>;
    where?: InputMaybe<Unit_Bool_Exp>;
};

/** columns and relationships of "supplier" */
export type Supplier = {
    __typename?: "supplier";
    id: Scalars["Int"];
    /** An array relationship */
    imports: Array<Import>;
    /** An aggregate relationship */
    imports_aggregate: Import_Aggregate;
    name: Scalars["String"];
    phone: Scalars["String"];
};

/** columns and relationships of "supplier" */
export type SupplierImportsArgs = {
    distinct_on?: InputMaybe<Array<Import_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Import_Order_By>>;
    where?: InputMaybe<Import_Bool_Exp>;
};

/** columns and relationships of "supplier" */
export type SupplierImports_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Import_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Import_Order_By>>;
    where?: InputMaybe<Import_Bool_Exp>;
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
    imports?: InputMaybe<Import_Bool_Exp>;
    imports_aggregate?: InputMaybe<Import_Aggregate_Bool_Exp>;
    name?: InputMaybe<String_Comparison_Exp>;
    phone?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "supplier" */
export enum Supplier_Constraint {
    /** unique or primary key constraint on columns "id" */
    SupplierPkey = "supplier_pkey",
}

/** input type for incrementing numeric columns in table "supplier" */
export type Supplier_Inc_Input = {
    id?: InputMaybe<Scalars["Int"]>;
};

/** input type for inserting data into table "supplier" */
export type Supplier_Insert_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    imports?: InputMaybe<Import_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "supplier" */
export type Supplier_Obj_Rel_Insert_Input = {
    data: Supplier_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Supplier_On_Conflict>;
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
    imports_aggregate?: InputMaybe<Import_Aggregate_Order_By>;
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

/** Streaming cursor of the table "supplier" */
export type Supplier_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Supplier_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Supplier_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    phone?: InputMaybe<Scalars["String"]>;
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

export type Supplier_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Supplier_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Supplier_Set_Input>;
    /** filter the rows which have to be updated */
    where: Supplier_Bool_Exp;
};

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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
    _eq?: InputMaybe<Scalars["timestamptz"]>;
    _gt?: InputMaybe<Scalars["timestamptz"]>;
    _gte?: InputMaybe<Scalars["timestamptz"]>;
    _in?: InputMaybe<Array<Scalars["timestamptz"]>>;
    _is_null?: InputMaybe<Scalars["Boolean"]>;
    _lt?: InputMaybe<Scalars["timestamptz"]>;
    _lte?: InputMaybe<Scalars["timestamptz"]>;
    _neq?: InputMaybe<Scalars["timestamptz"]>;
    _nin?: InputMaybe<Array<Scalars["timestamptz"]>>;
};

/** columns and relationships of "unit" */
export type Unit = {
    __typename?: "unit";
    id: Scalars["Int"];
    name: Scalars["String"];
    /** An array relationship */
    orderdetails: Array<Orderdetail>;
    /** An aggregate relationship */
    orderdetails_aggregate: Orderdetail_Aggregate;
    price: Scalars["Int"];
    /** An object relationship */
    product?: Maybe<Product>;
    productid?: Maybe<Scalars["Int"]>;
    ratio: Scalars["Int"];
};

/** columns and relationships of "unit" */
export type UnitOrderdetailsArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** columns and relationships of "unit" */
export type UnitOrderdetails_AggregateArgs = {
    distinct_on?: InputMaybe<Array<Orderdetail_Select_Column>>;
    limit?: InputMaybe<Scalars["Int"]>;
    offset?: InputMaybe<Scalars["Int"]>;
    order_by?: InputMaybe<Array<Orderdetail_Order_By>>;
    where?: InputMaybe<Orderdetail_Bool_Exp>;
};

/** aggregated selection of "unit" */
export type Unit_Aggregate = {
    __typename?: "unit_aggregate";
    aggregate?: Maybe<Unit_Aggregate_Fields>;
    nodes: Array<Unit>;
};

export type Unit_Aggregate_Bool_Exp = {
    count?: InputMaybe<Unit_Aggregate_Bool_Exp_Count>;
};

export type Unit_Aggregate_Bool_Exp_Count = {
    arguments?: InputMaybe<Array<Unit_Select_Column>>;
    distinct?: InputMaybe<Scalars["Boolean"]>;
    filter?: InputMaybe<Unit_Bool_Exp>;
    predicate: Int_Comparison_Exp;
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
    orderdetails?: InputMaybe<Orderdetail_Bool_Exp>;
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Bool_Exp>;
    price?: InputMaybe<Int_Comparison_Exp>;
    product?: InputMaybe<Product_Bool_Exp>;
    productid?: InputMaybe<Int_Comparison_Exp>;
    ratio?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "unit" */
export enum Unit_Constraint {
    /** unique or primary key constraint on columns "id" */
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
    orderdetails?: InputMaybe<Orderdetail_Arr_Rel_Insert_Input>;
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

/** input type for inserting object relation for remote table "unit" */
export type Unit_Obj_Rel_Insert_Input = {
    data: Unit_Insert_Input;
    /** upsert condition */
    on_conflict?: InputMaybe<Unit_On_Conflict>;
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
    orderdetails_aggregate?: InputMaybe<Orderdetail_Aggregate_Order_By>;
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

/** Streaming cursor of the table "unit" */
export type Unit_Stream_Cursor_Input = {
    /** Stream column input with initial value */
    initial_value: Unit_Stream_Cursor_Value_Input;
    /** cursor ordering */
    ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Unit_Stream_Cursor_Value_Input = {
    id?: InputMaybe<Scalars["Int"]>;
    name?: InputMaybe<Scalars["String"]>;
    price?: InputMaybe<Scalars["Int"]>;
    productid?: InputMaybe<Scalars["Int"]>;
    ratio?: InputMaybe<Scalars["Int"]>;
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

export type Unit_Updates = {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: InputMaybe<Unit_Inc_Input>;
    /** sets the columns of the filtered rows to the given values */
    _set?: InputMaybe<Unit_Set_Input>;
    /** filter the rows which have to be updated */
    where: Unit_Bool_Exp;
};

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

export type CreateImportMutationVariables = Exact<{
    object?: InputMaybe<Import_Insert_Input>;
}>;

export type CreateImportMutation = {
    __typename?: "mutation_root";
    insert_import_one?: { __typename?: "import"; id: number } | null;
};

export type GetImportDetailByImportQueryVariables = Exact<{
    _eq?: InputMaybe<Scalars["Int"]>;
}>;

export type GetImportDetailByImportQuery = {
    __typename?: "query_root";
    importdetail: Array<{
        __typename?: "importdetail";
        id: number;
        productid: number;
        quantity?: number | null;
        price?: number | null;
        total?: number | null;
        product: { __typename?: "product"; name: string };
    }>;
};

export type UpdateImportMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Import_Set_Input>;
}>;

export type UpdateImportMutation = {
    __typename?: "mutation_root";
    update_import_by_pk?: { __typename?: "import"; id: number } | null;
};

export type CreateOrderMutationVariables = Exact<{
    object?: InputMaybe<Order_Insert_Input>;
}>;

export type CreateOrderMutation = {
    __typename?: "mutation_root";
    insert_Order_one?: { __typename?: "Order"; id: number } | null;
};

export type GetOrderDetailByOrderQueryVariables = Exact<{
    _eq?: InputMaybe<Scalars["Int"]>;
}>;

export type GetOrderDetailByOrderQuery = {
    __typename?: "query_root";
    orderdetail: Array<{
        __typename?: "orderdetail";
        id: number;
        productid?: number | null;
        quantity: number;
        price: number;
        total: number;
        unitid?: number | null;
        unit?: { __typename?: "unit"; name: string } | null;
        product?: { __typename?: "product"; name: string } | null;
    }>;
};

export type UpdateOrderMutationVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
    _set?: InputMaybe<Order_Set_Input>;
}>;

export type UpdateOrderMutation = {
    __typename?: "mutation_root";
    update_Order_by_pk?: { __typename?: "Order"; id: number } | null;
};

export type CreateProductMutationVariables = Exact<{
    object?: InputMaybe<Product_Insert_Input>;
}>;

export type CreateProductMutation = {
    __typename?: "mutation_root";
    insert_product_one?: { __typename?: "product"; id: number } | null;
};

export type GetProductByPkQueryVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
}>;

export type GetProductByPkQuery = {
    __typename?: "query_root";
    product_by_pk?: { __typename?: "product"; id: number; quantity: number; name: string } | null;
};

export type UpdateManyProductMutationVariables = Exact<{
    updates?: InputMaybe<Array<Product_Updates> | Product_Updates>;
}>;

export type UpdateManyProductMutation = {
    __typename?: "mutation_root";
    update_product_many?: Array<{
        __typename?: "product_mutation_response";
        affected_rows: number;
        returning: Array<{ __typename?: "product"; id: number }>;
    } | null> | null;
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

export type GetUnitByPkQueryVariables = Exact<{
    id?: InputMaybe<Scalars["Int"]>;
}>;

export type GetUnitByPkQuery = {
    __typename?: "query_root";
    unit_by_pk?: { __typename?: "unit"; ratio: number; price: number; name: string } | null;
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
