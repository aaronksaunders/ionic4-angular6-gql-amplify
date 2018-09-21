// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const CreateTour = gql`
  mutation CreateTour($input: CreateTourInput!) {
    createTour(input: $input) {
      id
      name
      company
      email
      description
      visibility
    }
  }
`;
export const UpdateTour = gql`
  mutation UpdateTour($input: UpdateTourInput!) {
    updateTour(input: $input) {
      id
      name
      company
      email
      description
      visibility
    }
  }
`;
export const DeleteTour = gql`
  mutation DeleteTour($input: DeleteTourInput!) {
    deleteTour(input: $input) {
      id
      name
      company
      email
      description
      visibility
    }
  }
`;
