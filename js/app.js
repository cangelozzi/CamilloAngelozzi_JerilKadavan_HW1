// https://github.com/dianadi09/pureJSLightbox

(() => {
  console.log("Welcome to CJ Studio Agency");

  //! VARIABLES

  // lightbox setup
  let lightbox = new pureJSLightBox({
    overlay: true,
    navigation: false,
    swipe: true
  });

  // toogle for nav hanburger menu
  let toogle = document.querySelector(".navigation__checkbox");
  toogle.checked = false;

  //! FUNCTIONS

  /* ===== TeamMember Class =========================
  |  Class with a constructor for team dev and des  |
  |  ===============================================*/

  class TeamMember {
    constructor(name, jobTitle, img, linkedin, github) {
      this.name = name;
      this.jobTitle = jobTitle;
      this.img = img;
      this.linkedin = linkedin;
      this.github = github;
    }

    // method to add Developer
    addDeveloper() {
      let team_dev = document.querySelector("#team_dev");
      let job_title_dev = document.querySelector("#job_title_dev");
      let dev_pic = document.querySelector("#dev_pic");
      let dev_linkedin = document.querySelector("#dev_linkedin");
      let dev_github = document.querySelector("#dev_github");

      team_dev.textContent = developer.name;
      job_title_dev.textContent = developer.jobTitle;
      dev_pic.src = developer.img;
      dev_linkedin.href = developer.linkedin;
      dev_github.href = developer.github;
    }

    // method to add Designer
    addDesigner() {
      let team_des = document.querySelector("#team_des");
      let job_title_des = document.querySelector("#job_title_des");
      let des_pic = document.querySelector("#des_pic");
      let des_linkedin = document.querySelector("#des_linkedin");
      let des_github = document.querySelector("#des_github");

      team_des.textContent = designer.name;
      job_title_des.textContent = designer.jobTitle;
      des_pic.src = designer.img;
      des_linkedin.href = designer.linkedin;
      des_github.href = designer.github;
    }

  }


  // add SKILLS from array data to DOM
  function addSkills() {

    const skill_title = document.querySelectorAll(".skill_title");
    const skill_text = document.querySelectorAll(".skill__text");

    // add skill title
    skill_title[0].textContent = skills[0].title;
    skill_title[1].textContent = skills[1].title;
    skill_title[2].textContent = skills[2].title;
    skill_title[3].textContent = skills[3].title;
    // add skill description
    skill_text[0].textContent = skills[0].description;
    skill_text[1].textContent = skills[1].description;
    skill_text[2].textContent = skills[2].description;
    skill_text[3].textContent = skills[3].description;

  }


  //! EVENTS

  // create developer and designer team members from Constructor TeamMember, details in classData file.
  const developer = new TeamMember(
    team_members[0].name,
    team_members[0].job,
    team_members[0].profileImg,
    team_members[0].linkedin,
    team_members[0].github
  );
  const designer = new TeamMember(
    team_members[1].name,
    team_members[1].job,
    team_members[1].profileImg,
    team_members[1].linkedin,
    team_members[1].github
  );

  // events on load
  window.addEventListener("load", () => {
    // toogle navigation from hamburger to normal when matching media query
    if (window.matchMedia("(min-width: 700px)").matches) {
      toogle.checked = true;
    }

    // add Team members
    developer.addDeveloper();
    designer.addDesigner();

    // add Agency skills
    addSkills();

  });
})();
