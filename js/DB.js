// model
const model = {
  currentCat: null,
  cats: [
    {
      clickCount: 10,
      name: "Tabby",
      imgSrc: "img/434164568_fea0ad4013_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/bigtallguy/434164568",
    },
    {
      clickCount: 13,
      name: "Tiger",
      imgSrc: "img/4154543904_6e2428c421_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/xshamx/4154543904",
    },
    {
      clickCount: 46,
      name: "Scaredy",
      imgSrc: "img/22252709_010df3379e_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/kpjas/22252709",
    },
    {
      clickCount: 0,
      name: "Shadow",
      imgSrc: "img/1413379559_412a540d29_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/malfet/1413379559",
    },
    {
      clickCount: 90,
      name: "Sleepy",
      imgSrc: "img/9648464288_2516b35537_z.jpg",
      imgAttribution: "https://www.flickr.com/photos/onesharp/9648464288",
    },
  ],
};

// controller
const controller = {
  getAllCats() {
    return model.cats;
  },
  getCurrentCat(arg) {
    if (!arg) {
      return (model.currentCat = model.cats[0]);
    }

    view.updateDOM(arg);
    model.currentCat = arg;
    console.log(model.currentCat);
    return model.currentCat;
  },
};

// <ul></ul>
const catList = document.getElementById("cat-list");

// <img />
const catImg = document.createElement("img");
catImg.src = controller.getCurrentCat().imgSrc;

// <button></button>
const button = document.createElement("button");
button.innerHTML = model.currentCat.clickCount;
button.addEventListener("click", function () {
  model.currentCat.clickCount = parseInt(model.currentCat.clickCount) + 1;
  button.innerHTML = model.currentCat.clickCount;
});

// view
const view = {
  updateDOM(arg) {
    catImg.src = arg.imgSrc;
    button.innerHTML = arg.clickCount;
  },
  init() {
    const info = controller.getAllCats();

    // looping through model to render data
    info.map((item) => {
      // <li></li>
      const li = document.createElement("li");
      li.style.listStyle = "none";

      // <h3></h3>
      const catName = document.createElement("h3");
      catName.innerText = item.name;
      catName.addEventListener("click", function () {
        controller.getCurrentCat(item);
      });

      li.appendChild(catName);
      catList.appendChild(li);
      catList.appendChild(catImg);
      catList.appendChild(button);
    });
  },
};

view.init();
