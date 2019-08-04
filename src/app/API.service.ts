/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateTourInput = {
  name: string;
  company: string;
  email: string;
  description?: string | null;
};

export enum Visibility {
  public = "public",
  private = "private"
}

export type UpdateTourInput = {
  id: string;
  name?: string | null;
  company?: string | null;
  email?: string | null;
  description?: string | null;
  owner?: string | null;
};

export type DeleteTourInput = {
  id?: string | null;
};

export type CreatePictureInput = {
  name: string;
  owner: string;
  createdAt?: string | null;
};

export type UpdatePictureInput = {
  id: string;
  name?: string | null;
  owner?: string | null;
  createdAt?: string | null;
};

export type DeletePictureInput = {
  id?: string | null;
};

export type ModelTourFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  company?: ModelStringFilterInput | null;
  email?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  owner?: ModelStringFilterInput | null;
  and?: Array<ModelTourFilterInput | null> | null;
  or?: Array<ModelTourFilterInput | null> | null;
  not?: ModelTourFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelPictureFilterInput = {
  id?: ModelIDFilterInput | null;
  name?: ModelStringFilterInput | null;
  owner?: ModelStringFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  and?: Array<ModelPictureFilterInput | null> | null;
  or?: Array<ModelPictureFilterInput | null> | null;
  not?: ModelPictureFilterInput | null;
};

export type CreateTourMutation = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type UpdateTourMutation = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type DeleteTourMutation = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type CreatePictureMutation = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

export type UpdatePictureMutation = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

export type DeletePictureMutation = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

export type GetTourQuery = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type ListToursQuery = {
  __typename: "ModelTourConnection";
  items: Array<{
    __typename: "Tour";
    id: string;
    name: string;
    company: string;
    email: string;
    description: string | null;
    visibility: Visibility | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPictureQuery = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

export type ListPicturesQuery = {
  __typename: "ModelPictureConnection";
  items: Array<{
    __typename: "Picture";
    id: string;
    name: string;
    visibility: Visibility;
    owner: string;
    createdAt: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTourSubscription = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type OnUpdateTourSubscription = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type OnDeleteTourSubscription = {
  __typename: "Tour";
  id: string;
  name: string;
  company: string;
  email: string;
  description: string | null;
  visibility: Visibility | null;
};

export type OnCreatePictureSubscription = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

export type OnUpdatePictureSubscription = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

export type OnDeletePictureSubscription = {
  __typename: "Picture";
  id: string;
  name: string;
  visibility: Visibility;
  owner: string;
  file: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  };
  createdAt: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTour(input: CreateTourInput): Promise<CreateTourMutation> {
    const statement = `mutation CreateTour($input: CreateTourInput!) {
        createTour(input: $input) {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTourMutation>response.data.createTour;
  }
  async UpdateTour(input: UpdateTourInput): Promise<UpdateTourMutation> {
    const statement = `mutation UpdateTour($input: UpdateTourInput!) {
        updateTour(input: $input) {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTourMutation>response.data.updateTour;
  }
  async DeleteTour(input: DeleteTourInput): Promise<DeleteTourMutation> {
    const statement = `mutation DeleteTour($input: DeleteTourInput!) {
        deleteTour(input: $input) {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTourMutation>response.data.deleteTour;
  }
  async CreatePicture(
    input: CreatePictureInput
  ): Promise<CreatePictureMutation> {
    const statement = `mutation CreatePicture($input: CreatePictureInput!) {
        createPicture(input: $input) {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePictureMutation>response.data.createPicture;
  }
  async UpdatePicture(
    input: UpdatePictureInput
  ): Promise<UpdatePictureMutation> {
    const statement = `mutation UpdatePicture($input: UpdatePictureInput!) {
        updatePicture(input: $input) {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePictureMutation>response.data.updatePicture;
  }
  async DeletePicture(
    input: DeletePictureInput
  ): Promise<DeletePictureMutation> {
    const statement = `mutation DeletePicture($input: DeletePictureInput!) {
        deletePicture(input: $input) {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePictureMutation>response.data.deletePicture;
  }
  async GetTour(id: string): Promise<GetTourQuery> {
    const statement = `query GetTour($id: ID!) {
        getTour(id: $id) {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTourQuery>response.data.getTour;
  }
  async ListTours(
    filter?: ModelTourFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListToursQuery> {
    const statement = `query ListTours($filter: ModelTourFilterInput, $limit: Int, $nextToken: String) {
        listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            company
            email
            description
            visibility
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListToursQuery>response.data.listTours;
  }
  async GetPicture(id: string): Promise<GetPictureQuery> {
    const statement = `query GetPicture($id: ID!) {
        getPicture(id: $id) {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPictureQuery>response.data.getPicture;
  }
  async ListPictures(
    filter?: ModelPictureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPicturesQuery> {
    const statement = `query ListPictures($filter: ModelPictureFilterInput, $limit: Int, $nextToken: String) {
        listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            visibility
            owner
            createdAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPicturesQuery>response.data.listPictures;
  }
  OnCreateTourListener: Observable<OnCreateTourSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateTour {
        onCreateTour {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`
    )
  ) as Observable<OnCreateTourSubscription>;

  OnUpdateTourListener: Observable<OnUpdateTourSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTour {
        onUpdateTour {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`
    )
  ) as Observable<OnUpdateTourSubscription>;

  OnDeleteTourListener: Observable<OnDeleteTourSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTour {
        onDeleteTour {
          __typename
          id
          name
          company
          email
          description
          visibility
        }
      }`
    )
  ) as Observable<OnDeleteTourSubscription>;

  OnCreatePictureListener: Observable<
    OnCreatePictureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePicture {
        onCreatePicture {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`
    )
  ) as Observable<OnCreatePictureSubscription>;

  OnUpdatePictureListener: Observable<
    OnUpdatePictureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePicture {
        onUpdatePicture {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`
    )
  ) as Observable<OnUpdatePictureSubscription>;

  OnDeletePictureListener: Observable<
    OnDeletePictureSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePicture {
        onDeletePicture {
          __typename
          id
          name
          visibility
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
        }
      }`
    )
  ) as Observable<OnDeletePictureSubscription>;
}
