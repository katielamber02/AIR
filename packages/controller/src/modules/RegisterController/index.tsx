// import * as React from 'react'

// interface Props {
//   children: (data: {
//     submit: (values: any) => Promise<null>;
//   }) => JSX.Element | null;
// }

// export class RegisterController extends React.PureComponent<Props>{
//   submit = async (values: any) => {
//     console.log('VALUES:', values);
//     return null;
//   };
//   render() {
//     return this.props.children({ submit: this.submit })
//   }
// }



import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import { Register, RegisterVariables } from "../../schemaTypes";

import gql from "graphql-tag";

interface Props {
  children: (data: {
    submit: (values: RegisterVariables) => Promise<null>;
  }) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, Register, RegisterVariables>
  > {
  submit = async (values: RegisterVariables) => {
    // console.log(values);
    const response = await this.props.mutate({
      variables: values
    });

    console.log("____RESPONSE___: ", response);
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}
const registerMutation = gql`
  mutation Register($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<
  Props,
  Register,
  RegisterVariables,
  any
>(registerMutation)(C);
