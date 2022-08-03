const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Review {
    _id: ID
    stars: Int
  }

  type Category {
    _id: ID
    name: String
  }
  
  type Product {
    _id: ID
    name: String
    description: String
    images: String
    hightlights: [ String ]
    details: String
    price: Float
    category: Category
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type WishList {
    _id: ID
    products: [Product]
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    wishlist: [WishList]
  }
  type Seller {
    _id: ID
    firstName: String
    lastName: String
    email: String
    products: [Product]
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(productId: ID!): Product
    user: User
    seller: Seller
    order(_id: ID!): Order
    wishlist(_id: ID!): WishList
    checkout(products: [ID]!): Checkout
  }
  type Mutation {
    addReview(_id: ID!, stars: Int!): Review
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateSeller(firstName: String, lastName: String, email: String, password: String): Seller
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
    addToWishList(products: [ID]!): WishList
  }
`;

module.exports = typeDefs;