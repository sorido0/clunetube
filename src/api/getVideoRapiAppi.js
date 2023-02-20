// * api sorido0

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b76523d4admsh003939eda9bd9a1p110f1bjsn91b3be7155d5',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c813b0e02fmsh2b6024844162addp125fa5jsn369c4c6e444f',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

export const getVideoRapiAppi = async (buscar= "sorido0") => {


	const response = await fetch(`https://youtube138.p.rapidapi.com/search/?q=${buscar}&maxResults=20`, options)
	const data = await response.json()
	//console.log(data);
    return data;
}


//getVideoRapiAppi("lapiz conciente")
