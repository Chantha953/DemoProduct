var product = [
  {
    image:
      "https://photographylife.com/wp-content/uploads/2025/01/Nikon-Z-58mm-f0.95-Noct-Product-Photo-on-Camera.jpg",
    prd_name: "Camera 1",
    price: 100,
    discount: 10,
  },
  {
    image:
      "https://www.prophotostudio.net/wp-content/uploads/2021/07/mirrorless-digital-camera-on-desk.jpg",
    prd_name: "Camera 2",
    price: 200,
    discount: 15,
  },
  {
    image:
      "https://www.prophotostudio.net/wp-content/uploads/2021/02/best-camera-photos1-scaled.jpeg",
    prd_name: "Camera 3",
    price: 60,
    discount: 25,
  },
  {
    image:
      "https://photographyconcentrate.com/wp-content/uploads/Best-Camera-For-Product-Photography-scaled.jpg",
    prd_name: "Camera 4",
    price: 300,
    discount: 20,
  },
  {
    image:
      "https://www.cnet.com/a/img/resize/74ef610a164b07818b5973c25b60c08ea61f02f8/hub/2023/01/26/c72313e2-806d-4ce3-8783-5c288d8fdf6f/canon-r6-ii-review-cnet-best-camera.jpg?auto=webp&fit=crop&height=360&width=640",
    prd_name: "Camera 5",
    price: 100,
    discount: 10,
  },
  {
    image:
      "https://www.prophotostudio.net/wp-content/uploads/2021/07/mirrorless-digital-camera-on-desk.jpg",
    prd_name: "Camera 6",
    price: 200,
    discount: 15,
  },
  {
    image:
      "https://www.prophotostudio.net/wp-content/uploads/2021/02/best-camera-photos1-scaled.jpeg",
    prd_name: "Camera 7",
    price: 60,
    discount: 25,
  },
  {
    image:
      "https://photographyconcentrate.com/wp-content/uploads/Best-Camera-For-Product-Photography-scaled.jpg",
    prd_name: "Camera 8",
    price: 300,
    discount: 20,
  },
];
var item = ""; //empty string
for (var i in product) {
  item =
    item +
    `
        <div class="card">
          <div class="image">
            <img
              src="${product[i].image}"
              alt="photo"
            />
          </div>
          <div class="des-prd">
            <h2>${product[i].prd_name}</h2>
            <p>$${product[i].price}</p>
          </div>
            <button class="btn view-btn" onclick=viewProduct(${product[i]})>View more</button>
          <div class="discount">${product[i].discount}%</div>
        </div>
    `;
}
document.querySelector(".row").innerHTML = item;
function viewProduct(product) {
  const popup = document.querySelector(".view_more");
  const boxImage = document.querySelector(".box-image");
  boxImage.innerHTML = `
   <img src="${product.img}" alt="">
   <div class="des-prd">
        <h2>${product[i].prd_name}</h2>
        <p>Price:$${product[i].price}</p>
    </div>
  `;
  popup.style.visibility = "visible";
}
const viewBtn = document.querySelectorAll(".view-btn");
const viewMore = document.querySelector(".view_more");
const closeBtn = document.querySelector(".close");
const viewMoreImg = document.querySelector(".view_more .box-image img");
viewBtn.forEach(button => {
  button.addEventListener('click', function(){
    // alert();
    const productImg =  this.closest('.card').querySelector('img');
    viewMoreImg.src=productImg.src;
    viewMore.style.visibility = "visible";
  })
});
closeBtn.addEventListener("click", function () {
  viewMore.style.visibility = "hidden";
});
viewMore.addEventListener("click", function (e) {
  if (e.target === viewMore) {
    viewMore.style.visibility = "hidden";
  }
});
