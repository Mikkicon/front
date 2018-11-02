import React from "react";

import { Route, Redirect } from "react-router-dom";
// class PrivateRoute extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       auth: false
//     };
//   }

//   render() {
//     const { component: COMPonnt, ...props } = this.props;

//     return (
//       <Route
//         {...props}
//         render={props => {
//           if (this.props.yesno === true) {
//           } else {
//           }
//           return (
//             <Redirect
//               to={{ pathname: "/login", state: { from: this.props.path } }}
//             />
//           );
//         }}
//       />
//     );
//   }
// }

export default ({ component: C, props: cProps, ...rest }) => {
  // const redirect = querystring("redirect");
  console.log("cProps.yesno: ", cProps.yesno);
  return (
    <Route
      {...rest}
      render={props =>
        !cProps.yesno ? (
          <C {...props} {...cProps} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: this.props.path } }}
          />
        )
      }
    />
  );
};
