import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Products from "./components/Products";
import User from "./components/User";
import Seller from "./components/Seller";
import Shop from "./components/Shop";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {Route, Routes} from 'react-router-dom';

const httpLink = createHttpLink({
  uri:  'http://localhost:3001/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <Routes>
      <Route path ="/" element={<Home/>} />
      <Route path ="/shop" element={<Shop/>} />
      <Route path ="/user" element={<User/>} />
      <Route path ="/seller" element={<Seller/>} />
      <Route path ="/seller/products" element={<Products/>} />
      <Route path ="/about" element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
