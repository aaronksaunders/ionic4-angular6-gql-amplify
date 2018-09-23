import { Component } from "@angular/core";

// AWS-AMPLIFY
// https://github.com/aws-amplify/amplify-cli/blob/master/graphql-transform-tutorial.md
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { ListTours } from "../../graphql/queries.js";
import {
  CreateTour,
  CreatePicture,
  CreatePictureInput
} from "../../graphql/mutations.js";
import { print as gqlToString } from "graphql/language";
import { Auth } from "aws-amplify";
import { CognitoUser } from "amazon-cognito-identity-js";

import config from "../../aws-exports";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  allTours$;
  tour$;
  currentUser$ = null;
  input = { file: "" };
  credentials: { email?: string; password?: string } = {};
  imageUrls = [] 

  constructor() {
    async () => (this.currentUser$ = await Auth.currentAuthenticatedUser());
  }

  async testMutation() {
    const { username: owner } = await Auth.currentUserInfo();
    const visibility = "private";
    try {
      this.tour$ = ((await API.graphql(
        graphqlOperation(gqlToString(CreateTour), {
          input: {
            name: "reina item two",
            company: "reina company",
            email: "reina@company.com",
            description: "no desc item two",
            owner: owner
            // visibility: visibility
          }
        })
      )) as any).data.tour;
    } catch (ee) {
      console.log(ee);
    }
  }

  /**
   *
   * @param _event
   */
  async saveFile(_event) {
    console.log(_event);

    const files = _event.detail.target.files;
    debugger;
    const key = `${new Date().getTime()}:${files[0].name}`;
    Storage.put(key, files[0], {
      contentType: files[0].type,
      level: "private"
    })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }

  async saveText() {}

  /**
   *
   */
  async doFetchTasks() {
    // Simple query
    // https://github.com/aws-amplify/amplify-js/issues/1237
    try {
      this.allTours$ = ((await API.graphql(
        graphqlOperation(gqlToString(ListTours))
      )) as any).data.listTours;
    } catch (ee) {
      console.log(ee);
    }
    console.log(this.allTours$);
  }

  async doFetchImages() {

    try {
      let allImages = await Storage.list("");
      let imagePromise = [];
      allImages.forEach(element => {
        imagePromise.push(Storage.get(element.key));
      });

      this.imageUrls = await Promise.all(imagePromise);

      console.log(this.imageUrls );
    } catch (ee) {
      console.log(ee);
    }
  }

  /**
   *
   */
  doLogin() {
    Auth.signIn()
      .then(user => {
        return Auth.currentAuthenticatedUser();
      })
      .then(userAttrib => {
        this.currentUser$ = userAttrib;
        this.doFetchTasks();

        this.doFetchImages();
      })
      .catch(err => console.log(err.message));
  }
}
