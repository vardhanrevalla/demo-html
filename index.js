
    // give informationa about button and  clicks 

const careerHTMLCode = `

<p style="color:rgb(31, 49, 45);"><h2> Career Objective:</h2><br>:-To achieve high career growth through a continuous learning process and
keep myself dynamic, visionary and competitive with the changing scenario of the world.
<br>:-Achieving the company goals and moving up in the organization hierarchy.<br>
:-Looking for a responsible and challenging career, where my skills can be effectively utilized and contributed
for organization success.
</p>

`

var careerOpen = false;

let content = document.getElementById('content');
let navCareer = document.getElementById('nav-career');
// let navProj =document.getElementnyId('proj')

// var somevariable =1 ;

const careerlistener = () => {
    console.log(careerOpen);
    if(!careerOpen){
        content.innerHTML= careerHTMLCode
        console.log("true block")
        careerOpen = true;
    }else {
        content.innerHTML = "";
        console.log ("false block")
        careerOpen= false;
    }
}

navCareer.addEventListener('click', careerlistener);

const techHTMLcode=`  <h2>Technical Skills:</h2>
<p>
    <p<h3>Area of interest </h3> :software Engineering,Design Engineering, Automobile Engineering, Thermal Engineering.</p>
    <p<h3>Software Tools </h3> :Auto CAD,CATIA, Solid Works, HTML basics, python basics,aws basics.</p>
    <p<h3>Hardware Tools </h3> : Lathe, Milling, Drilling Machine operating.</p>
</p>`
        let Technology = document.getElementById('Technology');
         let navtech = document.getElementById('nav-tech');
         console.log (Technology, navtech);
          var techOpen = false; 
          const techlistener = () => {
           console.log(techOpen);
           if(!techOpen){
            Technology.innerHTML= techHTMLcode
              console.log("true block")
               techOpen = true;
            }else {
            Technology.innerHTML = "";
            console.log ("false block")
                techOpen= false;
             }
              }
              navtech.addEventListener('click', techlistener);

         const projHTMLcode=` <h2>Project detail:</h2>
         <p>
             <p><h3>Project title</h3> : Design and Fabrication of Biometric Igniter.</p>
             <p><h3>Duration</h3> : 45 days</p>
             <p><h3>Technology</h3> : Based on PC Board (Bike)</p>
             <p><h3>Learning Point</h3> : Awareness on MECHATRONICS </p>
           </p>
           <h2>Mine Project detail:</h2>
           <p>
               <p<h3>Project title</h3> :Design and Fabrication of Water Used as a Fuel.<br>
           <p<h3>Duration</h3> : 6 Months (full time)</p><br>
           <p<h3>Technology</h3> : Based on Chemistry and automobiles (Bike)</p><br>
           <p<h3>Learning Point</h3> : ECO-FUEL </p>
           </p>
           `     
        let Project = document.getElementById('Project');
         let navproj = document.getElementById('nav-proj');
            console.log(Project, navproj);
            var projOpen = false;
             const projlistener = () => {    
                  console.log(projOpen);
                   if(!projOpen){
                     Project.innerHTML= projHTMLcode;
                     console.log("true block");
                     projOpen = true;
    }                
                   else {
                     Project.innerHTML = "";
                     console.log ("false block");
                    projOpen= false;
    }
}
             navproj.addEventListener('click', projlistener);

          const expHTMLcode =` <h2>Experience:</h2>
          <p>Worked as service floor in charge in Mahindra & Mahindra (for 6 months )
          </p>
          <p>worked in wipro for 7 monts as associte</p>
          <p>freelanced some projects with muthoot groups in kerala </p>
  `   
          let Experience = document.getElementById('Experience');
          let navexp = document.getElementById('nav-exp');
          var expOpen = false;
          const explistener = () => {
              console.log(expOpen);
              if(!expOpen){
                Experience.innerHTML= expHTMLcode
                  console.log("true block")
                   expOpen = true;
              }else {
                Experience.innerHTML = "";
                  console.log ("false block")
                  expOpen= false;
              }
          }
             navexp. addEventListener('click',explistener);


             const PerHTMLcode=`<h2>Personal Details:</h2>
             <p<h3>Father’s Name</h3> :R SRINIVAS RAO</p>
                 <p<h3>Mother’s Name </h3> :R GIRIJA KUMARI</p>
                 <p<h3>Date of Birth</h3> :01/03/1996</p>
                 <p<h3>Gender </h3> :Male</p>
                 <p<h3>Languages Known </h3> :Telugu, English, Hindi.</p>
                 <p<h3>Nationality</h3> : Indian</p>
                 <p<h3>Marital status</h3> : Single</p>`
                
                let Personal = document.getElementById('Personal');
                let navper = document.getElementById('nav-per');
                  var perOpen = false;
             const perlistener = () => {
                 console.log(perOpen);
                 if(!perOpen){
                     Personal.innerHTML= PerHTMLcode
                     console.log("true block")
                     perOpen = true;
                    }else {
                        Personal.innerHTML = "";
                        console.log ("false block")
                        perOpen= false;
                    }
                }
                navper. addEventListener('click',perlistener);
                
                const EducationHTMLcode = `
                <h2>Educational Qualification:</h2>
                <table>
                <tr>
                    <th>Qualification</th>
                    <th>Board/University</th>
                    <th>Year Of Passing</th>
                    <th>Aggregate Percentage</th>
                </tr>
                <tr>
                    <td>Btech (mechanical enginee)ring</td>
                    <td>JNTU K univercity</td>
                    <td> 2019 </td>
                    <td>with 57.3% </td>
                </tr>
                <tr>
                    <td>inter or HSC (+2)</td>
                    <td>Vishaka defence academy,vizag</td>
                    <td> 2014 </td>
                    <td>with 56.5%</td>
                </tr>
                <tr>
                <td>SSC</td>
                <td>Siddartha High School, Eluru</td>
                <td> 2012 </td>
                <td>6.8 CGPA </td>
                </tr>
                </table>
                `
                let Education = document.getElementById('Education');
                let navEdu = document.getElementById('nav-Edu');
                  var EduOpen = false;
                const Edulistener = () => {
                    console.log(EduOpen);
                    if(!EduOpen){
                        Edu.innerHTML= EducationHTMLcode;
                        console.log("true block")
                        EduOpen = true;
                    }else {
                        Edu.innerHTML = "";
                        console.log ("false block")
                        EduOpen= false;
                    }
                }
                navEdu.addEventListener('click',Edulistener);


                const IskillsHTMLcode = ` <h2>Interpersonal Skills:</h2>
                <p>
                    Strong analytical skills.<br>
                    Strong problem solving and troubleshooting skills.<br>
                    Strong computer literacy skills.<br>
                    Exercises mature judgment.<br>
                    Ability to work in a team and ability to work independently.<br>
                    Ability to influence other people; and ability to act as a mentor.<br>
                    Detail oriented.</p>`
                      
                    let ISKills = document.getElementById('ISkills');
                    let navIskills = document.getElementById('nav-Iskills')
                         var IskillsOpen = false;
                           const Iskillslistener = () => {
                             console.log(IskillsOpen);
                               if(!IskillsOpen){
                                 ISKills.innerHTML= IskillsHTMLcode;
                                   console.log("true block")
                                     IskillsOpen = true;
                                      }else {
                                        ISKills.innerHTML = "";
                                          console.log ("false block");
                                            IskillsOpen= false;
                                              }
                                                }
                                                navIskills.addEventListener('click',Iskillslistener);    
                                                
                                     const accomHTMLcode =` <h3>Accomplishments:</h3>
                                     <p>:-Participated in the event ‘PAPER PRESENTATION’ in TECHFEST 2K16, a national level techno fest conducted on 4TH
                                         March 2016 in CRR ENGINEERING COLLEGE, Eluru.
                                         <br>:-Attended a workshop on ‘ROBOTRYST-2016 conducted byROBOSAPIENS INDIA in association with Tryst IIT-DELHIon
                                         21-02-2017
                                         <br>:-Participated in the event ‘ROBO SOCCER’ conducted by department of ECE as a part of SAMYAK 2K17 held from
                                         9th to 10th March 2017 in KL University, Vijayawada.
                                         <br>:-I also get certification on hybrid engines technology (national level )
                                     </p>
                                    `           
                                            
              let Accomplishments = document.getElementById('Accomplishments');
              let navaccom = document.getElementById('nav-accom');  
                 var accomOpen = false ;
             const accomlistener = () => {
               console.log(accomOpen);
                 if(!accomOpen){
                    Accomplishments.innerHTML= accomHTMLcode
               console.log("true block")
               accomOpen = true;
                  }else {
                  Accomplishments.innerHTML = "";
                  console.log ("false block")
                  accomOpen= false;
                    }
                }
                navaccom.addEventListener('click',accomlistener);


               const actiHTMLcode = ` <h2>Co\Extracurricular Activities:</h2>
               <p>:-N.C.C. (National Cadet Corps) – ‘A’& 'B’ Certificates with rank .<br>
                   :-I Was Discipline Officer in class 11th and 12th.<br>
                   :-Conducting awareness camps in villages through NSS.(LEADER)<br>
                   :-Active Member in Red Cross Blood Bank of India.(15 times and more..)<br>
                   :-Active member in Indian Society of Mechanical Engineers (ISME). </p>
           
              `
                let CoExtracurricularActivities = document.getElementById('CoExtracurricularActivities');
                let navacti = document.getElementById('nav-acti');
                var actiOpent= false;
        const actilistener = () => {
            console.log(actiOpent);
            if(!actiOpent){
                CoExtracurricularActivities.innerHTML= actiHTMLcode;
                console.log("true block")
                 actiOpent = true;
                }else {
                    CoExtracurricularActivities.innerHTML = "";
                console.log ("false block")
                actiOpent= false;
            }
        }  
           navacti.addEventListener('click',actilistener);