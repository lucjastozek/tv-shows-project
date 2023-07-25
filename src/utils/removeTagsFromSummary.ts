function removeTagsFromSummary(summary: string): string {
    let cleanedSummary = summary.split(/<[a-z]+>/);
    cleanedSummary = cleanedSummary.join("").split(/<\/[a-z]+>/);

    return cleanedSummary.join("");
}

export { removeTagsFromSummary };
