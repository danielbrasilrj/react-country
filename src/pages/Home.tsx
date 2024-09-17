import React, {useEffect, useState} from "react";
import {CountryList} from "../components/CountryList";
import {Capital, Country} from "../data/Types";
import {getAllCountries, getCapitalByCountryIso2} from "../service/countryService";
import {CapitalDetails} from "../components/CapitalDetails";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Home =() => {

  const [iso2, setIso2] = React.useState('');
  const [capital, setCapital] = React.useState<Capital | undefined>(undefined);
  const [countries, setCountries] = useState<Country[] | undefined>([]);
  const navigate = useNavigate();

  useEffect(() => {
        getAllCountries().then(result => {
            setCountries(result);
        });
    }, []);

    useEffect(() => {
        if(iso2 === '') {
            return
        }
        getCapitalByCountryIso2(iso2).then(result => {
            setCapital(result)
        });
    }, [iso2]);

    const handleCountryChange = (selectedIso2: string) => {
        setIso2(selectedIso2);
    };

  return (
      <div>
        <CountryList countries={countries} onCountryChanged={handleCountryChange} />
        <CapitalDetails capital={capital} />
        <Button variant="text"
                onClick={() => {
                    if(capital) {
                        alert(capital.capital);

                        // TODO Next class, start here
                        // I have added the about navigation as a test
                        // Question: Do we need the About component under Router in App.tsx?
                        navigate("/about");
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
