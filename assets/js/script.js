const products = [
  {
    id: "sofa-linen",
    name: "Sofa Linen Sóng Mềm",
    category: "Phòng khách",
    price: 7590000,
    rating: "4.9",
    badge: "BÁN CHẠY",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=80",
    alt: "Sofa phòng khách hiện đại",
    description: "Sofa dáng cong mềm mại với chất vải linen thoáng mát, tạo nên góc thư giãn ấm áp cho cả gia đình.",
    material: "Khung gỗ sồi, vải linen",
    dimensions: "220 × 88 × 78 cm",
  },
  {
    id: "ban-an-moc",
    name: "Bàn ăn gỗ Mộc Cát",
    category: "Phòng bếp",
    price: 4890000,
    rating: "4.8",
    badge: "MỚI",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    alt: "Bàn ăn gỗ cho không gian bếp",
    description: "Bàn ăn gỗ tự nhiên với đường nét gọn gàng, đủ rộng cho những bữa cơm sum họp hằng ngày.",
    material: "Gỗ cao su hoàn thiện dầu",
    dimensions: "160 × 80 × 75 cm",
  },
  {
    id: "giuong-forest",
    name: "Giường ngủ Forest",
    category: "Phòng ngủ",
    price: 6990000,
    rating: "5.0",
    badge: "ĐƯỢC YÊU THÍCH",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    alt: "Giường ngủ gỗ sáng hiện đại",
    description: "Thiết kế giường thấp thanh thoát, kết cấu chắc chắn và tông gỗ dịu mắt cho phòng ngủ thư thái.",
    material: "Gỗ sồi tự nhiên",
    dimensions: "160 × 200 cm",
  },
  {
    id: "den-led",
    name: "Đèn LED Aura",
    category: "Phòng khách",
    price: 1290000,
    rating: "4.9",
    badge: "",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    alt: "Đèn trang trí LED cho phòng khách",
    description: "Ánh sáng dịu và kiểu dáng tối giản giúp chiếc đèn trở thành điểm nhấn ấm cúng bên sofa hoặc bàn đọc.",
    material: "Kim loại sơn tĩnh điện, LED",
    dimensions: "Cao 145 cm",
  },
  {
    id: "ghe-nham",
    name: "Ghế nhãm Zen",
    category: "Phòng khách",
    price: 2150000,
    rating: "4.9",
    badge: "MỚI",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    alt: "Ghế nhãm phong cách hiện đại",
    description: "Ghế thư giãn có phần tựa ôm lưng và đệm êm, phù hợp cho góc đọc sách hay phòng khách nhỏ.",
    material: "Gỗ cao su, vải bố",
    dimensions: "68 × 72 × 76 cm",
  },
  {
    id: "tu-giay",
    name: "Tủ giày Pinewood",
    category: "Phòng ngủ",
    price: 3290000,
    rating: "4.8",
    badge: "",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    alt: "Tủ giày gỗ đẹp cho phòng ngủ",
    description: "Tủ giày nhỏ gọn với nhiều ngăn lưu trữ, giúp lối vào nhà luôn ngăn nắp và thoáng đãng.",
    material: "Gỗ công nghiệp phủ veneer",
    dimensions: "90 × 35 × 100 cm",
  },
  {
    id: "goi-sofa",
    name: "Bộ ga giường Màu Nâu",
    category: "Phòng ngủ",
    price: 1950000,
    rating: "4.9",
    badge: "",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=700&q=80",
    alt: "Bộ đồ ngủ và ga giường",
    description: "Bộ ga giường tông nâu ấm, chất vải mềm mại tạo cảm giác dễ chịu cho những giờ nghỉ ngơi.",
    material: "Cotton cao cấp",
    dimensions: "Bộ ga cho nệm 160 × 200 cm",
  },
  {
    id: "tua-go",
    name: "Tủ chén gỗ Oak",
    category: "Phòng bếp",
    price: 3490000,
    rating: "4.9",
    badge: "BÁN CHẠY",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=700&q=80",
    alt: "Tủ chén gỗ cho phòng bếp",
    description: "Tủ bếp dáng đứng với các ngăn kín và kệ mở, tiện sắp xếp vật dụng mà vẫn giữ vẻ gọn gàng.",
    material: "Gỗ công nghiệp phủ veneer sồi",
    dimensions: "120 × 40 × 180 cm",
  },
];

const money = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0,
});

const productGrid = document.querySelector("#product-grid");
const productDetail = document.querySelector("#product-detail");
const cartCount = document.querySelector("#cart-count");
const cartDrawer = document.querySelector("#cart-drawer");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartItems = document.querySelector("#cart-items");
const toast = document.querySelector("#toast");
const searchInput = document.querySelector("#search-input");
const filterGroup = document.querySelector(".product-filters");
const categoryGrid = document.querySelector(".category-grid");
const checkoutDialog = document.querySelector("#checkout-dialog");
const checkoutForm = document.querySelector("#checkout-form");
const orderSuccess = document.querySelector("#order-success");
const newsletterForm = document.querySelector("#newsletter-form");
const newsletterEmail = document.querySelector("#newsletter-email");
const newsletterMessage = document.querySelector("#newsletter-message");

let activeFilter = "Tất cả";
let searchTerm = "";
let toastTimer;
let cart = [];
const cartStorageKey = "noi-that-moc-cart";

function ensureProductPreviewModal() {
  if (document.querySelector("#product-preview-modal")) return;

  const modal = document.createElement("div");
  modal.id = "product-preview-modal";
  modal.className = "product-preview-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="product-preview-backdrop" data-close-preview="true"></div>
    <div class="product-preview-panel" role="dialog" aria-modal="true" aria-labelledby="product-preview-title">
      <button type="button" class="product-preview-close" aria-label="Đóng xem nhanh" data-close-preview="true">×</button>
      <div class="product-preview-image"></div>
      <div class="product-preview-body">
        <span class="product-preview-category"></span>
        <h3 id="product-preview-title"></h3>
        <p class="product-preview-description"></p>
        <div class="product-preview-meta">
          <span class="product-preview-rating"></span>
          <span class="product-preview-price"></span>
        </div>
        <div class="product-preview-actions">
          <button type="button" class="button button-dark" data-add-preview="">Thêm vào giỏ</button>
          <button type="button" class="button product-preview-secondary" data-close-preview="true">Đóng</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function openProductPreview(productId) {
  const product = findProductById(productId);
  const modal = document.querySelector("#product-preview-modal");

  if (!product || !modal) return;

  const imageWrap = modal.querySelector(".product-preview-image");
  const category = modal.querySelector(".product-preview-category");
  const title = modal.querySelector("#product-preview-title");
  const description = modal.querySelector(".product-preview-description");
  const rating = modal.querySelector(".product-preview-rating");
  const price = modal.querySelector(".product-preview-price");
  const addButton = modal.querySelector("[data-add-preview]");

  imageWrap.innerHTML = `<img src="${product.image}" alt="${product.alt}" loading="eager" />`;
  category.textContent = product.category;
  title.textContent = product.name;
  description.textContent = `${product.name} là lựa chọn hoàn hảo để tạo điểm nhấn cho không gian sống của bạn với phong cách tối giản, ấm áp và tiện dụng mỗi ngày.`;
  rating.textContent = `★ ${product.rating}`;
  price.textContent = money.format(product.price);
  addButton.dataset.addPreview = product.id;

  modal.classList.add("visible");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProductPreview() {
  const modal = document.querySelector("#product-preview-modal");
  if (!modal) return;

  modal.classList.remove("visible");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function normalizeText(value = "") {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function readCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    if (!Array.isArray(saved)) return [];
    return saved.filter(
      (item) =>
        item &&
        products.some((product) => product.id === item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    );
  } catch (error) {
    console.error("Không thể đọc giỏ hàng đã lưu:", error);
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  } catch (error) {
    console.error("Không thể lưu giỏ hàng:", error);
    showToast("Không thể lưu giỏ hàng trên thiết bị này.");
  }
}

function findProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getVisibleProducts() {
  const normalizedSearch = normalizeText(searchTerm);

  return products.filter((product) => {
    const matchesCategory = activeFilter === "Tất cả" || product.category === activeFilter;
    const haystack = normalizeText(`${product.name} ${product.category}`);
    const matchesSearch = !normalizedSearch || haystack.includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });
}

function renderProducts() {
  const visibleProducts = getVisibleProducts();

  if (visibleProducts.length === 0) {
    productGrid.innerHTML = '<p class="empty-results">Chưa tìm thấy sản phẩm phù hợp. Thử từ khóa khác bạn nhé.</p>';
    return;
  }

  productGrid.innerHTML = visibleProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.alt}" loading="lazy" />
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
            <button class="quick-add" data-add="${product.id}" aria-label="Thêm ${product.name} vào giỏ hàng">+</button>
          </div>
          <div class="product-info">
            <span class="product-category">${product.category}</span>
            <h3><a href="product.html?id=${encodeURIComponent(product.id)}">${product.name}</a></h3>
            <div class="product-bottom">
              <span class="product-price">${money.format(product.price)}</span>
              <span class="product-rating">★ ${product.rating}</span>
            </div>
            <div class="product-actions">
              <button class="product-preview-btn" type="button" data-preview="${product.id}">Xem nhanh</button>
              <a class="product-detail-link" href="product.html?id=${encodeURIComponent(product.id)}">Chi tiết <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </article>`,
    )
    .join("");
}

function renderProductDetail() {
  if (!productDetail) return;

  const productId = new URLSearchParams(window.location.search).get("id");
  const product = findProductById(productId);

  if (!product) {
    productDetail.innerHTML = `
      <section class="product-not-found">
        <span class="eyebrow">KHÔNG TÌM THẤY SẢN PHẨM</span>
        <h1>Món đồ này chưa có trong bộ sưu tập.</h1>
        <a class="button button-dark" href="products.html">Quay lại sản phẩm <span>→</span></a>
      </section>`;
    return;
  }

  productDetail.innerHTML = `
    <section class="product-detail-section">
      <nav class="product-breadcrumb" aria-label="Đường dẫn">
        <a href="index.html">Trang chủ</a><span>/</span><a href="products.html">Sản phẩm</a><span>/</span><a href="products.html?category=${encodeURIComponent(product.category)}">${product.category}</a><span>/</span><span>${product.name}</span>
      </nav>
      <div class="product-detail-layout">
        <div class="product-detail-visual">
          <img src="${product.image}" alt="${product.alt}" />
          ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        </div>
        <div class="product-detail-copy">
          <span class="eyebrow">${product.category.toUpperCase()}</span>
          <h1>${product.name}</h1>
          <div class="detail-rating"><span>★ ${product.rating}</span><span>Đánh giá từ khách hàng Mộc</span></div>
          <p class="product-detail-price">${money.format(product.price)}</p>
          <p class="product-detail-description">${product.description}</p>
          <div class="product-specifications">
            <div><span>Chất liệu</span><strong>${product.material}</strong></div>
            <div><span>Kích thước</span><strong>${product.dimensions}</strong></div>
            <div><span>Bảo hành</span><strong>12 tháng</strong></div>
            <div><span>Giao hàng</span><strong>2–5 ngày làm việc</strong></div>
          </div>
          <div class="product-detail-purchase">
            <label for="detail-quantity">Số lượng</label>
            <input id="detail-quantity" type="number" min="1" max="99" value="1" />
            <button class="button button-dark" type="button" data-add-detail="${product.id}">Thêm vào giỏ <span>→</span></button>
          </div>
          <p class="product-delivery-note">Miễn phí vận chuyển cho đơn hàng từ 3.000.000₫.</p>
        </div>
      </div>
    </section>`;
}

function renderCart() {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = findProductById(item.id);
    if (!product) return sum;
    return sum + product.price * item.quantity;
  }, 0);

  cartCount.textContent = String(itemCount);
  document.querySelector("#drawer-count").textContent = `(${itemCount})`;
  document.querySelector("#cart-subtotal").textContent = money.format(total);
  document.querySelector("#cart-empty").classList.toggle("visible", itemCount === 0);
  document.querySelector("#cart-footer").classList.toggle("hidden", itemCount === 0);

  cartItems.innerHTML = cart
    .map((item) => {
      const product = findProductById(item.id);
      if (!product) return "";

      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.alt}" />
          <div class="cart-item-info">
            <strong>${product.name}</strong>
            <span>${money.format(product.price)}</span>
            <div class="quantity-control">
              <button data-quantity="${product.id}" data-change="-1" aria-label="Giảm số lượng ${product.name}">−</button>
              <span>${item.quantity}</span>
              <button data-quantity="${product.id}" data-change="1" aria-label="Tăng số lượng ${product.name}">+</button>
            </div>
          </div>
          <div class="cart-item-end">
            <strong>${money.format(product.price * item.quantity)}</strong>
            <button class="remove-item" data-remove="${product.id}">Xóa</button>
          </div>
        </article>`;
    })
    .join("");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2300);
}

function addToCart(productId, quantity = 1) {
  const product = findProductById(productId);
  if (!product) return;

  const currentItem = cart.find((item) => item.id === productId);
  if (currentItem) currentItem.quantity += quantity;
  else cart.push({ id: productId, quantity });

  saveCart();
  renderCart();
  showToast(`${product.name} đã được thêm vào giỏ hàng ♡`);
}

function updateCartQuantity(productId, delta) {
  const item = cart.find((entry) => entry.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
    showToast("Đã xóa sản phẩm khỏi giỏ hàng.");
  } else {
    showToast("Số lượng đã được cập nhật.");
  }

  saveCart();
  renderCart();
}

function setCartOpen(open) {
  cartDrawer.classList.toggle("open", open);
  cartBackdrop.classList.toggle("open", open);
  cartDrawer.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
  if (open) document.querySelector("#close-cart").focus();
}

if (filterGroup) {
  filterGroup.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    activeFilter = button.dataset.filter;
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
    renderProducts();
  });
}

if (categoryGrid) {
  categoryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    activeFilter = button.dataset.category;
    document.querySelectorAll(".filter-chip").forEach((chip) => {
      chip.classList.toggle("active", chip.dataset.filter === activeFilter);
    });

    renderProducts();
    document.querySelector("#san-pham")?.scrollIntoView({ behavior: "smooth" });
  });
}

if (productGrid) {
  productGrid.addEventListener("click", (event) => {
    const previewButton = event.target.closest("[data-preview]");
    if (previewButton) {
      openProductPreview(previewButton.dataset.preview);
      return;
    }

    const button = event.target.closest("[data-add]");
    if (button) addToCart(button.dataset.add);
  });
}

if (productGrid) {
  ensureProductPreviewModal();
}

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close-preview]");
  if (closeButton) {
    closeProductPreview();
    return;
  }

  const addPreviewButton = event.target.closest("[data-add-preview]");
  if (addPreviewButton) {
    addToCart(addPreviewButton.dataset.addPreview);
    closeProductPreview();
    return;
  }

  const addDetailButton = event.target.closest("[data-add-detail]");
  if (addDetailButton) {
    const quantityInput = document.querySelector("#detail-quantity");
    const quantity = Math.min(99, Math.max(1, Number.parseInt(quantityInput?.value || "1", 10) || 1));
    addToCart(addDetailButton.dataset.addDetail, quantity);
  }
});

if (cartItems) {
  cartItems.addEventListener("click", (event) => {
    const quantityButton = event.target.closest("[data-quantity]");
    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {
      cart = cart.filter((item) => item.id !== removeButton.dataset.remove);
      saveCart();
      renderCart();
      showToast("Đã xóa sản phẩm khỏi giỏ hàng.");
      return;
    }

    if (quantityButton) {
      updateCartQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
    }
  });
}

if (searchInput) {
  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderProducts();
  });
}

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (searchInput) searchInput.focus();
  }

  const previewModal = document.querySelector("#product-preview-modal");
  if (event.key === "Escape" && previewModal && previewModal.classList.contains("visible")) {
    closeProductPreview();
    return;
  }

  if (event.key === "Escape" && siteHeader && siteHeader.classList.contains("menu-open")) {
    setMenuOpen(false);
  }

  if (event.key === "Escape" && cartDrawer && cartDrawer.classList.contains("open")) {
    setCartOpen(false);
  }
});

const openCartButton = document.querySelector("#open-cart");
const closeCartButton = document.querySelector("#close-cart");
const continueShoppingButton = document.querySelector("#continue-shopping");
if (openCartButton) openCartButton.addEventListener("click", () => setCartOpen(true));
if (closeCartButton) closeCartButton.addEventListener("click", () => setCartOpen(false));
if (cartBackdrop) cartBackdrop.addEventListener("click", () => setCartOpen(false));
if (continueShoppingButton) continueShoppingButton.addEventListener("click", () => setCartOpen(false));

const menuToggle = document.querySelector("#menu-toggle");
const siteHeader = document.querySelector(".site-header");
const mainNav = document.querySelector("#main-nav");

function setMenuOpen(open) {
  if (!menuToggle || !siteHeader) return;

  siteHeader.classList.toggle("menu-open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
  });
}

if (mainNav) {
  mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });
}

const checkoutButton = document.querySelector("#checkout-button");
if (checkoutButton) {
  checkoutButton.addEventListener("click", () => {
    setCartOpen(false);
    if (cart.length === 0) {
      showToast("Giỏ hàng của bạn đang trống.");
      return;
    }
    if (checkoutDialog) checkoutDialog.showModal();
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    event.currentTarget.hidden = true;
    if (orderSuccess) orderSuccess.hidden = false;
    cart = [];
    saveCart();
    renderCart();
    showToast("Đặt hàng demo thành công! ♡");
  });
}

const doneOrderButton = document.querySelector("#done-order");
if (doneOrderButton) {
  doneOrderButton.addEventListener("click", () => {
    if (checkoutDialog) checkoutDialog.close();
    if (checkoutForm) {
      checkoutForm.reset();
      checkoutForm.hidden = false;
    }
    if (orderSuccess) orderSuccess.hidden = true;
  });
}

if (checkoutDialog) {
  checkoutDialog.addEventListener("close", () => {
    if (checkoutForm) {
      checkoutForm.reset();
      checkoutForm.hidden = false;
    }
    if (orderSuccess) orderSuccess.hidden = true;
  });
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!newsletterEmail.reportValidity()) return;

    if (newsletterMessage) newsletterMessage.textContent = "Cảm ơn bạn! Nội Thất Mộc sẽ gửi những gợi ý và ưu đãi đẹp cho ngôi nhà của bạn.";
    newsletterEmail.value = "";
    showToast("Bạn đã đăng ký nhận tin thành công.");
  });
}

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    showToast("Yêu cầu của bạn đã được gửi thành công.");
    event.currentTarget.reset();
  });
}

const requestedCategory = new URLSearchParams(window.location.search).get("category");
if (["Phòng khách", "Phòng ngủ", "Phòng bếp"].includes(requestedCategory)) {
  activeFilter = requestedCategory;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === activeFilter);
  });
}

cart = readCart();
if (productGrid) renderProducts();
if (productDetail) renderProductDetail();
if (cartCount || cartItems) renderCart();
