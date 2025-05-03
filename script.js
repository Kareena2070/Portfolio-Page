
const body = document.getElementsByName("body")

// using DOM this function create home page
function homePage(){
const home = document.createElement("div");
home.className ="home-container";

const nameHeading = document.createElement("h1");
nameHeading.textContent = "Kareena Yadav";


const homeSubtitle = document.createElement("h3");
homeSubtitle.textContent = "Aspiring Web Developer | BCA Student";

const homeGoal = document.createElement("p");
homeGoal.textContent = "I'm a BCA student at NavGurukul, focused on web development using HTML, CSS, and JavaScript. I'm preparing for high-paying roles  while actively participating in hackathons and building real-world projects."

home.appendChild(nameHeading);
home.appendChild(homeSubtitle);
home.appendChild(homeGoal);
document.body.appendChild(home);


const style = document.createElement("style");
style.textContent = `
  .home-container {
    padding: 20px;
    background-color:rgb(124, 242, 199);
    max-width: 1000px;
    margin: 40px auto;
    margin-top: 100px;
    // height: 400px;
    border-radius: 22px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(51, 50, 50, 0.2);
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .home-container h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 10px;
  }

  .home-container h3 {
    font-size: 1.5rem;
    color: #34495e;
    margin-bottom: 15px;
  }

  .home-container p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
`;

document.head.appendChild(style);

}

homePage()

// Using DOM created Skill section

function skillPage (){
    const skills = document.createElement("div");
    skills.className = "skill-container";
    
    const  techStack = document.createElement("div");
    techStack.className = "techStack";
    skills.appendChild(techStack);

    const tools = document.createElement("div");
    tools.className = "tools";
    skills.appendChild(tools);

    const  currentlyLearning = document.createElement("div");
    currentlyLearning.className = "currently-Learning";
    skills.appendChild(currentlyLearning);


    // techStack content section
    const techHeading = document.createElement("h2");
    techHeading.textContent = "💻 Tech Stack";

    const techcontent = document.createElement("p");
    techcontent.textContent = "I have a strong foundation in front-end development using:";

    const techList = document.createElement("ul");
    // const techItems = ["HTML", "CSS", "JavaScript"];
    const techItems = [
        {
          name: "HTML",
          description: "To structure web content cleanly and semantically."
        },
        {
          name: "CSS",
          description: "To style and layout web pages using Flexbox and Grid."
        },
        {
          name: "JavaScript",
          description: "To add interactivity and dynamic behavior to websites."
        }
      ];

    techItems.forEach(skill => {
      const li = document.createElement("li");
      li.textContent = `${skill.name}: ${skill.description}`;
      techList.appendChild(li);
    });

    techStack.appendChild(techHeading);
    techStack.appendChild(techcontent); 
    techStack.appendChild(techList);


    //  tools content section
    const toolheading = document.createElement("h2");
    toolheading.textContent = "🛠 Tools"

    const toolcontent = document.createElement("p");
    toolcontent.textContent = "I enhance my workflow and layout precision using: ";

    const toolList = document.createElement("ul");
    const toolItems = [
        {
            name: "Bootstrap",
            description: "for fast, responsive, and consistent UI components."
        },
        {
            name: "Flexbox",
            description: "to align and distribute content within containers efficiently."
        },
        {
            name: "CSS Grid",
            description: "for building complex and responsive grid-based layouts."
        },
        {
            name: "Git & GitHub",
            description: "for version control and collaborating on projects."
        }
    ];

    toolItems.forEach(tool =>{
        const li = document.createElement("li");
        li.textContent = `${tool.name}: ${tool.description}`;
        toolList.appendChild(li);
    });

    tools.appendChild(toolheading);
    tools.appendChild(toolcontent);
    tools.appendChild(toolList);


    //  Currently Learning section
    const learnHeading = document.createElement("h2");
    learnHeading.textContent = "🚀 Currently Learning";

    const learnContent = document.createElement("p");
    learnContent.textContent = "I believe in continuous learning and am currently focused on:";

    const learnList = document.createElement("ul");
    const leranItems = [
        {
            name: "React.js",
            description: "to build modern single-page applications using components."
        }, 
        {
            name: "Data Structures & Algorithms (DSA)",
            description: "to improve problem-solving and coding interview preparation."
        }, 

    ];

    leranItems.forEach(learn => {
        const li = document.createElement("li");
        li.textContent = `${learn.name}: ${learn.description}`;
        learnList.appendChild(li);
    });

    currentlyLearning.appendChild(learnHeading);
    currentlyLearning.appendChild(learnContent);
    currentlyLearning.appendChild(learnList);


    document.body.appendChild(skills);       // call all div in body


    const style = document.createElement("style");
style.textContent = `
  body { 
    background-color: #f9f9f9;
    color: #333;
    margin: 0;
    padding: 2rem;
  }

  .skill-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  .skill-container > div {
    flex: 1 1 300px;
    padding: 1.5rem;
    background-color: #f0f4f8;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s;
  }

  .skill-container > div:hover {
    transform: translateY(-5px);
  }

  .skill-container h2 {
    font-size: 1.5rem;
    margin-bottom: 0.8rem;
    color: #2c3e50;
  }

`;
document.head.appendChild(style);


}
skillPage()

// Using DOM, created Project section

function projectSection (){
  const projects = document.createElement("div");
  projects.className = "projects";

  const project1 = document.createElement("div")
  project1.className = "project-1";
  projects.appendChild(project1);

  const project2 = document.createElement("div");
  project2.className = "project-2";
  projects.appendChild(project2);


  // details about 1st project
  const project1Heading = document.createElement("h2");
  project1Heading.textContent = "Pexels Clone";

  const project1Img = document.createElement("img");
  project1Img.src = "pexels-Clone.png";
  project1Img.alt = "Pexels Clone with my version";
  project1Img.width = 350;
  project1Img.style.border = "2px solid black";

  const project1Des = document.createElement("p");
  project1Des.textContent = "A pixel-perfect clone of the Pexels image gallery. It demonstrates mastery in layout, responsive design, and dynamic image rendering using the DOM."

  const project1tech = document.createElement("ul");
  const project1techSkill = ["HTML","CSS", "JavaScript"]
  project1techSkill.forEach(skill =>{
    const li = document.createElement('li');
    li.textContent = skill
    project1tech.appendChild(li)
  });

  project1.appendChild(project1Heading);
  project1.appendChild(project1Img);
  project1.appendChild(project1Des);
  project1.appendChild(project1tech);



  // details about 2nd project 
  const project2Heading = document.createElement("h2");
  project2Heading.textContent = " Form Validator";

  const project2Img = document.createElement("img");
  project2Img.src = "from.png";
  project2Img.alt = " Form Validator";
  project2Img.width = 350;
  project2Img.style.border = "2px solid black";

  const project2Des = document.createElement("p");
  project2Des.textContent = "A real-time form validation app with instant feedback on input errors. Built with vanilla JavaScript for DOM manipulation and event handling."

  const project2tech = document.createElement("ul");
  const project2techSkill = ["HTML", "CSS", "JavaScript"]
  project2techSkill.forEach(skill=>{
    const li = document.createElement('li');
    li.textContent = skill;
    project2tech.appendChild(li)
  });

  project2.appendChild(project2Heading);
  project2.appendChild(project2Img);
  project2.appendChild(project2Des);
  project2.appendChild(project2tech);



  document.body.appendChild(projects);



  const style = document.createElement("style");
style.textContent = `
  .projects {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }

  .projects > div {
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  .projects img {
    margin-top: 10px;
    margin-bottom: 10px;
    max-width: 100%;
    height: auto;
  }

  .projects ul {
    list-style: none;
    padding: 0;
  }

  .projects ul li {
    display: inline-block;
    margin: 4px;
    background: #eee;  
    padding: 4px 8px;
    border-radius: 4px;
  }
`;
document.head.appendChild(style);

}

projectSection()


// Using DOM create Education section

function educationSection(){
  const eduSection = document.createElement("div");
  eduSection.className = "eduHeading";

  const eduHeading = document.createElement("h2");
  eduHeading.textContent = "Education";

  const educontent = document.createElement("p");
  educontent.textContent = "A strong foundation in computer applications and web development through hands-on, real-world learning at NavGurukul.";


  const eduList = document.createElement("ul");
    const eduItems = [
        {
            name: "Eternal University (2024–2027)",
            description: "Full-time Residential BCA Program with Navgurukul"
        }, 
        {
            name: "Key Skills Learned",
            description: "Web Development, Problem Solving, Team Projects"
        }, 

    ];

    eduItems.forEach(learn => {
        const li = document.createElement("li");
        li.textContent = `${learn.name}: ${learn.description}`;
        eduList.appendChild(li);
    });
      eduSection.appendChild(eduHeading);
      eduSection.appendChild(educontent);
      eduSection.appendChild(eduList);

        
     document.body.appendChild(eduSection);      


     const style = document.createElement("style");
     style.textContent = `
       .eduHeading {
         padding: 25px;
         background-color: #f0f8ff;
         border-radius: 15px;
         box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
         max-width: 1200px;
         margin: 40px auto;
       }
   
       .eduHeading h2 {
         text-align: center;
       }
   
       .eduHeading p {
         text-align: center;
       }
     `;
     document.head.appendChild(style);

}

educationSection()


// Using DOM, create contact
function contact(){

const formSection = document.createElement("section");
formSection.innerHTML = `
  <form>
        <div class="mb-3">
          <label for="contactName" class="form-label">Name</label>
          <input type="text" class="form-control" id="contactName" placeholder="Your name">
        </div>
        <div class="mb-3">
          <label for="contactEmail" class="form-label">Email</label>
          <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="contactMessage" class="form-label">Message</label>
          <textarea class="form-control" id="contactMessage" rows="4" placeholder="Write your message here..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
      
`;

document.body.appendChild(formSection);

}

contact()




