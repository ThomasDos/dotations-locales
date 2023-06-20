import { Entity } from "models/entity/entity.interface";
import fetchCommune from "./fetchCommune";

async function splitBatchAndFetchCommunes(
    codes: string[] | undefined
): Promise<Entity[]> {
    if (!codes) return [];
    // const firstQuarter = codes.slice(0, codes.length / 4);

    // const secondQuarter = codes.slice(codes.length / 4, codes.length / 2);

    // const thirdQuarter = codes.slice(codes.length / 2, (codes.length / 4) * 3);

    // const fourthQuarter = codes.slice((codes.length / 4) * 3, codes.length);
    const firstTenth = codes.slice(0, codes.length / 10);

    const secondTenth = codes.slice(codes.length / 10, (codes.length / 10) * 2);

    const thirdTenth = codes.slice(
        (codes.length / 10) * 2,
        (codes.length / 10) * 3
    );

    const fourthTenth = codes.slice(
        (codes.length / 10) * 3,
        (codes.length / 10) * 4
    );

    const fifthTenth = codes.slice(
        (codes.length / 10) * 4,
        (codes.length / 10) * 5
    );

    const sixthTenth = codes.slice(
        (codes.length / 10) * 5,
        (codes.length / 10) * 6
    );

    const seventhTenth = codes.slice(
        (codes.length / 10) * 6,
        (codes.length / 10) * 7
    );

    const eighthTenth = codes.slice(
        (codes.length / 10) * 7,
        (codes.length / 10) * 8
    );

    const ninthTenth = codes.slice(
        (codes.length / 10) * 8,
        (codes.length / 10) * 9
    );

    const tenthTenth = codes.slice((codes.length / 10) * 9, codes.length);

    const codesSliced = [
        firstTenth,
        secondTenth,
        thirdTenth,
        fourthTenth,
        fifthTenth,
        sixthTenth,
        seventhTenth,
        eighthTenth,
        ninthTenth,
        tenthTenth,
    ];

    // const firstBatch = await Promise.all(
    //     firstSixth.map(codeInsee => {
    //         return fetchCommune(codeInsee);
    //     }) as Promise<Entity>[]
    // );

    // const secondBatch = await Promise.all(
    //     secondSixth.map(codeInsee => {
    //         return fetchCommune(codeInsee);
    //     }) as Promise<Entity>[]
    // );

    // const thirdBatch = await Promise.all(
    //     thirdSixth.map(codeInsee => {
    //         return fetchCommune(codeInsee);
    //     }) as Promise<Entity>[]
    // );

    // const fourthBatch = await Promise.all(
    //     fourthSixth.map(codeInsee => {
    //         return fetchCommune(codeInsee);
    //     }) as Promise<Entity>[]
    // );

    // const fifthBatch = await Promise.all(
    //     fifthSixth.map(codeInsee => {
    //         return fetchCommune(codeInsee);
    //     }) as Promise<Entity>[]
    // );

    // const sixthBatch = await Promise.all(
    //     sixthSixth.map(codeInsee => {
    //         return fetchCommune(codeInsee);
    //     }) as Promise<Entity>[]
    // );
    const batch: any = [];

    codesSliced.forEach(async (codes: string[]) => {
        batch.push(
            await Promise.all(
                codes.map(codeInsee => {
                    return fetchCommune(codeInsee);
                }) as Promise<Entity>[]
            )
        );
    });

    return batch;
}

export default splitBatchAndFetchCommunes;
