import React, { useEffect, useState } from "react";
import { useAppSelector } from "../app/hooks";
import { getCountryFlagByIso2 } from "../service/countryService";
import { Country } from "../data/Types";
import ImageComponent from "../components/ImageComponent";

export const CountryPage =( ) => {
    const iso2 = useAppSelector((state) => state.country.iso2);
    const [country, setCountry] = useState<Country | undefined>();

    useEffect(() => {
        if (iso2) {
            getCountryFlagByIso2(iso2).then(result => {
                setCountry(result);
            });
        } else {
            setCountry(undefined);
        }
    }, [iso2]);

    // TODO Wait for the redux state to be available to render. Redux delay ?
    return (
        <div>
            <b>Country ISO2: </b> <i>{iso2 || "No iso2 selected."}</i>
            <div>
                <b>Country: </b> <i>{country?.name || "No country selected."}</i>
                <ImageComponent country={country} />
            </div>
        </div>
    );
}


