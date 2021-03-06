/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooks = /* GraphQL */ `
  query GetBooks($id: ID!) {
    getBooks(id: $id) {
      id
      title
      description
      image
      author
      featured
      price
      createdAt
      updatedAt
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBooksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        image
        author
        featured
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
