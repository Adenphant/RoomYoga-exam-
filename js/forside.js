//samme på forsiden
const hops = document.getElementById('jump-button2');

hops.addEventListener("click", function () {
    let elmntt = document.getElementById("annem");
    elmntt.scrollIntoView({
        behavior: "smooth"
    });
});
