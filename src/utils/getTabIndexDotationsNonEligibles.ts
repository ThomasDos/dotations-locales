import type { Dotations } from "models/commune/commune.interface";

export default (dotations: Dotations, currentYear: string): number[] => {
    return Object.keys(dotations).reduce(
        (acc: number[], dotationKey: string, index: number) => {
            if (!dotations[dotationKey].annees[0][currentYear]) {
                // switch (dotationKey) {
                //     case "dotationForfaitaire":
                //         acc.push(2);
                //         break;
                //     case "dotationSolidariteRurale":
                //         acc.push(3);
                //         break;
                //     case "dotationNationalePerequation":
                //         acc.push(4);
                //         break;
                //     case "dsuMontant":
                //         acc.push(5);
                //         break;
                //     default:
                //         break;
                // }

                acc.push(index + 2);
            }
            return acc;
        },
        []
    );
};
