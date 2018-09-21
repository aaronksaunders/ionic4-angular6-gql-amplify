import { Component } from "@angular/core";

// AWS-AMPLIFY
import Amplify, { API, graphqlOperation } from "aws-amplify";
import { ListTours } from "../../graphql/queries.js";
import { print as gqlToString } from 'graphql/language';
import * as Observable from 'zen-observable'
import { first, pluck } from "../../../node_modules/rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  allTours$
  constructor() {
    this.testQuery();
  }

  async testQuery() {
    // Simple query
    // https://github.com/aws-amplify/amplify-js/issues/1237
    this.allTours$ =  (await API.graphql(graphqlOperation(gqlToString(ListTours))) as any).data.listTours;
    console.log(this.allTours$)

  }
}
