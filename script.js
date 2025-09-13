
(function(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if ((path === "" && href.includes("index.html")) || href.endsWith(path)) {
      a.classList.add("active");
    }
  });
})();


(function(){
  const cards = document.querySelectorAll(".card");
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("reveal"); }});
  }, { threshold:.12 });
  cards.forEach(c=>io.observe(c));
})();
