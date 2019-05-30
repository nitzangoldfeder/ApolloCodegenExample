const { ApolloServer, gql } = require('apollo-server');

const books = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  type Query {
    book(id: String!): Book
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    book: (_, {id}) => books.find(b => b.id === id),
    books: () => books,
  },
};

const server = new ApolloServer({ 
  cors: true,
  typeDefs,
  resolvers,
  playground: true,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
