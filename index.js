$('#searchbar').keyup(function() {
    var serchItem = $('#searchbar').val();
    for (var i = 0; i < $('.col-sm-4').length; i++) {
            $('.col-sm-4:eq(' + i + ')').css('display', 'block');
            if ($('.col-sm-4:eq(' + i + ')').text().indexOf(serchItem) < 0) {
            $('.col-sm-4:eq(' + i + ')').css('display', 'none');
            } 
        }
    });



console.log("I am in JS");
const movie_page_arr = []
const fav_list = []
async function getAllPosts(){
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resp_poster = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1193588a");
    const data = await resp.json();
    const data_poster = await resp_poster.json();
    console.log("Data :", data);
    console.log("Data :", data_poster);

    const prashantContainer = document.querySelector(".prashant_class");
    console.log("prashant container :", prashantContainer);

    const favContainer = document.querySelector(".favclass");
    console.log("prashant container :", favContainer);
    
    const moviePage = document.querySelector(".moviepage");
    console.log("moviePage container :", moviePage);

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element);
        const prashant_post = document.createElement('div');
        const image = document.createElement('img')
        const title = document.createElement('h3');
        const body = document.createElement('p');
        const fav_btn = document.createElement('button');
        const delBtn = document.createElement('p');
        const favBtn = document.createElement('button')
        const serchItemval = document.getElementById('searchbar').value;
        const li = document.createElement('li');
        li.innerHTML = serchItemval;

        let list = document.getElementsByClassName("col-sm-4")
			
        favBtn.addEventListener("click", () => {
            list.appendChild(li);
        })

        delBtn.addEventListener("click", () => {
            prashantContainer.removeChild(prashant_post);
        })

        // to add class into post div element
        prashant_post.classList.add('prashant_post');
        prashant_post.classList.add('col-sm-4')
        image.classList.add('imageClass');
        // image.src = "/image/Baner.png";
        image.src = data_poster.Poster;
        title.classList.add('title');
        body.classList.add('body');
        fav_btn.type = "button";
        fav_btn.dataset = data[i].id;
        fav_btn.classList.add('fav_btn');
        delBtn.classList.add('delBtn');

        // add the content for each created element
        title.innerHTML = data[i].title;
        title.style.textOverflow = "ellipsis"
        title.style.overflow ="hidden";
        body.innerHTML = data[i].body;
        // fav_btn.innerHTML = `&hearts;`;
        fav_btn.innerHTML = `♡`;
        delBtn.innerHTML = "X";


        // create parent child relationship
        prashant_post.appendChild(image);
        prashant_post.appendChild(title);
        prashant_post.appendChild(body);
        prashant_post.appendChild(fav_btn);
        prashant_post.appendChild(delBtn);
        prashant_post.appendChild(favBtn);
        // prashant_post.appendChild(prasRow)
        prashantContainer.appendChild(prashant_post);


        fav_btn.addEventListener("click", function() {
            console.log(data[i].id, "clicked");
            localStorage.setItem("id", data[i].id);
            // fav_list.push(data[i].id)
            // fav_btn.innerHTML = `&hearts;`;
            
            let num = data[i].id;
            
            if (fav_list.indexOf(num) !== -1) {
                fav_list.splice(fav_list.indexOf(num), 1);
                fav_btn.innerHTML = `♡`;
                prashantContainer.appendChild(prashant_post).num;
            } else {
                fav_list.push(num);
                fav_btn.innerHTML = `&hearts;`;
                favContainer.appendChild(prashant_post).num;
                
            }
        });

        title.addEventListener("click", function() {
            console.log(data[i].id, "movie pageclicked");
            let num = data[i];
            if (movie_page_arr.indexOf(num) !== -1) {
                movie_page_arr.splice(movie_page_arr.indexOf(num), 1);
                moviePage.appendChild(prashant_post).num;
            } else {
                document.getElementById("movie_link").click();
                document.getElementById("poster").src = data_poster.Poster;
                document.getElementById("movietitle").innerHTML = num.title;
                document.getElementById("moviedesc").innerHTML = num.body;
            }

        });

        }
        console.log(fav_list);

}

getAllPosts();










