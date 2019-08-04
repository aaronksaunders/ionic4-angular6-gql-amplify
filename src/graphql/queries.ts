// tslint:disable
// this is an auto generated file. This will be overwritten

export const getTour = `query GetTour($id: ID!) {
  getTour(id: $id) {
    id
    name
    company
    email
    description
    owner
    visibility
  }
}
`;
export const listTours = `query ListTours(
  $filter: ModelTourFilterInput
  $limit: Int
  $nextToken: String
) {
  listTours(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      company
      email
      description
      owner
      visibility
    }
    nextToken
  }
}
`;
export const getPicture = `query GetPicture($id: ID!) {
  getPicture(id: $id) {
    id
    name
    visibility
    owner
    file {
      bucket
      region
      key
    }
    createdAt
  }
}
`;
export const listPictures = `query ListPictures(
  $filter: ModelPictureFilterInput
  $limit: Int
  $nextToken: String
) {
  listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      visibility
      owner
      createdAt
    }
    nextToken
  }
}
`;
