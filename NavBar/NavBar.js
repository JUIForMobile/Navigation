/*
 * @Author: your name
 * @Date: 2020-01-05 21:45:00
 * @LastEditTime : 2020-01-06 16:09:31
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Navigation\NavBar\NavBar.js
 */
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
   
        element = $(element);
        var title = element.html();
        //default mode is dark
        var mode = element.attr('mode') === 'light'?'light':'dark';
        var type = element.attr('type');
        if (type) {
            type = JSON.parse( type.replace(/\b/g, "\"") );
        }
        console.log(type);
        var leftContent = element.attr('leftContent');
        var rightContent = element.attr('rightContent');
        var onLeftClick = element.attr('onLeftClick');
        element.html($('<div class="jf-navbar"> <div class="jf-navbar-left"> <span class="jf-navbar-left-icon"> </span> </div> <div class="jf-navbar-title"> </div> <div class="jf-navbar-right"> </div> </div>'));

        //add title content
        element.find('.jf-navbar-title').html(title);
        //add leftcontent
        element.find('.jf-navbar-left').append(leftContent);
        //add rightContent
        element.find('.jf-navbar-right').append(rightContent);
        //add mode
        element.find('.jf-navbar').addClass('jf-navbar-' + mode);
        //createIcon
        element.find('.jf-navbar-left-icon').append(createIcon(type));
        

    }

    /**
     *  create form Data-Display Icon
     * @param {JSON type} type 
     */
    function createIcon(type) {
        
        var icon = $('<Icon type="' + type.icon.type + '" color="#' + type.icon.color + '" size="' + type.icon.size + '"></Icon>');
        return icon;
    }

    customTag('Nav-Bar', NavBarHelper);

});