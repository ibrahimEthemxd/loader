const button = document.getElementById('button')
const loader = document.getElementById("loader")
const img = document.getElementById('image')

function showLoader(){
    loader.style.display = "block"
}
function hideLoader(){
    loader.style.display = "none"
}

function showImage(){
    img.style.display = "block"
}
function hideImage(){
    img.style.display = "none"
}
button.addEventListener("click", () => {
    loader.style.display = "block"
    setTimeout(() => {
        hideLoader()
        showImage()
    }, 1500);
    setTimeout(() => {
        hideImage()
    }, 3000);
})