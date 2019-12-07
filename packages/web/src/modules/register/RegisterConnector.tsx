import * as React from "react";
import { RegisterView } from "./ui/RegisterView";
import { RegisterController } from "@air/controller";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent {
  dummySubmit = async (values: any) => {
    console.log(values);
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <RegisterView submit={this.dummySubmit} />;
        <RegisterController />;
      </React.Fragment>
    );
  }
}
