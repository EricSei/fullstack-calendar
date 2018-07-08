import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Routes from './routes'
import { Provider } from 'react-redux'
import './index.css';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

import createStore from './store';
import { Frontload } from 'react-frontload';
import { createMuiTheme } from '@material-ui/core/styles';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import NotificationContainer from 'components/Notifications';
const { store, history } = createStore();
const persistor = persistStore(store);

const App = () => {
	return (
		<Provider store={store}>
			<Frontload noServerRender>
				<ReactCSSTransitionGroup 
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}>
					<NotificationContainer/>
					<ConnectedRouter history={history}>
						<Routes />
					</ConnectedRouter>
				</ReactCSSTransitionGroup>
				{/* </PersistGate> */}
			</Frontload>
		</Provider>
	)
}

App.propTypes = {
	history: PropTypes.object,
}

export default App
