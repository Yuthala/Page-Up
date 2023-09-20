Smooth scroll up
--
HTML/CSS/JavaScript
--

href id="toTop" has enclosed svg icon - arrow up. Clicking this arrow will smoothly bring you to the top of the page.
Arrow appears after you scroll 800 px down and disappears after a click.

There are 2 "independent" eventListeners:
firt one "listens" window.scroll, dinamically adding class="show" to anchor; 
second - "listens" <a> click.

To use this code in your project:
1. assing id="toTop" to your ancor element (I have arrow up):

<img width="371" alt="Screenshot 2023-09-20 at 12 55 49" src="https://github.com/Yuthala/Page-Up/assets/113363158/40a9c17b-d294-4943-9df5-434af9f14d8b">

2. Put down class="show" CSS properties:

<img width="336" alt="Screenshot 2023-09-20 at 13 00 05" src="https://github.com/Yuthala/Page-Up/assets/113363158/1ad4baef-400c-4e53-9ce1-862cbd58c2d5">

3. You may also want to change :hover effects or anchor positioning - feel free to edit #toTop CSS properties.
4. HTML can be any but please consider that current code scrolls to the top of the page. If you need different, edit here:
   
<img width="576" alt="Screenshot 2023-09-20 at 13 03 56" src="https://github.com/Yuthala/Page-Up/assets/113363158/f033a304-b8e4-40a2-9647-b9855614da0e">
