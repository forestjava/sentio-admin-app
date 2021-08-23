/**
 * GQLESS AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {
  _eq?: Maybe<Scalars["String"]>;
  _gt?: Maybe<Scalars["String"]>;
  _gte?: Maybe<Scalars["String"]>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars["String"]>;
  _in?: Maybe<Array<Scalars["String"]>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars["String"]>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars["String"]>;
  _lt?: Maybe<Scalars["String"]>;
  _lte?: Maybe<Scalars["String"]>;
  _neq?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars["String"]>;
  _nin?: Maybe<Array<Scalars["String"]>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars["String"]>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars["String"]>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars["String"]>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars["String"]>;
}

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export interface account_bool_exp {
  _and?: Maybe<Array<account_bool_exp>>;
  _not?: Maybe<account_bool_exp>;
  _or?: Maybe<Array<account_bool_exp>>;
  deleted_at?: Maybe<date_comparison_exp>;
  uuid?: Maybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "account" */
export enum account_constraint {
  /** unique or primary key constraint */
  account_pkey = "account_pkey",
}

/** input type for inserting data into table "account" */
export interface account_insert_input {
  deleted_at?: Maybe<Scalars["date"]>;
  uuid?: Maybe<Scalars["uuid"]>;
}

/** input type for inserting object relation for remote table "account" */
export interface account_obj_rel_insert_input {
  data: account_insert_input;
  /** on conflict condition */
  on_conflict?: Maybe<account_on_conflict>;
}

/** on conflict condition type for table "account" */
export interface account_on_conflict {
  constraint: account_constraint;
  update_columns?: Array<account_update_column>;
  where?: Maybe<account_bool_exp>;
}

/** Ordering options when selecting data from "account". */
export interface account_order_by {
  deleted_at?: Maybe<order_by>;
  uuid?: Maybe<order_by>;
}

/** primary key columns input for table: account */
export interface account_pk_columns_input {
  uuid: Scalars["uuid"];
}

/** select columns of table "account" */
export enum account_select_column {
  /** column name */
  deleted_at = "deleted_at",
  /** column name */
  uuid = "uuid",
}

/** input type for updating data in table "account" */
export interface account_set_input {
  deleted_at?: Maybe<Scalars["date"]>;
  uuid?: Maybe<Scalars["uuid"]>;
}

/** update columns of table "account" */
export enum account_update_column {
  /** column name */
  deleted_at = "deleted_at",
  /** column name */
  uuid = "uuid",
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export interface date_comparison_exp {
  _eq?: Maybe<Scalars["date"]>;
  _gt?: Maybe<Scalars["date"]>;
  _gte?: Maybe<Scalars["date"]>;
  _in?: Maybe<Array<Scalars["date"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["date"]>;
  _lte?: Maybe<Scalars["date"]>;
  _neq?: Maybe<Scalars["date"]>;
  _nin?: Maybe<Array<Scalars["date"]>>;
}

/** Boolean expression to filter rows from the table "identity". All fields are combined with a logical 'AND'. */
export interface identity_bool_exp {
  _and?: Maybe<Array<identity_bool_exp>>;
  _not?: Maybe<identity_bool_exp>;
  _or?: Maybe<Array<identity_bool_exp>>;
  account?: Maybe<account_bool_exp>;
  account_uuid?: Maybe<uuid_comparison_exp>;
  deleted_at?: Maybe<date_comparison_exp>;
  handle?: Maybe<String_comparison_exp>;
  name?: Maybe<String_comparison_exp>;
  uuid?: Maybe<uuid_comparison_exp>;
}

/** unique or primary key constraints on table "identity" */
export enum identity_constraint {
  /** unique or primary key constraint */
  identity_pkey = "identity_pkey",
}

/** input type for inserting data into table "identity" */
export interface identity_insert_input {
  account?: Maybe<account_obj_rel_insert_input>;
  account_uuid?: Maybe<Scalars["uuid"]>;
  deleted_at?: Maybe<Scalars["date"]>;
  handle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  uuid?: Maybe<Scalars["uuid"]>;
}

/** on conflict condition type for table "identity" */
export interface identity_on_conflict {
  constraint: identity_constraint;
  update_columns?: Array<identity_update_column>;
  where?: Maybe<identity_bool_exp>;
}

/** Ordering options when selecting data from "identity". */
export interface identity_order_by {
  account?: Maybe<account_order_by>;
  account_uuid?: Maybe<order_by>;
  deleted_at?: Maybe<order_by>;
  handle?: Maybe<order_by>;
  name?: Maybe<order_by>;
  uuid?: Maybe<order_by>;
}

/** primary key columns input for table: identity */
export interface identity_pk_columns_input {
  uuid: Scalars["uuid"];
}

/** select columns of table "identity" */
export enum identity_select_column {
  /** column name */
  account_uuid = "account_uuid",
  /** column name */
  deleted_at = "deleted_at",
  /** column name */
  handle = "handle",
  /** column name */
  name = "name",
  /** column name */
  uuid = "uuid",
}

/** input type for updating data in table "identity" */
export interface identity_set_input {
  account_uuid?: Maybe<Scalars["uuid"]>;
  deleted_at?: Maybe<Scalars["date"]>;
  handle?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  uuid?: Maybe<Scalars["uuid"]>;
}

/** update columns of table "identity" */
export enum identity_update_column {
  /** column name */
  account_uuid = "account_uuid",
  /** column name */
  deleted_at = "deleted_at",
  /** column name */
  handle = "handle",
  /** column name */
  name = "name",
  /** column name */
  uuid = "uuid",
}

/** column ordering options */
export enum order_by {
  /** in ascending order, nulls last */
  asc = "asc",
  /** in ascending order, nulls first */
  asc_nulls_first = "asc_nulls_first",
  /** in ascending order, nulls last */
  asc_nulls_last = "asc_nulls_last",
  /** in descending order, nulls first */
  desc = "desc",
  /** in descending order, nulls first */
  desc_nulls_first = "desc_nulls_first",
  /** in descending order, nulls last */
  desc_nulls_last = "desc_nulls_last",
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {
  _eq?: Maybe<Scalars["uuid"]>;
  _gt?: Maybe<Scalars["uuid"]>;
  _gte?: Maybe<Scalars["uuid"]>;
  _in?: Maybe<Array<Scalars["uuid"]>>;
  _is_null?: Maybe<Scalars["Boolean"]>;
  _lt?: Maybe<Scalars["uuid"]>;
  _lte?: Maybe<Scalars["uuid"]>;
  _neq?: Maybe<Scalars["uuid"]>;
  _nin?: Maybe<Array<Scalars["uuid"]>>;
}

export const scalarsEnumsHash: import("gqless").ScalarsEnumsHash = {
  Boolean: true,
  Int: true,
  String: true,
  account_constraint: true,
  account_select_column: true,
  account_update_column: true,
  date: true,
  identity_constraint: true,
  identity_select_column: true,
  identity_update_column: true,
  order_by: true,
  uuid: true,
};
export const generatedSchema = {
  query: {
    __typename: { __type: "String!" },
    account: {
      __type: "[account!]!",
      __args: {
        distinct_on: "[account_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[account_order_by!]",
        where: "account_bool_exp",
      },
    },
    account_aggregate: {
      __type: "account_aggregate!",
      __args: {
        distinct_on: "[account_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[account_order_by!]",
        where: "account_bool_exp",
      },
    },
    account_by_pk: { __type: "account", __args: { uuid: "uuid!" } },
    identity: {
      __type: "[identity!]!",
      __args: {
        distinct_on: "[identity_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[identity_order_by!]",
        where: "identity_bool_exp",
      },
    },
    identity_aggregate: {
      __type: "identity_aggregate!",
      __args: {
        distinct_on: "[identity_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[identity_order_by!]",
        where: "identity_bool_exp",
      },
    },
    identity_by_pk: { __type: "identity", __args: { uuid: "uuid!" } },
  },
  mutation: {
    __typename: { __type: "String!" },
    delete_account: {
      __type: "account_mutation_response",
      __args: { where: "account_bool_exp!" },
    },
    delete_account_by_pk: { __type: "account", __args: { uuid: "uuid!" } },
    delete_identity: {
      __type: "identity_mutation_response",
      __args: { where: "identity_bool_exp!" },
    },
    delete_identity_by_pk: { __type: "identity", __args: { uuid: "uuid!" } },
    insert_account: {
      __type: "account_mutation_response",
      __args: {
        objects: "[account_insert_input!]!",
        on_conflict: "account_on_conflict",
      },
    },
    insert_account_one: {
      __type: "account",
      __args: {
        object: "account_insert_input!",
        on_conflict: "account_on_conflict",
      },
    },
    insert_identity: {
      __type: "identity_mutation_response",
      __args: {
        objects: "[identity_insert_input!]!",
        on_conflict: "identity_on_conflict",
      },
    },
    insert_identity_one: {
      __type: "identity",
      __args: {
        object: "identity_insert_input!",
        on_conflict: "identity_on_conflict",
      },
    },
    login: {
      __type: "LoginOutput",
      __args: { password: "String!", username: "String!" },
    },
    update_account: {
      __type: "account_mutation_response",
      __args: { _set: "account_set_input", where: "account_bool_exp!" },
    },
    update_account_by_pk: {
      __type: "account",
      __args: {
        _set: "account_set_input",
        pk_columns: "account_pk_columns_input!",
      },
    },
    update_identity: {
      __type: "identity_mutation_response",
      __args: { _set: "identity_set_input", where: "identity_bool_exp!" },
    },
    update_identity_by_pk: {
      __type: "identity",
      __args: {
        _set: "identity_set_input",
        pk_columns: "identity_pk_columns_input!",
      },
    },
  },
  subscription: {
    __typename: { __type: "String!" },
    account: {
      __type: "[account!]!",
      __args: {
        distinct_on: "[account_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[account_order_by!]",
        where: "account_bool_exp",
      },
    },
    account_aggregate: {
      __type: "account_aggregate!",
      __args: {
        distinct_on: "[account_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[account_order_by!]",
        where: "account_bool_exp",
      },
    },
    account_by_pk: { __type: "account", __args: { uuid: "uuid!" } },
    identity: {
      __type: "[identity!]!",
      __args: {
        distinct_on: "[identity_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[identity_order_by!]",
        where: "identity_bool_exp",
      },
    },
    identity_aggregate: {
      __type: "identity_aggregate!",
      __args: {
        distinct_on: "[identity_select_column!]",
        limit: "Int",
        offset: "Int",
        order_by: "[identity_order_by!]",
        where: "identity_bool_exp",
      },
    },
    identity_by_pk: { __type: "identity", __args: { uuid: "uuid!" } },
  },
  LoginOutput: {
    __typename: { __type: "String!" },
    access_token: { __type: "String!" },
    error_code: { __type: "String" },
    message: { __type: "String" },
    refresh_token: { __type: "String!" },
  },
  String_comparison_exp: {
    _eq: { __type: "String" },
    _gt: { __type: "String" },
    _gte: { __type: "String" },
    _ilike: { __type: "String" },
    _in: { __type: "[String!]" },
    _iregex: { __type: "String" },
    _is_null: { __type: "Boolean" },
    _like: { __type: "String" },
    _lt: { __type: "String" },
    _lte: { __type: "String" },
    _neq: { __type: "String" },
    _nilike: { __type: "String" },
    _nin: { __type: "[String!]" },
    _niregex: { __type: "String" },
    _nlike: { __type: "String" },
    _nregex: { __type: "String" },
    _nsimilar: { __type: "String" },
    _regex: { __type: "String" },
    _similar: { __type: "String" },
  },
  account: {
    __typename: { __type: "String!" },
    deleted_at: { __type: "date" },
    uuid: { __type: "uuid!" },
  },
  account_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "account_aggregate_fields" },
    nodes: { __type: "[account!]!" },
  },
  account_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[account_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "account_max_fields" },
    min: { __type: "account_min_fields" },
  },
  account_bool_exp: {
    _and: { __type: "[account_bool_exp!]" },
    _not: { __type: "account_bool_exp" },
    _or: { __type: "[account_bool_exp!]" },
    deleted_at: { __type: "date_comparison_exp" },
    uuid: { __type: "uuid_comparison_exp" },
  },
  account_insert_input: {
    deleted_at: { __type: "date" },
    uuid: { __type: "uuid" },
  },
  account_max_fields: {
    __typename: { __type: "String!" },
    deleted_at: { __type: "date" },
    uuid: { __type: "uuid" },
  },
  account_min_fields: {
    __typename: { __type: "String!" },
    deleted_at: { __type: "date" },
    uuid: { __type: "uuid" },
  },
  account_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[account!]!" },
  },
  account_obj_rel_insert_input: {
    data: { __type: "account_insert_input!" },
    on_conflict: { __type: "account_on_conflict" },
  },
  account_on_conflict: {
    constraint: { __type: "account_constraint!" },
    update_columns: { __type: "[account_update_column!]!" },
    where: { __type: "account_bool_exp" },
  },
  account_order_by: {
    deleted_at: { __type: "order_by" },
    uuid: { __type: "order_by" },
  },
  account_pk_columns_input: { uuid: { __type: "uuid!" } },
  account_set_input: {
    deleted_at: { __type: "date" },
    uuid: { __type: "uuid" },
  },
  date_comparison_exp: {
    _eq: { __type: "date" },
    _gt: { __type: "date" },
    _gte: { __type: "date" },
    _in: { __type: "[date!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "date" },
    _lte: { __type: "date" },
    _neq: { __type: "date" },
    _nin: { __type: "[date!]" },
  },
  identity: {
    __typename: { __type: "String!" },
    account: { __type: "account" },
    account_uuid: { __type: "uuid!" },
    deleted_at: { __type: "date" },
    handle: { __type: "String!" },
    name: { __type: "String!" },
    uuid: { __type: "uuid!" },
  },
  identity_aggregate: {
    __typename: { __type: "String!" },
    aggregate: { __type: "identity_aggregate_fields" },
    nodes: { __type: "[identity!]!" },
  },
  identity_aggregate_fields: {
    __typename: { __type: "String!" },
    count: {
      __type: "Int!",
      __args: { columns: "[identity_select_column!]", distinct: "Boolean" },
    },
    max: { __type: "identity_max_fields" },
    min: { __type: "identity_min_fields" },
  },
  identity_bool_exp: {
    _and: { __type: "[identity_bool_exp!]" },
    _not: { __type: "identity_bool_exp" },
    _or: { __type: "[identity_bool_exp!]" },
    account: { __type: "account_bool_exp" },
    account_uuid: { __type: "uuid_comparison_exp" },
    deleted_at: { __type: "date_comparison_exp" },
    handle: { __type: "String_comparison_exp" },
    name: { __type: "String_comparison_exp" },
    uuid: { __type: "uuid_comparison_exp" },
  },
  identity_insert_input: {
    account: { __type: "account_obj_rel_insert_input" },
    account_uuid: { __type: "uuid" },
    deleted_at: { __type: "date" },
    handle: { __type: "String" },
    name: { __type: "String" },
    uuid: { __type: "uuid" },
  },
  identity_max_fields: {
    __typename: { __type: "String!" },
    account_uuid: { __type: "uuid" },
    deleted_at: { __type: "date" },
    handle: { __type: "String" },
    name: { __type: "String" },
    uuid: { __type: "uuid" },
  },
  identity_min_fields: {
    __typename: { __type: "String!" },
    account_uuid: { __type: "uuid" },
    deleted_at: { __type: "date" },
    handle: { __type: "String" },
    name: { __type: "String" },
    uuid: { __type: "uuid" },
  },
  identity_mutation_response: {
    __typename: { __type: "String!" },
    affected_rows: { __type: "Int!" },
    returning: { __type: "[identity!]!" },
  },
  identity_on_conflict: {
    constraint: { __type: "identity_constraint!" },
    update_columns: { __type: "[identity_update_column!]!" },
    where: { __type: "identity_bool_exp" },
  },
  identity_order_by: {
    account: { __type: "account_order_by" },
    account_uuid: { __type: "order_by" },
    deleted_at: { __type: "order_by" },
    handle: { __type: "order_by" },
    name: { __type: "order_by" },
    uuid: { __type: "order_by" },
  },
  identity_pk_columns_input: { uuid: { __type: "uuid!" } },
  identity_set_input: {
    account_uuid: { __type: "uuid" },
    deleted_at: { __type: "date" },
    handle: { __type: "String" },
    name: { __type: "String" },
    uuid: { __type: "uuid" },
  },
  uuid_comparison_exp: {
    _eq: { __type: "uuid" },
    _gt: { __type: "uuid" },
    _gte: { __type: "uuid" },
    _in: { __type: "[uuid!]" },
    _is_null: { __type: "Boolean" },
    _lt: { __type: "uuid" },
    _lte: { __type: "uuid" },
    _neq: { __type: "uuid" },
    _nin: { __type: "[uuid!]" },
  },
} as const;

export interface Query {
  __typename: "Query" | undefined;
  account: (args?: {
    distinct_on?: Maybe<Array<account_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<account_order_by>>;
    where?: Maybe<account_bool_exp>;
  }) => Array<account>;
  account_aggregate: (args?: {
    distinct_on?: Maybe<Array<account_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<account_order_by>>;
    where?: Maybe<account_bool_exp>;
  }) => account_aggregate;
  account_by_pk: (args: { uuid: Scalars["uuid"] }) => Maybe<account>;
  identity: (args?: {
    distinct_on?: Maybe<Array<identity_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<identity_order_by>>;
    where?: Maybe<identity_bool_exp>;
  }) => Array<identity>;
  identity_aggregate: (args?: {
    distinct_on?: Maybe<Array<identity_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<identity_order_by>>;
    where?: Maybe<identity_bool_exp>;
  }) => identity_aggregate;
  identity_by_pk: (args: { uuid: Scalars["uuid"] }) => Maybe<identity>;
}

export interface Mutation {
  __typename: "Mutation" | undefined;
  delete_account: (args: {
    where: account_bool_exp;
  }) => Maybe<account_mutation_response>;
  delete_account_by_pk: (args: { uuid: Scalars["uuid"] }) => Maybe<account>;
  delete_identity: (args: {
    where: identity_bool_exp;
  }) => Maybe<identity_mutation_response>;
  delete_identity_by_pk: (args: { uuid: Scalars["uuid"] }) => Maybe<identity>;
  insert_account: (args: {
    objects: Array<account_insert_input>;
    on_conflict?: Maybe<account_on_conflict>;
  }) => Maybe<account_mutation_response>;
  insert_account_one: (args: {
    object: account_insert_input;
    on_conflict?: Maybe<account_on_conflict>;
  }) => Maybe<account>;
  insert_identity: (args: {
    objects: Array<identity_insert_input>;
    on_conflict?: Maybe<identity_on_conflict>;
  }) => Maybe<identity_mutation_response>;
  insert_identity_one: (args: {
    object: identity_insert_input;
    on_conflict?: Maybe<identity_on_conflict>;
  }) => Maybe<identity>;
  login: (args: {
    password: Scalars["String"];
    username: Scalars["String"];
  }) => Maybe<LoginOutput>;
  update_account: (args: {
    _set?: Maybe<account_set_input>;
    where: account_bool_exp;
  }) => Maybe<account_mutation_response>;
  update_account_by_pk: (args: {
    _set?: Maybe<account_set_input>;
    pk_columns: account_pk_columns_input;
  }) => Maybe<account>;
  update_identity: (args: {
    _set?: Maybe<identity_set_input>;
    where: identity_bool_exp;
  }) => Maybe<identity_mutation_response>;
  update_identity_by_pk: (args: {
    _set?: Maybe<identity_set_input>;
    pk_columns: identity_pk_columns_input;
  }) => Maybe<identity>;
}

export interface Subscription {
  __typename: "Subscription" | undefined;
  account: (args?: {
    distinct_on?: Maybe<Array<account_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<account_order_by>>;
    where?: Maybe<account_bool_exp>;
  }) => Array<account>;
  account_aggregate: (args?: {
    distinct_on?: Maybe<Array<account_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<account_order_by>>;
    where?: Maybe<account_bool_exp>;
  }) => account_aggregate;
  account_by_pk: (args: { uuid: Scalars["uuid"] }) => Maybe<account>;
  identity: (args?: {
    distinct_on?: Maybe<Array<identity_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<identity_order_by>>;
    where?: Maybe<identity_bool_exp>;
  }) => Array<identity>;
  identity_aggregate: (args?: {
    distinct_on?: Maybe<Array<identity_select_column>>;
    limit?: Maybe<Scalars["Int"]>;
    offset?: Maybe<Scalars["Int"]>;
    order_by?: Maybe<Array<identity_order_by>>;
    where?: Maybe<identity_bool_exp>;
  }) => identity_aggregate;
  identity_by_pk: (args: { uuid: Scalars["uuid"] }) => Maybe<identity>;
}

export interface LoginOutput {
  __typename: "LoginOutput" | undefined;
  access_token: ScalarsEnums["String"];
  error_code?: Maybe<ScalarsEnums["String"]>;
  message?: Maybe<ScalarsEnums["String"]>;
  refresh_token: ScalarsEnums["String"];
}

/**
 * columns and relationships of "account"
 */
export interface account {
  __typename: "account" | undefined;
  deleted_at?: Maybe<ScalarsEnums["date"]>;
  uuid: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "account"
 */
export interface account_aggregate {
  __typename: "account_aggregate" | undefined;
  aggregate?: Maybe<account_aggregate_fields>;
  nodes: Array<account>;
}

/**
 * aggregate fields of "account"
 */
export interface account_aggregate_fields {
  __typename: "account_aggregate_fields" | undefined;
  count: (args?: {
    columns?: Maybe<Array<account_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<account_max_fields>;
  min?: Maybe<account_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface account_max_fields {
  __typename: "account_max_fields" | undefined;
  deleted_at?: Maybe<ScalarsEnums["date"]>;
  uuid?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface account_min_fields {
  __typename: "account_min_fields" | undefined;
  deleted_at?: Maybe<ScalarsEnums["date"]>;
  uuid?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "account"
 */
export interface account_mutation_response {
  __typename: "account_mutation_response" | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<account>;
}

/**
 * columns and relationships of "identity"
 */
export interface identity {
  __typename: "identity" | undefined;
  /**
   * An object relationship
   */
  account?: Maybe<account>;
  account_uuid: ScalarsEnums["uuid"];
  deleted_at?: Maybe<ScalarsEnums["date"]>;
  handle: ScalarsEnums["String"];
  name: ScalarsEnums["String"];
  uuid: ScalarsEnums["uuid"];
}

/**
 * aggregated selection of "identity"
 */
export interface identity_aggregate {
  __typename: "identity_aggregate" | undefined;
  aggregate?: Maybe<identity_aggregate_fields>;
  nodes: Array<identity>;
}

/**
 * aggregate fields of "identity"
 */
export interface identity_aggregate_fields {
  __typename: "identity_aggregate_fields" | undefined;
  count: (args?: {
    columns?: Maybe<Array<identity_select_column>>;
    distinct?: Maybe<Scalars["Boolean"]>;
  }) => ScalarsEnums["Int"];
  max?: Maybe<identity_max_fields>;
  min?: Maybe<identity_min_fields>;
}

/**
 * aggregate max on columns
 */
export interface identity_max_fields {
  __typename: "identity_max_fields" | undefined;
  account_uuid?: Maybe<ScalarsEnums["uuid"]>;
  deleted_at?: Maybe<ScalarsEnums["date"]>;
  handle?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  uuid?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * aggregate min on columns
 */
export interface identity_min_fields {
  __typename: "identity_min_fields" | undefined;
  account_uuid?: Maybe<ScalarsEnums["uuid"]>;
  deleted_at?: Maybe<ScalarsEnums["date"]>;
  handle?: Maybe<ScalarsEnums["String"]>;
  name?: Maybe<ScalarsEnums["String"]>;
  uuid?: Maybe<ScalarsEnums["uuid"]>;
}

/**
 * response of any mutation on the table "identity"
 */
export interface identity_mutation_response {
  __typename: "identity_mutation_response" | undefined;
  /**
   * number of rows affected by the mutation
   */
  affected_rows: ScalarsEnums["Int"];
  /**
   * data from the rows affected by the mutation
   */
  returning: Array<identity>;
}

export interface SchemaObjectTypes {
  Query: Query;
  Mutation: Mutation;
  Subscription: Subscription;
  LoginOutput: LoginOutput;
  account: account;
  account_aggregate: account_aggregate;
  account_aggregate_fields: account_aggregate_fields;
  account_max_fields: account_max_fields;
  account_min_fields: account_min_fields;
  account_mutation_response: account_mutation_response;
  identity: identity;
  identity_aggregate: identity_aggregate;
  identity_aggregate_fields: identity_aggregate_fields;
  identity_max_fields: identity_max_fields;
  identity_min_fields: identity_min_fields;
  identity_mutation_response: identity_mutation_response;
}
export type SchemaObjectTypesNames =
  | "Query"
  | "Mutation"
  | "Subscription"
  | "LoginOutput"
  | "account"
  | "account_aggregate"
  | "account_aggregate_fields"
  | "account_max_fields"
  | "account_min_fields"
  | "account_mutation_response"
  | "identity"
  | "identity_aggregate"
  | "identity_aggregate_fields"
  | "identity_max_fields"
  | "identity_min_fields"
  | "identity_mutation_response";

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  account_constraint: account_constraint | undefined;
  account_select_column: account_select_column | undefined;
  account_update_column: account_update_column | undefined;
  identity_constraint: identity_constraint | undefined;
  identity_select_column: identity_select_column | undefined;
  identity_update_column: identity_update_column | undefined;
  order_by: order_by | undefined;
}
