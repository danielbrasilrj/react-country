import {Capital} from "../data/Types";
import React, {useEffect} from "react";
import {getCapitalByCountryIso2} from "../service/countryService";
import { useSearchParams } from "react-router-dom";

export const CapitalPage =( ) => {

    const [searchParams] = useSearchParams();
    const [capital, setCapital] = React.useState<Capital | undefined>(undefined);

    useEffect(() => {
        const iso2 = searchParams.get( "iso2" );
        if( !iso2 ) {
            return
        }
        getCapitalByCountryIso2(iso2).then(result => {
            setCapital(result)
        });
    }, [searchParams]);

    return (
        <div>
            <b>{capital?.capital ? 'Capital:' : ''}</b> {capital?.capital}
        </div>
    );
}
