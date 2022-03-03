import { configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoNew } from '../services/cryptoNewsApi';


export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNew.reducerPath]: cryptoNew.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat((cryptoApi, cryptoNew).middleware),
});

setupListeners(store.dispatch)
