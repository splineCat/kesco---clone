// header 마우스 올릴 때 색 변경되게
const header = document.getElementById('header');
const util_header_bg = document.querySelector('.util_header_bg');
const gnb_top_wrap = document.querySelector('.gnb_top_wrap');
const gnb_header = document.querySelector('.gnb_header');
const links = gnb_top_wrap.querySelectorAll('.gnb_top ul li a');
const logo = gnb_header.querySelector('.logo a');
const gnb_bg = document.querySelector('.gnb_bg');
const hamburger = document.querySelectorAll('.menu-trigger span');

// 햄버거

// 마우스 스크롤하면 fixed로
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= 30) {
    gnb_top_wrap.style.position = 'fixed';
    gnb_top_wrap.style.top = '0';
    gnb_top_wrap.style.transition = 'all 0.3s';

    gnb_top_wrap.style.backgroundColor = '#FFFFFF';
    util_header_bg.style.backgroundColor = '#0C347C';
    logo.style.background =
      'url(src/img/head_logo_on.png) center / 222px no-repeat';
    links.forEach((link) => {
      link.style.color = 'black';
    });

    hamburger.forEach((ham) => {
      ham.style.backgroundColor = 'black';
    });

    // gnb_lists.forEach((el) => el.classList.remove('on'));

    gnb_bg.style.position = 'fixed';
    gnb_bg.style.top = '90px';
    //
  } else {
    gnb_top_wrap.style.position = '';
    gnb_top_wrap.style.top = '';

    gnb_top_wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
    util_header_bg.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    logo.style.background =
      'url(src/img/head_logo.png) center / 222px no-repeat';
    links.forEach((link) => {
      link.style.color = 'white';
    });

    hamburger.forEach((ham) => {
      ham.style.backgroundColor = '#fff';
    });

    gnb_bg.style.position = '';
    gnb_bg.style.top = '';
  }
});

// 마우스 올리면 색깔 바꾸기
gnb_top_wrap.addEventListener('mouseenter', () => {
  gnb_top_wrap.style.backgroundColor = '#FFFFFF';
  util_header_bg.style.backgroundColor = '#0C347C';
  logo.style.background =
    'url(src/img/head_logo_on.png) center / 222px no-repeat';
  links.forEach((link) => {
    link.style.color = 'black';
  });
  hamburger.forEach((ham) => {
    ham.style.backgroundColor = 'black';
  });
});

gnb_top_wrap.addEventListener('mouseleave', () => {
  if (window.scrollY >= 30) {
    return;
  }

  gnb_top_wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
  util_header_bg.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
  logo.style.background = 'url(src/img/head_logo.png) center / 222px no-repeat';
  links.forEach((link) => {
    link.style.color = 'white';
  });
  hamburger.forEach((ham) => {
    ham.style.backgroundColor = '#fff';
  });
});

util_header_bg.addEventListener('mouseenter', () => {
  gnb_top_wrap.style.backgroundColor = '#FFFFFF';
  util_header_bg.style.backgroundColor = '#0C347C';
  logo.style.background =
    'url(src/img/head_logo_on.png) center / 222px no-repeat';
  links.forEach((link) => {
    link.style.color = 'black';
  });
});

util_header_bg.addEventListener('mouseleave', () => {
  if (window.scrollY >= 30) {
    return;
  }

  gnb_top_wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
  util_header_bg.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
  logo.style.background = 'url(src/img/head_logo.png) center / 222px no-repeat';

  links.forEach((link) => {
    link.style.color = 'white';
  });

  hamburger.forEach((ham) => {
    ham.style.backgroundColor = '#fff';
  });
});

// 메뉴에 마우스 올리면 카테고리 드롭다운 후 유지
const gnb_links = document.querySelectorAll('.gnb_top ul a');
const gnb_lists = document.querySelectorAll('.gnb_bg .gnb_lists>li');

gnb_links.forEach((el, index) => {
  el.addEventListener('mouseenter', () => {
    gnb_lists.forEach((el) => el.classList.remove('on'));
    gnb_lists[index].classList.add('on');

    hamburger.forEach((ham) => {
      ham.style.backgroundColor = 'black';
    });
  });

  el.addEventListener('mouseleave', () => {
    gnb_lists.forEach((el) => el.classList.remove('on'));

    hamburger.forEach((ham) => {
      ham.style.backgroundColor = '#fff';
    });
  });
});

gnb_lists.forEach((el, index) => {
  el.addEventListener('mouseenter', () => {
    gnb_top_wrap.style.backgroundColor = '#FFFFFF';
    util_header_bg.style.backgroundColor = '#0C347C';
    logo.style.background =
      'url(src/img/head_logo_on.png) center / 222px no-repeat';
    links.forEach((link) => {
      link.style.color = 'black';
    });

    hamburger.forEach((ham) => {
      ham.style.backgroundColor = 'black';
    });

    gnb_lists[index].classList.add('on');
  });

  el.addEventListener('mouseleave', () => {
    gnb_lists[index].classList.remove('on');

    if (window.scrollY >= 30) {
      return;
    }

    gnb_top_wrap.style.backgroundColor = 'rgba(0, 0, 0, 0.15)';
    util_header_bg.style.backgroundColor = 'rgba(0, 0, 0, 0.25)';
    logo.style.background =
      'url(src/img/head_logo.png) center / 222px no-repeat';

    links.forEach((link) => {
      link.style.color = 'white';
    });

    hamburger.forEach((ham) => {
      ham.style.backgroundColor = '#fff';
    });
  });
});
