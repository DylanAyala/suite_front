import gql from "graphql-tag";
import graphqlClient from "../../../../apollo";

class UserProvider {
  auth(username, password) {
    return graphqlClient.mutate({
      mutation: gql`
        mutation {
          auth(input: { username: "admin", password: "123" }) {
            token
            user {
              id
            }
          }
        }
      `,
      variables: {
        username,
        password,
      },
    });
  }
}

export default new UserProvider();
