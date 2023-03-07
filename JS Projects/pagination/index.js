let API = [];
async function getImgs(callback) {
   let api = await fetch("https://jsonplaceholder.typicode.com/photos", {
      method: "GET",
   });
   API = await api.json();
   localStorage.setItem("ourProducts", JSON.stringify(API));
   let lastApi = API;
   callback(lastApi);
}

function error() {
   console.log("error");
}
// let lastApi;
if (localStorage.getItem("ourProducts") == null) {
   displayApi();
} else {
   let lasTApi = JSON.parse(localStorage.getItem("ourProducts"));
   // console.log(lasTApi);
   display_html(lasTApi);
}

async function displayApi() {
   try {
      await getImgs(display_html);
   } catch {
      error();
   }
}

var j = 0;

// document.rea
function display_html(lastApi) {
   let display = "";
   // console.log(display);
   let con = document.getElementById("con");
   j = 9;
   for (let i = j - 9; i < j; i++) {
      display += `
        <div class="card col-lg-3" >
               <img src="${lastApi[i].url}" class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">${lastApi[i].title}</h5>
                  <p class="card-text">
                     Some quick example text to build on the card title and make
                     up the bulk of the card's content.
                  </p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
               </div>
            </div>
        `;
   }
   // console.log(display);
   con.innerHTML =
      display +
      `<button class="btn btn-info text-center col-lg-2 mt-4 me-auto ms-auto mb-5 fs-3" onclick="more()">more</button>`;
   // console.log(lastApi);
}
function more() {
   let lasTApi = JSON.parse(localStorage.getItem("ourProducts"));
   let display = "";
   // console.log(lasTApi);
   j += 9;
   for (let i = j - 9; i < j; i++) {
      display += `
          <div class="card col-lg-3" >
                 <img src="${lasTApi[i].url}" class="card-img-top" alt="..." />
                 <div class="card-body">
                    <h5 class="card-title">${lasTApi[i].title}</h5>
                    <p class="card-text">
                       Some quick example text to build on the card title and make
                       up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                 </div>
              </div>
          `;
   }
   // j += 9;
   // console.log("more");
   document.getElementById("con").innerHTML =
      display +
      `         <button class="btn btn-info text-center col-lg-2 mt-4 me-auto ms-auto mb-5 fs-3" onclick="more()">more</button>`;
}
