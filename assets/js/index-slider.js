function slide(shadmehr) {
    document
      .querySelector('.window>img')
      .setAttribute('src', shadmehr.firstChild.getAttribute('src'));
  
    let audios = document.querySelectorAll('audio');
  
    // console.log(audios.length);
    if (shadmehr) {
      for (let i = 0; i < audios.length; i++) {
        audios[i].pause();
      }
      document.getElementById(shadmehr.getAttribute('data-status')).play();
    }
  }