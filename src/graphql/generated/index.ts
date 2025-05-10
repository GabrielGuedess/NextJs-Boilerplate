import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import { z } from 'zod';
import {
  graphql,
  type RequestHandlerOptions,
  type GraphQLResponseResolver,
} from 'msw';

export type Maybe<T> = T | null;

export type InputMaybe<T> = Maybe<T>;

export type Exact<T extends Record<string, unknown>> = {
  [K in keyof T]: T[K];
};

export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};

export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};

export type MakeEmpty<
  T extends Record<string, unknown>,
  K extends keyof T,
> = Partial<Record<K, never>>;

export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends '__typename' | ' $fragmentName' ? T[P] : never;
    };
const defaultOptions = {} as const;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  Upload: { input: File; output: File };
  Int: { input: number; output: number };
  JWT: { input: string; output: string };
  UUID: { input: string; output: string };
  Float: { input: number; output: number };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  EmailAddress: { input: string; output: string };
  URL: { input: URL | string; output: URL | string };
  DateTime: { input: Date | string; output: Date | string };
  DateTimeISO: { input: Date | string; output: Date | string };
};

export type AuthUserInput = {
  password: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
};

export type AuthUserModel = {
  user: UserModel;
  __typename?: 'AuthUserModel';
  token: Scalars['JWT']['output'];
  user_id: Scalars['UUID']['output'];
  refresh_token: Scalars['JWT']['output'];
  token_expires: Scalars['DateTimeISO']['output'];
  refresh_token_expires: Scalars['DateTimeISO']['output'];
};

export type BoolFilter = {
  not?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Branch = {
  id: Scalars['ID']['output'];
  Customer: Customer;
  _count: BranchCount;
  __typename?: 'Branch';
  Table?: Maybe<Array<Table>>;
  Product?: Maybe<Array<Product>>;
  Category?: Maybe<Array<Category>>;
  city: Scalars['String']['output'];
  cnpj: Scalars['String']['output'];
  Employees?: Maybe<Array<Employee>>;
  state: Scalars['String']['output'];
  address: Scalars['String']['output'];
  zip_code: Scalars['String']['output'];
  branch_name: Scalars['String']['output'];
  customer_id: Scalars['String']['output'];
  address_number: Scalars['String']['output'];
  address_complement: Scalars['String']['output'];
  address_neighborhood: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type BranchCount = {
  __typename?: 'BranchCount';
  Table: Scalars['Int']['output'];
  Product: Scalars['Int']['output'];
  Category: Scalars['Int']['output'];
  Employees: Scalars['Int']['output'];
};

export type BranchCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  city: Scalars['Int']['output'];
  cnpj: Scalars['Int']['output'];
  state: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  zip_code: Scalars['Int']['output'];
  __typename?: 'BranchCountAggregate';
  branch_name: Scalars['Int']['output'];
  customer_id: Scalars['Int']['output'];
  address_number: Scalars['Int']['output'];
  address_complement: Scalars['Int']['output'];
  address_neighborhood: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type BranchListRelationFilter = {
  none?: InputMaybe<BranchWhereInput>;
  some?: InputMaybe<BranchWhereInput>;
  every?: InputMaybe<BranchWhereInput>;
};

export type BranchMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'BranchMaxAggregate';
  city?: Maybe<Scalars['String']['output']>;
  cnpj?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
  branch_name?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  address_number?: Maybe<Scalars['String']['output']>;
  address_complement?: Maybe<Scalars['String']['output']>;
  address_neighborhood?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type BranchMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'BranchMinAggregate';
  city?: Maybe<Scalars['String']['output']>;
  cnpj?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  zip_code?: Maybe<Scalars['String']['output']>;
  branch_name?: Maybe<Scalars['String']['output']>;
  customer_id?: Maybe<Scalars['String']['output']>;
  address_number?: Maybe<Scalars['String']['output']>;
  address_complement?: Maybe<Scalars['String']['output']>;
  address_neighborhood?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type BranchModel = {
  id: Scalars['ID']['output'];
  __typename?: 'BranchModel';
  employees: Array<EmployeeModel>;
  city: Scalars['String']['output'];
  cnpj: Scalars['String']['output'];
  state: Scalars['String']['output'];
  address: Scalars['String']['output'];
  zip_code: Scalars['String']['output'];
  customer_id: Scalars['UUID']['output'];
  branch_name: Scalars['String']['output'];
  address_number: Scalars['String']['output'];
  address_complement: Scalars['String']['output'];
  address_neighborhood: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type BranchOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BranchOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  zip_code?: InputMaybe<SortOrder>;
  branch_name?: InputMaybe<SortOrder>;
  customer_id?: InputMaybe<SortOrder>;
  address_number?: InputMaybe<SortOrder>;
  address_complement?: InputMaybe<SortOrder>;
  address_neighborhood?: InputMaybe<SortOrder>;
  Table?: InputMaybe<TableOrderByRelationAggregateInput>;
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  Product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  Category?: InputMaybe<CategoryOrderByRelationAggregateInput>;
  Employees?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type BranchWhereInput = {
  id?: InputMaybe<UuidFilter>;
  city?: InputMaybe<StringFilter>;
  cnpj?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  address?: InputMaybe<StringFilter>;
  zip_code?: InputMaybe<StringFilter>;
  customer_id?: InputMaybe<UuidFilter>;
  branch_name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<BranchWhereInput>>;
  AND?: InputMaybe<Array<BranchWhereInput>>;
  Customer?: InputMaybe<CustomerWhereInput>;
  NOT?: InputMaybe<Array<BranchWhereInput>>;
  address_number?: InputMaybe<StringFilter>;
  Table?: InputMaybe<TableListRelationFilter>;
  address_complement?: InputMaybe<StringFilter>;
  Product?: InputMaybe<ProductListRelationFilter>;
  address_neighborhood?: InputMaybe<StringFilter>;
  Category?: InputMaybe<CategoryListRelationFilter>;
  Employees?: InputMaybe<EmployeeListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type BranchWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
};

export type BranchesConnection = {
  pageInfo: PageInfo;
  nodes: Array<BranchModel>;
  edges: Array<BranchesEdge>;
  __typename?: 'BranchesConnection';
  count: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type BranchesEdge = {
  node: BranchModel;
  __typename?: 'BranchesEdge';
  cursor: Scalars['String']['output'];
};

export type CategoriesConnection = {
  pageInfo: PageInfo;
  nodes: Array<CategoryModel>;
  edges: Array<CategoriesEdge>;
  count: Scalars['Float']['output'];
  __typename?: 'CategoriesConnection';
  totalCount: Scalars['Float']['output'];
};

export type CategoriesEdge = {
  node: CategoryModel;
  __typename?: 'CategoriesEdge';
  cursor: Scalars['String']['output'];
};

export type Category = {
  id: Scalars['ID']['output'];
  Branch: Branch;
  _count: CategoryCount;
  __typename?: 'Category';
  Products?: Maybe<Array<Product>>;
  name: Scalars['String']['output'];
  branch_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type CategoryCount = {
  __typename?: 'CategoryCount';
  Products: Scalars['Int']['output'];
};

export type CategoryCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  branch_id: Scalars['Int']['output'];
  __typename?: 'CategoryCountAggregate';
  description: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type CategoryListRelationFilter = {
  none?: InputMaybe<CategoryWhereInput>;
  some?: InputMaybe<CategoryWhereInput>;
  every?: InputMaybe<CategoryWhereInput>;
};

export type CategoryMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'CategoryMaxAggregate';
  name?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'CategoryMinAggregate';
  name?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryModel = {
  id: Scalars['ID']['output'];
  __typename?: 'CategoryModel';
  products: Array<ProductModel>;
  name: Scalars['String']['output'];
  branch_id: Scalars['String']['output'];
  description: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type CategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CategoryOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  branch_id?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  Branch?: InputMaybe<BranchOrderByWithRelationInput>;
  Products?: InputMaybe<ProductOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type CategoryWhereInput = {
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  branch_id?: InputMaybe<UuidFilter>;
  Branch?: InputMaybe<BranchWhereInput>;
  description?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  Products?: InputMaybe<ProductListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBranchInput = {
  city: Scalars['String']['input'];
  cnpj: Scalars['String']['input'];
  state: Scalars['String']['input'];
  address: Scalars['String']['input'];
  zip_code: Scalars['String']['input'];
  branch_name: Scalars['String']['input'];
  customer_id: Scalars['String']['input'];
  address_number: Scalars['String']['input'];
  address_complement: Scalars['String']['input'];
  address_neighborhood: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  branch_id: Scalars['String']['input'];
  description: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  cnpj: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  company_name: Scalars['String']['input'];
  fantasy_name: Scalars['String']['input'];
};

export type CreateEmployeeInput = {
  role: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  branch_id: Scalars['String']['input'];
};

export type CreateOrderInput = {
  status?: InputMaybe<OrderStatus>;
  tab_id: Scalars['String']['input'];
  total_price: Scalars['Float']['input'];
  payment_status?: InputMaybe<PaymentStatus>;
  observations?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['DateTime']['input']>;
  payment_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateProductImageInput = {
  product_id: Scalars['String']['input'];
};

export type CreateProductInput = {
  size: ProductSize;
  status: ProductStatus;
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  branch_id: Scalars['String']['input'];
  category_id: Scalars['String']['input'];
  preparation_time: Scalars['Float']['input'];
  calories?: InputMaybe<Scalars['Float']['input']>;
};

export type CreateTabInput = {
  status?: InputMaybe<TabStatus>;
  table_id: Scalars['String']['input'];
  client_name: Scalars['String']['input'];
  value?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  employee_tax?: InputMaybe<Scalars['Float']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
};

export type CreateTableInput = {
  name: Scalars['String']['input'];
  status?: InputMaybe<TableStatus>;
  capacity: Scalars['Float']['input'];
  location: Scalars['String']['input'];
  branch_id: Scalars['String']['input'];
  occupied_since?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateUserInput = {
  document: Scalars['String']['input'];
  password: Scalars['String']['input'];
  full_name: Scalars['String']['input'];
  email: Scalars['EmailAddress']['input'];
};

export type Customer = {
  id: Scalars['ID']['output'];
  User: User;
  _count: CustomerCount;
  __typename?: 'Customer';
  Branches?: Maybe<Array<Branch>>;
  cnpj: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
  company_name: Scalars['String']['output'];
  fantasy_name: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type CustomerCount = {
  __typename?: 'CustomerCount';
  Branches: Scalars['Int']['output'];
};

export type CustomerCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  cnpj: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  __typename?: 'CustomerCountAggregate';
  company_name: Scalars['Int']['output'];
  fantasy_name: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type CustomerMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'CustomerMaxAggregate';
  cnpj?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  fantasy_name?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'CustomerMinAggregate';
  cnpj?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  company_name?: Maybe<Scalars['String']['output']>;
  fantasy_name?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type CustomerModel = {
  id: Scalars['ID']['output'];
  user: UserModel;
  __typename?: 'CustomerModel';
  branches: Array<BranchModel>;
  cnpj: Scalars['String']['output'];
  user_id: Scalars['UUID']['output'];
  company_name: Scalars['String']['output'];
  fantasy_name: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type CustomerOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  cnpj?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  company_name?: InputMaybe<SortOrder>;
  fantasy_name?: InputMaybe<SortOrder>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  Branches?: InputMaybe<BranchOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type CustomerWhereInput = {
  id?: InputMaybe<UuidFilter>;
  cnpj?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
  User?: InputMaybe<UserWhereInput>;
  company_name?: InputMaybe<StringFilter>;
  fantasy_name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  Branches?: InputMaybe<BranchListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type CustomerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
};

export type CustomersConnection = {
  pageInfo: PageInfo;
  edges: Array<CustomersEdge>;
  nodes: Array<CustomerModel>;
  count: Scalars['Float']['output'];
  __typename?: 'CustomersConnection';
  totalCount: Scalars['Float']['output'];
};

export type CustomersEdge = {
  node: CustomerModel;
  __typename?: 'CustomersEdge';
  cursor: Scalars['String']['output'];
};

export type DateTimeFilter = {
  not?: InputMaybe<NestedDateTimeFilter>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Employee = {
  id: Scalars['ID']['output'];
  User: User;
  Branch: Branch;
  _count: EmployeeCount;
  __typename?: 'Employee';
  Tables?: Maybe<Array<Table>>;
  role: Scalars['String']['output'];
  user_id: Scalars['String']['output'];
  branch_id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type EmployeeCount = {
  __typename?: 'EmployeeCount';
  Tables: Scalars['Int']['output'];
};

export type EmployeeCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  user_id: Scalars['Int']['output'];
  branch_id: Scalars['Int']['output'];
  __typename?: 'EmployeeCountAggregate';
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type EmployeeListRelationFilter = {
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
  every?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'EmployeeMaxAggregate';
  role?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'EmployeeMinAggregate';
  role?: Maybe<Scalars['String']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type EmployeeModel = {
  id: Scalars['ID']['output'];
  __typename?: 'EmployeeModel';
  role: Scalars['String']['output'];
  user_id: Scalars['UUID']['output'];
  branch_id: Scalars['UUID']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type EmployeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  user_id?: InputMaybe<SortOrder>;
  branch_id?: InputMaybe<SortOrder>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  Branch?: InputMaybe<BranchOrderByWithRelationInput>;
  Tables?: InputMaybe<TableOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type EmployeeWhereInput = {
  id?: InputMaybe<UuidFilter>;
  role?: InputMaybe<StringFilter>;
  user_id?: InputMaybe<UuidFilter>;
  User?: InputMaybe<UserWhereInput>;
  branch_id?: InputMaybe<UuidFilter>;
  Branch?: InputMaybe<BranchWhereInput>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  Tables?: InputMaybe<TableListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type EmployeeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type EmployeesConnection = {
  pageInfo: PageInfo;
  edges: Array<EmployeesEdge>;
  nodes: Array<EmployeeModel>;
  count: Scalars['Float']['output'];
  __typename?: 'EmployeesConnection';
  totalCount: Scalars['Float']['output'];
};

export type EmployeesEdge = {
  node: EmployeeModel;
  __typename?: 'EmployeesEdge';
  cursor: Scalars['String']['output'];
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  notIn?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
};

export type EnumPaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<NestedEnumPaymentStatusFilter>;
};

export type EnumProductSizeFilter = {
  equals?: InputMaybe<ProductSize>;
  in?: InputMaybe<Array<ProductSize>>;
  notIn?: InputMaybe<Array<ProductSize>>;
  not?: InputMaybe<NestedEnumProductSizeFilter>;
};

export type EnumProductStatusFilter = {
  equals?: InputMaybe<ProductStatus>;
  in?: InputMaybe<Array<ProductStatus>>;
  notIn?: InputMaybe<Array<ProductStatus>>;
  not?: InputMaybe<NestedEnumProductStatusFilter>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  notIn?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
};

export type EnumTabStatusFilter = {
  equals?: InputMaybe<TabStatus>;
  in?: InputMaybe<Array<TabStatus>>;
  notIn?: InputMaybe<Array<TabStatus>>;
  not?: InputMaybe<NestedEnumTabStatusFilter>;
};

export type EnumTableStatusFilter = {
  equals?: InputMaybe<TableStatus>;
  in?: InputMaybe<Array<TableStatus>>;
  notIn?: InputMaybe<Array<TableStatus>>;
  not?: InputMaybe<NestedEnumTableStatusFilter>;
};

export type IntFilter = {
  not?: InputMaybe<NestedIntFilter>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  createTab: TabModel;
  deleteTab: TabModel;
  updateTab: TabModel;
  createUser: UserModel;
  deleteUser: UserModel;
  signIn: AuthUserModel;
  updateUser: UserModel;
  __typename?: 'Mutation';
  createOrder: OrderModel;
  createTable: TableModel;
  deleteOrder: OrderModel;
  deleteTable: TableModel;
  updateOrder: OrderModel;
  updateTable: TableModel;
  createBranch: BranchModel;
  deleteBranch: BranchModel;
  updateBranch: BranchModel;
  refreshToken: RefreshModel;
  createProduct: ProductModel;
  deleteProduct: ProductModel;
  updateProduct: ProductModel;
  createCategory: CategoryModel;
  createCustomer: CustomerModel;
  createEmployee: EmployeeModel;
  deleteCategory: CategoryModel;
  deleteCustomer: CustomerModel;
  deleteEmployee: EmployeeModel;
  updateCategory: CategoryModel;
  updateCustomer: CustomerModel;
  updateEmployee: EmployeeModel;
  createManyTabs: Array<TabModel>;
  deleteManyTabs: Array<TabModel>;
  updateManyTabs: Array<TabModel>;
  deleteManyUsers: Array<UserModel>;
  updateManyUsers: Array<UserModel>;
  deleteManyOrders: Array<OrderModel>;
  deleteManyTables: Array<TableModel>;
  updateManyOrders: Array<OrderModel>;
  updateManyTables: Array<TableModel>;
  createProductImage: ProductImageModel;
  deleteProductImage: ProductImageModel;
  updateProductImage: ProductImageModel;
  deleteManyBranches: Array<BranchModel>;
  updateManyBranches: Array<BranchModel>;
  addComment: Scalars['String']['output'];
  deleteManyProducts: Array<ProductModel>;
  updateManyProducts: Array<ProductModel>;
  deleteManyCustomers: Array<CustomerModel>;
  deleteManyEmployees: Array<EmployeeModel>;
  updateManyCustomers: Array<CustomerModel>;
  updateManyEmployees: Array<EmployeeModel>;
  deleteManyCategories: Array<CategoryModel>;
  updateManyCategories: Array<CategoryModel>;
  deleteManyProductImages: Array<ProductImageModel>;
  updateManyProductImages: Array<ProductImageModel>;
};

export type MutationCreateBranchArgs = {
  branch: CreateBranchInput;
};

export type MutationCreateCategoryArgs = {
  category: CreateCategoryInput;
};

export type MutationCreateCustomerArgs = {
  customer: CreateCustomerInput;
};

export type MutationCreateEmployeeArgs = {
  employee: CreateEmployeeInput;
};

export type MutationCreateManyTabsArgs = {
  tabs: Array<CreateTabInput>;
};

export type MutationCreateOrderArgs = {
  order: CreateOrderInput;
};

export type MutationCreateProductArgs = {
  product: CreateProductInput;
};

export type MutationCreateProductImageArgs = {
  product: Scalars['Upload']['input'];
  productImage: CreateProductImageInput;
};

export type MutationCreateTabArgs = {
  tab: CreateTabInput;
};

export type MutationCreateTableArgs = {
  table: CreateTableInput;
};

export type MutationCreateUserArgs = {
  user: CreateUserInput;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
};

export type MutationDeleteBranchArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteCustomerArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteEmployeeArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteManyBranchesArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyCategoriesArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyCustomersArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyEmployeesArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyOrdersArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyProductImagesArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyProductsArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyTablesArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyTabsArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteManyUsersArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type MutationDeleteOrderArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteProductArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteProductImageArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteTabArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteTableArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationSignInArgs = {
  signIn: AuthUserInput;
};

export type MutationUpdateBranchArgs = {
  branch: UpdateBranchInput;
};

export type MutationUpdateCategoryArgs = {
  category: UpdateCategoryInput;
};

export type MutationUpdateCustomerArgs = {
  customer: UpdateCustomerInput;
};

export type MutationUpdateEmployeeArgs = {
  employee: UpdateEmployeeInput;
};

export type MutationUpdateManyBranchesArgs = {
  branches: Array<UpdateBranchInput>;
};

export type MutationUpdateManyCategoriesArgs = {
  categories: Array<UpdateCategoryInput>;
};

export type MutationUpdateManyCustomersArgs = {
  customers: Array<UpdateCustomerInput>;
};

export type MutationUpdateManyEmployeesArgs = {
  employees: Array<UpdateEmployeeInput>;
};

export type MutationUpdateManyOrdersArgs = {
  orders: Array<UpdateOrderInput>;
};

export type MutationUpdateManyProductImagesArgs = {
  productImages: Array<UpdateProductImageInput>;
};

export type MutationUpdateManyProductsArgs = {
  products: Array<UpdateProductInput>;
};

export type MutationUpdateManyTablesArgs = {
  tables: Array<UpdateTableInput>;
};

export type MutationUpdateManyTabsArgs = {
  tabs: Array<UpdateTabInput>;
};

export type MutationUpdateManyUsersArgs = {
  users: Array<UpdateUserInput>;
};

export type MutationUpdateOrderArgs = {
  order: UpdateOrderInput;
};

export type MutationUpdateProductArgs = {
  product: UpdateProductInput;
};

export type MutationUpdateProductImageArgs = {
  productImage: UpdateProductImageInput;
  product?: InputMaybe<Scalars['Upload']['input']>;
};

export type MutationUpdateTabArgs = {
  tab: UpdateTabInput;
};

export type MutationUpdateTableArgs = {
  table: UpdateTableInput;
};

export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
  avatar?: InputMaybe<Scalars['Upload']['input']>;
};

export type NestedBoolFilter = {
  not?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NestedDateTimeFilter = {
  not?: InputMaybe<NestedDateTimeFilter>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  notIn?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
};

export type NestedEnumPaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<NestedEnumPaymentStatusFilter>;
};

export type NestedEnumProductSizeFilter = {
  equals?: InputMaybe<ProductSize>;
  in?: InputMaybe<Array<ProductSize>>;
  notIn?: InputMaybe<Array<ProductSize>>;
  not?: InputMaybe<NestedEnumProductSizeFilter>;
};

export type NestedEnumProductStatusFilter = {
  equals?: InputMaybe<ProductStatus>;
  in?: InputMaybe<Array<ProductStatus>>;
  notIn?: InputMaybe<Array<ProductStatus>>;
  not?: InputMaybe<NestedEnumProductStatusFilter>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  notIn?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
};

export type NestedEnumTabStatusFilter = {
  equals?: InputMaybe<TabStatus>;
  in?: InputMaybe<Array<TabStatus>>;
  notIn?: InputMaybe<Array<TabStatus>>;
  not?: InputMaybe<NestedEnumTabStatusFilter>;
};

export type NestedEnumTableStatusFilter = {
  equals?: InputMaybe<TableStatus>;
  in?: InputMaybe<Array<TableStatus>>;
  notIn?: InputMaybe<Array<TableStatus>>;
  not?: InputMaybe<NestedEnumTableStatusFilter>;
};

export type NestedIntFilter = {
  not?: InputMaybe<NestedIntFilter>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  gt?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  not?: InputMaybe<NestedStringFilter>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NestedStringNullableFilter = {
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NestedUuidFilter = {
  not?: InputMaybe<NestedUuidFilter>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export enum NullsOrder {
  Last = 'last',
  First = 'first',
}

export type Order = {
  id: Scalars['ID']['output'];
  Tab: Tab;
  status: OrderStatus;
  __typename?: 'Order';
  payment_status: PaymentStatus;
  tab_id: Scalars['String']['output'];
  total_price: Scalars['Int']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['DateTime']['output']>;
  payment_date?: Maybe<Scalars['DateTime']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type OrderAvgAggregate = {
  __typename?: 'OrderAvgAggregate';
  total_price?: Maybe<Scalars['Float']['output']>;
};

export type OrderCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  tab_id: Scalars['Int']['output'];
  __typename?: 'OrderCountAggregate';
  finished_at: Scalars['Int']['output'];
  total_price: Scalars['Int']['output'];
  observations: Scalars['Int']['output'];
  payment_date: Scalars['Int']['output'];
  payment_status: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type OrderListRelationFilter = {
  none?: InputMaybe<OrderWhereInput>;
  some?: InputMaybe<OrderWhereInput>;
  every?: InputMaybe<OrderWhereInput>;
};

export type OrderMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
  __typename?: 'OrderMaxAggregate';
  payment_status?: Maybe<PaymentStatus>;
  tab_id?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Int']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['DateTime']['output']>;
  payment_date?: Maybe<Scalars['DateTime']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<OrderStatus>;
  __typename?: 'OrderMinAggregate';
  payment_status?: Maybe<PaymentStatus>;
  tab_id?: Maybe<Scalars['String']['output']>;
  total_price?: Maybe<Scalars['Int']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['DateTime']['output']>;
  payment_date?: Maybe<Scalars['DateTime']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type OrderModel = {
  id: Scalars['ID']['output'];
  status: OrderStatus;
  __typename?: 'OrderModel';
  payment_status: PaymentStatus;
  tab_id: Scalars['UUID']['output'];
  total_price: Scalars['Float']['output'];
  observations?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['DateTime']['output']>;
  payment_date?: Maybe<Scalars['DateTime']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type OrderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrderOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tab_id?: InputMaybe<SortOrder>;
  total_price?: InputMaybe<SortOrder>;
  payment_status?: InputMaybe<SortOrder>;
  finished_at?: InputMaybe<SortOrderInput>;
  observations?: InputMaybe<SortOrderInput>;
  payment_date?: InputMaybe<SortOrderInput>;
  Tab?: InputMaybe<TabOrderByWithRelationInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export enum OrderStatus {
  Ready = 'READY',
  Served = 'SERVED',
  Pending = 'PENDING',
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Preparing = 'PREPARING',
}

export type OrderSumAggregate = {
  __typename?: 'OrderSumAggregate';
  total_price?: Maybe<Scalars['Int']['output']>;
};

export type OrderWhereInput = {
  id?: InputMaybe<UuidFilter>;
  Tab?: InputMaybe<TabWhereInput>;
  tab_id?: InputMaybe<UuidFilter>;
  total_price?: InputMaybe<IntFilter>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  observations?: InputMaybe<StringNullableFilter>;
  finished_at?: InputMaybe<DateTimeNullableFilter>;
  payment_date?: InputMaybe<DateTimeNullableFilter>;
  payment_status?: InputMaybe<EnumPaymentStatusFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type OrdersConnection = {
  pageInfo: PageInfo;
  edges: Array<OrdersEdge>;
  nodes: Array<OrderModel>;
  __typename?: 'OrdersConnection';
  count: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type OrdersEdge = {
  node: OrderModel;
  __typename?: 'OrdersEdge';
  cursor: Scalars['String']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  endCursor?: Maybe<Scalars['String']['output']>;
  startCursor?: Maybe<Scalars['String']['output']>;
};

export enum PaymentStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
}

export type Product = {
  id: Scalars['ID']['output'];
  Branch: Branch;
  size: ProductSize;
  Category: Category;
  _count: ProductCount;
  status: ProductStatus;
  __typename?: 'Product';
  price: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  branch_id: Scalars['String']['output'];
  category_id: Scalars['String']['output'];
  ProductImages?: Maybe<Array<ProductImage>>;
  calories?: Maybe<Scalars['Int']['output']>;
  preparation_time: Scalars['Int']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type ProductAvgAggregate = {
  __typename?: 'ProductAvgAggregate';
  price?: Maybe<Scalars['Float']['output']>;
  calories?: Maybe<Scalars['Float']['output']>;
  preparation_time?: Maybe<Scalars['Float']['output']>;
};

export type ProductCount = {
  __typename?: 'ProductCount';
  ProductImages: Scalars['Int']['output'];
};

export type ProductCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  size: Scalars['Int']['output'];
  price: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  calories: Scalars['Int']['output'];
  branch_id: Scalars['Int']['output'];
  __typename?: 'ProductCountAggregate';
  category_id: Scalars['Int']['output'];
  preparation_time: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type ProductImage = {
  id: Scalars['ID']['output'];
  Product: Product;
  __typename?: 'ProductImage';
  path: Scalars['String']['output'];
  product_id: Scalars['String']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type ProductImageCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  path: Scalars['Int']['output'];
  product_id: Scalars['Int']['output'];
  __typename?: 'ProductImageCountAggregate';
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type ProductImageListRelationFilter = {
  none?: InputMaybe<ProductImageWhereInput>;
  some?: InputMaybe<ProductImageWhereInput>;
  every?: InputMaybe<ProductImageWhereInput>;
};

export type ProductImageMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'ProductImageMaxAggregate';
  path?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductImageMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  __typename?: 'ProductImageMinAggregate';
  path?: Maybe<Scalars['String']['output']>;
  product_id?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductImageModel = {
  id: Scalars['ID']['output'];
  path: Scalars['URL']['output'];
  __typename?: 'ProductImageModel';
  product_id: Scalars['UUID']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type ProductImageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductImageOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  product_id?: InputMaybe<SortOrder>;
  Product?: InputMaybe<ProductOrderByWithRelationInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type ProductImageWhereInput = {
  id?: InputMaybe<UuidFilter>;
  path?: InputMaybe<StringFilter>;
  product_id?: InputMaybe<UuidFilter>;
  Product?: InputMaybe<ProductWhereInput>;
  OR?: InputMaybe<Array<ProductImageWhereInput>>;
  AND?: InputMaybe<Array<ProductImageWhereInput>>;
  NOT?: InputMaybe<Array<ProductImageWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type ProductImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductImagesConnection = {
  pageInfo: PageInfo;
  edges: Array<ProductImagesEdge>;
  nodes: Array<ProductImageModel>;
  count: Scalars['Float']['output'];
  __typename?: 'ProductImagesConnection';
  totalCount: Scalars['Float']['output'];
};

export type ProductImagesEdge = {
  node: ProductImageModel;
  __typename?: 'ProductImagesEdge';
  cursor: Scalars['String']['output'];
};

export type ProductListRelationFilter = {
  none?: InputMaybe<ProductWhereInput>;
  some?: InputMaybe<ProductWhereInput>;
  every?: InputMaybe<ProductWhereInput>;
};

export type ProductMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<ProductSize>;
  status?: Maybe<ProductStatus>;
  __typename?: 'ProductMaxAggregate';
  price?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  calories?: Maybe<Scalars['Int']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['String']['output']>;
  preparation_time?: Maybe<Scalars['Int']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  size?: Maybe<ProductSize>;
  status?: Maybe<ProductStatus>;
  __typename?: 'ProductMinAggregate';
  price?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  calories?: Maybe<Scalars['Int']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  category_id?: Maybe<Scalars['String']['output']>;
  preparation_time?: Maybe<Scalars['Int']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type ProductModel = {
  id: Scalars['ID']['output'];
  size: ProductSize;
  status: ProductStatus;
  __typename?: 'ProductModel';
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  branch_id: Scalars['String']['output'];
  category_id: Scalars['UUID']['output'];
  calories?: Maybe<Scalars['Float']['output']>;
  preparation_time: Scalars['Float']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type ProductOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  branch_id?: InputMaybe<SortOrder>;
  category_id?: InputMaybe<SortOrder>;
  calories?: InputMaybe<SortOrderInput>;
  preparation_time?: InputMaybe<SortOrder>;
  Branch?: InputMaybe<BranchOrderByWithRelationInput>;
  Category?: InputMaybe<CategoryOrderByWithRelationInput>;
  ProductImages?: InputMaybe<ProductImageOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export enum ProductSize {
  Large = 'LARGE',
  Small = 'SMALL',
  Medium = 'MEDIUM',
}

export enum ProductStatus {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
}

export type ProductSumAggregate = {
  __typename?: 'ProductSumAggregate';
  price?: Maybe<Scalars['Int']['output']>;
  calories?: Maybe<Scalars['Int']['output']>;
  preparation_time?: Maybe<Scalars['Int']['output']>;
};

export type ProductWhereInput = {
  id?: InputMaybe<UuidFilter>;
  price?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  branch_id?: InputMaybe<UuidFilter>;
  category_id?: InputMaybe<UuidFilter>;
  Branch?: InputMaybe<BranchWhereInput>;
  calories?: InputMaybe<IntNullableFilter>;
  preparation_time?: InputMaybe<IntFilter>;
  size?: InputMaybe<EnumProductSizeFilter>;
  Category?: InputMaybe<CategoryWhereInput>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  AND?: InputMaybe<Array<ProductWhereInput>>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  status?: InputMaybe<EnumProductStatusFilter>;
  ProductImages?: InputMaybe<ProductImageListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsConnection = {
  pageInfo: PageInfo;
  edges: Array<ProductsEdge>;
  nodes: Array<ProductModel>;
  __typename?: 'ProductsConnection';
  count: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type ProductsEdge = {
  node: ProductModel;
  __typename?: 'ProductsEdge';
  cursor: Scalars['String']['output'];
};

export type Query = {
  tab: TabModel;
  user: UserModel;
  order: OrderModel;
  table: TableModel;
  branch: BranchModel;
  __typename?: 'Query';
  tabs: TabsConnection;
  product: ProductModel;
  users: UsersConnection;
  category: CategoryModel;
  customer: CustomerModel;
  employee: EmployeeModel;
  orders: OrdersConnection;
  tables: TablesConnection;
  branches: BranchesConnection;
  products: ProductsConnection;
  customers: CustomersConnection;
  employees: EmployeesConnection;
  productImage: ProductImageModel;
  categories: CategoriesConnection;
  totalTabs: Scalars['Float']['output'];
  productImages: ProductImagesConnection;
  totalUsers: Scalars['Float']['output'];
  totalOrders: Scalars['Float']['output'];
  totalTables: Scalars['Float']['output'];
  totalBranches: Scalars['Float']['output'];
  totalProducts: Scalars['Float']['output'];
  totalCustomers: Scalars['Float']['output'];
  totalEmployees: Scalars['Float']['output'];
  totalCategories: Scalars['Float']['output'];
  totalProductImages: Scalars['Float']['output'];
};

export type QueryBranchArgs = {
  where?: InputMaybe<BranchWhereUniqueInput>;
};

export type QueryBranchesArgs = {
  where?: InputMaybe<BranchWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<BranchOrderByWithRelationInput>;
};

export type QueryCategoriesArgs = {
  where?: InputMaybe<CategoryWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<CategoryOrderByWithRelationInput>;
};

export type QueryCategoryArgs = {
  where?: InputMaybe<CategoryWhereUniqueInput>;
};

export type QueryCustomerArgs = {
  where?: InputMaybe<CustomerWhereUniqueInput>;
};

export type QueryCustomersArgs = {
  where?: InputMaybe<CustomerWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<CustomerOrderByWithRelationInput>;
};

export type QueryEmployeeArgs = {
  where?: InputMaybe<EmployeeWhereUniqueInput>;
};

export type QueryEmployeesArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<EmployeeOrderByWithRelationInput>;
};

export type QueryOrderArgs = {
  where?: InputMaybe<OrderWhereUniqueInput>;
};

export type QueryOrdersArgs = {
  where?: InputMaybe<OrderWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
};

export type QueryProductArgs = {
  where?: InputMaybe<ProductWhereUniqueInput>;
};

export type QueryProductImageArgs = {
  where?: InputMaybe<ProductImageWhereUniqueInput>;
};

export type QueryProductImagesArgs = {
  where?: InputMaybe<ProductImageWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ProductImageOrderByWithRelationInput>;
};

export type QueryProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<ProductOrderByWithRelationInput>;
};

export type QueryTabArgs = {
  where?: InputMaybe<TabWhereUniqueInput>;
};

export type QueryTableArgs = {
  where?: InputMaybe<TableWhereUniqueInput>;
};

export type QueryTablesArgs = {
  where?: InputMaybe<TableWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<TableOrderByWithRelationInput>;
};

export type QueryTabsArgs = {
  where?: InputMaybe<TabWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<TabOrderByWithRelationInput>;
};

export type QueryTotalBranchesArgs = {
  where?: InputMaybe<BranchWhereInput>;
};

export type QueryTotalCategoriesArgs = {
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryTotalCustomersArgs = {
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryTotalEmployeesArgs = {
  where?: InputMaybe<EmployeeWhereInput>;
};

export type QueryTotalOrdersArgs = {
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryTotalProductImagesArgs = {
  where?: InputMaybe<ProductImageWhereInput>;
};

export type QueryTotalProductsArgs = {
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryTotalTablesArgs = {
  where?: InputMaybe<TableWhereInput>;
};

export type QueryTotalTabsArgs = {
  where?: InputMaybe<TabWhereInput>;
};

export type QueryTotalUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>;
};

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhereInput>;
  last?: InputMaybe<Scalars['Float']['input']>;
  first?: InputMaybe<Scalars['Float']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type RefreshModel = {
  __typename?: 'RefreshModel';
  token: Scalars['JWT']['output'];
  token_expires: Scalars['DateTimeISO']['output'];
};

export enum Role {
  User = 'USER',
  Admin = 'ADMIN',
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type SortOrderInput = {
  sort: SortOrder;
  nulls?: InputMaybe<NullsOrder>;
};

export type StringFilter = {
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type StringNullableFilter = {
  mode?: InputMaybe<QueryMode>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  equals?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  commentAdded?: Maybe<Scalars['String']['output']>;
};

export type Tab = {
  id: Scalars['ID']['output'];
  Table: Table;
  _count: TabCount;
  status: TabStatus;
  __typename?: 'Tab';
  Orders?: Maybe<Array<Order>>;
  value: Scalars['Int']['output'];
  table_id: Scalars['String']['output'];
  client_name: Scalars['String']['output'];
  discount?: Maybe<Scalars['Int']['output']>;
  payment_method: Scalars['String']['output'];
  employee_tax?: Maybe<Scalars['Int']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type TabAvgAggregate = {
  __typename?: 'TabAvgAggregate';
  value?: Maybe<Scalars['Float']['output']>;
  discount?: Maybe<Scalars['Float']['output']>;
  employee_tax?: Maybe<Scalars['Float']['output']>;
};

export type TabCount = {
  __typename?: 'TabCount';
  Orders: Scalars['Int']['output'];
};

export type TabCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
  __typename?: 'TabCountAggregate';
  status: Scalars['Int']['output'];
  discount: Scalars['Int']['output'];
  table_id: Scalars['Int']['output'];
  client_name: Scalars['Int']['output'];
  employee_tax: Scalars['Int']['output'];
  observations: Scalars['Int']['output'];
  payment_method: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type TabListRelationFilter = {
  none?: InputMaybe<TabWhereInput>;
  some?: InputMaybe<TabWhereInput>;
  every?: InputMaybe<TabWhereInput>;
};

export type TabMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TabStatus>;
  __typename?: 'TabMaxAggregate';
  value?: Maybe<Scalars['Int']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  table_id?: Maybe<Scalars['String']['output']>;
  employee_tax?: Maybe<Scalars['Int']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TabMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TabStatus>;
  __typename?: 'TabMinAggregate';
  value?: Maybe<Scalars['Int']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  table_id?: Maybe<Scalars['String']['output']>;
  employee_tax?: Maybe<Scalars['Int']['output']>;
  client_name?: Maybe<Scalars['String']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TabModel = {
  id: Scalars['ID']['output'];
  status: TabStatus;
  __typename?: 'TabModel';
  value: Scalars['Float']['output'];
  table_id: Scalars['UUID']['output'];
  client_name: Scalars['String']['output'];
  payment_method: Scalars['String']['output'];
  discount?: Maybe<Scalars['Float']['output']>;
  employee_tax?: Maybe<Scalars['Float']['output']>;
  observations?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type TabOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TabOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  table_id?: InputMaybe<SortOrder>;
  client_name?: InputMaybe<SortOrder>;
  discount?: InputMaybe<SortOrderInput>;
  payment_method?: InputMaybe<SortOrder>;
  employee_tax?: InputMaybe<SortOrderInput>;
  observations?: InputMaybe<SortOrderInput>;
  Table?: InputMaybe<TableOrderByWithRelationInput>;
  Orders?: InputMaybe<OrderOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export enum TabStatus {
  Open = 'OPEN',
  Closed = 'CLOSED',
}

export type TabSumAggregate = {
  __typename?: 'TabSumAggregate';
  value?: Maybe<Scalars['Int']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  employee_tax?: Maybe<Scalars['Int']['output']>;
};

export type TabWhereInput = {
  id?: InputMaybe<UuidFilter>;
  value?: InputMaybe<IntFilter>;
  table_id?: InputMaybe<UuidFilter>;
  Table?: InputMaybe<TableWhereInput>;
  OR?: InputMaybe<Array<TabWhereInput>>;
  AND?: InputMaybe<Array<TabWhereInput>>;
  NOT?: InputMaybe<Array<TabWhereInput>>;
  client_name?: InputMaybe<StringFilter>;
  discount?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumTabStatusFilter>;
  payment_method?: InputMaybe<StringFilter>;
  Orders?: InputMaybe<OrderListRelationFilter>;
  employee_tax?: InputMaybe<IntNullableFilter>;
  observations?: InputMaybe<StringNullableFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type TabWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type Table = {
  id: Scalars['ID']['output'];
  Branch: Branch;
  _count: TableCount;
  status: TableStatus;
  __typename?: 'Table';
  Tabs?: Maybe<Array<Tab>>;
  name: Scalars['String']['output'];
  Employees?: Maybe<Array<Employee>>;
  capacity: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  branch_id: Scalars['String']['output'];
  occupied_since?: Maybe<Scalars['DateTime']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type TableAvgAggregate = {
  __typename?: 'TableAvgAggregate';
  capacity?: Maybe<Scalars['Float']['output']>;
};

export type TableCount = {
  __typename?: 'TableCount';
  Tabs: Scalars['Int']['output'];
  Employees: Scalars['Int']['output'];
};

export type TableCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  __typename?: 'TableCountAggregate';
  capacity: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  branch_id: Scalars['Int']['output'];
  occupied_since: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type TableListRelationFilter = {
  none?: InputMaybe<TableWhereInput>;
  some?: InputMaybe<TableWhereInput>;
  every?: InputMaybe<TableWhereInput>;
};

export type TableMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TableStatus>;
  __typename?: 'TableMaxAggregate';
  name?: Maybe<Scalars['String']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  occupied_since?: Maybe<Scalars['DateTime']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TableMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<TableStatus>;
  __typename?: 'TableMinAggregate';
  name?: Maybe<Scalars['String']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  branch_id?: Maybe<Scalars['String']['output']>;
  occupied_since?: Maybe<Scalars['DateTime']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type TableModel = {
  id: Scalars['ID']['output'];
  status: TableStatus;
  __typename?: 'TableModel';
  name: Scalars['String']['output'];
  branch_id: Scalars['UUID']['output'];
  capacity: Scalars['Float']['output'];
  location: Scalars['String']['output'];
  occupied_since: Scalars['DateTime']['output'];
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type TableOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TableOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  capacity?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  branch_id?: InputMaybe<SortOrder>;
  occupied_since?: InputMaybe<SortOrderInput>;
  Branch?: InputMaybe<BranchOrderByWithRelationInput>;
  Tabs?: InputMaybe<TabOrderByRelationAggregateInput>;
  Employees?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export enum TableStatus {
  Available = 'AVAILABLE',
  Unavailable = 'UNAVAILABLE',
}

export type TableSumAggregate = {
  __typename?: 'TableSumAggregate';
  capacity?: Maybe<Scalars['Int']['output']>;
};

export type TableWhereInput = {
  id?: InputMaybe<UuidFilter>;
  name?: InputMaybe<StringFilter>;
  capacity?: InputMaybe<IntFilter>;
  branch_id?: InputMaybe<UuidFilter>;
  location?: InputMaybe<StringFilter>;
  Branch?: InputMaybe<BranchWhereInput>;
  OR?: InputMaybe<Array<TableWhereInput>>;
  AND?: InputMaybe<Array<TableWhereInput>>;
  NOT?: InputMaybe<Array<TableWhereInput>>;
  Tabs?: InputMaybe<TabListRelationFilter>;
  status?: InputMaybe<EnumTableStatusFilter>;
  Employees?: InputMaybe<EmployeeListRelationFilter>;
  occupied_since?: InputMaybe<DateTimeNullableFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type TableWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type TablesConnection = {
  pageInfo: PageInfo;
  edges: Array<TablesEdge>;
  nodes: Array<TableModel>;
  __typename?: 'TablesConnection';
  count: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type TablesEdge = {
  node: TableModel;
  __typename?: 'TablesEdge';
  cursor: Scalars['String']['output'];
};

export type TabsConnection = {
  pageInfo: PageInfo;
  edges: Array<TabsEdge>;
  nodes: Array<TabModel>;
  __typename?: 'TabsConnection';
  count: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type TabsEdge = {
  node: TabModel;
  __typename?: 'TabsEdge';
  cursor: Scalars['String']['output'];
};

export type UpdateBranchInput = {
  id: Scalars['String']['input'];
  city?: InputMaybe<Scalars['String']['input']>;
  cnpj?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  zip_code?: InputMaybe<Scalars['String']['input']>;
  branch_name?: InputMaybe<Scalars['String']['input']>;
  customer_id?: InputMaybe<Scalars['String']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
  address_complement?: InputMaybe<Scalars['String']['input']>;
  address_neighborhood?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryInput = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  branch_id?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCustomerInput = {
  id: Scalars['String']['input'];
  cnpj?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  company_name?: InputMaybe<Scalars['String']['input']>;
  fantasy_name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEmployeeInput = {
  id: Scalars['String']['input'];
  role?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
  branch_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  id: Scalars['String']['input'];
  status?: InputMaybe<OrderStatus>;
  payment_status?: InputMaybe<PaymentStatus>;
  tab_id?: InputMaybe<Scalars['String']['input']>;
  total_price?: InputMaybe<Scalars['Float']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['DateTime']['input']>;
  payment_date?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateProductImageInput = {
  id: Scalars['String']['input'];
  product_id?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  id: Scalars['String']['input'];
  size?: InputMaybe<ProductSize>;
  status?: InputMaybe<ProductStatus>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  calories?: InputMaybe<Scalars['Float']['input']>;
  branch_id?: InputMaybe<Scalars['String']['input']>;
  category_id?: InputMaybe<Scalars['String']['input']>;
  preparation_time?: InputMaybe<Scalars['Float']['input']>;
};

export type UpdateTabInput = {
  id: Scalars['String']['input'];
  status?: InputMaybe<TabStatus>;
  value?: InputMaybe<Scalars['Float']['input']>;
  discount?: InputMaybe<Scalars['Float']['input']>;
  table_id?: InputMaybe<Scalars['String']['input']>;
  client_name?: InputMaybe<Scalars['String']['input']>;
  employee_tax?: InputMaybe<Scalars['Float']['input']>;
  observations?: InputMaybe<Scalars['String']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTableInput = {
  id: Scalars['String']['input'];
  status?: InputMaybe<TableStatus>;
  name?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['Float']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  branch_id?: InputMaybe<Scalars['String']['input']>;
  occupied_since?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['UUID']['input'];
  document?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['EmailAddress']['input']>;
};

export type User = {
  id: Scalars['ID']['output'];
  role: Role;
  __typename?: 'User';
  Customer?: Maybe<Customer>;
  Employee?: Maybe<Employee>;
  document: Scalars['String']['output'];
  full_name: Scalars['String']['output'];
  validated: Scalars['Boolean']['output'];
  email: Scalars['EmailAddress']['output'];
  avatar_url?: Maybe<Scalars['String']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
};

export type UserCountAggregate = {
  id: Scalars['Int']['output'];
  _all: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  __typename?: 'UserCountAggregate';
  document: Scalars['Int']['output'];
  full_name: Scalars['Int']['output'];
  validated: Scalars['Int']['output'];
  avatar_url: Scalars['Int']['output'];
  active: Scalars['Int']['output'];
  updated_at: Scalars['Int']['output'];
  created_at: Scalars['Int']['output'];
};

export type UserMaxAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  __typename?: 'UserMaxAggregate';
  document?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  avatar_url?: Maybe<Scalars['String']['output']>;
  validated?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  id?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  __typename?: 'UserMinAggregate';
  document?: Maybe<Scalars['String']['output']>;
  full_name?: Maybe<Scalars['String']['output']>;
  avatar_url?: Maybe<Scalars['String']['output']>;
  validated?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['EmailAddress']['output']>;
  active?: Maybe<Scalars['Boolean']['output']>;
  updated_at?: Maybe<Scalars['DateTime']['output']>;
  created_at?: Maybe<Scalars['DateTime']['output']>;
};

export type UserModel = {
  id: Scalars['ID']['output'];
  role: Role;
  __typename?: 'UserModel';
  document: Scalars['String']['output'];
  full_name: Scalars['String']['output'];
  validated: Scalars['Boolean']['output'];
  email: Scalars['EmailAddress']['output'];
  avatar_url?: Maybe<Scalars['URL']['output']>;
  active: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTimeISO']['output'];
  created_at: Scalars['DateTimeISO']['output'];
};

export type UserOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  document?: InputMaybe<SortOrder>;
  full_name?: InputMaybe<SortOrder>;
  validated?: InputMaybe<SortOrder>;
  avatar_url?: InputMaybe<SortOrderInput>;
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  Employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  active?: InputMaybe<SortOrder>;
  updated_at?: InputMaybe<SortOrder>;
  created_at?: InputMaybe<SortOrder>;
};

export type UserWhereInput = {
  id?: InputMaybe<UuidFilter>;
  email?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  validated?: InputMaybe<BoolFilter>;
  document?: InputMaybe<StringFilter>;
  full_name?: InputMaybe<StringFilter>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  Customer?: InputMaybe<CustomerWhereInput>;
  Employee?: InputMaybe<EmployeeWhereInput>;
  avatar_url?: InputMaybe<StringNullableFilter>;
  active?: InputMaybe<BoolFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<Scalars['String']['input']>;
};

export type UsersConnection = {
  pageInfo: PageInfo;
  edges: Array<UsersEdge>;
  nodes: Array<UserModel>;
  __typename?: 'UsersConnection';
  count: Scalars['Float']['output'];
  totalCount: Scalars['Float']['output'];
};

export type UsersEdge = {
  node: UserModel;
  __typename?: 'UsersEdge';
  cursor: Scalars['String']['output'];
};

export type UuidFilter = {
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedUuidFilter>;
  gt?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockRefreshTokenMutation(
 *   ({ query, variables }) => {
 *     return HttpResponse.json({
 *       data: { refreshToken }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockRefreshTokenMutation = (
  resolver: GraphQLResponseResolver<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<RefreshTokenMutation, RefreshTokenMutationVariables>(
    'RefreshToken',
    resolver,
    options,
  );

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockSignInMutation(
 *   ({ query, variables }) => {
 *     const { signIn } = variables;
 *     return HttpResponse.json({
 *       data: { signIn }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockSignInMutation = (
  resolver: GraphQLResponseResolver<SignInMutation, SignInMutationVariables>,
  options?: RequestHandlerOptions,
) =>
  graphql.mutation<SignInMutation, SignInMutationVariables>(
    'SignIn',
    resolver,
    options,
  );

export type RefreshTokenMutationVariables = Exact<Record<string, never>>;

export type RefreshTokenMutation = {
  __typename?: 'Mutation';
  refreshToken: {
    token: string;
    __typename?: 'RefreshModel';
    token_expires: Date | string;
  };
};

export type SignInMutationVariables = Exact<{
  signIn: AuthUserInput;
}>;

export type SignInMutation = {
  __typename?: 'Mutation';
  signIn: {
    token: string;
    user_id: string;
    refresh_token: string;
    __typename?: 'AuthUserModel';
    token_expires: Date | string;
    refresh_token_expires: Date | string;
    user: {
      id: string;
      role: Role;
      email: string;
      document: string;
      full_name: string;
      validated: boolean;
      __typename?: 'UserModel';
      avatar_url?: URL | null | string;
      active: boolean;
      updated_at: Date | string;
      created_at: Date | string;
    };
  };
};

export const RefreshTokenDocument = gql`
  mutation RefreshToken {
    refreshToken {
      token
      token_expires
    }
  }
`;

export type RefreshTokenMutationFn = Apollo.MutationFunction<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;

/**
 * __useRefreshTokenMutation__
 *
 * To run a mutation, you first call `useRefreshTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshTokenMutation, { data, loading, error }] = useRefreshTokenMutation({
 *   variables: {
 *   },
 * });
 */
export const useRefreshTokenMutation = (
  baseOptions?: Apollo.MutationHookOptions<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >,
) => {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<
    RefreshTokenMutation,
    RefreshTokenMutationVariables
  >(RefreshTokenDocument, options);
};

export type RefreshTokenMutationHookResult = ReturnType<
  typeof useRefreshTokenMutation
>;

export type RefreshTokenMutationResult =
  Apollo.MutationResult<RefreshTokenMutation>;

export type RefreshTokenMutationOptions = Apollo.BaseMutationOptions<
  RefreshTokenMutation,
  RefreshTokenMutationVariables
>;

export const SignInDocument = gql`
  mutation SignIn($signIn: AuthUserInput!) {
    signIn(signIn: $signIn) {
      refresh_token
      refresh_token_expires
      token
      token_expires
      user_id
      user {
        active
        avatar_url
        created_at
        document
        email
        full_name
        id
        role
        updated_at
        validated
      }
    }
  }
`;

export type SignInMutationFn = Apollo.MutationFunction<
  SignInMutation,
  SignInMutationVariables
>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      signIn: // value for 'signIn'
 *   },
 * });
 */
export const useSignInMutation = (
  baseOptions?: Apollo.MutationHookOptions<
    SignInMutation,
    SignInMutationVariables
  >,
) => {
  const options = { ...defaultOptions, ...baseOptions };

  return Apollo.useMutation<SignInMutation, SignInMutationVariables>(
    SignInDocument,
    options,
  );
};

export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;

export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;

export type SignInMutationOptions = Apollo.BaseMutationOptions<
  SignInMutation,
  SignInMutationVariables
>;

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K], any, T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine(v => isDefinedNonNullAny(v));

export const NullsOrderSchema = z.nativeEnum(NullsOrder);

export const OrderStatusSchema = z.nativeEnum(OrderStatus);

export const PaymentStatusSchema = z.nativeEnum(PaymentStatus);

export const ProductSizeSchema = z.nativeEnum(ProductSize);

export const ProductStatusSchema = z.nativeEnum(ProductStatus);

export const QueryModeSchema = z.nativeEnum(QueryMode);

export const RoleSchema = z.nativeEnum(Role);

export const SortOrderSchema = z.nativeEnum(SortOrder);

export const TabStatusSchema = z.nativeEnum(TabStatus);

export const TableStatusSchema = z.nativeEnum(TableStatus);

export const AuthUserInputSchema = (): z.ZodObject<Properties<AuthUserInput>> =>
  z
    .object({
      password: z.string().min(1),
      email: z.string().email().min(1),
    })
    .strict();

export const BoolFilterSchema = (): z.ZodObject<Properties<BoolFilter>> =>
  z
    .object({
      equals: z.boolean().nullish(),
      not: NestedBoolFilterSchema().nullish(),
    })
    .strict();

export const BranchListRelationFilterSchema = (): z.ZodObject<
  Properties<BranchListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => BranchWhereInputSchema().nullish()),
      some: z.lazy(() => BranchWhereInputSchema().nullish()),
      every: z.lazy(() => BranchWhereInputSchema().nullish()),
    })
    .strict();

export const BranchOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<BranchOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const BranchOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<BranchOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      city: SortOrderSchema.nullish(),
      cnpj: SortOrderSchema.nullish(),
      state: SortOrderSchema.nullish(),
      address: SortOrderSchema.nullish(),
      zip_code: SortOrderSchema.nullish(),
      branch_name: SortOrderSchema.nullish(),
      customer_id: SortOrderSchema.nullish(),
      address_number: SortOrderSchema.nullish(),
      address_complement: SortOrderSchema.nullish(),
      address_neighborhood: SortOrderSchema.nullish(),
      Table: z.lazy(() => TableOrderByRelationAggregateInputSchema().nullish()),
      Customer: z.lazy(() =>
        CustomerOrderByWithRelationInputSchema().nullish(),),
      Product: z.lazy(() =>
        ProductOrderByRelationAggregateInputSchema().nullish(),),
      Category: z.lazy(() =>
        CategoryOrderByRelationAggregateInputSchema().nullish(),),
      Employees: z.lazy(() =>
        EmployeeOrderByRelationAggregateInputSchema().nullish(),),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const BranchWhereInputSchema = (): z.ZodObject<
  Properties<BranchWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      city: StringFilterSchema().nullish(),
      cnpj: StringFilterSchema().nullish(),
      state: StringFilterSchema().nullish(),
      address: StringFilterSchema().nullish(),
      zip_code: StringFilterSchema().nullish(),
      customer_id: UuidFilterSchema().nullish(),
      branch_name: StringFilterSchema().nullish(),
      address_number: StringFilterSchema().nullish(),
      Table: TableListRelationFilterSchema().nullish(),
      address_complement: StringFilterSchema().nullish(),
      Product: ProductListRelationFilterSchema().nullish(),
      address_neighborhood: StringFilterSchema().nullish(),
      Category: CategoryListRelationFilterSchema().nullish(),
      Employees: EmployeeListRelationFilterSchema().nullish(),
      Customer: z.lazy(() => CustomerWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => BranchWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => BranchWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => BranchWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const BranchWhereUniqueInputSchema = (): z.ZodObject<
  Properties<BranchWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
      cnpj: z.string().nullish(),
    })
    .strict();

export const CategoryListRelationFilterSchema = (): z.ZodObject<
  Properties<CategoryListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => CategoryWhereInputSchema().nullish()),
      some: z.lazy(() => CategoryWhereInputSchema().nullish()),
      every: z.lazy(() => CategoryWhereInputSchema().nullish()),
    })
    .strict();

export const CategoryOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<CategoryOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const CategoryOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<CategoryOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      name: SortOrderSchema.nullish(),
      branch_id: SortOrderSchema.nullish(),
      description: SortOrderSchema.nullish(),
      Branch: z.lazy(() => BranchOrderByWithRelationInputSchema().nullish()),
      Products: z.lazy(() =>
        ProductOrderByRelationAggregateInputSchema().nullish()),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const CategoryWhereInputSchema = (): z.ZodObject<
  Properties<CategoryWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      name: StringFilterSchema().nullish(),
      branch_id: UuidFilterSchema().nullish(),
      description: StringFilterSchema().nullish(),
      Products: ProductListRelationFilterSchema().nullish(),
      Branch: z.lazy(() => BranchWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => CategoryWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => CategoryWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => CategoryWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const CategoryWhereUniqueInputSchema = (): z.ZodObject<
  Properties<CategoryWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const CreateBranchInputSchema = (): z.ZodObject<
  Properties<CreateBranchInput>
> =>
  z
    .object({
      city: z.string().min(1),
      cnpj: z.string().min(1),
      state: z.string().min(1),
      address: z.string().min(1),
      zip_code: z.string().min(1),
      branch_name: z.string().min(1),
      customer_id: z.string().min(1),
      address_number: z.string().min(1),
      address_complement: z.string().min(1),
      address_neighborhood: z.string().min(1),
    })
    .strict();

export const CreateCategoryInputSchema = (): z.ZodObject<
  Properties<CreateCategoryInput>
> =>
  z
    .object({
      name: z.string().min(1),
      branch_id: z.string().min(1),
      description: z.string().min(1),
    })
    .strict();

export const CreateCustomerInputSchema = (): z.ZodObject<
  Properties<CreateCustomerInput>
> =>
  z
    .object({
      cnpj: z.string().min(1),
      user_id: z.string().min(1),
      company_name: z.string().min(1),
      fantasy_name: z.string().min(1),
    })
    .strict();

export const CreateEmployeeInputSchema = (): z.ZodObject<
  Properties<CreateEmployeeInput>
> =>
  z
    .object({
      role: z.string().min(1),
      user_id: z.string().min(1),
      branch_id: z.string().min(1),
    })
    .strict();

export const CreateOrderInputSchema = (): z.ZodObject<
  Properties<CreateOrderInput>
> =>
  z
    .object({
      total_price: z.number(),
      tab_id: z.string().min(1),
      finished_at: z.date().nullish(),
      payment_date: z.date().nullish(),
      observations: z.string().nullish(),
      status: OrderStatusSchema.nullish(),
      payment_status: PaymentStatusSchema.nullish(),
    })
    .strict();

export const CreateProductImageInputSchema = (): z.ZodObject<
  Properties<CreateProductImageInput>
> =>
  z
    .object({
      product_id: z.string().min(1),
    })
    .strict();

export const CreateProductInputSchema = (): z.ZodObject<
  Properties<CreateProductInput>
> =>
  z
    .object({
      price: z.number(),
      name: z.string().min(1),
      size: ProductSizeSchema,
      status: ProductStatusSchema,
      branch_id: z.string().min(1),
      preparation_time: z.number(),
      calories: z.number().nullish(),
      category_id: z.string().min(1),
    })
    .strict();

export const CreateTabInputSchema = (): z.ZodObject<
  Properties<CreateTabInput>
> =>
  z
    .object({
      table_id: z.string().min(1),
      value: z.number().nullish(),
      client_name: z.string().min(1),
      discount: z.number().nullish(),
      status: TabStatusSchema.nullish(),
      employee_tax: z.number().nullish(),
      observations: z.string().nullish(),
      payment_method: z.string().nullish(),
    })
    .strict();

export const CreateTableInputSchema = (): z.ZodObject<
  Properties<CreateTableInput>
> =>
  z
    .object({
      capacity: z.number(),
      name: z.string().min(1),
      location: z.string().min(1),
      branch_id: z.string().min(1),
      occupied_since: z.date().nullish(),
      status: TableStatusSchema.nullish(),
    })
    .strict();

export const CreateUserInputSchema = (): z.ZodObject<
  Properties<CreateUserInput>
> =>
  z
    .object({
      document: z.string().min(1),
      password: z.string().min(1),
      full_name: z.string().min(1),
      email: z.string().email().min(1),
    })
    .strict();

export const CustomerOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<CustomerOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      cnpj: SortOrderSchema.nullish(),
      user_id: SortOrderSchema.nullish(),
      company_name: SortOrderSchema.nullish(),
      fantasy_name: SortOrderSchema.nullish(),
      User: z.lazy(() => UserOrderByWithRelationInputSchema().nullish()),
      Branches: z.lazy(() =>
        BranchOrderByRelationAggregateInputSchema().nullish()),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const CustomerWhereInputSchema = (): z.ZodObject<
  Properties<CustomerWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      cnpj: StringFilterSchema().nullish(),
      user_id: UuidFilterSchema().nullish(),
      company_name: StringFilterSchema().nullish(),
      fantasy_name: StringFilterSchema().nullish(),
      Branches: BranchListRelationFilterSchema().nullish(),
      User: z.lazy(() => UserWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => CustomerWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => CustomerWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => CustomerWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const CustomerWhereUniqueInputSchema = (): z.ZodObject<
  Properties<CustomerWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
      cnpj: z.string().nullish(),
    })
    .strict();

export const DateTimeFilterSchema = (): z.ZodObject<
  Properties<DateTimeFilter>
> =>
  z
    .object({
      gt: z.date().nullish(),
      lt: z.date().nullish(),
      gte: z.date().nullish(),
      lte: z.date().nullish(),
      equals: z.date().nullish(),
      in: z.array(z.date()).nullish(),
      notIn: z.array(z.date()).nullish(),
      not: NestedDateTimeFilterSchema().nullish(),
    })
    .strict();

export const DateTimeNullableFilterSchema = (): z.ZodObject<
  Properties<DateTimeNullableFilter>
> =>
  z
    .object({
      gt: z.date().nullish(),
      lt: z.date().nullish(),
      gte: z.date().nullish(),
      lte: z.date().nullish(),
      equals: z.date().nullish(),
      in: z.array(z.date()).nullish(),
      notIn: z.array(z.date()).nullish(),
      not: NestedDateTimeNullableFilterSchema().nullish(),
    })
    .strict();

export const EmployeeListRelationFilterSchema = (): z.ZodObject<
  Properties<EmployeeListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => EmployeeWhereInputSchema().nullish()),
      some: z.lazy(() => EmployeeWhereInputSchema().nullish()),
      every: z.lazy(() => EmployeeWhereInputSchema().nullish()),
    })
    .strict();

export const EmployeeOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<EmployeeOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const EmployeeOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<EmployeeOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      role: SortOrderSchema.nullish(),
      user_id: SortOrderSchema.nullish(),
      branch_id: SortOrderSchema.nullish(),
      User: z.lazy(() => UserOrderByWithRelationInputSchema().nullish()),
      Branch: z.lazy(() => BranchOrderByWithRelationInputSchema().nullish()),
      Tables: z.lazy(() =>
        TableOrderByRelationAggregateInputSchema().nullish(),),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const EmployeeWhereInputSchema = (): z.ZodObject<
  Properties<EmployeeWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      role: StringFilterSchema().nullish(),
      user_id: UuidFilterSchema().nullish(),
      branch_id: UuidFilterSchema().nullish(),
      Tables: TableListRelationFilterSchema().nullish(),
      User: z.lazy(() => UserWhereInputSchema().nullish()),
      Branch: z.lazy(() => BranchWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => EmployeeWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => EmployeeWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => EmployeeWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const EmployeeWhereUniqueInputSchema = (): z.ZodObject<
  Properties<EmployeeWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const EnumOrderStatusFilterSchema = (): z.ZodObject<
  Properties<EnumOrderStatusFilter>
> =>
  z
    .object({
      equals: OrderStatusSchema.nullish(),
      in: z.array(OrderStatusSchema).nullish(),
      notIn: z.array(OrderStatusSchema).nullish(),
      not: NestedEnumOrderStatusFilterSchema().nullish(),
    })
    .strict();

export const EnumPaymentStatusFilterSchema = (): z.ZodObject<
  Properties<EnumPaymentStatusFilter>
> =>
  z
    .object({
      equals: PaymentStatusSchema.nullish(),
      in: z.array(PaymentStatusSchema).nullish(),
      notIn: z.array(PaymentStatusSchema).nullish(),
      not: NestedEnumPaymentStatusFilterSchema().nullish(),
    })
    .strict();

export const EnumProductSizeFilterSchema = (): z.ZodObject<
  Properties<EnumProductSizeFilter>
> =>
  z
    .object({
      equals: ProductSizeSchema.nullish(),
      in: z.array(ProductSizeSchema).nullish(),
      notIn: z.array(ProductSizeSchema).nullish(),
      not: NestedEnumProductSizeFilterSchema().nullish(),
    })
    .strict();

export const EnumProductStatusFilterSchema = (): z.ZodObject<
  Properties<EnumProductStatusFilter>
> =>
  z
    .object({
      equals: ProductStatusSchema.nullish(),
      in: z.array(ProductStatusSchema).nullish(),
      notIn: z.array(ProductStatusSchema).nullish(),
      not: NestedEnumProductStatusFilterSchema().nullish(),
    })
    .strict();

export const EnumRoleFilterSchema = (): z.ZodObject<
  Properties<EnumRoleFilter>
> =>
  z
    .object({
      equals: RoleSchema.nullish(),
      in: z.array(RoleSchema).nullish(),
      notIn: z.array(RoleSchema).nullish(),
      not: NestedEnumRoleFilterSchema().nullish(),
    })
    .strict();

export const EnumTabStatusFilterSchema = (): z.ZodObject<
  Properties<EnumTabStatusFilter>
> =>
  z
    .object({
      equals: TabStatusSchema.nullish(),
      in: z.array(TabStatusSchema).nullish(),
      notIn: z.array(TabStatusSchema).nullish(),
      not: NestedEnumTabStatusFilterSchema().nullish(),
    })
    .strict();

export const EnumTableStatusFilterSchema = (): z.ZodObject<
  Properties<EnumTableStatusFilter>
> =>
  z
    .object({
      equals: TableStatusSchema.nullish(),
      in: z.array(TableStatusSchema).nullish(),
      notIn: z.array(TableStatusSchema).nullish(),
      not: NestedEnumTableStatusFilterSchema().nullish(),
    })
    .strict();

export const IntFilterSchema = (): z.ZodObject<Properties<IntFilter>> =>
  z
    .object({
      gt: z.number().nullish(),
      lt: z.number().nullish(),
      gte: z.number().nullish(),
      lte: z.number().nullish(),
      equals: z.number().nullish(),
      in: z.array(z.number()).nullish(),
      notIn: z.array(z.number()).nullish(),
      not: NestedIntFilterSchema().nullish(),
    })
    .strict();

export const IntNullableFilterSchema = (): z.ZodObject<
  Properties<IntNullableFilter>
> =>
  z
    .object({
      gt: z.number().nullish(),
      lt: z.number().nullish(),
      gte: z.number().nullish(),
      lte: z.number().nullish(),
      equals: z.number().nullish(),
      in: z.array(z.number()).nullish(),
      notIn: z.array(z.number()).nullish(),
      not: NestedIntNullableFilterSchema().nullish(),
    })
    .strict();

export const NestedBoolFilterSchema = (): z.ZodObject<
  Properties<NestedBoolFilter>
> =>
  z
    .object({
      equals: z.boolean().nullish(),
      not: NestedBoolFilterSchema().nullish(),
    })
    .strict();

export const NestedDateTimeFilterSchema = (): z.ZodObject<
  Properties<NestedDateTimeFilter>
> =>
  z
    .object({
      gt: z.date().nullish(),
      lt: z.date().nullish(),
      gte: z.date().nullish(),
      lte: z.date().nullish(),
      equals: z.date().nullish(),
      in: z.array(z.date()).nullish(),
      notIn: z.array(z.date()).nullish(),
      not: NestedDateTimeFilterSchema().nullish(),
    })
    .strict();

export const NestedDateTimeNullableFilterSchema = (): z.ZodObject<
  Properties<NestedDateTimeNullableFilter>
> =>
  z
    .object({
      gt: z.date().nullish(),
      lt: z.date().nullish(),
      gte: z.date().nullish(),
      lte: z.date().nullish(),
      equals: z.date().nullish(),
      in: z.array(z.date()).nullish(),
      notIn: z.array(z.date()).nullish(),
      not: NestedDateTimeNullableFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumOrderStatusFilterSchema = (): z.ZodObject<
  Properties<NestedEnumOrderStatusFilter>
> =>
  z
    .object({
      equals: OrderStatusSchema.nullish(),
      in: z.array(OrderStatusSchema).nullish(),
      notIn: z.array(OrderStatusSchema).nullish(),
      not: NestedEnumOrderStatusFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumPaymentStatusFilterSchema = (): z.ZodObject<
  Properties<NestedEnumPaymentStatusFilter>
> =>
  z
    .object({
      equals: PaymentStatusSchema.nullish(),
      in: z.array(PaymentStatusSchema).nullish(),
      notIn: z.array(PaymentStatusSchema).nullish(),
      not: NestedEnumPaymentStatusFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumProductSizeFilterSchema = (): z.ZodObject<
  Properties<NestedEnumProductSizeFilter>
> =>
  z
    .object({
      equals: ProductSizeSchema.nullish(),
      in: z.array(ProductSizeSchema).nullish(),
      notIn: z.array(ProductSizeSchema).nullish(),
      not: NestedEnumProductSizeFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumProductStatusFilterSchema = (): z.ZodObject<
  Properties<NestedEnumProductStatusFilter>
> =>
  z
    .object({
      equals: ProductStatusSchema.nullish(),
      in: z.array(ProductStatusSchema).nullish(),
      notIn: z.array(ProductStatusSchema).nullish(),
      not: NestedEnumProductStatusFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumRoleFilterSchema = (): z.ZodObject<
  Properties<NestedEnumRoleFilter>
> =>
  z
    .object({
      equals: RoleSchema.nullish(),
      in: z.array(RoleSchema).nullish(),
      notIn: z.array(RoleSchema).nullish(),
      not: NestedEnumRoleFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumTabStatusFilterSchema = (): z.ZodObject<
  Properties<NestedEnumTabStatusFilter>
> =>
  z
    .object({
      equals: TabStatusSchema.nullish(),
      in: z.array(TabStatusSchema).nullish(),
      notIn: z.array(TabStatusSchema).nullish(),
      not: NestedEnumTabStatusFilterSchema().nullish(),
    })
    .strict();

export const NestedEnumTableStatusFilterSchema = (): z.ZodObject<
  Properties<NestedEnumTableStatusFilter>
> =>
  z
    .object({
      equals: TableStatusSchema.nullish(),
      in: z.array(TableStatusSchema).nullish(),
      notIn: z.array(TableStatusSchema).nullish(),
      not: NestedEnumTableStatusFilterSchema().nullish(),
    })
    .strict();

export const NestedIntFilterSchema = (): z.ZodObject<
  Properties<NestedIntFilter>
> =>
  z
    .object({
      gt: z.number().nullish(),
      lt: z.number().nullish(),
      gte: z.number().nullish(),
      lte: z.number().nullish(),
      equals: z.number().nullish(),
      in: z.array(z.number()).nullish(),
      notIn: z.array(z.number()).nullish(),
      not: NestedIntFilterSchema().nullish(),
    })
    .strict();

export const NestedIntNullableFilterSchema = (): z.ZodObject<
  Properties<NestedIntNullableFilter>
> =>
  z
    .object({
      gt: z.number().nullish(),
      lt: z.number().nullish(),
      gte: z.number().nullish(),
      lte: z.number().nullish(),
      equals: z.number().nullish(),
      in: z.array(z.number()).nullish(),
      notIn: z.array(z.number()).nullish(),
      not: NestedIntNullableFilterSchema().nullish(),
    })
    .strict();

export const NestedStringFilterSchema = (): z.ZodObject<
  Properties<NestedStringFilter>
> =>
  z
    .object({
      gt: z.string().nullish(),
      lt: z.string().nullish(),
      gte: z.string().nullish(),
      lte: z.string().nullish(),
      equals: z.string().nullish(),
      contains: z.string().nullish(),
      endsWith: z.string().nullish(),
      startsWith: z.string().nullish(),
      in: z.array(z.string().min(1)).nullish(),
      not: NestedStringFilterSchema().nullish(),
      notIn: z.array(z.string().min(1)).nullish(),
    })
    .strict();

export const NestedStringNullableFilterSchema = (): z.ZodObject<
  Properties<NestedStringNullableFilter>
> =>
  z
    .object({
      gt: z.string().nullish(),
      lt: z.string().nullish(),
      gte: z.string().nullish(),
      lte: z.string().nullish(),
      equals: z.string().nullish(),
      contains: z.string().nullish(),
      endsWith: z.string().nullish(),
      startsWith: z.string().nullish(),
      in: z.array(z.string().min(1)).nullish(),
      notIn: z.array(z.string().min(1)).nullish(),
      not: NestedStringNullableFilterSchema().nullish(),
    })
    .strict();

export const NestedUuidFilterSchema = (): z.ZodObject<
  Properties<NestedUuidFilter>
> =>
  z
    .object({
      gt: z.string().nullish(),
      lt: z.string().nullish(),
      gte: z.string().nullish(),
      lte: z.string().nullish(),
      equals: z.string().nullish(),
      not: NestedUuidFilterSchema().nullish(),
      in: z.array(z.string().min(1)).nullish(),
      notIn: z.array(z.string().min(1)).nullish(),
    })
    .strict();

export const OrderListRelationFilterSchema = (): z.ZodObject<
  Properties<OrderListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => OrderWhereInputSchema().nullish()),
      some: z.lazy(() => OrderWhereInputSchema().nullish()),
      every: z.lazy(() => OrderWhereInputSchema().nullish()),
    })
    .strict();

export const OrderOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<OrderOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const OrderOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<OrderOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      status: SortOrderSchema.nullish(),
      tab_id: SortOrderSchema.nullish(),
      total_price: SortOrderSchema.nullish(),
      payment_status: SortOrderSchema.nullish(),
      finished_at: z.lazy(() => SortOrderInputSchema().nullish()),
      observations: z.lazy(() => SortOrderInputSchema().nullish()),
      payment_date: z.lazy(() => SortOrderInputSchema().nullish()),
      Tab: z.lazy(() => TabOrderByWithRelationInputSchema().nullish()),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const OrderWhereInputSchema = (): z.ZodObject<
  Properties<OrderWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      tab_id: UuidFilterSchema().nullish(),
      total_price: IntFilterSchema().nullish(),
      status: EnumOrderStatusFilterSchema().nullish(),
      Tab: z.lazy(() => TabWhereInputSchema().nullish()),
      observations: StringNullableFilterSchema().nullish(),
      finished_at: DateTimeNullableFilterSchema().nullish(),
      payment_date: DateTimeNullableFilterSchema().nullish(),
      payment_status: EnumPaymentStatusFilterSchema().nullish(),
      OR: z.array(z.lazy(() => OrderWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => OrderWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => OrderWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const OrderWhereUniqueInputSchema = (): z.ZodObject<
  Properties<OrderWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const ProductImageListRelationFilterSchema = (): z.ZodObject<
  Properties<ProductImageListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => ProductImageWhereInputSchema().nullish()),
      some: z.lazy(() => ProductImageWhereInputSchema().nullish()),
      every: z.lazy(() => ProductImageWhereInputSchema().nullish()),
    })
    .strict();

export const ProductImageOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<ProductImageOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const ProductImageOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<ProductImageOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      path: SortOrderSchema.nullish(),
      product_id: SortOrderSchema.nullish(),
      Product: z.lazy(() => ProductOrderByWithRelationInputSchema().nullish()),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const ProductImageWhereInputSchema = (): z.ZodObject<
  Properties<ProductImageWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      path: StringFilterSchema().nullish(),
      product_id: UuidFilterSchema().nullish(),
      Product: z.lazy(() => ProductWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => ProductImageWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => ProductImageWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => ProductImageWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const ProductImageWhereUniqueInputSchema = (): z.ZodObject<
  Properties<ProductImageWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const ProductListRelationFilterSchema = (): z.ZodObject<
  Properties<ProductListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => ProductWhereInputSchema().nullish()),
      some: z.lazy(() => ProductWhereInputSchema().nullish()),
      every: z.lazy(() => ProductWhereInputSchema().nullish()),
    })
    .strict();

export const ProductOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<ProductOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const ProductOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<ProductOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      name: SortOrderSchema.nullish(),
      size: SortOrderSchema.nullish(),
      price: SortOrderSchema.nullish(),
      status: SortOrderSchema.nullish(),
      branch_id: SortOrderSchema.nullish(),
      category_id: SortOrderSchema.nullish(),
      preparation_time: SortOrderSchema.nullish(),
      calories: z.lazy(() => SortOrderInputSchema().nullish()),
      Branch: z.lazy(() => BranchOrderByWithRelationInputSchema().nullish()),
      Category: z.lazy(() =>
        CategoryOrderByWithRelationInputSchema().nullish()),
      ProductImages: z.lazy(() =>
        ProductImageOrderByRelationAggregateInputSchema().nullish()),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const ProductWhereInputSchema = (): z.ZodObject<
  Properties<ProductWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      price: IntFilterSchema().nullish(),
      name: StringFilterSchema().nullish(),
      branch_id: UuidFilterSchema().nullish(),
      category_id: UuidFilterSchema().nullish(),
      calories: IntNullableFilterSchema().nullish(),
      preparation_time: IntFilterSchema().nullish(),
      size: EnumProductSizeFilterSchema().nullish(),
      status: EnumProductStatusFilterSchema().nullish(),
      Branch: z.lazy(() => BranchWhereInputSchema().nullish()),
      Category: z.lazy(() => CategoryWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => ProductWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => ProductWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => ProductWhereInputSchema())).nullish(),
      ProductImages: ProductImageListRelationFilterSchema().nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const ProductWhereUniqueInputSchema = (): z.ZodObject<
  Properties<ProductWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const SortOrderInputSchema = (): z.ZodObject<
  Properties<SortOrderInput>
> =>
  z
    .object({
      sort: SortOrderSchema,
      nulls: NullsOrderSchema.nullish(),
    })
    .strict();

export const StringFilterSchema = (): z.ZodObject<Properties<StringFilter>> =>
  z
    .object({
      gt: z.string().nullish(),
      lt: z.string().nullish(),
      gte: z.string().nullish(),
      lte: z.string().nullish(),
      equals: z.string().nullish(),
      contains: z.string().nullish(),
      endsWith: z.string().nullish(),
      mode: QueryModeSchema.nullish(),
      startsWith: z.string().nullish(),
      in: z.array(z.string().min(1)).nullish(),
      not: NestedStringFilterSchema().nullish(),
      notIn: z.array(z.string().min(1)).nullish(),
    })
    .strict();

export const StringNullableFilterSchema = (): z.ZodObject<
  Properties<StringNullableFilter>
> =>
  z
    .object({
      gt: z.string().nullish(),
      lt: z.string().nullish(),
      gte: z.string().nullish(),
      lte: z.string().nullish(),
      equals: z.string().nullish(),
      contains: z.string().nullish(),
      endsWith: z.string().nullish(),
      mode: QueryModeSchema.nullish(),
      startsWith: z.string().nullish(),
      in: z.array(z.string().min(1)).nullish(),
      notIn: z.array(z.string().min(1)).nullish(),
      not: NestedStringNullableFilterSchema().nullish(),
    })
    .strict();

export const TabListRelationFilterSchema = (): z.ZodObject<
  Properties<TabListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => TabWhereInputSchema().nullish()),
      some: z.lazy(() => TabWhereInputSchema().nullish()),
      every: z.lazy(() => TabWhereInputSchema().nullish()),
    })
    .strict();

export const TabOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<TabOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const TabOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<TabOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      value: SortOrderSchema.nullish(),
      status: SortOrderSchema.nullish(),
      table_id: SortOrderSchema.nullish(),
      client_name: SortOrderSchema.nullish(),
      payment_method: SortOrderSchema.nullish(),
      discount: z.lazy(() => SortOrderInputSchema().nullish()),
      employee_tax: z.lazy(() => SortOrderInputSchema().nullish()),
      observations: z.lazy(() => SortOrderInputSchema().nullish()),
      Table: z.lazy(() => TableOrderByWithRelationInputSchema().nullish()),
      Orders: z.lazy(() =>
        OrderOrderByRelationAggregateInputSchema().nullish(),),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const TabWhereInputSchema = (): z.ZodObject<Properties<TabWhereInput>> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      value: IntFilterSchema().nullish(),
      table_id: UuidFilterSchema().nullish(),
      client_name: StringFilterSchema().nullish(),
      discount: IntNullableFilterSchema().nullish(),
      status: EnumTabStatusFilterSchema().nullish(),
      payment_method: StringFilterSchema().nullish(),
      Orders: OrderListRelationFilterSchema().nullish(),
      employee_tax: IntNullableFilterSchema().nullish(),
      observations: StringNullableFilterSchema().nullish(),
      Table: z.lazy(() => TableWhereInputSchema().nullish()),
      OR: z.array(z.lazy(() => TabWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => TabWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => TabWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const TabWhereUniqueInputSchema = (): z.ZodObject<
  Properties<TabWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const TableListRelationFilterSchema = (): z.ZodObject<
  Properties<TableListRelationFilter>
> =>
  z
    .object({
      none: z.lazy(() => TableWhereInputSchema().nullish()),
      some: z.lazy(() => TableWhereInputSchema().nullish()),
      every: z.lazy(() => TableWhereInputSchema().nullish()),
    })
    .strict();

export const TableOrderByRelationAggregateInputSchema = (): z.ZodObject<
  Properties<TableOrderByRelationAggregateInput>
> =>
  z
    .object({
      _count: SortOrderSchema.nullish(),
    })
    .strict();

export const TableOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<TableOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      name: SortOrderSchema.nullish(),
      status: SortOrderSchema.nullish(),
      capacity: SortOrderSchema.nullish(),
      location: SortOrderSchema.nullish(),
      branch_id: SortOrderSchema.nullish(),
      occupied_since: z.lazy(() => SortOrderInputSchema().nullish()),
      Branch: z.lazy(() => BranchOrderByWithRelationInputSchema().nullish()),
      Tabs: z.lazy(() => TabOrderByRelationAggregateInputSchema().nullish()),
      Employees: z.lazy(() =>
        EmployeeOrderByRelationAggregateInputSchema().nullish(),),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const TableWhereInputSchema = (): z.ZodObject<
  Properties<TableWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      name: StringFilterSchema().nullish(),
      capacity: IntFilterSchema().nullish(),
      branch_id: UuidFilterSchema().nullish(),
      location: StringFilterSchema().nullish(),
      Tabs: TabListRelationFilterSchema().nullish(),
      status: EnumTableStatusFilterSchema().nullish(),
      Employees: EmployeeListRelationFilterSchema().nullish(),
      Branch: z.lazy(() => BranchWhereInputSchema().nullish()),
      occupied_since: DateTimeNullableFilterSchema().nullish(),
      OR: z.array(z.lazy(() => TableWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => TableWhereInputSchema())).nullish(),
      NOT: z.array(z.lazy(() => TableWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const TableWhereUniqueInputSchema = (): z.ZodObject<
  Properties<TableWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
    })
    .strict();

export const UpdateBranchInputSchema = (): z.ZodObject<
  Properties<UpdateBranchInput>
> =>
  z
    .object({
      id: z.string().min(1),
      city: z.string().nullish(),
      cnpj: z.string().nullish(),
      state: z.string().nullish(),
      address: z.string().nullish(),
      zip_code: z.string().nullish(),
      branch_name: z.string().nullish(),
      customer_id: z.string().nullish(),
      address_number: z.string().nullish(),
      address_complement: z.string().nullish(),
      address_neighborhood: z.string().nullish(),
    })
    .strict();

export const UpdateCategoryInputSchema = (): z.ZodObject<
  Properties<UpdateCategoryInput>
> =>
  z
    .object({
      id: z.string().min(1),
      name: z.string().nullish(),
      branch_id: z.string().nullish(),
      description: z.string().nullish(),
    })
    .strict();

export const UpdateCustomerInputSchema = (): z.ZodObject<
  Properties<UpdateCustomerInput>
> =>
  z
    .object({
      id: z.string().min(1),
      cnpj: z.string().nullish(),
      user_id: z.string().nullish(),
      company_name: z.string().nullish(),
      fantasy_name: z.string().nullish(),
    })
    .strict();

export const UpdateEmployeeInputSchema = (): z.ZodObject<
  Properties<UpdateEmployeeInput>
> =>
  z
    .object({
      id: z.string().min(1),
      role: z.string().nullish(),
      user_id: z.string().nullish(),
      branch_id: z.string().nullish(),
    })
    .strict();

export const UpdateOrderInputSchema = (): z.ZodObject<
  Properties<UpdateOrderInput>
> =>
  z
    .object({
      id: z.string().min(1),
      tab_id: z.string().nullish(),
      finished_at: z.date().nullish(),
      payment_date: z.date().nullish(),
      total_price: z.number().nullish(),
      observations: z.string().nullish(),
      status: OrderStatusSchema.nullish(),
      payment_status: PaymentStatusSchema.nullish(),
    })
    .strict();

export const UpdateProductImageInputSchema = (): z.ZodObject<
  Properties<UpdateProductImageInput>
> =>
  z
    .object({
      id: z.string().min(1),
      product_id: z.string().nullish(),
    })
    .strict();

export const UpdateProductInputSchema = (): z.ZodObject<
  Properties<UpdateProductInput>
> =>
  z
    .object({
      id: z.string().min(1),
      name: z.string().nullish(),
      price: z.number().nullish(),
      calories: z.number().nullish(),
      branch_id: z.string().nullish(),
      category_id: z.string().nullish(),
      size: ProductSizeSchema.nullish(),
      status: ProductStatusSchema.nullish(),
      preparation_time: z.number().nullish(),
    })
    .strict();

export const UpdateTabInputSchema = (): z.ZodObject<
  Properties<UpdateTabInput>
> =>
  z
    .object({
      id: z.string().min(1),
      value: z.number().nullish(),
      discount: z.number().nullish(),
      table_id: z.string().nullish(),
      client_name: z.string().nullish(),
      status: TabStatusSchema.nullish(),
      employee_tax: z.number().nullish(),
      observations: z.string().nullish(),
      payment_method: z.string().nullish(),
    })
    .strict();

export const UpdateTableInputSchema = (): z.ZodObject<
  Properties<UpdateTableInput>
> =>
  z
    .object({
      id: z.string().min(1),
      name: z.string().nullish(),
      capacity: z.number().nullish(),
      location: z.string().nullish(),
      branch_id: z.string().nullish(),
      occupied_since: z.date().nullish(),
      status: TableStatusSchema.nullish(),
    })
    .strict();

export const UpdateUserInputSchema = (): z.ZodObject<
  Properties<UpdateUserInput>
> =>
  z
    .object({
      id: z.string().min(1),
      document: z.string().nullish(),
      password: z.string().nullish(),
      full_name: z.string().nullish(),
      email: z.string().email().nullish(),
    })
    .strict();

export const UserOrderByWithRelationInputSchema = (): z.ZodObject<
  Properties<UserOrderByWithRelationInput>
> =>
  z
    .object({
      id: SortOrderSchema.nullish(),
      role: SortOrderSchema.nullish(),
      email: SortOrderSchema.nullish(),
      document: SortOrderSchema.nullish(),
      full_name: SortOrderSchema.nullish(),
      validated: SortOrderSchema.nullish(),
      avatar_url: z.lazy(() => SortOrderInputSchema().nullish()),
      Customer: z.lazy(() =>
        CustomerOrderByWithRelationInputSchema().nullish(),),
      Employee: z.lazy(() =>
        EmployeeOrderByWithRelationInputSchema().nullish(),),
      active: SortOrderSchema.nullish(),
      updated_at: SortOrderSchema.nullish(),
      created_at: SortOrderSchema.nullish(),
    })
    .strict();

export const UserWhereInputSchema = (): z.ZodObject<
  Properties<UserWhereInput>
> =>
  z
    .object({
      id: UuidFilterSchema().nullish(),
      email: StringFilterSchema().nullish(),
      role: EnumRoleFilterSchema().nullish(),
      validated: BoolFilterSchema().nullish(),
      document: StringFilterSchema().nullish(),
      full_name: StringFilterSchema().nullish(),
      avatar_url: StringNullableFilterSchema().nullish(),
      OR: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
      AND: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
      Customer: z.lazy(() => CustomerWhereInputSchema().nullish()),
      Employee: z.lazy(() => EmployeeWhereInputSchema().nullish()),
      NOT: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
      active: BoolFilterSchema().nullish(),
      updated_at: DateTimeFilterSchema().nullish(),
      created_at: DateTimeFilterSchema().nullish(),
    })
    .strict();

export const UserWhereUniqueInputSchema = (): z.ZodObject<
  Properties<UserWhereUniqueInput>
> =>
  z
    .object({
      id: z.string().nullish(),
      email: z.string().nullish(),
      document: z.string().nullish(),
    })
    .strict();

export const UuidFilterSchema = (): z.ZodObject<Properties<UuidFilter>> =>
  z
    .object({
      gt: z.string().nullish(),
      lt: z.string().nullish(),
      gte: z.string().nullish(),
      lte: z.string().nullish(),
      equals: z.string().nullish(),
      mode: QueryModeSchema.nullish(),
      not: NestedUuidFilterSchema().nullish(),
      in: z.array(z.string().min(1)).nullish(),
      notIn: z.array(z.string().min(1)).nullish(),
    })
    .strict();
