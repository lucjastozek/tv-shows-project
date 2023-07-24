import { removeTagsFromSummary } from "../utils/removeTagsFromSummary";

test("hard one", () => {
    expect(
        removeTagsFromSummary(
            "<p></p><p>Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay.</p>"
        )
    ).toEqual(
        "Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out. Cersei hosts a dinner for the royal family. Daenerys sails into Slaver's Bay."
    );
});

test("easy one", () => {
    expect(
        removeTagsFromSummary(
            "<p>Sansa says too much. Shae asks Tyrion for a favor. Jaime finds a way to pass the time. Arya runs into the Brotherhood Without Banners.</p>"
        )
    ).toEqual(
        "Sansa says too much. Shae asks Tyrion for a favor. Jaime finds a way to pass the time. Arya runs into the Brotherhood Without Banners."
    );
});
