import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/ProductState/actionTypes';
import { initialState, productsReducer } from '../state/ProductState/productsReducer';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(productsReducer, initialState);

    useEffect(() => {
        const run = async () => {
            try {
                dispatch({ type: actionTypes.FETCHING_START })
                const res = await fetch("./products.json")
                const data = await res.json()
                dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data })
            } catch (err) {
                dispatch({ type: actionTypes.FETCHING_ERROR })
            }
        }
        run()
    }, [])

    const value = {
        state,
        dispatch
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export default ProductProvider;


export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context;
}