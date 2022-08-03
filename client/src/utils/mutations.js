import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        images
        hightlights
        details
        price
      }
    }
  }
`;

export const ADD_TO_WISHLIST = gql`
  mutation addToWishList($products: [ID]!) {
    addToWishList(products: $products) {
      products {
        _id
        name
        description
        images
        hightlights
        details
        price
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
      addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
          token
      }
  }
`;