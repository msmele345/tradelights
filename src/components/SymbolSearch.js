import React, {Fragment} from "react";

export const SymbolSearch = ({query, setQuery, setSearch}) => {

    return (<>
            <div className="form-group">
                <input
                    className="form-control form-control-lg"
                    placeholder={"Symbol i.e..ABC"}
                    type="text"
                    aria-label="symbol-input"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
            </div>
            <button type="button" onClick={() => setSearch(query)}>Search</button>
        </>
    );
};
