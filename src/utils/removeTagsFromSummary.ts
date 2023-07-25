function removeTagsFromSummary(summary: string): string {
    let cleanedSummary = summary.split("<p>");
    cleanedSummary = cleanedSummary.join("").split("</p>");

    return cleanedSummary.join("");
}

export { removeTagsFromSummary };
