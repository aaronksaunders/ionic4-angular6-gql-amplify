// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateTour = `subscription OnCreateTour {
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
export const onUpdateTour = `subscription OnUpdateTour {
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
export const onDeleteTour = `subscription OnDeleteTour {
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
export const onCreatePicture = `subscription OnCreatePicture {
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
export const onUpdatePicture = `subscription OnUpdatePicture {
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
export const onDeletePicture = `subscription OnDeletePicture {
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
