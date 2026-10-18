import type { ItechnologiesDataType } from "../Type";

const Technologies = ({ technologiesData }: ItechnologiesDataType) => {
    return (
        <div>
            {
                technologiesData.map((t) => {
                    return (
                        <div key={t.name}>
                            <h2>{t.description}</h2>
                            <h2>{t.name}</h2>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Technologies;