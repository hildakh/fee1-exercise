### Font Size
  Given the fixed width of the page (960px), applying the exact font sizes did not result in a design consistent with the mock up; it would leave much smaller margins around elements on the page. I figured the sizes in the guideline could probably refer to rendered pixels, so I almost halved all the fonts while building the page.

### Drop Down
  The `<select>` tag comes with some limitations in design and even after being designed according to the mockup could still be displayed differently across browsers esp. on Safari where it does not even apply padding on select and requires the developer to use text-indent instead. To tackle this issue and ensure that the end result is as close to the design as possible, I replaced the drop down with a `<div>` followed by another one including the options and implemented the functionality using CSS and JavaScript.

### The Image
  As there was no strict requirement on the interaction between the image and the drop down, I found it aesthetically more appealing to hide the image and replace it with the drop down options rather than display the drop down on top of the image. If I had more time, and probably was better at using CSS animations, I would have implemented a nice transition or animation for toggling the drop down as well as hiding and showing the image.

### Wallpaper
  In my implementation, the wallpaper has a slightly bigger height compared to that of the design. My reason for this decision is that I noticed the wallpaper image in assets being slightly different in color and shape. Keeping the space between the top logo and the main heading `Surge for small businesses` exactly according to the design would have placed the heading on a yellow color in the background and made it not clear or easy to read.
