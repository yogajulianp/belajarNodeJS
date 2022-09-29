const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }
  type Product {
    name : String
    quantity: Int
  }
  type Query {
    books: [Book]
    products: [Product]
  }
  type Mutation {
    jumlah(a: Int, b : Int): Int,
    kurang(a: Int, b : Int): Int
  }
`;
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
  ];

const products = [
    {name:'Product 1', quantity: 5},
    {name:'Product 2', quantity: 9},
    {name:'Product 9', quantity: 9}
]


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
      products: () => products,
    },
    Mutation: {
        jumlah: (parent, {a,b}) => {
            return a + b
        },
        kurang: (parent, {a,b}) => {
            return a - b
        }
    }
  };

  const {
    ApolloServerPluginLandingPageLocalDefault
  } = require('apollo-server-core');
  
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.

  // const fs = required('fs');
  // const path = require('path');
  // const typeDefs = await fs.readFileSync("./schema.graphql", "utf8").toString()

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });