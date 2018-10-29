// import React, { Component } from "react";

// import { Route, BrowserRouter, Redirect } from "react-router-dom";
// class PrivateRoute extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       auth: this.props.yesno
//     };
//   }

//   render() {
//     const { component: Component, ...props } = this.props;
//     console.log(this.state.auth);
//     return (
//       <Route
//         {...props}
//         render={props =>
//           this.state.auth && this.state.auth !== undefined ? (
//             <Component {...props} />
//           ) : (
//             <Redirect
//               to={{ pathname: "/login", state: { from: props.location } }}
//             />
//           )
//         }
//       />
//     );
//   }
// }

// export default PrivateRoute;
