const swiper = new Swiper('.achievements-swiper', {
  navigation: {
    nextEl: '.swiper__button_next',
    prevEl: '.swiper__button_prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 24
    },

    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  },
  on: {
    slideChangeTransitionEnd: function () {
      if (swiper.realIndex == 1) {
        swiper.navigation.prevEl.forEach(el => el.classList.remove('swiper__button_disabled'))
      } else if (swiper.realIndex == 0) {
        swiper.navigation.prevEl.forEach(el => el.classList.add('swiper__button_disabled'))
      }
    },
  }
});

if (document.querySelector('.object-gallery') || document.querySelector('.project-page-about__gallery')) {
  const swiperObject = new Swiper('.object-gallery-swiper', {
    navigation: {
      nextEl: '.swiper__button_next',
      prevEl: '.swiper__button_prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1
      },

      992: {
        slidesPerView: 2,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    on: {
      slideChangeTransitionEnd: function () {
        if (swiperObject.realIndex == 1) {
          swiperObject.navigation.prevEl.forEach(el => el.classList.remove('swiper__button_disabled'))
        } else if (swiperObject.realIndex == 0) {
          swiperObject.navigation.prevEl.forEach(el => el.classList.add('swiper__button_disabled'))
        }
      },
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const openNavbar = () => {
    const burger = document.querySelector('.header-burger');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay')

    burger.addEventListener('click', () => {
      navbar.classList.toggle('is-active');

      if (navbar.classList.contains('is-active')) {
        overlay.classList.add('is-active');
      }
    })

    navbar.querySelector('.navbar-mobile__close').addEventListener('click', () => {
      navbar.classList.remove('is-active');
      overlay.classList.remove('is-active');
    })

    overlay.addEventListener('click', () => {
      navbar.classList.remove('is-active');
      overlay.classList.remove('is-active');
    })
  }
  openNavbar();

  if (document.querySelector('.objects')) {
    const tabs = () => {
      const tabsBtns = document.querySelector('.objects-tabs');
      const objectsTabs = document.querySelector('.objects-content');

      const getActiveTabName = () => {
        return tabsBtns.querySelector('.objects-tabs__btn_active').dataset.status;
      }

      const setActiveContent = () => {
        if (objectsTabs.querySelector('.objects-list_active')) {
          objectsTabs.querySelector('.objects-list_active').classList.remove('objects-list_active');
        }
        objectsTabs.querySelector(`[data-status=${getActiveTabName()}]`).classList.add('objects-list_active');
      }

      if (!tabsBtns.querySelector('.objects-tabs__btn_active')) {
        tabsBtns.querySelector('.objects-tabs__btn').classList.add('objects-tabs__btn_active');
      }

      setActiveContent(getActiveTabName());

      tabsBtns.addEventListener('click', e => {
        const btn = e.target.closest('.objects-tabs__btn');
        if (!btn) return;
        if (btn.classList.contains('objects-tabs__btn_active')) return;

        if (tabsBtns.querySelector('.objects-tabs__btn_active')) {
          tabsBtns.querySelector('.objects-tabs__btn_active').classList.remove('objects-tabs__btn_active');
        }

        btn.classList.add('objects-tabs__btn_active');

        setActiveContent(getActiveTabName());
      })

      const setCountObjectsBtn = () => {
        const objectsBtns = document.querySelectorAll('.objects-tabs__btn');
        const objectsLists = document.querySelectorAll('.objects-list');

        for (let i = 0; i < objectsBtns.length; i++) {
          objectsBtns[i].querySelector('.objects-tabs__btn_count').innerText = objectsLists[i].children.length;
        }
      }
      setCountObjectsBtn();
    }
    tabs();
  }

  if (document.querySelector('.project-page-about')) {
    const tabsInProjectPage = () => {
      const tabsBtns = document.querySelector('.project-page-about__buttons');
      const objectsTabs = document.querySelector('.project-page-about__content');

      const getActiveTabName = () => {
        return tabsBtns.querySelector('.project-page-about__btn_active').dataset.info;
      }

      const setActiveContent = () => {
        if (objectsTabs.querySelector('.project-page-about__item_active')) {
          objectsTabs.querySelector('.project-page-about__item_active').classList.remove('project-page-about__item_active');
        }
        objectsTabs.querySelector(`[data-info=${getActiveTabName()}]`).classList.add('project-page-about__item_active');
      }

      if (!tabsBtns.querySelector('.project-page-about__btn_active')) {
        tabsBtns.querySelector('.project-page-about__btn').classList.add('project-page-about__btn_active');
      }

      setActiveContent(getActiveTabName());

      tabsBtns.addEventListener('click', e => {
        const btn = e.target.closest('.project-page-about__btn');
        if (!btn) return;
        if (btn.classList.contains('project-page-about__btn_active')) return;

        if (tabsBtns.querySelector('.project-page-about__btn_active')) {
          tabsBtns.querySelector('.project-page-about__btn_active').classList.remove('project-page-about__btn_active');
        }

        btn.classList.add('project-page-about__btn_active');

        setActiveContent(getActiveTabName());
      })
    }
    tabsInProjectPage();
  }
})

new WOW().init();