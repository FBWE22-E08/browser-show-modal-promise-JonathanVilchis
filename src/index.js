import "./css/style.css"; //importing css

let modal = document.querySelector(".modal");
let close = document.querySelector(".close");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve((modal.style.display = "block"));
    }, 6000);
});

const resolving = async () => {
    let result = await myPromise();
    return result;
};

resolving();

close.style.cursor = "pointer";

close.addEventListener("click", function () {
    modal.style.display = "none";
});


