import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, createMemoryHistory } from 'history';
import rootReducer from './reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import LoadingSpinner from 'components/LoadingSpinner';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['userReducer', ''],
	stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer);

// A nice helper to tell us if we're on the server
export const isServer = !(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);

export default (url = '/') => {
	// Create a history depending on the environment
	const history = isServer
		? createMemoryHistory({
			initialEntries: [url]
		})
		: createBrowserHistory();

	const enhancers = [];

	// Dev tools are helpful
	if (process.env.NODE_ENV === 'development' && !isServer) {
		const devToolsExtension = window.devToolsExtension;

		if (typeof devToolsExtension === 'function') {
			enhancers.push(devToolsExtension());
		}
	}

	const middleware = [routerMiddleware(history),thunk,logger];

	const composedEnhancers = compose(
		applyMiddleware(...middleware),
		...enhancers
	);

	// Do we have preloaded state available? Great, save it.

	// Do we have preloaded state available? Great, save it.
	const initialState = !isServer ? window.__PRELOADED_STATE__ : {};

	// Delete it once we have it stored in a variable
	if (!isServer) {
		delete window.__PRELOADED_STATE__;
	}

	// Create the store
	const store = createStore(
		connectRouter(history)(pReducer),
		initialState,
		composedEnhancers
	);

	return {
		store,
		history
	};
};

