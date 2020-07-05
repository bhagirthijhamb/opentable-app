# Answers to Technical Questions

## 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

    I spent **7 hours** on the coding assignment. 
    If I had more time, I would improve the UI of the app. I would also add more error handling use cases.


## 2.  What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

    JavaScript being my language of choice, I feel the most useful feature added in ES6 is the spread operator.

    Link to my blog on Spread Operator -
    https://medium.com/@bhagirthi.jhamb/spread-operator-es6-features-part-1-e4d46e6c1740

        if (this.props.restaurants) {
            filteredRestaurants = this.props.restaurants.filter((restaurant) => {
                return (
                restaurant.address
                    .toLowerCase()
                    .indexOf(this.state.addressFilter.toLowerCase()) !== -1
                );
            });

            if(0 < this.state.priceFilter && this.state.priceFilter < 5){
                moreFilteredRestaurants = filteredRestaurants.filter(restaurant => {
                    return (
                        restaurant.price == this.state.priceFilter
                    )
                }
                )
            }
            else {
            moreFilteredRestaurants = [...filteredRestaurants];
            }
        }

## 3.  How would you track down a performance issue in production? Have you ever had to do this?

    - I would reproduce the performance issue locally by simulating the production environment. My first step would be to narrow down on the block of code responsible for low performance. 
    - One way to do this could be by adding timing profiler to my code.

## 4.	How would you improve the API that you just used?

    One this that I noticed in the API is that if the user enters only few letters of the city name say 'Tor' for 'Toronto', the results includes restaurants of all the cities that have 'tor' in their name eg. 'Mentor', 'Torreón', 'Astoria' and then 'Toronto'. 
    I would improve the search algorithm to return restaurants with city name starting with 'Tor' first and other matches later.

    Other way to improve performace could be by caching the results of the restaurants once fetched by the user. This can help when the API traffic is high.

## 5.	Please describe yourself using JSON.

    {
        "firstName": "Bhagirthi",
        "lastName": "Jhamb",
        "livesIn": "Toronto",
        "skills": ["HTML5", 
                    "CSS3", 
                    "JavaScript/ES6", 
                    "React", 
                    "Redux", 
                    "jQuery", 
                    "Node.js", 
                    "MongoDB", 
                    "Git/Github", 
                    "WCAG", 
                    "Responsive Web Design", 
                    "Unit Testing"
                ],
        "education": {
                "JunoCollegeOfTechnology": [
                    "Web Development Immersive Bootcamp",
                    "JavaScript Fundamentals",
                    "Web Development Fundamentals"
                ],
                "University of California, Irvine": "JavaScript Programming",
                "National Institute of Technology, India": "B. Tech, Civil Engineering"
        },
        "workExperience": {
            "contructionIndustry": 4.5
        }
        "interests": [
            "Programming",
            "Talking to people",
            "Cooking"
        ],

        "believes": [
                "Every success story is a tale of constant adaption, revison and change!"
        ]
    }