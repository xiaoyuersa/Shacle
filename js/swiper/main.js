var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 水平切换
    loop: 'ture', // 循环切换

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 5000, // 5秒切换一次
    }
})  