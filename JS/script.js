/*======================== Typing Animation =====================*/
var typed = new Typed(".typing", {
    strings:["","Full-stack Developer", "Network Systems Architect", "Graph Theorist"],
    typeSpeed: 120,
    BackSpeed: 80,
    loop: true
})

/*======================== Aside START =====================*/
const navSection = document.querySelector(".nav")
 navLists = navSection.querySelector("li"),
  navListCount = navLists.length;
  const navTogglerBtn = document.querySelector(".nav-toggler"),
  navToggler2 = document.querySelector(".nav-toggler")
      aside = document.querySelector(".aside");
  navTogglerBtn.addEventListener("click", () => {
      asideSectionTogglerBtn();    
  })

  function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for(let i = 0; i < totalSection; i++){
        navLists[i].classList.toggle("open"); //End
    }
  }

  /*========= Aside END ===========*/



