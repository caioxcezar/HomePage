let form = document.getElementById("search-form")
let select = document.getElementById("search-engine")
let img = document.getElementById("search-img")
select.onchange = () => {
    form.action = select.value
    switch (select.selectedIndex) {
        case 0:
        img.style.backgroundImage = "url('pics/DuckDuckGo.svg')"
            break
        case 1:
            img.style.backgroundImage = "url('pics/Google.svg')"
            break
    }
    
}