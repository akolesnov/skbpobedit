  function redirect(){
    if (window.location.href === 'search.html'){
      location.reload()
    }
    else {window.location.href = 'search.html'}
  }

  document.getElementById('submit').onclick  = function(){
    let element = document.getElementById('search').value;
    element = element.toLowerCase();
    localStorage.setItem('value', element);
    redirect();
  };
