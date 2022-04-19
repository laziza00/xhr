


let boxList = document.querySelector('.box__list')
let url = 'https://reqres.in/api/users'

function workRequest() {
    let outRequest = new XMLHttpRequest();

    outRequest.open("Get", url  );
    outRequest.onload = function(){
        let outData = JSON.parse(outRequest.responseText);
        renderHtml(outData)
    
    };
    outRequest.send()
}
workRequest()


function renderHtml(obj) {

    obj.data.forEach(element => {

        let li = document.createElement('li')
     
        li.classList.add('box__item')
      
        li.innerHTML = `
        <button class="remove__btn" style="display: none">
        Remove <i class='bx bx-trash'></i></button>
        <div style="display: flex;">
        <img class="box__img" src="${element.avatar}" alt="img">
        <div>
          <h3 class="box__title">${element.first_name}</h3>
          <p class="box__text">${element.last_name}</p>
        </div>
      </div>
          <div style="margin: 20px 0 0 0; padding: 0;">
            <ul class="box__inner-list" style="list-style-type: none; padding: 0;">
              <li class="box__inner-item" style="display: flex; justify-content: space-between;">
                <p class="box__item-text">company</p>
                <p class="box__item-desc">information </p>
              </li>
              <li class="box__inner-item" style="display: flex; justify-content: space-between;">
                <p class="box__item-text">email</p>
                <p class="box__item-desc"> ${element.email}</p>
              </li>
              <li class="box__inner-item" style="display: flex; justify-content: space-between;">
                <p class="box__item-text">phone</p>
                <p class="box__item-desc"> +998901234567</p>
              </li>
              <li class="box__inner-item" style="display: flex; justify-content: space-between;">
                <p class="box__item-text">website</p>
                <p class="box__item-desc"> information </p>
              </li>
            </ul>
          </div>
        `
        boxList.appendChild(li)
        let itemList = document.querySelectorAll('.box__item')
        removeItems (itemList)
    })
}
function removeItems(items) {
    items.forEach(el => {
        el.addEventListener('mouseover', (e)=> {
    
            e.currentTarget.querySelector('.remove__btn').style.display = "block"
            e.currentTarget.querySelector('.remove__btn').addEventListener('click', ()=> {
              setTimeout(function() {
                el.remove()
              }, 100)
               
            })
        })
        el.addEventListener('mouseout', (e)=> {
            e.currentTarget.querySelector('.remove__btn').style.display = "none"
        })
    })
}