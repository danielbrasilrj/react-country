import {Capital} from "../data/Types";

export type CapitalDetailsProps = {
    capital: Capital | undefined;
}

export const CapitalDetails = (props: CapitalDetailsProps) => {
    const { capital } = props;

    return (
        <div>
            <b>Capital:</b> {capital?.capital}
        </div>
    );
};
