const btn = document.querySelector(".btn");
const title = document.querySelector(".title");
const joke = document.querySelector(".joke");

new Promise((resolve, reject) => {
  const data = {
    success: {
      total: 1,
    },
    contents: {
      jokes: [
        {
          description: "Joke of the day ",
          language: "en",
          background: "",
          category: "jod",
          date: "2023-02-06",
          joke: {
            title: "Knock Knock - Opera who?",
            lang: "en",
            length: "111",
            clean: "1",
            racial: "0",
            date: "2023-02-06",
            id: "oFr2gwJ7UpCrRffHKbXksQeF",
            text: "Knock Knock\r\nWho's there?\r\nOpera!\r\nOpera who?\r\nOpera-tunity, and you thought opportunity only knocked once!\r\n\r\n",
          },
        },
      ],
      copyright: "2019-20 https://jokes.one",
    },
  };
  resolve(data);
}).then((data) => {
  btn.addEventListener("click", function () {
    title.innerText = data.contents.jokes[0].joke.title;
    joke.innerText = data.contents.jokes[0].joke.text;
  });
});
