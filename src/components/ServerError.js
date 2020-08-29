import React from 'react';

export const ServerError = ( {errorMessage} ) => {
    return (
        <>
            <h3 data-testid={"errors"}>
                {errorMessage}
            </h3>
        </>
    )
};

