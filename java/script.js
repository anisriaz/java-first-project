const counter = document.getElementById ("counter")
const incrementbutton = document.getElementById ("btn-increment")
const resetbutton = document.getElementById ("btn-reset")
const decreasebutton = document.getElementById ("btn-decrease")

let count = 0; 

incrementbutton.addEventListener("click", ()=> {
count ++
counter.innerHTML= count

})

resetbutton.addEventListener("click", ()=> {
count = 0

counter.innerHTML= count
})

decreasebutton.addEventListener("click", ()=> {
    if (count > 0) {
        count --;

        counter.innerHTML= count
    }

    else (count = 1)
    {

    }
    count --;

counter.innerHTML= count


})