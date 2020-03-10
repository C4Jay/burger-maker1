import React from 'react';
import Aux from 'react-aux';
import Receipt from '../../components/UI/Receipt/receipt';

const wErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aux>
                <Receipt>
                    Something went wrong!
                </Receipt>
                <WrappedComponent {...props} />
            </Aux>
        )
    }
}

export default wErrorHandler