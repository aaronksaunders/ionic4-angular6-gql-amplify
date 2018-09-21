/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTourInput = {
  name: string,
  company: string,
  email: string,
  description?: string | null,
};

export type UpdateTourInput = {
  id: string,
  name?: string | null,
  company?: string | null,
  email?: string | null,
  description?: string | null,
};

export type DeleteTourInput = {
  id?: string | null,
};

export type ModelTourFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  company?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelTourFilterInput | null > | null,
  or?: Array< ModelTourFilterInput | null > | null,
  not?: ModelTourFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateTourMutationVariables = {
  input: CreateTourInput,
};

export type CreateTourMutation = {
  createTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};

export type UpdateTourMutationVariables = {
  input: UpdateTourInput,
};

export type UpdateTourMutation = {
  updateTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};

export type DeleteTourMutationVariables = {
  input: DeleteTourInput,
};

export type DeleteTourMutation = {
  deleteTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};

export type GetTourQueryVariables = {
  id: string,
};

export type GetTourQuery = {
  getTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};

export type ListToursQueryVariables = {
  filter?: ModelTourFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListToursQuery = {
  listTours:  {
    __typename: "ModelTourConnection",
    items:  Array< {
      __typename: "Tour",
      id: string,
      name: string,
      company: string,
      email: string,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTourSubscription = {
  onCreateTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};

export type OnUpdateTourSubscription = {
  onUpdateTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};

export type OnDeleteTourSubscription = {
  onDeleteTour:  {
    __typename: "Tour",
    id: string,
    name: string,
    company: string,
    email: string,
    description: string | null,
  } | null,
};
