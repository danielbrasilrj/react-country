import {Capital} from "../data/Types";
import {CapitalDetails} from "../components/CapitalDetails";

export type CapitalPageProps = {
    capital: Capital;
}

export const CapitalPage =(props: CapitalPageProps) => {
    const { capital } = props;

    return (
        <CapitalDetails capital={capital} />
    );
}
