import { generateEpisodeCode } from "../utils/generateEpisodeCode";

test("generates episode codes with two-digit numbers", () => {
    expect(generateEpisodeCode(10, 12)).toEqual("S10E12");
});

test("generates episode codes with one-digit and two-digit numbers", () => {
    expect(generateEpisodeCode(1, 12)).toEqual("S01E12");
    expect(generateEpisodeCode(12, 1)).toEqual("S12E01");
});

test("generates episode codes with one-digit numbers", () => {
    expect(generateEpisodeCode(1, 2)).toEqual("S01E02");
    expect(generateEpisodeCode(2, 1)).toEqual("S02E01");
});

test("generates episode codes with zeros", () => {
    expect(generateEpisodeCode(0, 0)).toEqual("S00E00");
});
