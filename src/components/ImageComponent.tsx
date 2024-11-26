import React from 'react';
import {Country} from "../data/Types";

export type CountryProps = {
    country: Country | undefined;
}

const ImageComponent = (props: CountryProps) => {
    const { country } = props;

    return (
        <div style={{ width: '500px', height: '300px', overflow: 'hidden', border: '1px solid black' }}>
            <img
                src={country?.flag}
                alt={country?.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default ImageComponent;
