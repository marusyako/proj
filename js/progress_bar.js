window.addEventListener('scroll', scrollBar)




function scrollBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";}