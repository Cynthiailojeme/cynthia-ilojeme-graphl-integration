import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  Country: any;
  Currency: any;
  DateTime: any;
  Email: any;
  JWT: any;
  Json: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  Phone: any;
  PositiveFloat: any;
  PositiveInt: any;
  URL: any;
  Void: any;
};

/**  This one is a full address that belongs to an org in the DB  */
export type Address = Node & {
  __typename?: 'Address';
  /**  The formatted address as returned by Google Places API  */
  address: Scalars['NonEmptyString'];
  /**  An optional second address line  */
  address2?: Maybe<Scalars['NonEmptyString']>;
  city: Scalars['NonEmptyString'];
  /**  2 letter code  */
  country: Scalars['NonEmptyString'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  postalCode: Scalars['NonEmptyString'];
  /**  2 letter code for US, 3 for some others  */
  state?: Maybe<Scalars['NonEmptyString']>;
  /**  Both the name and number  */
  street: Scalars['NonEmptyString'];
  unit?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
};

/**  Also The type of SubmissionField.value when the type is ADDRESS  */
export type AddressInput = {
  /**  The formatted address as returned by Google Places API  */
  address: Scalars['NonEmptyString'];
  /**  An optional second address line  */
  address2?: InputMaybe<Scalars['NonEmptyString']>;
  city: Scalars['NonEmptyString'];
  /**  2 letter code  */
  country: Scalars['Country'];
  postalCode: Scalars['NonEmptyString'];
  /**  2 letter code for US, 3 for some others  */
  state?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Both the name and number  */
  street: Scalars['NonEmptyString'];
  /**  Extra information (floor, apartment, etc.)  */
  unit?: InputMaybe<Scalars['NonEmptyString']>;
};

/**  This address is rather the type version of AddressInput  */
export type BasicAddress = {
  __typename?: 'BasicAddress';
  /**  The formatted address as returned by Google Places API  */
  address: Scalars['NonEmptyString'];
  /**  An optional second address line  */
  address2?: Maybe<Scalars['NonEmptyString']>;
  city: Scalars['NonEmptyString'];
  /**  2 letter code  */
  country: Scalars['NonEmptyString'];
  postalCode: Scalars['NonEmptyString'];
  /**  2 letter code for US, 3 for some others  */
  state?: Maybe<Scalars['NonEmptyString']>;
  /**  Both the name and number  */
  street: Scalars['NonEmptyString'];
  unit?: Maybe<Scalars['NonEmptyString']>;
};

export type CatalogInput = {
  category?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Defaults to Manufactured trading  */
  orgId?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageInput>;
};

export type CertificateFieldValue = {
  companyName: Scalars['NonEmptyString'];
  /**  Optional Expiry Date of certificate  */
  expiryDate?: InputMaybe<Scalars['DateTime']>;
  /**  If they upload a file, include the URL here  */
  file?: InputMaybe<Scalars['URL']>;
  /**  The name of the company issuing the certificate  */
  issuedBy: Scalars['NonEmptyString'];
  issuedDate: Scalars['DateTime'];
  /**  The name of the standard being certified  */
  name: Scalars['NonEmptyString'];
  /**  Reference numbers provided by the user  */
  referenceNumbers?: InputMaybe<Array<Scalars['NonEmptyString']>>;
};

export type Channel = Node & {
  __typename?: 'Channel';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /**  Same result as messages(last: 1)  */
  lastMessage?: Maybe<Message>;
  members: Array<ChatAccount>;
  messages: MessagesPayload;
  /**  The context organization for this channel  */
  org?: Maybe<Organization>;
  /**  The channel can be contextualized to some products  */
  products: Array<Product>;
  subject?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
};


export type ChannelMessagesArgs = {
  input?: InputMaybe<ChannelMessagesInput>;
};

export type ChannelMessagesInput = {
  page?: InputMaybe<PageInput>;
};

export type ChannelSubscriptionPayload = Channel | Message;

export type ChannelsPayload = PagePayload & {
  __typename?: 'ChannelsPayload';
  nodes: Array<Channel>;
  pageInfo: PageInfo;
};

export type ChatAccount = Node & {
  __typename?: 'ChatAccount';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  identifier: Scalars['NonEmptyString'];
  isPreferred: Scalars['Boolean'];
  service: ChatService;
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export enum ChatService {
  Browser = 'Browser',
  Email = 'Email',
  Sms = 'Sms',
  Whatsapp = 'Whatsapp'
}

export type CompanyFieldValue = {
  /**  The address of the company  */
  address?: InputMaybe<AddressInput>;
  /**  The info on the point of contact in this company  */
  contact: ContactFieldValue;
  /**  The name of the company  */
  name: Scalars['NonEmptyString'];
  /**  How are they related to this contact  */
  relationship: Scalars['NonEmptyString'];
};

/**  The type of SubmissionField.value when the type is Contact  */
export type ContactFieldValue = {
  /**  The email address of the contact  */
  email: Scalars['Email'];
  /**  The first name of the contact  */
  firstName: Scalars['NonEmptyString'];
  /**  The last name of the contact  */
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  /**  The phone number of the contact  */
  phone?: InputMaybe<Scalars['Phone']>;
};

export type CreateChannelInput = {
  membersIds: Array<Scalars['ID']>;
  /**  If the channel should be contextualized to an org  */
  orgId?: InputMaybe<Scalars['ID']>;
  /**  Can include orgs and their manager will be assigned  */
  orgIds?: InputMaybe<Array<Scalars['ID']>>;
  paymentRequestId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  subject?: InputMaybe<Scalars['NonEmptyString']>;
  taskId?: InputMaybe<Scalars['ID']>;
};

export type CreateChatAccountInput = {
  identifier: Scalars['NonEmptyString'];
  service: ChatService;
};

export type CreateCustomTaskInput = {
  description?: InputMaybe<Scalars['String']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['NonEmptyString'];
  orgId: Scalars['ID'];
  /**  The id of the NodeState where it should live  */
  stateId: Scalars['ID'];
  /**  By default it's assigned by the API based on the orgId  */
  userId?: InputMaybe<Scalars['ID']>;
  /**  Workflow.code where it should be added  */
  workflowCode: Scalars['ID'];
};

export type CreateIncomingPaymentInput = {
  amount: Scalars['NonNegativeFloat'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['NonEmptyString']>;
  foreignId: Scalars['ID'];
  identifier?: InputMaybe<Scalars['NonEmptyString']>;
  metadata?: InputMaybe<Scalars['Json']>;
  status: PaymentStatus;
  type: PaymentType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  virtualAccountId?: InputMaybe<Scalars['ID']>;
};

export type CreateInvoiceInput = {
  /**  TODO: Should we support passing an Address id?  */
  billingAddress: AddressInput;
  paymentRequest: CreatePaymentRequestInput;
  paymentTerms: Scalars['NonEmptyString'];
  shippingAddress?: InputMaybe<AddressInput>;
};

export type CreateMessageHighlightInput = {
  messageId: Scalars['ID'];
  notes?: InputMaybe<Scalars['String']>;
  /**  The highlighted (plain) text from the message  */
  text: Scalars['String'];
};

export type CreateMessageInput = {
  accountId: Scalars['ID'];
  /**  The list of receivers, defaults to everyone in the channel  */
  accountIds?: InputMaybe<Array<Scalars['ID']>>;
  channelId: Scalars['ID'];
  files?: InputMaybe<Array<Scalars['URL']>>;
  inReplyToId?: InputMaybe<Scalars['ID']>;
  /**  The markdown version of the message  */
  richText?: InputMaybe<Scalars['String']>;
  /**  The plain text version of the message  */
  text: Scalars['String'];
};

export type CreateOrganizationInput = {
  organization: OrganizationInput;
  /**  To be used by superadmins to assign to someone else  */
  userId?: InputMaybe<Scalars['ID']>;
};

export type CreatePaymentInput = {
  amount: Scalars['Float'];
  description?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Payer's PaymentMethod id  */
  fromId: Scalars['ID'];
  /**  Which PaymentRequest is this for  */
  paymentRequestId: Scalars['ID'];
  type: PaymentType;
};

export type CreatePaymentMethodCreditCardInput = {
  accountNumber: Scalars['NonEmptyString'];
  expiration: Scalars['NonEmptyString'];
};

export type CreatePaymentMethodExternalAccountInput = {
  /**  These will be mandatory after we switch  */
  accountName?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Can be an IBAN or standard account number  */
  accountNumber: Scalars['NonEmptyString'];
  address?: InputMaybe<AddressInput>;
  routingNumber: Scalars['NonEmptyString'];
  routingNumberType: RoutingNumberType;
};

export type CreatePaymentMethodInput = {
  /**  If creating a PaymentMethodType.CreditCard  */
  creditCard?: InputMaybe<CreatePaymentMethodCreditCardInput>;
  /**  If creating a PaymentMethodType.ExternalAccount  */
  externalAccount?: InputMaybe<CreatePaymentMethodExternalAccountInput>;
  /**  Some payment methods require an identifier  */
  identifier?: InputMaybe<Scalars['NonEmptyString']>;
  orgId: Scalars['ID'];
  /**  If creating a PaymentMethodType.PlaidAccount  */
  plaidAccount?: InputMaybe<CreatePaymentMethodPlaidAccountInput>;
  /**  If creating a PaymentMethodType.VirtualAccount  */
  virtualAccount?: InputMaybe<Scalars['Boolean']>;
};

export type CreatePaymentMethodPlaidAccountInput = {
  accountId: Scalars['NonEmptyString'];
  /**  These will be mandatory after we switch  */
  address?: InputMaybe<AddressInput>;
  /**  Received from Plaid link  */
  publicToken: Scalars['NonEmptyString'];
};

export type CreatePaymentRequestInput = {
  dueAt: Scalars['DateTime'];
  /**  Defaults to 0  */
  fee?: InputMaybe<Scalars['NonNegativeFloat']>;
  lineItems: Array<LineItemInput>;
  memo?: InputMaybe<Scalars['NonEmptyString']>;
  /**  The organization that needs to pay this  */
  orgId: Scalars['ID'];
  /**  A payment method from the organization that gets paid  */
  paymentMethodId: Scalars['ID'];
  paymentOptions?: InputMaybe<Array<PaymentMethodType>>;
  /**  If not provided, one is automatically generated  */
  reference?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Defaults to 0  */
  tax?: InputMaybe<Scalars['NonNegativeFloat']>;
};

export type CreatePreOrderInput = {
  /**  Must be all from the "createPreOrder" form  */
  submissions: Array<CreateSubmissionInput>;
};

export type CreateProductInput = {
  orderId: Scalars['ID'];
  productCategories: Array<Scalars['NonEmptyString']>;
  productDescription: Scalars['NonEmptyString'];
  productFiles?: InputMaybe<Array<UrlFieldValue>>;
  productLinks?: InputMaybe<Array<UrlFieldValue>>;
  productName: Scalars['NonEmptyString'];
};

export type CreateSubmissionInput = {
  fields: Array<SubmissionFieldInput>;
  formId: Scalars['ID'];
  isDraft?: InputMaybe<Scalars['Boolean']>;
  orgId: Scalars['ID'];
  /**  If this is for a task, include its id here  */
  taskId?: InputMaybe<Scalars['ID']>;
};

export type CreateTaskInput = {
  code: Scalars['ID'];
  /**  If provided overrides the default one  */
  description?: InputMaybe<Scalars['String']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  /**  If provided overrides the default one  */
  name?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Only to be sent for tasks assigned to vendors  */
  orgId?: InputMaybe<Scalars['ID']>;
  /**  If provided overrides the default inference  */
  parentId?: InputMaybe<Scalars['ID']>;
  /**  The id of the NodeState where it should live  */
  stateId: Scalars['ID'];
};

export type CreateTaskReviewInput = {
  comment?: InputMaybe<Scalars['NonEmptyString']>;
  fields?: InputMaybe<Array<TaskReviewFieldInput>>;
  status: TaskReviewStatus;
  taskId: Scalars['ID'];
};

export type CreateUserInput = {
  /**  It must include either an email or a phone  */
  email?: InputMaybe<Scalars['Email']>;
  firstName: Scalars['NonEmptyString'];
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  membership?: InputMaybe<MembershipInput>;
  /**  It must include either a new organization or a new membership  */
  organization?: InputMaybe<OrganizationInput>;
  phone?: InputMaybe<Scalars['Phone']>;
  smsNumber?: InputMaybe<Scalars['Phone']>;
  whatsappNumber?: InputMaybe<Scalars['Phone']>;
};

export type CreateVerificationPaymentInput = {
  amount: Scalars['NonNegativeFloat'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  description?: InputMaybe<Scalars['NonEmptyString']>;
  foreignId: Scalars['ID'];
  identifier?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Whether the payment is a return to our account  */
  isReturned?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['Json']>;
  paymentMethodId: Scalars['ID'];
  status: PaymentStatus;
  type: PaymentType;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type DateRangeInput = {
  end: Scalars['DateTime'];
  start: Scalars['DateTime'];
};

/**  Error codes, uses Apollo's when possible, otherwise HTTP  */
export enum ErrorCode {
  BadUserInput = 'BAD_USER_INPUT',
  Conflict = 'CONFLICT',
  DatabaseError = 'DATABASE_ERROR',
  Forbidden = 'FORBIDDEN',
  GraphqlParseFailed = 'GRAPHQL_PARSE_FAILED',
  GraphqlValidationFailed = 'GRAPHQL_VALIDATION_FAILED',
  InternalServerError = 'INTERNAL_SERVER_ERROR',
  Locked = 'LOCKED',
  MethodNotAllowed = 'METHOD_NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  Unauthenticated = 'UNAUTHENTICATED'
}

export type Event = Node & {
  __typename?: 'Event';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  state: NodeState;
  targetId: Scalars['ID'];
  type: EventType;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum EventType {
  MessageCreated = 'MessageCreated',
  PaymentRequestCreated = 'PaymentRequestCreated',
  PaymentRequestUpdated = 'PaymentRequestUpdated',
  ProductCreated = 'ProductCreated',
  ReviewAdded = 'ReviewAdded',
  ReviewerUpdated = 'ReviewerUpdated',
  SpecCreated = 'SpecCreated',
  SpecUpdated = 'SpecUpdated',
  TaskCompleted = 'TaskCompleted',
  TaskCreated = 'TaskCreated',
  UserAdded = 'UserAdded',
  WorkflowStarted = 'WorkflowStarted'
}

export type EventsPayload = PagePayload & {
  __typename?: 'EventsPayload';
  nodes: Array<Event>;
  pageInfo: PageInfo;
};

export type FactoryFieldValue = {
  /**  Address of the factory  */
  address?: InputMaybe<AddressInput>;
  /**  Main Contact person of the factory  */
  contact: ContactFieldValue;
  /**  Number of employees in factory  */
  employeeCount?: InputMaybe<Scalars['Int']>;
  /**  Does the factory offer full package */
  fullPackage?: InputMaybe<Scalars['Boolean']>;
  /**  Low production months (multiple select)  */
  lowProductionMonths?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  /**  Monthly supply capacity of the factory  */
  monthlySupplyCapacity: Scalars['PositiveFloat'];
  /**  The name of the factory  */
  name: Scalars['NonEmptyString'];
  /**  peak production months (multiple select)  */
  peakProductionMonths?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  /**  Product categories produced  */
  productCategories: Array<Scalars['NonEmptyString']>;
  /**  a file input field to upload misc file  */
  relevantDocument?: InputMaybe<Scalars['URL']>;
  /**  Does the factory offer small programs? 100-300 units per order */
  smallProgramsOffered?: InputMaybe<Scalars['Boolean']>;
};

export type File = {
  __typename?: 'File';
  contentType?: Maybe<Scalars['NonEmptyString']>;
  filename: Scalars['NonEmptyString'];
  path: Scalars['NonEmptyString'];
  url: Scalars['URL'];
};

export type Form = Node & {
  __typename?: 'Form';
  createdAt: Scalars['DateTime'];
  /**  Submissions to display, embedded from other Forms  */
  embeds: Array<Submission>;
  fields: Array<FormField>;
  id: Scalars['ID'];
  submissions: Array<Submission>;
  template: FormTemplate;
  updatedAt: Scalars['DateTime'];
};

export type FormField = {
  __typename?: 'FormField';
  code: Scalars['ID'];
  importance: Importance;
  /**  Whether it was created by a user  */
  isCustom: Scalars['Boolean'];
  isMultiple: Scalars['Boolean'];
  isOrderField: Scalars['Boolean'];
  isProductField: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  /** @deprecated Use isOrderField or isProductField instead */
  isSpec: Scalars['Boolean'];
  max?: Maybe<Scalars['Float']>;
  /**  How many can fit in the same row  */
  maxPerRow: Scalars['NonNegativeInt'];
  min?: Maybe<Scalars['Float']>;
  name: Scalars['NonEmptyString'];
  options?: Maybe<Array<ListItem>>;
  placeholder?: Maybe<Scalars['NonEmptyString']>;
  subFields?: Maybe<Array<FormField>>;
  type: FormFieldType;
  /**  At least one Workflow that includes this field in one of its task's form  */
  workflow?: Maybe<WorkflowTemplate>;
};

export enum FormFieldCodes {
  Address = 'address',
  AnnualRevenue = 'annualRevenue',
  AreDesignsReady = 'areDesignsReady',
  AuditReports = 'auditReports',
  BankStatements = 'bankStatements',
  BulkMaterialTesting = 'bulkMaterialTesting',
  CanAffordFee = 'canAffordFee',
  Cc = 'cc',
  ClientVision = 'clientVision',
  CompanyDirector = 'companyDirector',
  CompanyProfile = 'companyProfile',
  CompanyType = 'companyType',
  ComplianceCertificates = 'complianceCertificates',
  Contract = 'contract',
  ContractName = 'contractName',
  ContractSigners = 'contractSigners',
  DealStatus = 'dealStatus',
  DeliveryDate = 'deliveryDate',
  DeliveryLocation = 'deliveryLocation',
  DesignFiles = 'designFiles',
  DesignLinks = 'designLinks',
  DesignReferences = 'designReferences',
  Email = 'email',
  ExcludeCountries = 'excludeCountries',
  ExpectedFrequency = 'expectedFrequency',
  ExpectedVolume = 'expectedVolume',
  Factory = 'factory',
  Files = 'files',
  IdealCustomerSize = 'idealCustomerSize',
  InlineInspection = 'inlineInspection',
  IsHighPriority = 'isHighPriority',
  IsPaying = 'isPaying',
  IsPublished = 'isPublished',
  LegalCompanyName = 'legalCompanyName',
  MaxUnitPrice = 'maxUnitPrice',
  MonthlyServiceCapacity = 'monthlyServiceCapacity',
  Name = 'name',
  NeedleDetector = 'needleDetector',
  Notes = 'notes',
  NumberOfEmployees = 'numberOfEmployees',
  OrderDate = 'orderDate',
  OrderFrequency = 'orderFrequency',
  PastExperience = 'pastExperience',
  PaymentMethod = 'paymentMethod',
  PaymentRequest = 'paymentRequest',
  PaymentTerms = 'paymentTerms',
  PreferredCountriesOfOrigin = 'preferredCountriesOfOrigin',
  ProductCategories = 'productCategories',
  ProductColor = 'productColor',
  ProductDescription = 'productDescription',
  ProductDimensions = 'productDimensions',
  ProductFiles = 'productFiles',
  ProductLinks = 'productLinks',
  ProductMaterial = 'productMaterial',
  ProductName = 'productName',
  ProductRequirements = 'productRequirements',
  ProductSpecs = 'productSpecs',
  QcPersonnelCount = 'qcPersonnelCount',
  Quantity = 'quantity',
  Quote = 'quote',
  Quotes = 'quotes',
  Review = 'review',
  ReviewEstimate = 'reviewEstimate',
  SalesTaxRegistration = 'salesTaxRegistration',
  ServiceCategories = 'serviceCategories',
  ShippingMode = 'shippingMode',
  SourcingBudget = 'sourcingBudget',
  SourcingBudget2 = 'sourcingBudget2',
  SourcingNeed = 'sourcingNeed',
  SourcingNotes = 'sourcingNotes',
  SourcingStatus = 'sourcingStatus',
  SubContractorCompany = 'subContractorCompany',
  Subcontractors = 'subcontractors',
  TaxRegistration = 'taxRegistration',
  TradeReferences = 'tradeReferences',
  UnitPrice = 'unitPrice',
  Users = 'users',
  Vendor = 'vendor',
  Website = 'website',
  YearOfEstablishment = 'yearOfEstablishment'
}

export type FormFieldInput = {
  importance?: InputMaybe<Importance>;
  isMultiple: Scalars['Boolean'];
  isOrderField?: InputMaybe<Scalars['Boolean']>;
  isProductField?: InputMaybe<Scalars['Boolean']>;
  isRequired: Scalars['Boolean'];
  isSpec?: InputMaybe<Scalars['Boolean']>;
  max?: InputMaybe<Scalars['Float']>;
  min?: InputMaybe<Scalars['Float']>;
  name: Scalars['NonEmptyString'];
  options?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  placeholder?: InputMaybe<Scalars['NonEmptyString']>;
  type: FormFieldType;
};

export enum FormFieldType {
  Address = 'Address',
  Blob = 'Blob',
  Boolean = 'Boolean',
  Certificate = 'Certificate',
  Company = 'Company',
  Contact = 'Contact',
  Contract = 'Contract',
  CreditCard = 'CreditCard',
  Date = 'Date',
  Email = 'Email',
  Factory = 'Factory',
  File = 'File',
  Float = 'Float',
  Integer = 'Integer',
  List = 'List',
  Money = 'Money',
  Object = 'Object',
  Organization = 'Organization',
  PaymentMethod = 'PaymentMethod',
  PaymentRequest = 'PaymentRequest',
  Quote = 'Quote',
  Select = 'Select',
  Spec = 'Spec',
  Text = 'Text',
  Url = 'Url',
  User = 'User',
  Vendor = 'Vendor'
}

export type FormTemplate = {
  __typename?: 'FormTemplate';
  code: Scalars['ID'];
  /**  Shown when the form is being edited, none means form is not editable  */
  editingSubmitText?: Maybe<Scalars['NonEmptyString']>;
  /**  Shown when a submission of this form is embedded  */
  embedText: Scalars['NonEmptyString'];
  /**  The list of fields that can be added dynamically to the form  */
  extraFields: Array<FormField>;
  /**  These remain untouched and are responded by the receiver  */
  fields: Array<FormField>;
  /** @deprecated Use extraFields.length > 0 instead */
  isExtendable: Scalars['Boolean'];
  /**  If true, the re-submitting reason is required  */
  isReasonRequired: Scalars['Boolean'];
  submitText: Scalars['NonEmptyString'];
};

export type FormsPayload = PagePayload & {
  __typename?: 'FormsPayload';
  nodes: Array<Form>;
  pageInfo: PageInfo;
};

export enum Importance {
  Critical = 'Critical',
  Important = 'Important',
  Minor = 'Minor'
}

export type InviteNewUserInput = {
  email: Scalars['Email'];
  membership: MembershipInput;
};

export type InviteNewUserToTaskInput = {
  email: Scalars['Email'];
  /**  The id of the "parent" task  */
  taskId: Scalars['ID'];
};

export type InviteUserInput = {
  membership: MembershipInput;
  userId: Scalars['ID'];
};

export type Invoice = Node & {
  __typename?: 'Invoice';
  billingAddress: Address;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  paymentRequests: Array<PaymentRequest>;
  paymentTerms: Scalars['NonEmptyString'];
  shippingAddress?: Maybe<Address>;
  updatedAt: Scalars['DateTime'];
};

export type LineItem = Node & {
  __typename?: 'LineItem';
  createdAt: Scalars['DateTime'];
  description: Scalars['NonEmptyString'];
  id: Scalars['ID'];
  product?: Maybe<Product>;
  quantity: Scalars['PositiveInt'];
  /**  Same as quantity * unitPrice  */
  subTotal: Scalars['PositiveFloat'];
  unitPrice: Scalars['PositiveFloat'];
  updatedAt: Scalars['DateTime'];
};

export type LineItemInput = {
  description: Scalars['NonEmptyString'];
  /**  Optionally if linked to a product  */
  productId?: InputMaybe<Scalars['ID']>;
  /**  Defaults to 1  */
  quantity?: InputMaybe<Scalars['PositiveInt']>;
  unitPrice: Scalars['PositiveFloat'];
};

export type ListItem = {
  __typename?: 'ListItem';
  code: Scalars['NonEmptyString'];
  name: Scalars['NonEmptyString'];
  parent?: Maybe<ListItem>;
};

export type Membership = Node & {
  __typename?: 'Membership';
  createdAt: Scalars['DateTime'];
  department?: Maybe<Scalars['NonEmptyString']>;
  id: Scalars['ID'];
  org: Organization;
  role: UserRole;
  title?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type MembershipInput = {
  department?: InputMaybe<Scalars['NonEmptyString']>;
  orgId: Scalars['ID'];
  role: UserRole;
  title?: InputMaybe<Scalars['NonEmptyString']>;
};

export type Message = Node & {
  __typename?: 'Message';
  account: ChatAccount;
  channel: Channel;
  createdAt: Scalars['DateTime'];
  files: Array<File>;
  /**  Includes emails replies & signatures  */
  fullText?: Maybe<Scalars['String']>;
  highlights: Array<MessageHighlight>;
  id: Scalars['ID'];
  inReplyTo?: Maybe<Message>;
  /**  If true should have a different look  */
  isEvent: Scalars['Boolean'];
  receipts: Array<MessageReceipt>;
  /**  The markdown version of the message  */
  richText?: Maybe<Scalars['String']>;
  status: MessageStatus;
  /**  The plain text version of the message  */
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MessageHighlight = Node & {
  __typename?: 'MessageHighlight';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Message;
  /**  Internal notes that the user can add  */
  notes: Scalars['String'];
  /**  The highlighted (plain) text from the message  */
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type MessageReceipt = Node & {
  __typename?: 'MessageReceipt';
  account: ChatAccount;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: MessageStatus;
  updatedAt: Scalars['DateTime'];
};

export enum MessageStatus {
  Created = 'Created',
  Delivered = 'Delivered',
  Failed = 'Failed',
  Read = 'Read',
  Sending = 'Sending',
  Sent = 'Sent'
}

export type MessagesByUsersInput = {
  /**  The org to which the channel is contextualized  */
  orgId: Scalars['ID'];
  page?: InputMaybe<PageInput>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  /**  If provided, messages will be filtered using full-text search  */
  search?: InputMaybe<Scalars['NonEmptyString']>;
  services?: InputMaybe<Array<ChatService>>;
  userIds: Array<Scalars['ID']>;
};

export type MessagesInput = {
  /**  If true, it will match messages where these user/product ids are a subset  */
  isPartial?: InputMaybe<Scalars['Boolean']>;
  order?: InputMaybe<OrderInput>;
  /**  The org to which the channel is contextualized  */
  orgId?: InputMaybe<Scalars['ID']>;
  page?: InputMaybe<PageInput>;
  paymentRequestId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['NonEmptyString']>;
  services?: InputMaybe<Array<ChatService>>;
  taskId?: InputMaybe<Scalars['ID']>;
  userIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type MessagesPayload = PagePayload & {
  __typename?: 'MessagesPayload';
  nodes: Array<Message>;
  pageInfo: PageInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  allocateVirtualAccount: PaymentMethod;
  confirmAccount: ChatAccount;
  createChannel: Channel;
  createChatAccount: ChatAccount;
  createCustomTask: Task;
  /**  Used by the webhook lambdas  */
  createIncomingPayment: Payment;
  createInvoice: Invoice;
  /**  Used by the front-end to send a new message  */
  createMessage: Message;
  createMessageHighlight: MessageHighlight;
  createOrganization: Organization;
  createPayment: Payment;
  createPaymentMethod: PaymentMethod;
  createPaymentRequest: PaymentRequest;
  /**  Called from the catalog page with the "cart"  */
  createPreOrder: Order;
  /**  Same as calling createSubmission(code=createProduct), use that one preferably  */
  createProduct: Product;
  createSubmission: Submission;
  createTask: Task;
  createTaskReview: TaskReview;
  /**  Can only be used by superadmins  */
  createUser: User;
  /**  Used by the webhook lambdas  */
  createVerificationPayment: Payment;
  /**  Sends an invite for a new user to sign up and join an org  */
  inviteNewUser: SuccessPayload;
  /**  Sends an invite for a new user to sign up and submit a child task  */
  inviteNewUserToTask: SuccessPayload;
  /**  Invites a pre-existing user  */
  inviteUser: Membership;
  plaidCreateLinkToken: Scalars['NonEmptyString'];
  /**  Used by the message-api when incoming messages are received  */
  receiveMessage?: Maybe<Message>;
  /**  appends the signed contract url to the value  */
  replaceSubmissionFieldFile: Submission;
  requestResetPassword: SuccessPayload;
  requestSignUp: SuccessPayload;
  signIn: User;
  signUp: User;
  /**  Temporary method to test  */
  simulateWire: Scalars['Json'];
  /** @deprecated Use updateOrganization instead */
  starOrganization: Organization;
  tagMessageHighlightToSpec: Spec;
  updateChannel: Channel;
  updateChatAccount: ChatAccount;
  updateForm: Form;
  /**  Used by the webhook lambdas  */
  updateIncomingPayment: Payment;
  /**  Used by the message-api to record status updates on a message  */
  updateMessageReceiptStatus: Scalars['Int'];
  /**  Used by the message-api when outgoing messages are sent  */
  updateMessageStatus: Message;
  updateOrder: Order;
  updateOrganization: Organization;
  updatePayment: Payment;
  updatePaymentMethod: PaymentMethod;
  updatePaymentRequest: PaymentRequest;
  /**  Called by the lambda that handles Stripe requests  */
  updatePaymentRequestStatus: PaymentRequest;
  updateSpec: Spec;
  updateSubmission: Submission;
  updateTask: Task;
  updateTaskReview: TaskReview;
  /**  Updates the session user  */
  updateUser: User;
  verifyPaymentMethod: PaymentMethod;
};


export type MutationAllocateVirtualAccountArgs = {
  paymentMethodId: Scalars['ID'];
};


export type MutationConfirmAccountArgs = {
  token: Scalars['JWT'];
};


export type MutationCreateChannelArgs = {
  input: CreateChannelInput;
};


export type MutationCreateChatAccountArgs = {
  input: CreateChatAccountInput;
};


export type MutationCreateCustomTaskArgs = {
  input: CreateCustomTaskInput;
};


export type MutationCreateIncomingPaymentArgs = {
  input: CreateIncomingPaymentInput;
};


export type MutationCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationCreateMessageArgs = {
  input: CreateMessageInput;
};


export type MutationCreateMessageHighlightArgs = {
  input: CreateMessageHighlightInput;
};


export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};


export type MutationCreatePaymentMethodArgs = {
  input: CreatePaymentMethodInput;
};


export type MutationCreatePaymentRequestArgs = {
  input: CreatePaymentRequestInput;
};


export type MutationCreatePreOrderArgs = {
  input: CreatePreOrderInput;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateSubmissionArgs = {
  input: CreateSubmissionInput;
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


export type MutationCreateTaskReviewArgs = {
  input: CreateTaskReviewInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateVerificationPaymentArgs = {
  input: CreateVerificationPaymentInput;
};


export type MutationInviteNewUserArgs = {
  input: InviteNewUserInput;
};


export type MutationInviteNewUserToTaskArgs = {
  input: InviteNewUserToTaskInput;
};


export type MutationInviteUserArgs = {
  input: InviteUserInput;
};


export type MutationPlaidCreateLinkTokenArgs = {
  input?: InputMaybe<PlaidCreateLinkTokenInput>;
};


export type MutationReceiveMessageArgs = {
  input: ReceiveMessageInput;
};


export type MutationReplaceSubmissionFieldFileArgs = {
  input: ReplaceSubmissionFieldFileInput;
};


export type MutationRequestResetPasswordArgs = {
  email: Scalars['Email'];
};


export type MutationRequestSignUpArgs = {
  input: RequestSignUpInput;
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: SignUpInput;
};


export type MutationSimulateWireArgs = {
  input: SimulateWireInput;
};


export type MutationStarOrganizationArgs = {
  input: StarOrganizationInput;
};


export type MutationTagMessageHighlightToSpecArgs = {
  input: TagMessageHighlightToSpecInput;
};


export type MutationUpdateChannelArgs = {
  input: UpdateChannelInput;
};


export type MutationUpdateChatAccountArgs = {
  input: UpdateChatAccountInput;
};


export type MutationUpdateFormArgs = {
  input: UpdateFormInput;
};


export type MutationUpdateIncomingPaymentArgs = {
  input: UpdateIncomingPaymentInput;
};


export type MutationUpdateMessageReceiptStatusArgs = {
  input: UpdateMessageReceiptStatusInput;
};


export type MutationUpdateMessageStatusArgs = {
  input: UpdateMessageStatusInput;
};


export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};


export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput;
};


export type MutationUpdatePaymentRequestArgs = {
  input: UpdatePaymentRequestInput;
};


export type MutationUpdatePaymentRequestStatusArgs = {
  input: UpdatePaymentRequestStatusInput;
};


export type MutationUpdateSpecArgs = {
  input: UpdateSpecInput;
};


export type MutationUpdateSubmissionArgs = {
  input: UpdateSubmissionInput;
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


export type MutationUpdateTaskReviewArgs = {
  input: UpdateTaskReviewInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationVerifyPaymentMethodArgs = {
  input: VerifyPaymentMethodInput;
};

export type Node = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type NodeState = Node & {
  __typename?: 'NodeState';
  createdAt: Scalars['DateTime'];
  events: EventsPayload;
  id: Scalars['ID'];
  order?: Maybe<Order>;
  /**  The Merchant org this belongs to (either directly, via an Order or a Product)  */
  org: Organization;
  /**  At all times, exactly one of the 3 props below will not be null  */
  organization?: Maybe<Organization>;
  product?: Maybe<Product>;
  specs: Array<Spec>;
  /**  The list of tasks under this NodeState, regardless of workflow, with codes filter  */
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime'];
  workflows: Array<Workflow>;
};


export type NodeStateEventsArgs = {
  input?: InputMaybe<NodeStateEventsInput>;
};


export type NodeStateTasksArgs = {
  input?: InputMaybe<TasksInput>;
};

export type NodeStateEventsInput = {
  page?: InputMaybe<PageInput>;
  /**  Which event types to include in the response  */
  types?: InputMaybe<Array<EventType>>;
};

export enum NotificationCategory {
  Account = 'Account',
  Messaging = 'Messaging',
  Order = 'Order',
  Organization = 'Organization',
  Payment = 'Payment',
  Product = 'Product',
  Task = 'Task'
}

export type Order = Node & {
  __typename?: 'Order';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['NonEmptyString']>;
  org: Organization;
  products: Array<Product>;
  state: NodeState;
  updatedAt: Scalars['DateTime'];
};

export enum OrderColumn {
  CreatedAt = 'CreatedAt',
  Name = 'Name',
  UpdatedAt = 'UpdatedAt'
}

export type OrderInput = {
  column: OrderColumn;
  /**  Defaults to false -> asc  */
  isDescending?: InputMaybe<Scalars['Boolean']>;
};

export type Organization = Node & {
  __typename?: 'Organization';
  addresses: Array<Address>;
  /**  Where this org is the context  */
  channels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** @deprecated Use starredBy instead */
  isStarredByMe: Scalars['Boolean'];
  kanmonConnectToken?: Maybe<Scalars['NonEmptyString']>;
  kind: OrganizationKind;
  /**  Used in command center, superadmin only  */
  lastLoginAt?: Maybe<Scalars['DateTime']>;
  manager: User;
  members: Array<Membership>;
  /**  Whose members are part of  */
  membersChannels: ChannelsPayload;
  myMembership?: Maybe<Membership>;
  name: Scalars['NonEmptyString'];
  orders: Array<Order>;
  paymentMethods: Array<PaymentMethod>;
  /**  PaymentRequests to be paid by this org  */
  paymentRequests: Array<PaymentRequest>;
  paymentsDone: Array<Payment>;
  paymentsReceived: Array<Payment>;
  starredBy?: Maybe<User>;
  state: NodeState;
  /**  Tasks that are assigned to this org, used when viewing a vendor org  */
  tasks: Array<Task>;
  updatedAt: Scalars['DateTime'];
  virtualAccount: PaymentMethod;
};


export type OrganizationMembersChannelsArgs = {
  input?: InputMaybe<OrganizationMembersChannelsInput>;
};


export type OrganizationTasksArgs = {
  input?: InputMaybe<TasksInput>;
};

export type OrganizationInput = {
  kind: OrganizationKind;
  name: Scalars['NonEmptyString'];
  title?: InputMaybe<Scalars['NonEmptyString']>;
};

export enum OrganizationKind {
  Affiliate = 'Affiliate',
  Management = 'Management',
  Merchant = 'Merchant',
  Service = 'Service',
  Trading = 'Trading',
  Vendor = 'Vendor'
}

export type OrganizationMembersChannelsInput = {
  page?: InputMaybe<PageInput>;
};

export type OrganizationSubscriptionPayload = PaymentRequest;

export type OrganizationsInput = {
  assigneeIds?: InputMaybe<Array<Scalars['ID']>>;
  dealStatus?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  isHighPriority?: InputMaybe<Scalars['Boolean']>;
  /**  If true, only starred orgs are included, otherwise ignored  */
  isStarred?: InputMaybe<Scalars['Boolean']>;
  /**  All those below are Superadmin only  */
  isStarredByMe?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<Array<OrganizationKind>>;
  /**  use for financeNotes  */
  notes?: InputMaybe<Scalars['NonEmptyString']>;
  order?: InputMaybe<OrderInput>;
  page?: InputMaybe<PageInput>;
  search?: InputMaybe<Scalars['NonEmptyString']>;
  sourcingNotes?: InputMaybe<Scalars['NonEmptyString']>;
  sourcingStatus?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  /**  Based on the emails from the users field  */
  watcherEmails?: InputMaybe<Array<Scalars['Email']>>;
};

export type OrganizationsPayload = PagePayload & {
  __typename?: 'OrganizationsPayload';
  nodes: Array<Organization>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['NonEmptyString']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['NonEmptyString']>;
};

export type PageInput = {
  after?: InputMaybe<Scalars['NonEmptyString']>;
  first?: InputMaybe<Scalars['PositiveInt']>;
  last?: InputMaybe<Scalars['PositiveInt']>;
  offset?: InputMaybe<Scalars['NonNegativeInt']>;
};

/**  To be implemented by all responses with lists  */
export type PagePayload = {
  nodes: Array<Node>;
  pageInfo: PageInfo;
};

export type Payment = Node & {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['NonEmptyString']>;
  from?: Maybe<PaymentMethod>;
  id: Scalars['ID'];
  identifier: Scalars['NonEmptyString'];
  paymentRequest?: Maybe<PaymentRequest>;
  status: PaymentStatus;
  to: PaymentMethod;
  type: PaymentType;
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethod = Node & {
  __typename?: 'PaymentMethod';
  /**  The net balance, try to infer from Payments instead  */
  balance: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  /**  Available for some, undefined otherwise  */
  details?: Maybe<PaymentMethodDetails>;
  id: Scalars['ID'];
  identifier: Scalars['NonEmptyString'];
  org: Organization;
  /**  Payment requests to be received on this payment method  */
  paymentRequests: Array<PaymentRequest>;
  paymentsDone: Array<Payment>;
  paymentsReceived: Array<Payment>;
  status: PaymentMethodStatus;
  type: PaymentMethodType;
  updatedAt: Scalars['DateTime'];
};

export type PaymentMethodDetails = {
  __typename?: 'PaymentMethodDetails';
  accountName?: Maybe<Scalars['NonEmptyString']>;
  /**  Can be an IBAN or standard account number  */
  accountNumber: Scalars['NonEmptyString'];
  address?: Maybe<BasicAddress>;
  routingNumber: Scalars['NonEmptyString'];
  routingNumberType: RoutingNumberType;
};

export enum PaymentMethodStatus {
  Failed = 'Failed',
  Pending = 'Pending',
  Unverified = 'Unverified',
  Verified = 'Verified'
}

export enum PaymentMethodType {
  CreditCard = 'CreditCard',
  ExternalAccount = 'ExternalAccount',
  InternalAccount = 'InternalAccount',
  PlaidAccount = 'PlaidAccount',
  VirtualAccount = 'VirtualAccount'
}

export type PaymentRequest = Node & {
  __typename?: 'PaymentRequest';
  channel?: Maybe<Channel>;
  createdAt: Scalars['DateTime'];
  /**  The user that created the payment request  */
  creator: User;
  dueAt: Scalars['DateTime'];
  /**  A percentual fee added to the subTotal  */
  fee: Scalars['NonNegativeFloat'];
  id: Scalars['ID'];
  lineItems: Array<LineItem>;
  memo?: Maybe<Scalars['NonEmptyString']>;
  /**  The organization that should pay this  */
  org: Organization;
  /**  The payment method of the organization that gets paid  */
  paymentMethod: PaymentMethod;
  /** @deprecated No longer used */
  paymentOptions: Array<PaymentMethodType>;
  payments: Array<Payment>;
  reference: Scalars['NonEmptyString'];
  status: PaymentRequestStatus;
  stripeId?: Maybe<Scalars['ID']>;
  /**  Before tax or fee is applied  */
  subTotal: Scalars['PositiveFloat'];
  /**  A flat tax added to the subTotal  */
  tax: Scalars['NonNegativeFloat'];
  total: Scalars['PositiveFloat'];
  updatedAt: Scalars['DateTime'];
  /** @deprecated Use creator instead */
  user: User;
  versions: Array<PaymentRequestVersion>;
};

export enum PaymentRequestStatus {
  Approved = 'Approved',
  Delivered = 'Delivered',
  Draft = 'Draft',
  Paid = 'Paid',
  Pending = 'Pending',
  Posted = 'Posted',
  Rejected = 'Rejected',
  Resubmit = 'Resubmit',
  Uncollectible = 'Uncollectible',
  Unpaid = 'Unpaid',
  Void = 'Void'
}

export type PaymentRequestVersion = Node & {
  __typename?: 'PaymentRequestVersion';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: PaymentRequestStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export enum PaymentStatus {
  Approved = 'Approved',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
  Denied = 'Denied',
  Failed = 'Failed',
  NeedsApproval = 'NeedsApproval',
  Processing = 'Processing',
  Returned = 'Returned',
  Reversed = 'Reversed',
  Sent = 'Sent',
  /** This status is ours and used on creation, the rest are from MT */
  Tentative = 'Tentative'
}

export enum PaymentType {
  Ach = 'Ach',
  Unknown = 'Unknown',
  Virtual = 'Virtual',
  Wire = 'Wire'
}

export type PlaidCreateLinkTokenInput = {
  country?: InputMaybe<Scalars['Country']>;
};

export type Product = Node & {
  __typename?: 'Product';
  channels: Array<Channel>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** An image file submitted in productFiles */
  image?: Maybe<File>;
  /** The value submitted as productName */
  name?: Maybe<Scalars['NonEmptyString']>;
  order: Order;
  providers: Array<Provider>;
  state: NodeState;
  updatedAt: Scalars['DateTime'];
};

export type ProductsInput = {
  order?: InputMaybe<OrderInput>;
  page?: InputMaybe<PageInput>;
  search?: InputMaybe<Scalars['NonEmptyString']>;
};

export type ProductsPayload = PagePayload & {
  __typename?: 'ProductsPayload';
  nodes: Array<Product>;
  pageInfo: PageInfo;
};

export type Provider = {
  __typename?: 'Provider';
  org: Organization;
  source?: Maybe<Task>;
  status: ProviderStatus;
  type: ProviderType;
  user: User;
};

export enum ProviderStatus {
  Accepted = 'Accepted',
  Prospective = 'Prospective'
}

export enum ProviderType {
  Compliance = 'Compliance',
  Designer = 'Designer',
  Logistics = 'Logistics',
  Supplier = 'Supplier'
}

export type Query = {
  __typename?: 'Query';
  catalog: FormsPayload;
  channel: Channel;
  form: Form;
  invoice: Invoice;
  isEmailAvailable: SuccessPayload;
  managementOrganization: Organization;
  me?: Maybe<User>;
  messages: MessagesPayload;
  /** @deprecated Use messages instead */
  messagesByUsers: MessagesPayload;
  /** @deprecated Not supported yet */
  node?: Maybe<Node>;
  nodeState: NodeState;
  organization: Organization;
  organizations: OrganizationsPayload;
  paymentMethod: PaymentMethod;
  paymentRequest: PaymentRequest;
  product: Product;
  products: ProductsPayload;
  spec: Spec;
  statics: Statics;
  submission: Submission;
  task: Task;
  taskTemplates: TaskTemplates;
  tasks?: Maybe<TasksPayload>;
  user: User;
  userByEmail?: Maybe<User>;
  users: UsersPayload;
};


export type QueryCatalogArgs = {
  input: CatalogInput;
};


export type QueryChannelArgs = {
  channelId: Scalars['ID'];
};


export type QueryFormArgs = {
  formId: Scalars['ID'];
};


export type QueryInvoiceArgs = {
  invoiceId: Scalars['ID'];
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['Email'];
};


export type QueryMessagesArgs = {
  input: MessagesInput;
};


export type QueryMessagesByUsersArgs = {
  input: MessagesByUsersInput;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};


export type QueryNodeStateArgs = {
  stateId: Scalars['ID'];
};


export type QueryOrganizationArgs = {
  orgId: Scalars['ID'];
};


export type QueryOrganizationsArgs = {
  input?: InputMaybe<OrganizationsInput>;
};


export type QueryPaymentMethodArgs = {
  paymentMethodId: Scalars['ID'];
};


export type QueryPaymentRequestArgs = {
  paymentRequestId: Scalars['ID'];
};


export type QueryProductArgs = {
  productId: Scalars['ID'];
};


export type QueryProductsArgs = {
  input?: InputMaybe<ProductsInput>;
};


export type QuerySpecArgs = {
  specId: Scalars['ID'];
};


export type QuerySubmissionArgs = {
  submissionId: Scalars['ID'];
};


export type QueryTaskArgs = {
  taskId: Scalars['ID'];
};


export type QueryTasksArgs = {
  input?: InputMaybe<TasksInput>;
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['Email'];
};


export type QueryUsersArgs = {
  input?: InputMaybe<UsersInput>;
};

/**  The type of SubmissionField.value when the type is Quote  */
export type QuoteFieldValue = {
  /**  One from the list of statics.countries (US, CB, IN, etc.)  */
  countryOfOrigin?: InputMaybe<Scalars['Country']>;
  /**  This should be set by the FE but API will set for now if missing  */
  createdAt: Scalars['DateTime'];
  /**  How many days it takes to manufacture the product  */
  daysToFulfillment?: InputMaybe<Scalars['PositiveFloat']>;
  /**  This is auto-generated by the API  */
  id?: InputMaybe<Scalars['ID']>;
  /**  Maximum quantity, if any  */
  max?: InputMaybe<Scalars['PositiveFloat']>;
  /**  Minimum quantity  */
  min: Scalars['PositiveFloat'];
  /**  Free-form text label  */
  specs?: InputMaybe<Scalars['NonEmptyString']>;
  /**  One from the list of statics.terms (CFR, CIF, FOB, etc.)  */
  terms: Scalars['NonEmptyString'];
  /**  One from the list of statics.quoteUnits (pcs, units, sets, etc.)  */
  unit: Scalars['NonEmptyString'];
  unitPrice: Scalars['PositiveFloat'];
  updatedAt: Scalars['DateTime'];
};

export type ReceiveMessageInput = {
  channelId?: InputMaybe<Scalars['ID']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  files?: InputMaybe<Array<Scalars['URL']>>;
  foreignId?: InputMaybe<Scalars['String']>;
  from: Scalars['NonEmptyString'];
  fullText?: InputMaybe<Scalars['String']>;
  service: ChatService;
  subject?: InputMaybe<Scalars['NonEmptyString']>;
  /**  Can be sent empty when sending files  */
  text: Scalars['String'];
  to?: InputMaybe<Array<Scalars['NonEmptyString']>>;
};

export type ReplaceSubmissionFieldFileInput = {
  submissionFieldId: Scalars['ID'];
  url: Scalars['URL'];
};

export type RequestSignUpInput = {
  email: Scalars['Email'];
  referralCode?: InputMaybe<Scalars['NonEmptyString']>;
};

export enum RoutingNumberType {
  Aba = 'Aba',
  Bsb = 'Bsb',
  Cnaps = 'Cnaps',
  Cpa = 'Cpa',
  Ifsc = 'Ifsc',
  SortCode = 'SortCode',
  Swift = 'Swift'
}

export type SignInInput = {
  email: Scalars['Email'];
  password: Scalars['NonEmptyString'];
};

export type SignUpInput = {
  /**  It must include either an email or a token  */
  email?: InputMaybe<Scalars['Email']>;
  firstName: Scalars['NonEmptyString'];
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  organization?: InputMaybe<OrganizationInput>;
  password: Scalars['NonEmptyString'];
  phone?: InputMaybe<Scalars['Phone']>;
  referralCode?: InputMaybe<Scalars['NonEmptyString']>;
  smsNumber?: InputMaybe<Scalars['Phone']>;
  token?: InputMaybe<Scalars['JWT']>;
  whatsappNumber?: InputMaybe<Scalars['Phone']>;
};

export type SimulateWireInput = {
  /**  The payment method that will pay  */
  paymentMethodId: Scalars['ID'];
  paymentRequestId: Scalars['ID'];
};

export type Spec = Node & {
  __typename?: 'Spec';
  createdAt: Scalars['DateTime'];
  /**  SubmissionFields that were tagged to this Spec  */
  fields: Array<SubmissionField>;
  /**  Message highlights that were tagged to this Spec  */
  highlights: Array<MessageHighlight>;
  id: Scalars['ID'];
  importance: Importance;
  /** @deprecated Use task's (approved) reviews / reviewers instead */
  isApproved: Scalars['Boolean'];
  /**  The task belonging to the latest field that was tagged to this Spec  */
  task?: Maybe<Task>;
  template: FormField;
  updatedAt: Scalars['DateTime'];
  user: User;
  value?: Maybe<Scalars['Json']>;
};

export type StarOrganizationInput = {
  isStarred: Scalars['Boolean'];
  orgId: Scalars['ID'];
};

export type Statics = {
  __typename?: 'Statics';
  companyRelationships: Array<ListItem>;
  countries: Array<ListItem>;
  formFields: Array<FormField>;
  months: Array<ListItem>;
  productCategories: Array<ListItem>;
  quoteUnits: Array<ListItem>;
  terms: Array<ListItem>;
  workflow: WorkflowTemplate;
};


export type StaticsWorkflowArgs = {
  workflowCode: Scalars['ID'];
};

export type Submission = Node & {
  __typename?: 'Submission';
  createdAt: Scalars['DateTime'];
  fields: Array<SubmissionField>;
  form: Form;
  id: Scalars['ID'];
  isDraft: Scalars['Boolean'];
  org: Organization;
  updatedAt: Scalars['DateTime'];
  user: User;
  versions: Array<SubmissionVersion>;
};

export type SubmissionField = Node & {
  __typename?: 'SubmissionField';
  code: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  field?: Maybe<FormField>;
  id: Scalars['ID'];
  submission: Submission;
  tag?: Maybe<SubmissionFieldTag>;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['Json']>;
};

export type SubmissionFieldInput = {
  /**  The FormField.id for this field  */
  code: Scalars['ID'];
  tag?: InputMaybe<SubmissionFieldTagInput>;
  value: Scalars['Json'];
};

export type SubmissionFieldTag = {
  __typename?: 'SubmissionFieldTag';
  file: Scalars['URL'];
  x?: Maybe<Scalars['NonNegativeFloat']>;
  y?: Maybe<Scalars['NonNegativeFloat']>;
};

export type SubmissionFieldTagInput = {
  file: Scalars['URL'];
  x?: InputMaybe<Scalars['NonNegativeFloat']>;
  y?: InputMaybe<Scalars['NonNegativeFloat']>;
};

export type SubmissionFieldVersion = Node & {
  __typename?: 'SubmissionFieldVersion';
  createdAt: Scalars['DateTime'];
  field: SubmissionField;
  id: Scalars['ID'];
  tag?: Maybe<SubmissionFieldTag>;
  updatedAt: Scalars['DateTime'];
  value?: Maybe<Scalars['Json']>;
};

export type SubmissionVersion = Node & {
  __typename?: 'SubmissionVersion';
  createdAt: Scalars['DateTime'];
  fields: Array<SubmissionFieldVersion>;
  id: Scalars['ID'];
  reason?: Maybe<Scalars['NonEmptyString']>;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type Subscription = {
  __typename?: 'Subscription';
  /**  Emits any new Message that is sent to the given channel and the channel itself  */
  channel: ChannelSubscriptionPayload;
  /**  Emits new Events created for the given org  */
  organization: OrganizationSubscriptionPayload;
};


export type SubscriptionChannelArgs = {
  channelId: Scalars['ID'];
};


export type SubscriptionOrganizationArgs = {
  orgId: Scalars['ID'];
};

export type SuccessPayload = {
  __typename?: 'SuccessPayload';
  error?: Maybe<ErrorCode>;
};

export type TagMessageHighlightToSpecInput = {
  /**  The FormField.code  */
  code: Scalars['ID'];
  messageHighlightId: Scalars['ID'];
  stateId: Scalars['ID'];
  /**  The value that is extracted from the message  */
  value?: InputMaybe<Scalars['Json']>;
};

export type Task = Node & {
  __typename?: 'Task';
  /**  Used when status=Archived  */
  archiveReason?: Maybe<Scalars['NonEmptyString']>;
  assignedBy: User;
  channel?: Maybe<Channel>;
  createdAt: Scalars['DateTime'];
  creator: User;
  description?: Maybe<Scalars['String']>;
  dueAt?: Maybe<Scalars['DateTime']>;
  form?: Maybe<Form>;
  id: Scalars['ID'];
  /**  Shortened link to the task, including a session token, only for superadmins  */
  link: Scalars['URL'];
  name: Scalars['NonEmptyString'];
  /**  The assigned org  */
  org: Organization;
  /**  Available if this task is a child of another  */
  parent?: Maybe<Task>;
  reviewers: Array<User>;
  reviews: Array<TaskReview>;
  state: NodeState;
  status: TaskStatus;
  /**  The submission from its form, that matches the org  */
  submission?: Maybe<Submission>;
  template?: Maybe<TaskTemplate>;
  updatedAt: Scalars['DateTime'];
  /**  The assigned user  */
  user: User;
  workflowCode: Scalars['NonEmptyString'];
};

export enum TaskCodes {
  AddPaymentMethod = 'addPaymentMethod',
  BrandingDesign = 'brandingDesign',
  ChooseEstimate = 'chooseEstimate',
  ClientBrief = 'clientBrief',
  ClientBrief2 = 'clientBrief2',
  CreateFinalQuote = 'createFinalQuote',
  CreatePreOrder = 'createPreOrder',
  CreateProduct = 'createProduct',
  CustomDesignTask = 'customDesignTask',
  DefineSourcingInfo = 'defineSourcingInfo',
  KanmonOnboarding = 'kanmonOnboarding',
  MerchantEstimate = 'merchantEstimate',
  OrgReview = 'orgReview',
  PackagingDesign = 'packagingDesign',
  PrepareVendorEstimate = 'prepareVendorEstimate',
  ProductStatus = 'productStatus',
  ProvideEstimate = 'provideEstimate',
  ReceiveVendorEstimates = 'receiveVendorEstimates',
  ReviewFinalQuote = 'reviewFinalQuote',
  ReviewPreOrders = 'reviewPreOrders',
  SampleDesign = 'sampleDesign',
  SendMicroDeposit = 'sendMicroDeposit',
  ServiceBrief = 'serviceBrief',
  ServiceCompanyDetails = 'serviceCompanyDetails',
  ServiceOperatingProfile = 'serviceOperatingProfile',
  ServiceProduction = 'serviceProduction',
  Submit3dMockup = 'submit3dMockup',
  Submit3dModel = 'submit3dModel',
  SubmitArtwork = 'submitArtwork',
  SubmitBillOfMaterials = 'submitBillOfMaterials',
  SubmitBrandingGuidelines = 'submitBrandingGuidelines',
  SubmitColorways = 'submitColorways',
  SubmitComponentsListing = 'submitComponentsListing',
  SubmitDieline = 'submitDieline',
  SubmitLabel = 'submitLabel',
  SubmitLogo = 'submitLogo',
  SubmitPaymentInformation = 'submitPaymentInformation',
  SubmitPreProductionSample = 'submitPreProductionSample',
  SubmitPrototypeSample = 'submitPrototypeSample',
  SubmitSizeChart = 'submitSizeChart',
  SubmitTechnicalDrawing = 'submitTechnicalDrawing',
  SubmitTopSample = 'submitTopSample',
  TechnicalDesign = 'technicalDesign',
  TechpackDesign = 'techpackDesign',
  UploadUnsignedContract = 'uploadUnsignedContract',
  VendorBrief2 = 'vendorBrief2',
  VendorCompliance = 'vendorCompliance',
  VendorEstimate = 'vendorEstimate',
  VendorFactory = 'vendorFactory',
  VendorQualityAssurance = 'vendorQualityAssurance',
  VendorSubContractor = 'vendorSubContractor',
  VendorTradeReference = 'vendorTradeReference'
}

export enum TaskCreationType {
  Automatic = 'Automatic',
  Manual = 'Manual',
  Single = 'Single'
}

export type TaskReview = Node & {
  __typename?: 'TaskReview';
  comment?: Maybe<Scalars['NonEmptyString']>;
  createdAt: Scalars['DateTime'];
  fields: Array<TaskReviewField>;
  id: Scalars['ID'];
  status: TaskReviewStatus;
  updatedAt: Scalars['DateTime'];
  user: User;
};

export type TaskReviewField = Node & {
  __typename?: 'TaskReviewField';
  code: Scalars['NonEmptyString'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  status: TaskReviewStatus;
  updatedAt: Scalars['DateTime'];
  /**  An optional suggested value  */
  value?: Maybe<Scalars['Json']>;
};

export type TaskReviewFieldInput = {
  code: Scalars['NonEmptyString'];
  status: TaskReviewStatus;
  value?: InputMaybe<Scalars['Json']>;
};

export enum TaskReviewStatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export enum TaskStatus {
  Archived = 'Archived',
  Blocked = 'Blocked',
  Completed = 'Completed',
  InProgress = 'InProgress',
  InReview = 'InReview',
  Skipped = 'Skipped',
  ToDo = 'ToDo'
}

export type TaskTemplate = {
  __typename?: 'TaskTemplate';
  /**  If users can invite others to submit  */
  allowsInviting: Scalars['Boolean'];
  assignTo: OrganizationKind;
  code: Scalars['ID'];
  creationType: TaskCreationType;
  form?: Maybe<FormTemplate>;
  /**  If true, this task is a guest in the form. We don't allow form fields edition  */
  isGuest: Scalars['Boolean'];
  /**  If the task must be completed manually  */
  isManual: Scalars['Boolean'];
  name: Scalars['NonEmptyString'];
  /**  If available, indicates the code of its future parent  */
  parentCode?: Maybe<Scalars['ID']>;
  workflowCode: Scalars['ID'];
};

export type TaskTemplates = {
  __typename?: 'TaskTemplates';
  /**  Create a new product  */
  createProduct: TaskTemplate;
  /**  Custom  */
  customDesignTask: TaskTemplate;
  /**  Define sourcing information  */
  defineSourcingInfo: TaskTemplate;
  /**  Review this Organization  */
  orgReview: TaskTemplate;
  /**  Log product status  */
  productStatus: TaskTemplate;
};

export type TasksInput = {
  codes?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  order?: InputMaybe<OrderInput>;
  /**  Ignored for all except the tasks query for now  */
  page?: InputMaybe<PageInput>;
  search?: InputMaybe<Scalars['NonEmptyString']>;
  status?: InputMaybe<Array<TaskStatus>>;
  /**  If provided, only tasks assigned to this org user will be matched  */
  userId?: InputMaybe<Scalars['ID']>;
};

export type TasksPayload = PagePayload & {
  __typename?: 'TasksPayload';
  nodes: Array<Task>;
  pageInfo: PageInfo;
};

export type UpdateChannelInput = {
  channelId: Scalars['ID'];
  membersIds?: InputMaybe<Array<Scalars['ID']>>;
  orgId?: InputMaybe<Scalars['ID']>;
  orgIds?: InputMaybe<Array<Scalars['ID']>>;
  paymentRequestId?: InputMaybe<Scalars['ID']>;
  productIds?: InputMaybe<Array<Scalars['ID']>>;
  subject?: InputMaybe<Scalars['NonEmptyString']>;
  taskId?: InputMaybe<Scalars['ID']>;
};

export type UpdateChatAccountInput = {
  accountId: Scalars['ID'];
  identifier?: InputMaybe<Scalars['NonEmptyString']>;
  service?: InputMaybe<ChatService>;
};

export type UpdateFormInput = {
  /**  A list of codes with extra pre-defined fields, overrides previous calls  */
  fieldCodes?: InputMaybe<Array<Scalars['NonEmptyString']>>;
  /**  A list of extra custom fields, overrides previous calls  */
  fields?: InputMaybe<Array<FormFieldInput>>;
  formId: Scalars['ID'];
};

export type UpdateIncomingPaymentInput = {
  foreignId: Scalars['ID'];
  metadata?: InputMaybe<Scalars['Json']>;
  status?: InputMaybe<PaymentStatus>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UpdateMessageReceiptStatusInput = {
  foreignId: Scalars['ID'];
  status: MessageStatus;
};

export type UpdateMessageStatusInput = {
  foreignId: Scalars['ID'];
  messageId: Scalars['ID'];
  status?: InputMaybe<MessageStatus>;
  to: Array<Scalars['NonEmptyString']>;
};

export type UpdateOrderInput = {
  name?: InputMaybe<Scalars['NonEmptyString']>;
  orderId: Scalars['ID'];
};

export type UpdateOrganizationInput = {
  isStarred?: InputMaybe<Scalars['Boolean']>;
  kind?: InputMaybe<OrganizationKind>;
  name?: InputMaybe<Scalars['NonEmptyString']>;
  orgId: Scalars['ID'];
};

export type UpdatePaymentInput = {
  paymentId: Scalars['ID'];
  paymentRequestId?: InputMaybe<Scalars['ID']>;
};

export type UpdatePaymentMethodInput = {
  isDeleted: Scalars['Boolean'];
  paymentMethodId: Scalars['ID'];
};

export type UpdatePaymentRequestInput = {
  paymentRequestId: Scalars['ID'];
  status?: InputMaybe<PaymentRequestStatus>;
};

export type UpdatePaymentRequestStatusInput = {
  status: PaymentRequestStatus;
  stripeId: Scalars['ID'];
};

export type UpdateSpecInput = {
  importance?: InputMaybe<Importance>;
  specId: Scalars['ID'];
};

export type UpdateSubmissionInput = {
  fields: Array<SubmissionFieldInput>;
  isDraft?: InputMaybe<Scalars['Boolean']>;
  reason?: InputMaybe<Scalars['NonEmptyString']>;
  submissionId: Scalars['ID'];
};

export type UpdateTaskInput = {
  /**  Should be provided when status=Archived  */
  archiveReason?: InputMaybe<Scalars['NonEmptyString']>;
  description?: InputMaybe<Scalars['String']>;
  dueAt?: InputMaybe<Scalars['DateTime']>;
  name?: InputMaybe<Scalars['NonEmptyString']>;
  reviewerIds?: InputMaybe<Array<Scalars['ID']>>;
  status?: InputMaybe<TaskStatus>;
  taskId: Scalars['ID'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type UpdateTaskReviewInput = {
  comment?: InputMaybe<Scalars['NonEmptyString']>;
  fields?: InputMaybe<Array<TaskReviewFieldInput>>;
  status?: InputMaybe<TaskReviewStatus>;
  taskReviewId: Scalars['ID'];
};

export type UpdateUserInput = {
  firstName?: InputMaybe<Scalars['NonEmptyString']>;
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  password?: InputMaybe<Scalars['NonEmptyString']>;
  phone?: InputMaybe<Scalars['Phone']>;
  preferredAccountId?: InputMaybe<Scalars['ID']>;
  unsubscribedNotificationCategories?: InputMaybe<Array<NotificationCategory>>;
  /**  Defaults to the session user, only superadmins can change other users  */
  userId?: InputMaybe<Scalars['ID']>;
};

/**  The type of SubmissionField.value when the type is Url or File  */
export type UrlFieldValue = {
  text?: InputMaybe<Scalars['NonEmptyString']>;
  url: Scalars['URL'];
};

export type User = Node & {
  __typename?: 'User';
  accounts: Array<ChatAccount>;
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['Email']>;
  firstName: Scalars['NonEmptyString'];
  id: Scalars['ID'];
  isConfirmed: Scalars['Boolean'];
  isSuperadmin: Scalars['Boolean'];
  lastName?: Maybe<Scalars['NonEmptyString']>;
  memberships: Array<Membership>;
  /**  The generated full (first+last) name  */
  name: Scalars['NonEmptyString'];
  phone?: Maybe<Scalars['Phone']>;
  preferredAccount?: Maybe<ChatAccount>;
  /**  Tasks that have been assigned TO this user  */
  tasks: Array<Task>;
  /**  Tasks that have been assigned BY this user  */
  tasksAssigned: Array<Task>;
  /**  A fresh JWT for the user  */
  token: Scalars['JWT'];
  unsubscribedNotificationCategories?: Maybe<Array<NotificationCategory>>;
  updatedAt: Scalars['DateTime'];
};


export type UserTasksArgs = {
  input?: InputMaybe<TasksInput>;
};

export enum UserRole {
  Admin = 'Admin',
  Member = 'Member'
}

export type UsersInput = {
  emails?: InputMaybe<Array<Scalars['Email']>>;
  order?: InputMaybe<OrderInput>;
  page?: InputMaybe<PageInput>;
  search?: InputMaybe<Scalars['NonEmptyString']>;
};

export type UsersPayload = PagePayload & {
  __typename?: 'UsersPayload';
  nodes: Array<User>;
  pageInfo: PageInfo;
};

export type VerifyPaymentMethodInput = {
  /**  The amounts received in micro-deposits  */
  amounts: Array<Scalars['NonNegativeFloat']>;
  paymentMethodId: Scalars['ID'];
};

export type Workflow = {
  __typename?: 'Workflow';
  /** @deprecated Use template.code instead */
  code: Scalars['ID'];
  /**  These are the tasks (template) that can be created in the workflow  */
  creatableTasks: Array<TaskTemplate>;
  /** @deprecated Use template.name instead */
  name: Scalars['NonEmptyString'];
  /**  TODO: Maybe this logic needs to be implemented in the client  */
  status: WorkflowStatus;
  tasks: Array<Task>;
  template: WorkflowTemplate;
};

export enum WorkflowStatus {
  Completed = 'Completed',
  InProgress = 'InProgress',
  ToDo = 'ToDo'
}

export type WorkflowTemplate = {
  __typename?: 'WorkflowTemplate';
  code: Scalars['ID'];
  isLinear: Scalars['Boolean'];
  name: Scalars['NonEmptyString'];
  tasks: Array<TaskTemplate>;
};

export type RequestSignUpMutationMutationVariables = Exact<{
  email: Scalars['Email'];
}>;


export type RequestSignUpMutationMutation = { __typename?: 'Mutation', requestSignUp: { __typename?: 'SuccessPayload', error?: ErrorCode | null } };

export type SignInMutationMutationVariables = Exact<{
  email: Scalars['Email'];
  password: Scalars['NonEmptyString'];
}>;


export type SignInMutationMutation = { __typename?: 'Mutation', signIn: { __typename?: 'User', token: any } };

export type SignUpMutationMutationVariables = Exact<{
  email?: InputMaybe<Scalars['Email']>;
  password: Scalars['NonEmptyString'];
  firstName: Scalars['NonEmptyString'];
  lastName?: InputMaybe<Scalars['NonEmptyString']>;
  token?: InputMaybe<Scalars['JWT']>;
  organization?: InputMaybe<OrganizationInput>;
}>;


export type SignUpMutationMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', token: any } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me?: { __typename?: 'User', firstName: any, lastName?: any | null, email?: any | null, createdAt: any, memberships: Array<{ __typename?: 'Membership', role: UserRole, org: { __typename?: 'Organization', name: any, kind: OrganizationKind, createdAt: any } }> } | null };


export const RequestSignUpMutationDocument = gql`
    mutation requestSignUpMutation($email: Email!) {
  requestSignUp(input: {email: $email}) {
    error
  }
}
    `;
export type RequestSignUpMutationMutationFn = Apollo.MutationFunction<RequestSignUpMutationMutation, RequestSignUpMutationMutationVariables>;

/**
 * __useRequestSignUpMutationMutation__
 *
 * To run a mutation, you first call `useRequestSignUpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestSignUpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestSignUpMutationMutation, { data, loading, error }] = useRequestSignUpMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestSignUpMutationMutation(baseOptions?: Apollo.MutationHookOptions<RequestSignUpMutationMutation, RequestSignUpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestSignUpMutationMutation, RequestSignUpMutationMutationVariables>(RequestSignUpMutationDocument, options);
      }
export type RequestSignUpMutationMutationHookResult = ReturnType<typeof useRequestSignUpMutationMutation>;
export type RequestSignUpMutationMutationResult = Apollo.MutationResult<RequestSignUpMutationMutation>;
export type RequestSignUpMutationMutationOptions = Apollo.BaseMutationOptions<RequestSignUpMutationMutation, RequestSignUpMutationMutationVariables>;
export const SignInMutationDocument = gql`
    mutation signInMutation($email: Email!, $password: NonEmptyString!) {
  signIn(input: {email: $email, password: $password}) {
    token
  }
}
    `;
export type SignInMutationMutationFn = Apollo.MutationFunction<SignInMutationMutation, SignInMutationMutationVariables>;

/**
 * __useSignInMutationMutation__
 *
 * To run a mutation, you first call `useSignInMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutationMutation, { data, loading, error }] = useSignInMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutationMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutationMutation, SignInMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutationMutation, SignInMutationMutationVariables>(SignInMutationDocument, options);
      }
export type SignInMutationMutationHookResult = ReturnType<typeof useSignInMutationMutation>;
export type SignInMutationMutationResult = Apollo.MutationResult<SignInMutationMutation>;
export type SignInMutationMutationOptions = Apollo.BaseMutationOptions<SignInMutationMutation, SignInMutationMutationVariables>;
export const SignUpMutationDocument = gql`
    mutation SignUpMutation($email: Email, $password: NonEmptyString!, $firstName: NonEmptyString!, $lastName: NonEmptyString, $token: JWT, $organization: OrganizationInput) {
  signUp(
    input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, organization: $organization, token: $token}
  ) {
    token
  }
}
    `;
export type SignUpMutationMutationFn = Apollo.MutationFunction<SignUpMutationMutation, SignUpMutationMutationVariables>;

/**
 * __useSignUpMutationMutation__
 *
 * To run a mutation, you first call `useSignUpMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutationMutation, { data, loading, error }] = useSignUpMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      token: // value for 'token'
 *      organization: // value for 'organization'
 *   },
 * });
 */
export function useSignUpMutationMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutationMutation, SignUpMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutationMutation, SignUpMutationMutationVariables>(SignUpMutationDocument, options);
      }
export type SignUpMutationMutationHookResult = ReturnType<typeof useSignUpMutationMutation>;
export type SignUpMutationMutationResult = Apollo.MutationResult<SignUpMutationMutation>;
export type SignUpMutationMutationOptions = Apollo.BaseMutationOptions<SignUpMutationMutation, SignUpMutationMutationVariables>;
export const UserDocument = gql`
    query User {
  me {
    firstName
    lastName
    email
    createdAt
    memberships {
      org {
        name
        kind
        createdAt
      }
      role
    }
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;