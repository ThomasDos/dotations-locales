import _ from "lodash";
import type { Dotation } from "models/commune/commune.interface";

import DotationCard from "../DotationCard";
import ParameterCard from "./ParameterCard";
import SubTabSousDotations from "./SubTabSousDotations";

interface SubTabProps {
    dotation: Dotation;
}

const SubTab = ({ dotation }: SubTabProps) => {
    const { sousDotations, criteres } = dotation;

    return (
        <div className="pt-10">
            {sousDotations ? (
                <SubTabSousDotations
                    dotation={dotation}
                    sousDotations={sousDotations}
                />
            ) : (
                <div className="pt-10">
                    <>
                        <DotationCard
                            dotation={dotation}
                            borderTop={true}
                            backgroundColor={true}
                        />
                        {!_.isEmpty(criteres) &&
                            Object.keys(criteres).map((criteresKey: string) => {
                                return (
                                    <ParameterCard
                                        key={criteresKey}
                                        critere={criteres[criteresKey]}
                                    />
                                );
                            })}
                    </>
                </div>
            )}
        </div>
    );
};

export default SubTab;
