import './App.css';

function App() {
  return (
    <div className="App">
<header>
    <h1>Jose Rivera</h1>
    <div>
        <ul class="nav-space">
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contactme">Contact Me</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>

    </div>
</header>


<figure class="under-head-pattern">
    <img src={`${process. env. PUBLIC_URL}/images/hero.jpg`}/>
    <div><h2>Welcome to my page!</h2></div>
</figure>


<section id="aboutme" class="aboutme">
    <h1>About<br/>Me</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.<br/><br/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis.
        </p>
</section>

<section id="work" class="work">
    <h1>Work</h1>
        <div class="workbox">
            <div class="work1">
                <figure><a href="https://sournachos.github.io/GroupProject1/" target="_blank"><img src={`${process. env. PUBLIC_URL}/images/proj1demo.jpg`} alt="Image shows the landing  page to an electric vehicle charging station locator. At the top of the page there is a header section of approximately on inch in height, of a mid-dark gray color. All of the contents of this header are centered, starting from the left is the logo, consisting of a geometric red cross with a black lightning bolt that fits perfectfly within the red cross, this lightning bolt has a circle around it that overlays each leg of the red cross in order to surround the lightning bolt. To the right of the logo is the word 'electrapoint' all together and colored red. To the right of electtrapoint are two sentences side by side separated by a finger's width. The first one displays the text 'find nearest charging station', and the second one says 'don't have an ecar?', and both of these are in white text. The next and last section of the page is a rectangular layout, and its width is twice its height. The right half of this section is displaying a photo of the front of a white electric vehicle as it is driving on a road surrounded by green bushes, slight hills in the background with moderate vegetation, and a clear sky with the entire photo having a warm hue due to the sun setting, which cannot be seen in the photo. On the left side of this rectangular section, there are two pieces of text one on top of the other, the top one in a large font states 'out of juice?' , with the word juice in red, and the bottom one in a smaller font states'If your electric road-trip buddy needs to fuel up and recover from those off-the-beaten-path camp spots, the various grocery trips this week , or you simply want to mingle with eco-friendly pals, head on over to our Charging Station Locator.' all in white text with a grey background. Below these two pieces of text are two buttons side by side. The button on the left has a red background on it with the white text saying 'take me there!'. The button to the right has a light gray background with black text displaying'purchase a four wheel buddy!', the four in this button is displayed as a number with a dash between it and the word wheel. Lastly, the right and left parts of this rectangular section are divided by a grey colored diagonal column whose top part is leaning towards the right section where the electric wehicle photo is, and this diagonal column is roughly an inch wide."/></a>
                    <h3>ElectraPoint<br/>
                    <span>HTML,CSS,JS</span>
                    </h3>
                </figure>
            </div>

            <div class="work2">
                <figure><a href="https://github.com/sournachos/XP-Arcade-PROJECT2" target="_blank"><img src={`${process. env. PUBLIC_URL}/images/project2demo.jpg`} alt="Image shows the background image of Windows XP"/></a>
                    <h3>XP Arcade<br/>
                    <span>JS, Handlebars, CSS</span>
                    </h3>
                </figure>
            </div>

            <div class="work3">
                <figure><a href="https://github.com/sournachos" target="_blank"><img src={`${process. env. PUBLIC_URL}/images/work1.jpg`} alt="Image shows a tablet on a white background with pens, and black markers on the right, a pencil sharpener, and two mechanical pencils on top of a notebook-size sheet of graph paper to the left of the tablet. There are also three one inch by one inch squares of paper with color samples that fill the square paper, an aditional two pieces of this papers are on the right of the tablet"/></a>
                    <h3>Placeholder2<br/>
                    <span>HTML and CSS</span>
                    </h3>
                </figure>
            </div>

            <div class="work4">
                <figure><a href="https://github.com/sournachos" target="_blank"><img src={`${process. env. PUBLIC_URL}/images/work1.jpg`} alt="Image shows a tablet on a white background with pens, and black markers on the right, a pencil sharpener, and two mechanical pencils on top of a notebook-size sheet of graph paper to the left of the tablet. There are also three one inch by one inch squares of paper with color samples that fill the square paper, an aditional two pieces of this papers are on the right of the tablet"/></a>
                    <h3>Placeholder3<br/>
                    <span>HTML and CSS</span>
                    </h3>
                </figure>
            </div>

            <div class="work5">
                <figure><a href="https://github.com/sournachos" target="_blank"><img src={`${process. env. PUBLIC_URL}/images/work1.jpg`} alt="Image shows a tablet on a white background with pens, and black markers on the right, a pencil sharpener, and two mechanical pencils on top of a notebook-size sheet of graph paper to the left of the tablet. There are also three one inch by one inch squares of paper with color samples that fill the square paper, an aditional two pieces of this papers are on the right of the tablet"/></a>
                    <h3>Placeholder4<br/>
                    <span>HTML and CSS</span>
                    </h3>
                </figure>
            </div>

        </div>
    </section>

    <section id="contactme" class="contactme">
        <h1>Contact<br/>Me</h1>
           <nav class="nav-space2">
            <a href="">111-111-1111</a>
            <a href="https://placeholder.com/" target="blank">place@holder.com</a>
            <a href="https://github.com/sournachos" target="_blank">Github</a>
            <a href="https://twitter.com/?lang=en" target="_blank">Twitter</a>
            <a href="https://open.spotify.com/user/riverafitness18?si=niw1cl0YTQG0Yi0WPNSjRQ" target="_blank">Spotify</a>
           </nav>
    </section>

<footer>2021 Jose Rivera (sournachos on Github.com)</footer>
    </div>
  );
}

export default App;
