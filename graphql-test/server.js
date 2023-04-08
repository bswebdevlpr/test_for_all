import { ApolloServer, gql } from "apollo-server";

const tweets = [
  {
    id: 1,
    text: "first one",
  },
  {
    id: 2,
    text: "second one",
  },
];

const users = [
  {
    id: 1,
    firstName: "k",
    lastName: "bs",
  },
];

// Query는 REST API의 GET과 비슷하다. Query 내에 정의되면 REST API에서 링크로 접근하는 것처럼 적용된다.
const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
  type Tweet {
    id: ID!
    text: String!
    author: User!
  }
  type Query {
    allUsers: [User!]!
    allTweets: [Tweet!]!
    tweet(id: ID!): Tweet
  }
  type Mutation {
    postTweet(text: String!, userId: ID!): Tweet!
    deleteTweet(id: ID!): Boolean!
  }
`;

const resolvers = {
  Query: {
    allUsers() {
      return users;
    },
    allTweets() {
      return tweets;
    },
    tweet(root, args) {
      console.log(args);
      return null;
    },
  },
  Mutation: {
    postTweet(root, { text, userId }) {
      const newTweet = {
        id: tweets.length + 1,
        text: text,
      };

      tweets.push(newTweet);
      return newTweet;
    },
  },
  User: {
    fullName({ firstName, lastName }) {
      return `${firstName} ${lastName}`;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
