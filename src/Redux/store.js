import {configureStore} from '@reduxjs/toolkit'
import { ReducerUser } from './Reduceuse'

export const  store=configureStore({
    reducer:{
        data:ReducerUser,
    }
})
