import React, { useEffect, lazy, Suspense } from 'react';
import { GlobalStyle } from './global.styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component.jsx'
import Spinner from './components/spinner/spinner.component';

// eslint-disable-next-line
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';

import { checkUserSession } from './redux/user/user.actions';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, collectionsArray, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
    
    //Adding data to Firebase (just once)

    // addCollectionAndDocuments('collections', 
    //   collectionsArray.map(
    //     ({title, items}) => ({title, items})
    //     )
    //   );

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    //   if (userAuth){
    //     const userRef = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot=>{
    //       setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //       });
    //     });
        
    //   } else{
    //     setCurrentUser(userAuth);
    //   }
    // })

    return (
      <div>
        <GlobalStyle/>
        <Header/>
        <Switch>
          <Suspense fallback={<Spinner/>}>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
            <Route 
              exact 
              path="/signIn" 
              render={() => 
              currentUser ? 
              (<Redirect to="/" /> 
                ) : (
                <SignInAndSignUpPage/>
                )
            } />
          </Suspense>
        </Switch>
      </div>
    );
}

const mapStateToProps = (state) =>createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
