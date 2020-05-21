const formGithub = document.getElementById("formGithub");
const userGithub = document.getElementById("userGithub");

const handleSubmit = async (e) => {
  e.preventDefault();

  const userGithubValue = userGithub.value;
  const userName = await fetch(
    `https://api.github.com/users/${userGithubValue}`
  )
    .then((data) => data.json())
    .then((data) => {
      return data.name;
    });

  const imgUrl = await fetch(
    `http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`
  )
    .then((data) => data.json())
    .then((data) => {
      const randomNum = Math.floor(Math.random() * data.data.length);
      
      return data.data[randomNum].images.downsized_large.url;
    });

  const namePlaceholder = document.getElementById("namePlaceholder");
  const moodImg = document.getElementById("moodImg");

  namePlaceholder.textContent = `${userName}, seu humor hoje é: `;
  moodImg.setAttribute('src', imgUrl);
};

formGithub.onsubmit = handleSubmit;
