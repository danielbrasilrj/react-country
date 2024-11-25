import React from "react";
import { useAppSelector } from "../app/hooks";

export const CountryPage =( ) => {
    const iso2 = useAppSelector((state) => state.country.iso2);

    return (
        <div>
            <b>Country ISO2: </b> <i>{iso2 || "No country selected."}</i>
        </div>
    );
}

// TODO Reset iso2 when leave the page? How?
