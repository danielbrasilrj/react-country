import React, {useEffect, useState} from "react";
import {CountryList} from "../components/CountryList";
import {Country} from "../data/Types";
import {getAllCountries} from "../service/countryService";
import {Button} from "@mui/material";
import {useNavigate, createSearchParams, useLocation} from "react-router-dom";
import {resetState} from "../features/country/countrySlice";
import {useAppDispatch} from "../app/hooks";

export const Home =() => {

    const [iso2, setIso2] = React.useState('');
    const [countries, setCountries] = useState<Country[] | undefined>([]);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        getAllCountries().then(result => {
            setCountries(result);
        });
    }, []);

    // Resets Redux country state
    useEffect(() => {
        if (location.pathname === '/') {
            dispatch(resetState());
        }
    }, [location]);

    const handleCountryChange = (selectedIso2: string) => {
        setIso2(selectedIso2);
    };

    const navigateToCapitalPage = ( ) => {
        const params = { iso2: iso2 };
        navigate({
            pathname: "/capital",
            search: `?${createSearchParams(params)}`,
        });
    };

    const navigateToCountryPage = ( ) => {
        navigate({
            pathname: "/country"
        });
    };

    return (
      <div>
        <CountryList countries={countries} onCountryChanged={handleCountryChange} />
        <Button variant="text"
                onClick={() => {
                    if( iso2 ) {
                        navigateToCapitalPage();
                    } else {
                        alert("No capital selected, please select one.");
                        // TODO replace by validation component
                    }
                }}
        >
            Capital Details
        </Button>
        <Button variant="text"
              onClick={() => {
                  navigateToCountryPage();
              }}
        >
          Country Details
        </Button>
      </div>
  );
}
