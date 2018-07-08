import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';
import LoadingSpinner from 'components/LoadingSpinner';
import createStore from './store';
const { store, history } = createStore();


export const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
	    <PersistGate loading={<div> loading </div>} persistor={persistor}>
			      <App history={history} />
						    </PersistGate>

								  </Provider>
									  , document.getElementById('root'));
										registerServiceWorker();
