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
      }
      nextToken
    }
  }
`;
