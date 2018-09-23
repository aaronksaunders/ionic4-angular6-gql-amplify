// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const GetTour = gql`
  query GetTour($id: ID!) {
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
export const ListTours = gql`
  query ListTours(
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
      }
      nextToken
    }
  }
`;
export const GetPicture = gql`
  query GetPicture($id: ID!) {
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
export const ListPictures = gql`
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        createdAt
      }
      nextToken
    }
  }
`;
