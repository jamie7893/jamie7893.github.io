$(function() {

    // Model
    var jamie = {
        about: {
            lead: "Jamie Keelen is a Software Engineer looking to grow with a great company.",
            main: "I am a Software Engineer specializing in JavaScript. I have had eperience in multiple frameworks across the full stack, such as React.js, Angular.js, Node.js, Express.js, PostgresSQL, MySQL, XSLT, MongoDB. I have 4 years experience working in a scrum environment, supporting and maintaining a legacy web application, while developing a entire new web application with the same functionality with newer technologies, such as client side storage using PouchDB."
        },
        portrait: "https://avatars3.githubusercontent.com/u/15333506?v=3&s=460",
        portfolio: [
            {
                title: "Prattle - ReactJS",
                description: "Worked on all parts of an application targeted at solo travelers to meet new people at the same hotel or location. Used Foursquare's userless API to allow users to choose a location based on GPS location. Once a location is picked the user is put in a chatroom with other people at the same location. This application made heavy use of Node.js, React, and Postgres. Also made an AngularJS version for learning purposes.",
                features: [
                    "Use of current location", "Foursquare's API database", "Make use of sockets to keep a open connection", "Originally written using Angular 1.5, converted to ReactJS"
                ],
                image: "images/prattle-logo.png",
                url: "https://thesis-react.herokuapp.com/"
            }, {
                title: "Prattle - AngularJS",
                description: "Worked on all parts of an application targeted at solo travelers to meet new people at the same hotel or location. Used Foursquare's userless API to allow users to choose a location based on GPS location. Once a location is picked the user is put in a chatroom with other people at the same location. This application made heavy use of Node.js, React, and Postgres. Also made an AngularJS version for learning purposes.",
                features: [
                    "Use of current location", "Foursquare's API database", "Make use of sockets to keep a open connection", "Originally written using Angular 1.5, converted to ReactJS"
                ],
                image: "images/prattle-logo.png",
                url: "https://prattle-angular.herokuapp.com/"
            }, {
                title: "Twitch Chat Bot - NodeJS",
                description: "A chat bot for twitch channels to add features to a streamers chat.",
                features: [
                    "Point system for a streamer's chat.", "Viewers can gamble the points in the chat.", "Lottery system that runs every 15 minutes.", "Document storage to save viewers progress and to allow the streamer to view and make changes to the database easily."
                ],
                image: "images/twitch_logo.jpg",
                url: "https://github.com/jamie7893/trendatron"
            }, {
                title: "Product Project - jQuery",
                description: "A web application that allow's users to post and browser products.",
                features: [
                    "Post a product", "Browse products", "Setup a profile"
                ],
                image: "images/operation-spark.jpg",
                url: "https://product-jquery.herokuapp.com/"
            }, {
                title: "Skilly - AngularJS",
                description: "A web application that allow's users to create a profile and view other profiles.",
                features: [
                    "Create a profile, edit a profile, browse profiles"
                ],
                image: "images/operation-spark.jpg",
                url: "https://skilly-angular.herokuapp.com/"
            }, {
                title: "Skilly - jQuery",
                description: "A web application that allow's users to create a profile and view other profiles.",
                features: [
                    "Create a profile, edit a profile, browse profiles"
                ],
                image: "images/operation-spark.jpg",
                url: "https://skilly-jquery.herokuapp.com/"
            }
        ],
        skills: [
            {
                category: "Strong",
                items: [
                    "JavaScript",
                    "HTML",
                    "Bootstrap",
                    "CSS",
                    "jQuery",
                    "React.js",
                    "Angular.js",
                    "Node.js",
                    "Express.js",
                    "MySQL",
                    "PostgresSQL",
                    "Git/GitHub",
                    "SVN"
                ]
            }, {
                category: "Experienced",
                items: ["XSLT", "PERL", "MongoDB"]
            }, {
                category: "Horizon",
                items: ["React-native", "Java"]
            }
        ],
        education: [
            {
                name: "Operation Spark - (Hack Reactor)",
                description: "Advanced Software Engineering Immersive",
                year: "2015"
            }
        ]
    };

    // Controller
    var controller = {
        init: function() {
            about.init();
            portfolio.init();
            portfolioModal.init();
            skills.init();
            education.init()
        },
        getAboutText: function() {
            return jamie.about;
        },
        getAboutImage: function() {
            return jamie.portrait;
        },
        getEducationArr: function() {
            return jamie.education;
        },
        getSkillsArr: function() {
            return jamie.skills;
        },
        getPortfolioArr: function() {
            return jamie.portfolio;
        },
        getPortfolioItemById: function(id) {
            return jamie.portfolio[id];
        }
    };

    // Views
    var about = {
        init: function() {
            this.aboutLead = $('#about-lead');
            this.aboutText = $('#about-text');
            this.aboutImage = $('#about-image');
            this.render();
        },
        render: function() {
            var aboutText = controller.getAboutText();
            var aboutImage = controller.getAboutImage();
            this.aboutLead.text(aboutText.lead);
            this.aboutText.text(aboutText.main);
            this.aboutImage.attr('src', aboutImage);
        }
    };
    var portfolio = {
        init: function() {
            this.portfolioContent = $('#portfolio-content');
            this.render();
        },
        render: function() {
            var htmlStr = "";
            controller.getPortfolioArr().forEach(function(item, index) {
                htmlStr += `<div class="col-sm-3"><a class="portfolio-item"
                    id="${index}" data-toggle="modal"
                    data-target="#portfolio-modal">
                      <h4 class="project-title">${item.title}</h4>
                    <img class="img-responsive" src="${item.image}"
                    alt="Project Image">
                  </a>
                    </div>`
            });
            this.portfolioContent.append(htmlStr);
            this.attachClickHandler();
        },
        attachClickHandler: function() {
            $portfolioItem = $('.portfolio-item');
            $portfolioItem.click(function(e) {
                portfolioModal.render(e.currentTarget.id);
            });
        }
    };
    var portfolioModal = {
        init: function() {
            this.modalBody = $('.modal-body');
        },
        render(id) {
            this.modalBody.empty();
            var htmlStr = "";
            var portfolioItem = controller.getPortfolioItemById(id);
            htmlStr += `<div class="row"><div class="col-sm-6">
                  <a href="${portfolioItem.url}"><img class="img-responsive"
                  src="${portfolioItem.image}" alt="Sample image from project">
                  </a></div><div class="col-sm-6">
                  <h3>${portfolioItem.title}</h3>
                  <strong>Description</strong><p>${portfolioItem.description}
                  </p><strong>Features</strong><ul>`
            portfolioItem.features.forEach(function(feature) {
                htmlStr += `<li>${feature}</li>`
            });
            htmlStr += `</ul><strong>Click <a target="_blank" href="${portfolioItem.url}">here</a>
                  to view project.</strong></div></div>`;

            this.modalBody.append(htmlStr);
        }
    }
    var skills = {
        init: function() {
            this.skillsContent = $('#skills-content');
            this.render();
        },
        render: function() {
            var htmlStr = "";
            controller.getSkillsArr().forEach(function(skillCategory) {
                htmlStr += `<div class="col-xs-4"><ul class="list-unstyled">
                    <li><strong>${skillCategory.category}</strong></li>`;
                skillCategory.items.forEach(function(skill) {
                    htmlStr += `<li>${skill}</li>`;
                });
                htmlStr += `</ul></div>`;
            });

            this.skillsContent.append(htmlStr);
        }
    };
    var education = {
        init: function() {
            this.educationText = $('#education-text');
            this.render();
        },
        render: function() {
            var htmlStr = "";
            controller.getEducationArr().forEach(function(school) {
                htmlStr += `<strong>${school.name}</strong>
                    <p>${school.description}<br>${school.year}</p>`;
            });
            this.educationText.append(htmlStr);

        }
    };
    controller.init();
})
