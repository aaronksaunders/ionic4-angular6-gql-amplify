// this is an auto generated file. This will be overwritten
import gql from "graphql-tag";

export const OnCreateTour = gql`
  subscription OnCreateTour {
    onCreateTour {
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
export const OnUpdateTour = gql`
  subscription OnUpdateTour {
    onUpdateTour {
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
export const OnDeleteTour = gql`
  subscription OnDeleteTour {
    onDeleteTour {
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
export const OnCreatePicture = gql`
  subscription OnCreatePicture {
    onCreatePicture {
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
export const OnUpdatePicture = gql`
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const OnDeletePicture = gql`
  subscription OnDeletePicture {
    onDeletePicture {
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
