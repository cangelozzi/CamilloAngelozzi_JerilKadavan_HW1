// https://github.com/dianadi09/pureJSLightbox

(() => {
  console.log("Welcome to CJ Studio Agency");

  // VARIABLES
  let lightbox = new pureJSLightBox({
    overlay: true,
    navigation: false,
    swipe: true
  });

  let toogle = document.querySelector('.navigation__checkbox');
  toogle.checked = false;

  const camillo = new TeamMember("Camillo Angelozzi", "Web Developer", "images/camillo_pic.jpg", "https://www.linkedin.com/in/camillo-angelozzi-a0b5a229/", "https://github.com/cangelozzi");
  const jeril = new TeamMember("Jeril Kadavan", "Web Designer", "images/jeril_pic.jpg", "https://www.linkedin.com/in/jeril-g-kadavan-ba350612a/", "https://github.com/jerilgkadavan");
  

  // FUNCTIONS

  // function constructor to add team members details
  function TeamMember(name, jobTitle, img, linkedin, github) {
  this.name = name;
  this.jobTitle = jobTitle;
  this.img = img;
  this.linkedin = linkedin;
  this.github = github;
}

// methods to add two team members
TeamMember.prototype.addTeamMember_one= (name, jobTitle, img, linkedin, github) => {
  let member_name_one = document.querySelector("#team_member_one");
  let job_title_one = document.querySelector("#job_title_one");
  let member_pic_one = document.querySelector("#member_pic_one");
  let linkedin_one = document.querySelector("#linkedin_ref_one");
  let github_one = document.querySelector("#github_ref_one");

  member_name_one.textContent = name;
  job_title_one.textContent = jobTitle;
  member_pic_one.src = img;
  linkedin_one.href = linkedin;
  github_one.href = github;
};

TeamMember.prototype.addTeamMember_two= (name, jobTitle, img, linkedin, github) => {
  let member_name_two = document.querySelector("#team_member_two");
  let job_title_two = document.querySelector("#job_title_two");
  let member_pic_two = document.querySelector("#member_pic_two");
  let linkedin_two = document.querySelector("#linkedin_ref_two");
  let github_two = document.querySelector("#github_ref_two");

  member_name_two.textContent = name;
  job_title_two.textContent = jobTitle;
  member_pic_two.src = img;
  linkedin_two.href = linkedin;
  github_two.href = github;
};


  // EVENTS
  window.addEventListener('load', ()=> {

    // toogle navigation from hamburger to normal when matching media query
    if (window.matchMedia("(min-width: 700px)").matches) {
      toogle.checked = true;
    }

    // add Team members
    camillo.addTeamMember_one(camillo.name, camillo.jobTitle, camillo.img, camillo.linkedin, camillo.github);
    jeril.addTeamMember_two(jeril.name, jeril.jobTitle, jeril.img, jeril.linkedin, jeril.github);

  });

})();
