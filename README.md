# jq.Quick-Accordion
Плагин-аккордеон для jQuery  (jQuery accordion plugin)
<hr>

**Пример разметки для плагина:**

```html
<nav class="menu">
        <ul class="topmenu">
            <li class="menu-item">Cat Names</li>
            <ul class="submenu">
                <li class="menu-item">Kitty</li>
                <li class="menu-item">Milo</li>
                <li class="menu-item">Luna</li>
                <li class="menu-item">Cat</li>
            </ul>

            <li class="menu-item">Dog Names</li>
            <ul class="submenu">
                <li class="menu-item">Rocky</li>
                <li class="menu-item">Duke</li>
                <li class="menu-item">Coco</li>
                <li class="menu-item">Boo</li>
            </ul>

            <li class="menu-item">Turtle Names</li>
            <ul class="submenu">
                <li class="menu-item">Donatello</li>
                <li class="menu-item">Leonardo</li>
                <li class="menu-item">Raphael</li>
                <li class="menu-item">Michelangelo</li>
            </ul>
        </ul>
</nav>
    
<script>
    $(function () {
        $('.menu').qAccordion();
    });
</script>
```
<hr>

**Вы также можете использовать свои селекторы**
(вместо *topmenu,submenu* и *menu-item*),
**передав при подключении необходимые значения селекторов:**

```js
 $('.menu').qAccordion({
            topMenu: 'ваш_селектор',
            subMenu: 'ваш_селектор',
            menuItem: 'ваш_селектор'
        });
```
Если в переданном массиве будет только один из селекторов, то другие сохранят значение по-умолчанию.
<hr>

**По-умолчанию плагин закрывает другие подменю при клике на новое.**
**Но передача при подключении** *hideOther: false* **позволяет оставлять другие подменю открытыми при открытии нового.**
```js
 $('.menu').qAccordion({
            hideOther: false,
        });
```
