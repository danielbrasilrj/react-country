import React, {useEffect, useState} from "react";
import {CountryList} from "../components/CountryList";
import {Country} from "../data/Types";
import {getAllCountries} from "../service/countryService";
import {Button} from "@mui/material";
import {useNavigate, createSearchParams} from "react-router-dom";

export const Home =() => {

  const [iso2, setIso2] = React.useState('');
  const [countries, setCountries] = useState<Country[] | undefined>([]);
  const navigate = useNavigate();

  useEffect(() => {
        getAllCountries().then(result => {
            setCountries(result);
        });
    }, []);

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
      </div>
  );
}
