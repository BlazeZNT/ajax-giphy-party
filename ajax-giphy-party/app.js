const gifInput = document.querySelector("#gifInput");
const imgDiv = document.querySelector("#imgDiv");
const delbutton = document.querySelector("#delete");
const submitbtn = document.querySelector("#submitbtn");

// key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
async function getGif(name) {
	const randoNum = Math.floor(Math.random() * 50);
	const res = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${name}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
	let randomImage = res.data.data[randoNum].images.original.url;
	console.log(randomImage);
	console.log(res);
	createGif(randomImage);
}

function createGif(imgLink) {
	// let newImg = document.createElement("img");
	// newImg.src = `${imgLink}`;
	// imgDiv.appendChild(newImg);

	let $newImg = $("<img>", {
		src: `${imgLink}`,
		css: {
			"max-width": "300px",
			"max-height": "300px",
		},
	});
	$(imgDiv).append($newImg);
}
delbutton.addEventListener("click", function () {
	imgDiv.innerHTML = "";
});

submitbtn.addEventListener("click", async function (event) {
	event.preventDefault();
	console.log(gifInput.value);
	await getGif(gifInput.value);
	gifInput.value = "";
});
