/// from: https://github.com/stefanpaduraru/playlist-randomizer/blob/master/src/helpers/youtube.js
import { PUBLIC_API_KEY, PUBLIC_BASE_URL } from '$env/static/public';
const apiBaseURL = PUBLIC_BASE_URL;
const apiKey = PUBLIC_API_KEY;

export interface PlaylistSnippet {
	description: string;
	resourceId: { videoId: string };
	thumbnails: { default: Thumbnails };
	title: string;
	videoOwnerChannelTitle: string;
}
interface Thumbnails {
	height: number;
	width: number;
	url: string;
}

/**
 *
 * @param playlistId
 * @returns
 */
export async function getPlaylistDataById(playlistId: string) {
	const fields = 'items(id,snippet)';
	const url = `${apiBaseURL}/playlists?key=${apiKey}&fields=${fields}&maxResults=50&part=snippet&id=${playlistId}`;

	return await fetch(url);
}

/**
 * get items in a yt playlist
 * @param playlistId
 * @param nextPageToken
 * @returns
 */
export async function getPlaylistItemData(playlistId: string, nextPageToken = '') {
	const fields =
		'nextPageToken,items(snippet/title,snippet/description,snippet/thumbnails/default,snippet/videoOwnerChannelTitle,snippet/resourceId/videoId)';
	const url = `${apiBaseURL}/playlistItems?key=${apiKey}&fields=${fields}&maxResults=50&part=snippet%2CcontentDetails&playlistId=${playlistId}&pageToken=${
		nextPageToken || ''
	}`;

	return await fetch(url);
}
