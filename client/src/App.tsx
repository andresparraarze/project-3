import About from "./components/About";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import NoMatch from "./components/NoMatch";
import OrderHistory from "./components/OrderHistory";
import WishList from "./components/WishList";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink  } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginform from "./components/Loginform";

const httpLink = createHttpLink({
  uri:  'http://localhost:3001/graphql'
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
    <ApolloProvider client={client}>
      <Router>
    <div>
      <Navbar/>
      {/* <Cart/> */}
      <Routes>
        <Route 
          path="/" 
          element={<Shop/>} 
        />
        <Route 
          path="/about" 
          element={<About/>} 
        />
        <Route 
          path="/product/:id" 
          element={<Products/>} 
        />
        <Route 
          path="/cart" 
          element={<Cart/>} 
        />
        <Route 
          path="/login" 
          element={<Loginform/>} 
        /> 
        <Route 
          path="/orderhistory" 
          element={<OrderHistory/>} 
        /> 
        <Route 
          path="/wishlist" 
          element={<WishList/>} 
        /> 
        <Route
          path="*" 
          element={<NoMatch />} 
        />
      </Routes>
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
