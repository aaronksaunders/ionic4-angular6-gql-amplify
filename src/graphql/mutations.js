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
      owner
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
      owner
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
      owner
      visibility
    }
  }
`;
export const CreatePicture = gql`
  mutation CreatePicture($input: CreatePictureInput!) {
    createPicture(input: $input) {
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
export const UpdatePicture = gql`
  mutation UpdatePicture($input: UpdatePictureInput!) {
    updatePicture(input: $input) {
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
export const DeletePicture = gql`
  mutation DeletePicture($input: DeletePictureInput!) {
    deletePicture(input: $input) {
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
