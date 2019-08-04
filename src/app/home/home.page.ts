import { Component } from "@angular/core";

// AWS-AMPLIFY
// https://github.com/aws-amplify/amplify-cli/blob/master/graphql-transform-tutorial.md
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { Auth } from "aws-amplify";

import { APIService } from "../API.service";

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
  imageUrls = [];

  constructor(public api : APIService) {
    async () => (this.currentUser$ = await Auth.currentAuthenticatedUser());

    this.testMutation().then(() => {
      this.doFetchTasks();
    });

    // this.doFetchImages();
  }

  async testMutation() {
    // const { username: owner } = await Auth.currentUserInfo();
    const visibility = "private";
    try {
      debugger;


      let r = await this.api.ListTours();
      console.log(r);
      this.allTours$ = r;

      let r2 = await this.api.CreateTour({
        name: "reina item two",
        company: "reina company " + new Date().getMilliseconds(),
        email: "reina@company.com",
        description: "no desc item two"
        // owner: owner
        // visibility: visibility
      });
      console.log(r2);

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
    // // Simple query
    // // https://github.com/aws-amplify/amplify-js/issues/1237
    // try {
    //   this.allTours$ = ((await API.graphql(
    //     graphqlOperation(listTours)
    //   )) as any).data.listTours;
    // } catch (ee) {
    //   console.log(ee);
    // }
    // console.log(this.allTours$);
  }

  async doFetchImages() {
    try {
      let allImages = await Storage.list("");
      let imagePromise = [];
      allImages.forEach(element => {
        imagePromise.push(Storage.get(element.key));
      });

      this.imageUrls = await Promise.all(imagePromise);

      console.log(this.imageUrls);
    } catch (ee) {
      console.log(ee);
    }
  }

  /**
   *
   */
  doLogin() {
    Auth.signIn("", "")
      .then(user => {
        return Auth.currentAuthenticatedUser();
      })
      .then(userAttrib => {
        this.currentUser$ = userAttrib;
        this.doFetchTasks();

        this.doFetchImages();
      })
      .catch(err => console.log(err));
  }
}
