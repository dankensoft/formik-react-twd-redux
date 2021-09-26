import React from 'react'
import { FormikComponent } from './FormikComponent'

export const BasicForm = () => {
    return (
        <>
            <div className="mt-5 sm:mt-0">
                <div className="grid grid-cols-1 gap-6">
                    <div className="col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                            <p className="mt-0 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                    </div>
                    <div className="mt-0 md:col-span-2">
                        <FormikComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
