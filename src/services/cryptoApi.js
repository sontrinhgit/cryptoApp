import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { REACT_APP_API_KEY_COIN } from '../ApiKey'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': REACT_APP_API_KEY_COIN,


}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({
    url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            //pass from cryptocurrencies 
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getExchanges: builder.query({
            //pass from cryptocurrencies 
            query: () => createRequest('/exchanges'),
        }),
        getCryptoDetails: builder.query({
            //pass from cryptocurrencies 
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            //pass from cryptocurrencies 
            query: ({id, timePeriod }) => createRequest(`/coin/${id}/history?timeperiod=${timePeriod}`),
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi;