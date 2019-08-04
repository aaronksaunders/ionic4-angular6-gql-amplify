// tslint:disable
// this is an auto generated file. This will be overwritten

export const createTour = `mutation CreateTour($input: CreateTourInput!) {
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
export const updateTour = `mutation UpdateTour($input: UpdateTourInput!) {
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
export const deleteTour = `mutation DeleteTour($input: DeleteTourInput!) {
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
export const createPicture = `mutation CreatePicture($input: CreatePictureInput!) {
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
export const updatePicture = `mutation UpdatePicture($input: UpdatePictureInput!) {
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
export const deletePicture = `mutation DeletePicture($input: DeletePictureInput!) {
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
