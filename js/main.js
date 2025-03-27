let products = [];
let currentView = "table"; // Dastlabki ko‘rinish

// Ma'lumotlarni API dan olish
async function fetchData() {
  const response = await fetch("https://fakestoreapi.com/products");
  products = await response.json();
  renderView(); // Ma'lumotlar yuklanganda dastlabki ko‘rinishni chizish
}

// Ko‘rinishni almashtirish funksiyasi
function switchView(view) {
  currentView = view;
  renderView();
}

// Table ko‘rinishi
function renderTable() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <table id="table-view">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nomi</th>
          <th>Narxi</th>
        </tr>
      </thead>
      <tbody>
        ${products
          .map(
            (product) => `
          <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>$${product.price}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;
}

// Vertical Card ko‘rinishi
function renderVerticalCards() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="card-container" style="display: flex; flex-direction: column; gap: 20px;">
      ${products
        .map(
          (product) => `
        <div
        class="flex flex-col w-[276px] h-[354px] gap-[12px] rounded-[12px] p-[16px] pb-[24px] bg-[#F5F5F5]"
      >
        <div class="flex flex-col w-[244px] h-[218px] gap-[20px]">
          <img
            class="w-[244px] h-[174px] rounded-[6px] object-contain bg-white"
            src="${product.image}"
            alt="${product.title}"
          />
          <div class="w-[244px] h-[24px] flex justify-between items-center">
            <h3
              class="font-[SF Pro Display] font-semibold text-[16px] leading-[24px] tracking-[0px]"
            >
              ${product.title}
            </h3>
          </div>
        </div>
        <div class="w-[244px] h-[48px]">
          <div class="w-[244px] h-[24px] flex gap-[16px]">
            <span
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-[#999CA0]"
              >category:</span
            >
            <p
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-[#4E46B4]"
            >
              ${product.category}
            </p>
          </div>
          <div class="w-[244px] h-[24px] flex gap-[36px]">
            <span
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-[#999CA0]"
              >rating:</span
            >
            <p
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-black"
            >
              ${product.rating.rate}
            </p>
          </div>
        </div>
        <p
          class="font-[SF Pro Display] font-semibold text-[16px] leading-[24px] tracking-[0px] text-[#4E46B4]"
        >
          ${product.price} $
        </p>
      </div>
      `
        )
        .join("")}
    </div>
  `;
}

// Horizontal Card ko‘rinishi
function renderHorizontalCards() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <div class="card-container" style="display: flex; flex-direction: row; gap: 20px; overflow-x: auto;">
      ${products
        .map(
          (product) => `
        <div
        class="flex flex-col w-[276px] h-[354px] gap-[12px] rounded-[12px] p-[16px] pb-[24px] bg-[#F5F5F5]"
      >
        <div class="flex flex-col w-[244px] h-[218px] gap-[20px]">
          <img
            class="w-[244px] h-[174px] rounded-[6px] object-contain bg-white"
            src="${product.image}"
            alt="${product.title}"
          />
          <div class="w-[244px] h-[24px] flex justify-between items-center">
            <h3
              class="font-[SF Pro Display] font-semibold text-[16px] leading-[24px] tracking-[0px]"
            >
              ${product.title}
            </h3>
          </div>
        </div>
        <div class="w-[244px] h-[48px]">
          <div class="w-[244px] h-[24px] flex gap-[16px]">
            <span
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-[#999CA0]"
              >category:</span
            >
            <p
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-[#4E46B4]"
            >
              ${product.category}
            </p>
          </div>
          <div class="w-[244px] h-[24px] flex gap-[36px]">
            <span
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-[#999CA0]"
              >rating:</span
            >
            <p
              class="font-[SF Pro Display] font-normal text-[14px] leading-[24px] tracking-[0px] align-middle text-black"
            >
              ${product.rating.rate}
            </p>
          </div>
        </div>
        <p
          class="font-[SF Pro Display] font-semibold text-[16px] leading-[24px] tracking-[0px] text-[#4E46B4]"
        >
          ${product.price} $
        </p>
      </div>
      `
        )
        .join("")}
    </div>
  `;
}

// Joriy ko‘rinishni chizish
function renderView() {
  if (currentView === "table") {
    renderTable();
  } else if (currentView === "vertical") {
    renderVerticalCards();
  } else if (currentView === "horizontal") {
    renderHorizontalCards();
  }
}

// Dastur boshlanganda ma'lumotlarni yuklash
fetchData();
