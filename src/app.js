

import * as googLib from "google-api-javascript-client"

document.addEventListener("DOMContentLoaded", () => {

    const key = AIzaSyBpi0U4IfVLex4X7oRvnl81AiLMwSgWcyA
    const gcloudGTM = tbc

    
    function getAllTags(){
        fetch(`https://www.googleapis.com/tagmanager/v1/`, {
      
        method: 'GET',
        credentials: `include`,
        headers: {
          'Content-type': 'application/json',
        }
        
      })
          .then(res => res.json())
          .then(allTags => allTags.forEach(tag => renderTag(tag))) 
    }


    function renderTag(tag){
        let card = document.createElement('li')
        card.className = "card" 
        card.innerHTML = `
            <img src="https://www.istockphoto.com/photo/aerial-view-on-zermatt-valley-and-matterhorn-peak-at-dawn-gm467335200-60293872?utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fnight-mountains-switzerland&utm_term=night%20mountains%20switzerland%3A%3A%3A
            " class="screenshot"/>
            <h3 id="[tag id]" class="tagName">${tag.name}</h3>
            <p>SOmething about this tag</p>
            <ul>Attributes</ul> 
            <div>
                <h3>Comments</h3>
                <div id='list' class='comments'></div>
                <h3>Leave a comment</h3>

                <form id="comment-form" action="">
                <input type='text' name="comment" id="comment-input" cols="30" rows="10">
                </br>
                <button id='submit'>submit</button>
                </form>

            </div>`
        document.querySelector(".container").appendChild(card)  
        card.querySelector(".screenshot").addEventListener("on-hover", handleHover)
        card.querySelector(`#comment-form`).addEventListener('submit', postComment)
            
    }


    function handleHover(e){
        // remove image from renderTag function and add here, 
    }



    function postComment(e){

        // need to save these comments in db
        let p = document.createElement("p")
        let comment = document.getElementById("comment-input").value
        p.textContent = comment  
        list.appendChild(p)
        e.preventDefault()
        form.reset()
    
    }  


    function intialise(){
        getTags()
      }
      
      
      
      
      intialise()


}) // end of code