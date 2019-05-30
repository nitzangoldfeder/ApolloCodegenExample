import { loader } from 'graphql.macro';

export const bookQuery = loader('./book.graphql');
export const booksQuery = loader('./books.graphql');

