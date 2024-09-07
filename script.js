document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    
    var elems2 = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems2);
  });