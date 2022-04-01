import gql from "graphql-tag"
import graphqlClient from '../../../../apollo'

class UserProvider {
    auth(username, password) {
        return graphqlClient.mutate({
            mutation: gql`
                mutation ($username:String!, $password:String!){
                    auth(username:$username, password:$password){
                        token
                        user{
                            id
                            username
                            firstName
                            email
                            dateJoined
                            groups{
                                id
                                name
                            }
                            isActive
                            lenguage
                            country
                        }
                    }
                }
            `,
            variables: {
                username,
                password
            }
        })
    }
}

export default new UserProvider()