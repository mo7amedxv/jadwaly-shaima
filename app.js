const whatsappNumber = "201024165262";

const pdfs = [
  {
    img: "imgs/pdf1.avif",
    name: "ملف الأنشطة الصيفية",
    desc: "برنامج صيفي جاهز للحضانات يشمل أنشطة تعليمية وترفيهية منظمة للفترة من مايو إلى أغسطس.",
    price: 200,
  },
  {
    img: "imgs/pdf3.avif",
    name: "الخطة التعليمية الصيفية (مايو – أغسطس)",
    desc: "مخطط مرن وجاهز للطباعة لتنظيم المهام والأنشطة اليومية.",

    price: 150,
  },
  {
    img: "imgs/pdf2.avif",
    name: "حقيبة جدولي الإدارية والتنظيمية للحضانات",
    desc: "حقيبة إدارية متكاملة للحضانات تضم نماذج التسجيل والتقييم والعقود واللوائح الجاهزة للاستخدام.",
    price: 150,
  },
];
const courses = [
  {
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&auto=format&fit=crop&q=80",
    name: "دورة التخطيط الإستراتيجي للأنشطة الصيفية",
    desc: "ورشة مكثفة لبناء خطة ترفيهية وتعليمية متكاملة للحضانة.",
    price: 350,
  },
  {
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 2)
    name: "ورشة تصميم الوسائل التعليمية المبتكرة",
    desc: "كورس تطبيقي بالفيديو لصنع مجسمات تعليمية بأدوات بسيطة.",
    price: 400,
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 3)
    name: "دورة التميز الإداري وتأسيس الحضانات",
    desc: "خطوات إدارة العمل والتعامل الاحترافي مع أولياء الأمور.",
    price: 600,
  },
  {
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 4)
    name: "دورة استراتيجيات التعلم النشط للأطفال",
    desc: "أحدث أساليب التدريس التفاعلية لزيادة استيعاب وتركيز الطفل.",
    price: 300,
  },
  {
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 5)
    name: "دورة تعديل السلوك والمشكلات النفسية",
    desc: "طرق تربوية عملية للتعامل مع عناد أو عدوانية الأطفال.",
    price: 450,
  },
  {
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 6)
    name: "دورة مهارات ومعايير معلمة الروضة المحترفة",
    desc: "تأهيل شامل لامتلاك مهارات الشرح الجذاب وإدارة الفصل.",
    price: 280,
  },
  {
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=80",
    name: "ورشة أساسيات الحساب الذهني (اليوسي ماس)",
    desc: "تمكين المعلمات من تدريس مهارات الحساب السريع للأطفال.",
    price: 500,
  },
  {
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&auto=format&fit=crop&q=80",
    name: "دورة صعوبات التعلم عند الأطفال وطرق علاجها",
    desc: "كيفية اكتشاف مشكلات القراءة والكتابة والتعامل معها بفعالية.",
    price: 380,
  },
  {
    img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 9)
    name: "ورشة فن سرد القصص ومسرح العرائس",
    desc: "تقنيات لغة الجسد وتغيير الصوت لجذب انتباه الطفل للقصة.",
    price: 220,
  },
  {
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=80", // تم التعديل (رقم 10)
    name: "دورة التسويق الفعال واجتذاب العملاء للحضانات",
    desc: "خطة تسويقية لزيادة المشتركين وبناء سمعة قوية للحضانة.",
    price: 550,
  },
];
function renderCards(itemsArray, containerId, itemTypeLabel) {
  let cardsHtml = "";
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < itemsArray.length; i++) {
    const item = itemsArray[i];
    const message = `مرحباً، أود شراء ${itemTypeLabel}: ${item.name}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    cardsHtml += `
      <div class="card">
      <div class="card-img-wrapper">
        <img  loading="lazy" src="${item.img}" alt="${item.name}">
        </div>
        <div class="card-content">
          <h3>${item.name}</h3>
          <p  class="desc">${item.desc}</p>
        <div class="card-footer">
          <p class="price">${item.price} <span class="currency">ج.م</span></p>
          <a href="${whatsappUrl}" target="_blank" class="buy-btn">شراء عبر واتساب</a>
        </div>
        </div>
        </div>
    `;
    container.innerHTML = cardsHtml;
  }
}

renderCards(pdfs, "pdf-grid", "PDF");
renderCards(courses, "courses-grid", "Course");

function initGrid(grid) {
  const wrap = document.createElement("div");
  wrap.className = "scroll-indicator-wrap";
  wrap.innerHTML =
    '<div class="scroll-track"><div class="scroll-thumb"></div></div>';
  grid.after(wrap);

  const track = wrap.querySelector(".scroll-track");
  const thumb = wrap.querySelector(".scroll-thumb");

  function updateThumb() {
    const max = grid.scrollWidth - grid.clientWidth;
    const pct = max > 0 ? Math.abs(grid.scrollLeft) / max : 0;
    const tw = (grid.clientWidth / grid.scrollWidth) * 100;
    thumb.style.width = tw.toFixed(1) + "%";
    thumb.style.marginRight = (pct * (100 - tw)).toFixed(2) + "%";
  }

  grid.addEventListener("scroll", updateThumb, { passive: true });
  window.addEventListener("resize", updateThumb, { passive: true });
  updateThumb();

  let isDragging = false;
  let startX = 0;
  let startScroll = 0;

  thumb.style.cursor = "grab";

  thumb.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX;
    startScroll = grid.scrollLeft;
    thumb.style.cursor = "grabbing";
    thumb.style.transition = "none";
    e.preventDefault();
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const delta = e.pageX - startX;
    const scrollRatio = grid.scrollWidth / track.clientWidth;
    grid.scrollLeft = startScroll + delta * scrollRatio;
  });

  document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    thumb.style.cursor = "grab";
    thumb.style.transition = "";
  });
}

document.querySelectorAll(".product-grid").forEach(initGrid);
