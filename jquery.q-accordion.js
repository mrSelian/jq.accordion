(function ($) {

    $.fn.qAccordion = function (options) {
        const settings = $.extend({
            hideOther: true,
            topMenu: '.topmenu',
            subMenu: '.submenu',
            menuItem: '.menu-item'
        }, options);

        const onClick = function () {
            const sub = $(this).next(settings.subMenu);

            if (settings.hideOther) {
                sub.siblings(settings.subMenu).slideUp();
            }

            sub.slideToggle();
        }

        this.find(settings.subMenu).hide();

        this.find(settings.topMenu).on('click', settings.menuItem, onClick)

        return this;
    };
}(jQuery));