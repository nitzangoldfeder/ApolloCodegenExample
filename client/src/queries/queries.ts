import { gql } from 'apollo-boost';

export const bookQuery = gql`
    query book($id: String!) {
        book(id: $id) {
            id
            title
            author
        }
    }
`;

export const booksQuery = gql`
    query books {
        books {
            id
            title
            author
        }
    }
`;

