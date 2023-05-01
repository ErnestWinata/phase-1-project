const container = document.getElementById("container");

fetch(
  "https://api.thedogapi.com/v1/breeds?api_key=live_MTAtBFTqjiOT96Cq5HUajp4okOFzMdCYChPjWpGm8mATX7pwAtS8cnaQsBzNc3xw"
)
  .then((response) => response.json())
  .then((data) => {
    const workingDogs = data.filter((dog) => dog.breed_group === "Working").slice(0, 5);
    console.log(workingDogs);
    workingDogs.forEach((dog, index) => {
      const div = document.createElement("div");
      div.classList.add("dog-container");

      const img = document.createElement("img");
      img.src =
        "https://media.istockphoto.com/id/1155747156/vector/cute-golden-retriever-puppy-paws-up-over-wall-dog-face-vector-illustration.jpg?s=612x612&w=0&k=20&c=4ROMUd2EJsRxPKh8EdNjEGioQtt1tPYza_bzmUhwaSM=";
      img.alt = `${dog.name} image`;

      const name = document.createElement("h2");
      name.innerText = dog.name;

      const temperament = document.createElement("p");
      temperament.innerText = `Temperament: ${dog.temperament}`;

      const bredFor = document.createElement("p");
      bredFor.innerText = `Bred for: ${dog.bred_for}`;

      const button = document.createElement("button");
      button.innerText = "See how cute I am!";
      button.addEventListener("click", () => {
        if (index === 0) {
          const gif = document.createElement("img");
          gif.src = "https://media3.giphy.com/media/l0Ex3Ewy3ryA5il5S/giphy.gif";
          gif.alt = `${dog.name} gif`;
          div.appendChild(gif);
        } else if (index === 1) {
          const gif = document.createElement("img");
          gif.src = "https://media.tenor.com/1PKlcYyeNdkAAAAM/dog-akita.gif";
          gif.alt = `${dog.name} gif`;
          div.appendChild(gif);
        }
        else if (index === 2) {
          const gif = document.createElement("img");
          gif.src = "https://media2.giphy.com/media/l378p0VvTts3st2RG/200.gif?cid=6c09b952tnejek8opyj8zvp8zw7686k38j98aw43au2ks8ge&ep=v1_gifs_search&rid=200.gif&ct=g";
          gif.alt = `${dog.name} gif`;
          div.appendChild(gif);
        }
        else if (index === 3) {
          const gif = document.createElement("img");
          gif.src = "https://media.tenor.com/N2JrPDs7hyQAAAAC/bulldog-club-bulldog.gif";
          gif.alt = `${dog.name} gif`;
          div.appendChild(gif);
        }
        else if (index === 4) {
          const gif = document.createElement("img");
          gif.src = "https://thumbs.gfycat.com/QuarterlyThoroughBufflehead-max-1mb.gif";
          gif.alt = `${dog.name} gif`;
          div.appendChild(gif);
        }
      });

      div.appendChild(img);
      div.appendChild(name);
      div.appendChild(temperament);
      div.appendChild(bredFor);
      div.appendChild(button);

      container.appendChild(div);
    });
  });

