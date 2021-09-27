import React from 'react'
import { BasicForm } from './components/BasicForm'
import { Provider } from 'react-redux'
import { store } from './store/store'

export const App = () => {
    return (
        <Provider store={ store }>
            <div className="container p-4">
                <BasicForm/>
            </div>
        </Provider>
    )
}
