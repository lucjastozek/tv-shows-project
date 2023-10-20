function generateEpisodeCode(season: number, episode: number): string {
    let seasonStr = String(season);
    let episodeStr = String(episode);

    if (seasonStr.length < 2) {
        seasonStr = "0" + seasonStr;
    }

    if (episodeStr.length < 2) {
        episodeStr = "0" + episodeStr;
    }
    return "S" + seasonStr + "E" + episodeStr;
}

export { generateEpisodeCode };
