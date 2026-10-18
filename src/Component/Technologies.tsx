import type { ItechnologiesDataType, Itechnology } from "../Type";
import TechnologieCard from "./TechnologieCard";

const Technologies = ({ technologiesData }: ItechnologiesDataType) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 ">
            {
                technologiesData.map((technology: Itechnology, idx: number) => (
                    <TechnologieCard key={idx} technology={technology} />
                ))
            }
        </div>
    );
};

export default Technologies;