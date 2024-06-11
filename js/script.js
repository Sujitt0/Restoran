var anchor = document.querySelectorAll('.nav-link')
anchor.forEach((anc)=>{
  anc.addEventListener('click', ()=>{
    var current = document.querySelector('.active')
    current.classList.remove('active')
    anc.classList.add('active')
  })
})

var content = `
  <!-- <div class="food-list col-md-6 col-sm-12 p-2"> -->
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-1.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-2.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-3.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-4.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
            <!-- </div> -->
            <!-- <div class="food-list col-md-6 col-sm-12"> -->
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-5.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-6.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-7.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-8.jpg" alt="">
                <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                <h5>&#160;Chicken Burger</h5>
                <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
                <!-- </div> -->
                </div>
  
                `
var activebutton = ''
var button1 = document.querySelector('#button-menu1')
var button2 = document.querySelector('#button-menu2')
var button3 = document.querySelector('#button-menu3')
              
button1.addEventListener('click', ()=>{
  content = `
                  <!-- <div class="food-list col-md-6 col-sm-12 p-2"> -->
                  <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-1.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-2.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-3.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-4.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
            <!-- </div> -->
            <!-- <div class="food-list col-md-6 col-sm-12"> -->
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-5.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-6.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-7.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
                <img src="./images/menu-8.jpg" alt="">
                <div class="item-content p-1">
                  <div class="item-name d-flex justify-content-between p-0">
                    <h5>&#160;Chicken Burger</h5>
                    <h5 class="item-price">$115</h5>
                  </div>
                  <hr class="m-0">
                  <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
                </div>
              <!-- </div> -->
            </div>
          `
  rowcontent(button1)
  activebutton.classList.remove('menu_active')
  button1.classList.add('menu_active')
})
button2.addEventListener('click', ()=>{
  content = `
<!-- <div class="food-list col-md-6 col-sm-12 p-2"> -->
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-1.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-2.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-3.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-4.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
          <!-- </div> -->
          <!-- <div class="food-list col-md-6 col-sm-12"> -->
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-5.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-6.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-7.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-8.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            <!-- </div> -->
          </div>
        `
  rowcontent(button2)
  activebutton.classList.remove('menu_active')
  button2.classList.add('menu_active')
})
button3.addEventListener('click', ()=>{
  content = `
<!-- <div class="food-list col-md-6 col-sm-12 p-2"> -->
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-1.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-2.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-3.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-4.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
          <!-- </div> -->
          <!-- <div class="food-list col-md-6 col-sm-12"> -->
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-5.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-6.jpg" alt="">
              <div class="item-content p-1">
                <div class="item-name d-flex justify-content-between p-0">
                  <h5>&#160;Chicken Burger</h5>
                  <h5 class="item-price">$115</h5>
                </div>
                <hr class="m-0">
                <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
            </div>
            <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-7.jpg" alt="">
              <div class="item-content p-1">
              <div class="item-name d-flex justify-content-between p-0">
              <h5>&#160;Chicken Burger</h5>
              <h5 class="item-price">$115</h5>
              </div>
              <hr class="m-0">
              <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
              </div>
              <div class="food-item col-md-6 col-sm-12">
              <img src="./images/menu-8.jpg" alt="">
              <div class="item-content p-1">
              <div class="item-name d-flex justify-content-between p-0">
              <h5>&#160;Chicken Burger</h5>
              <h5 class="item-price">$115</h5>
              </div>
              <hr class="m-0">
              <p class=" m-0 p-2 text-black text-opacity-75"><i>lorem ipsum dolor sit amet consectetur, elit.</i></p>
              </div>
              <!-- </div> -->
              </div>
              `
  rowcontent(button3)
  activebutton.classList.remove('menu_active')
  button3.classList.add('menu_active')
})


var rowcontent = ()=>{
  activebutton = document.querySelector(".menu_active")
  var row = document.querySelector('.menu-row')
  row.innerHTML = content
}

rowcontent()

var copy=document.querySelector('.slider').cloneNode(true);
        document.querySelector('.clients').appendChild(copy);