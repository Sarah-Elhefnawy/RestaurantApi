async function getMeal(id = "pizza") {
    var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${id}`);
    var data = await response.json();
    console.log(data.recipes);
    display(data.recipes);
    inLoading();
}
getMeal();

var btns = document.querySelectorAll(".nav-link")
for (var btn = 0; btn < btns.length; btn++) {
    btns[btn].addEventListener("click",function(e){
        var targ = e.target.innerHTML;
        getMeal(targ)
    })
}

function display(arr){
    var cartona = "";
    for (var i = 0; i < arr.length; i++) {
        cartona += `
                <div class="col-md-3">
                    <div class="card">
                        <img src="${arr[i].image_url}" class="card-img-top w-100" alt="...">
                        <div class="card-body">
                          <p class="card-text">${arr[i].title}</p>
                        </div>
                      </div>
                </div>`;
    }
    document.getElementById("row-body").innerHTML=cartona
}

function inLoading(){
    document.getElementById('loading').classList.add('d-none');
    document.body.classList.remove('overflow-hidden')
}