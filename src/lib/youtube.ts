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

export interface VideoSnippet {
	localized: {
		title: string;
		description: string;
	};
}

/**
 * get items in a yt playlist
 */
export async function getPlaylistItemData(playlistId: string, nextPageToken = '') {
	const fields =
		'nextPageToken,items(snippet/title,snippet/description,snippet/thumbnails/default,snippet/videoOwnerChannelTitle,snippet/resourceId/videoId)';
	const url = `${apiBaseURL}/playlistItems?key=${apiKey}&fields=${fields}&maxResults=50&part=snippet%2CcontentDetails&playlistId=${playlistId}&pageToken=${
		nextPageToken || ''
	}`;

	return await fetch(url);
}

/**
 * get yt video based on videoId
 */
export async function getVideoData(id: string): Promise<Response> {
	const fields = 'items(snippet/localized(title,description))';
	const url = `${apiBaseURL}/videos?key=${apiKey}&fields=${fields}&part=snippet%2CcontentDetails&id=${id}`;

	return await fetch(url);
}

/**
 * get yt video based on videoId
 */
export async function getVideoDuration(id: string): Promise<Response> {
	const fields = 'items(contentDetails/duration)';
	const url = `${apiBaseURL}/videos?key=${apiKey}&fields=${fields}&part=contentDetails&id=${id}`;

	return await fetch(url);
}
