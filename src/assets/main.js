const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=%40jmagvideos1036&part=snippet%2Cid&order=date&maxResults=1';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa2a9a7565msh3cb3ace4f613508p14c3ffjsn6aac44738399',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}