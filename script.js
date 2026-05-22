const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");

const addCart = document.querySelector(".add-cart");
const cartContent = document.querySelector(".cart-content");
const cartCount = document.querySelector(".cart-count");

const cartIcon = document.querySelector(".cart-icon");
const cartBox = document.querySelector(".cart-box");

let amount = 0;

plus.addEventListener("click", () => {
  amount++;
  quantity.textContent = amount;
});

minus.addEventListener("click", () => {

  if (amount > 0) {
    amount--;
    quantity.textContent = amount;
  }

});

/* =========================
   CART
========================= */

cartIcon.addEventListener("click", () => {
  cartBox.style.display =
    cartBox.style.display === "block"
      ? "none"
      : "block";
});

addCart.addEventListener("click", () => {

  if (amount === 0) return;

  cartCount.style.display = "block";
  cartCount.textContent = amount;

  cartContent.innerHTML = `
  
    <div class="cart-item">

      <img src="./images/image-product-1-thumbnail.jpg">

      <div class="cart-info">

        Fall Limited Edition Sneakers
        <br>

        $125.00 x ${amount}
        <strong>
          $${125 * amount}.00
        </strong>

      </div>

      <img
        class="delete-btn"
        src="./images/icon-delete.svg"
      />

    </div>

    <button class="checkout">
      Checkout
    </button>
  
  `;

  const deleteBtn =
    document.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {

    cartContent.innerHTML = `
      <p class="empty">
        Your cart is empty.
      </p>
    `;

    cartCount.style.display = "none";

  });

});

/* =========================
   GALLERY
========================= */

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    mainImage.src = thumb.dataset.full;

    thumbs.forEach((t) =>
      t.classList.remove("active")
    );

    thumb.classList.add("active");

  });

});

/* =========================
   LIGHTBOX
========================= */

const lightbox =
  document.querySelector(".lightbox");

const lightboxMain =
  document.querySelector(".lightbox-main");

const closeBtn =
  document.querySelector(".close");

const lightThumbs =
  document.querySelectorAll(".light-thumb");

const images = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg"
];

let current = 0;

document
  .querySelector(".main-image")
  .addEventListener("click", () => {

    lightbox.style.display = "flex";

  });

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

function updateLightbox() {

  lightboxMain.src = images[current];

  lightThumbs.forEach((thumb, index) => {

    thumb.classList.remove("active");

    if (index === current) {
      thumb.classList.add("active");
    }

  });

}

document
  .querySelector(".next")
  .addEventListener("click", () => {

    current++;

    if (current >= images.length) {
      current = 0;
    }

    updateLightbox();

  });

document
  .querySelector(".prev")
  .addEventListener("click", () => {

    current--;

    if (current < 0) {
      current = images.length - 1;
    }

    updateLightbox();

  });

lightThumbs.forEach((thumb, index) => {

  thumb.addEventListener("click", () => {

    current = index;

    updateLightbox();

  });

});