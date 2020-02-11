function searchPlaylistID(temp) {
    if (temp > 30.0) {
        playlist_id = "4UvlO8zrSfNhncnU3WQBgj";
    } else if (temp >= 15.0) {
        playlist_id = "37i9dQZF1DX6aTaZa0K6VA";
    } else if (temp >= 10.0) {
        playlist_id = "37i9dQZF1DWXRqgorJj26U";
    } else {
        playlist_id = "37i9dQZF1DWWEJlAGA9gs0";
    }
    return playlist_id;
}

module.exports = searchPlaylistID;