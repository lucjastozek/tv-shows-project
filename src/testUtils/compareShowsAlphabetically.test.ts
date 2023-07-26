import { compareShowsAlphabetically } from "../utils/compareShowsAlphabetically";

test("compare ana and adil alphabetically with mixed casing", () => {
    expect(compareShowsAlphabetically("ana", "adil")).toBe(1);
    expect(compareShowsAlphabetically("ana", "Adil")).toBe(1);
    expect(compareShowsAlphabetically("Ana", "adil")).toBe(1);
});

test("sort using compareShowsAlphabetically", () => {
    const names = ["ana", "adil"];
    expect(names.sort(compareShowsAlphabetically)).toEqual(["adil", "ana"]);
});
