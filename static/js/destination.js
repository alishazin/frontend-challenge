
var DestinationNavObject = {};

function onDestinationLoad() {

    DestinationNavObject = {
        data : jsonDestinationsData,
        imageDiv : document.querySelector('main > div.left-box > div.planet-img'),
        h1 : document.querySelector('main > div.right-box > h1'),
        p : document.querySelector('main > div.right-box > p'),
        avgDistanceDiv : document.querySelector('main > div.right-box > div.extra-details > div.detail-box > div.value#avgDistance'),
        estTimeDiv : document.querySelector('main > div.right-box > div.extra-details > div.detail-box > div.value#estTime'),
        display : function (id) {
            let currentData = this.data[id - 1]
            this.h1.innerText = currentData.title
            this.p.innerText = currentData.content
            this.avgDistanceDiv.innerText = currentData.avg_distance
            this.estTimeDiv.innerText = currentData.travel_time
            this.imageDiv.style.opacity = 0;
            this.imageDiv.style.transform = 'translateX(30px) translateY(-30px)';
            setTimeout(() => {
                this.imageDiv.style.backgroundImage = `url("${currentData.img}")`;
                this.imageDiv.style.opacity = 1;
                this.imageDiv.style.transform = 'translateX(0px)';
            }, 500)
        },
        changePlanet : function(id) {
            const navBars = Array.from(document.querySelectorAll("main > div.right-box > div.sec-nav > div.nav-item"))
            let i = 0;
            navBars.forEach(element => {
                if (i == id - 1) {
                    element.classList += ' enabled'
                    this.display(id)
                } else {
                    element.classList = 'nav-item'
                }
                i++;
            })
        },
        addCallbacks : function () {
            document.querySelector("main > div.right-box > div.sec-nav > div.nav-item#moon").onclick = () => {
                this.changePlanet(1)
            }
            document.querySelector("main > div.right-box > div.sec-nav > div.nav-item#mars").onclick = () => {
                this.changePlanet(2)
            }
            document.querySelector("main > div.right-box > div.sec-nav > div.nav-item#europa").onclick = () => {
                this.changePlanet(3)
            }
            document.querySelector("main > div.right-box > div.sec-nav > div.nav-item#titan").onclick = () => {
                this.changePlanet(4)
            }
        }
    }

    DestinationNavObject.addCallbacks()
    
    // displaying first value
    DestinationNavObject.changePlanet(1)

}

var jsonDestinationsData = [
    {
        "id" : 1,
        "img" : "/media/destination/image-moon.png",
        "title" : "moon",
        "content" : "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "avg_distance" : "384,400 km",
        "travel_time" : "3 days"
    },
    {
        "id" : 2,
        "img" : "/media/destination/image-mars.png",
        "title" : "mars",
        "content" : "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "avg_distance" : "225 mil. km",
        "travel_time" : "9 months"
    },
    {
        "id" : 3,
        "img" : "/media/destination/image-europa.png",
        "title" : "europa",
        "content" : "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "avg_distance" : "628 mil. km",
        "travel_time" : "3 years"
    },
    {
        "id" : 4,
        "img" : "/media/destination/image-titan.png",
        "title" : "titan",
        "content" : "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        "avg_distance" : "1.6 bil. km",
        "travel_time" : "7 years"
    }
]