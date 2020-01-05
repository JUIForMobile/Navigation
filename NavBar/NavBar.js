$(function () {
    /**
     * find the customized tag,
     * add customized class to change style
     *
     * @param {customized tag} tagName
     * @param {function} fn
     */
    function customTag(tagName, fn) {
        Array
            .from($(tagName))
            .forEach(fn);
    }

    function NavBarHelper(element) {
        console.log(this);
        element = $(element);
        var title = element.html();
        //default mode is dark
        var mode = element.attr('mode') === 'light'?'light':'dark';
        var icon = element.attr('icon');
        var leftContent = element.attr('leftContent');
        var rightContent = element.attr('rightContent');
        var onLeftClick = element.attr('onLeftClick');
        element.html($('<div class="jf-navbar"> <div class="jf-navbar-left"> <span class="jf-navbar-left-icon"> </span> </div> <div class="jf-navbar-title"> </div> <div class="jf-navbar-right"> </div> </div>'));

        //add title content
        $('.jf-navbar-title').html(title);
        //add leftcontent
        $('.jf-navbar-left').append(leftContent);
        //add rightContent
        $('.jf-navbar-right').append(rightContent);
        //add mode
        $('.jf-navbar').addClass('jf-navbar-' + mode);
        

    }

    customTag('Nav-Bar', NavBarHelper);

});