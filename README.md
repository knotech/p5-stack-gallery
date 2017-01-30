# Slideshow

---

### Setup
1. [Download the zip] (https://github.com/knotech/p5-stack-gallery/archive/master.zip)
2. `npm install`
3. `node app.js`

---

### Usage

##### Your p5 sketches.
1. In order to create multiple p5 slides, your going to have to convert your sketches from using the p5 global
namespace, to individual instances of p5. There is a great example of this at [p5 Instantiation/Namespace]
(https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace)

2. The way it's presently setup, you're going to want to name your p5 sketches
`./relative/path/to/public/js/slide`+`i`+`js`, `i` being the index of the slides starting at 0.

3. In each of your sketches, in you're going to want to attach the canvas to the CSS id of the section you want it to
appear in:
  ```
  yourP5InstanceName.setup() {
    // The '[i]' in '#slide[i]', being the number of the index of the section you want to attach this sketch to.
    yourP5InstanceName.createCanvas(width,height).parent('#slide[i]'); 
  }
  ```

---

### Current state of dependencies

Based on boilerplate, never cleaned up.

### Current deps for slideshow
Included in repo in `public/js/lib/` *Not best practicing all over the place!* 
[d3.v3.min.js] (https://raw.githubusercontent.com/mbostock/stack/gh-pages/d3.v3.min.js)
**Modified** [stack.v1.js original available here] (https://raw.githubusercontent.com/mbostock/stack/gh-pages/stack.v1.js)

[p5.min.js *complete includes p5.dom.js and p5.sound.js which add some considerable power to the lib*] (https://github.com/processing/p5.js/releases/download/0.4.19/p5.zip)

---
