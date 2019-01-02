let form = document.getElementById("search-form")
let select = document.getElementById("search-engine")
let img = document.getElementById("search-img")
let input = document.getElementById("search-input")
select.onchange = () => {
    form.action = select.value
    switch (select.selectedIndex) {
        case 0:
            img.style.backgroundImage = "url('pics/DuckDuckGo.svg')"
            input.name = "q"
            img.style.backgroundSize = "auto"
            break
        case 1:
            img.style.backgroundImage = "url('pics/Google.svg')"
            input.name = "q"
            img.style.backgroundSize = "80%"
            break
        case 2:
            img.style.backgroundImage = "url('pics/Wikipedia.svg')"
            input.name = "search"
            img.style.backgroundSize = "90%"
            break
    }
    
}