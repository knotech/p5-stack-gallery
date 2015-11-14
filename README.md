# Slideshow

---

### Started with 'hackathon-starter' by sahat

[Hackathon-Starter] (https://github.com/sahat/hackathon-starter)

---

### Setup
1. (Download the zip) [https://github.com/knotech/p5-stack-gallery/archive/master.zip]
2. `npm install`
3. `node app.js`

---

### Usage

1. The way it's presently setup, you're going to want to name your p5 sketches `./relative/path/to/public/js/slide`+i+`js`, `i` being the index of the slides starting at 0.
2. In each of your sketches, you're going to want to use the `sketchInstanceName.createCanvas(width,height).parent('<CSS id of the section you want to attach this sketch to>')`

---

### Current state of dependencies

So Hackathon starter has crazy dependencies, but for the crazy exstensible express app boilerplate that it is, it works out of the box with no config, so uh, duncare. I left all of the auth, api-config, etc from hackathon-starter in order to leave it easily extensible, cause you and I both know that we want to make computer instructions different later to do important potentially interesting internet stuff, in the new electronic business world in which this communique is being written, published, and consumed in right now. (J/K :D LOLZ!)

... That said I had to install the important libs manually, (Weird internet connectivity problems, I know you've never had any of those, but I implore your understanding in lieu of a lengthy explanation). Rest assured they will be included in the npm dev-deps, so that you don't have to get rid of all the white space with the backspace button, and use CMD||CTRL+C -> CMD||CTRL+V concatenate all of the js files yourself to build a production distribution of your project later. **:( --- will be ---> :D**

... and then I will delete this paragraph, so why did I bother? Because I care about you, and I want you to know how and why I made my decisions, to invite **Constructive** criticism, and hope that it might inspire you to document for everyone else, why you made those decisions when you were writing your software, and making that thing work, that I and others might benifit from your expertise.

### Current deps for slideshow
Included in repo in `public/js/lib/` *Not best practicing all over the place!* 
(d3.v3.min.js) [https://raw.githubusercontent.com/mbostock/stack/gh-pages/d3.v3.min.js]
**Modified** (stack.v1.js original available here) [https://raw.githubusercontent.com/mbostock/stack/gh-pages/stack.v1.js]
*Hacked core, have life, in rush, sue me.*
(p5.min.js *complete includes p5.dom.js and p5.sound.js which add some considerable power to the lib*) [https://github.com/processing/p5.js/releases/download/0.4.19/p5.zip]

---

### Quirks

##### Your p5 sketches.
In order to create multiple p5 slides, your going to have to convert your sketches from using the p5 global namespace, to new instances of p5. There is a great example of this at (p5 Instantiation/Namespace) [https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace]

##### What I did in stack.v1.js
I've added a trivial function to introduce a new script to the document for each section that stack instantiates, and injected some code into the `initialize` function to assign each section a CSS id, look for a corresponing p5 sketch associated with that index, and if found load that sketch into the DOM ...

---

# Yaaaaayeah!
Documentation!!! I'm kind of new at this open-source community thing, but I want to get good at it. Any constructive advice from seasoned vets, specifically about `why` some code I wrote is bad, how to properly attribute credit to the authors of the code I use, is always really appreciated. 
