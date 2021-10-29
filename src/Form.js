import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loogo from "./Images/cv.jpg";
import Loogo2 from "./Images/exp.jpg";
import Loogo3 from "./Images/educa.jpg";
import { login } from "./userSlice";
import "./style.css";
import "./App.css";

function Form() {


    const dispatch = useDispatch();
    
    //Image Upload
    const [image, setImage] = useState();
    
    //personal information
    const [name, setName] = useState("");
    useEffect(() => {
      localStorage.setItem("name", JSON.stringify(name));
    }, [name]);
    const [loc, setLoc] = useState("");
    const [des, setDes] = useState("");
    const [email, setEmail] = useState("");
    const [ph, setPh] = useState("");
    const [profile, setProfile] = useState("");
    //const [skills, setSkills] = useState("");
    const [langFirst, setLang1] = useState("");
    const [SecondLang, setLang2] = useState("");

    //projects
    const [project1, setProject1] = useState("");
    const [project1Abt, setProject1Abt] = useState("");
    const [project2, setProject2] = useState("");
    const [project2Abt, setProject2Abt] = useState("");
    const [project3, setProject3] = useState("");
    const [project3Abt, setProject3Abt] = useState("");
    
  
    //experience
    const [company, setComp] = useState("");
    const [compLoc, setCompLoc] = useState("");
    const [compDes, setCompDes] = useState("");
    const [From, setFrom] = useState("");
    const [To, setTo] = useState("");
    const [RolesA, setRolesA] = useState("");
    const [RolesB, setRolesB] = useState("");
    const [RolesC, setRolesC] = useState("");
    const [RolesD, setRolesD] = useState("");
    const [RolesE, setRolesE] = useState("");
   
    //skills
    const [skill1, setskill1] = useState("");
    const [skill2, setskill2] = useState("");
    const [skill3, setskill3] = useState("");
    const [skill4, setskill4] = useState("");
    const [skill5, setskill5] = useState("");
    const [skill6, setskill6] = useState("");
  
    //experience 2
    const [company2, setComp2] = useState("");
    const [compLoc2, setCompLoc2] = useState("");
    const [compDes2, setCompDes2] = useState("");
    const [From2, setFrom2] = useState("");
    const [To2, setTo2] = useState("");
    const [Roles2, setRoles2] = useState("");
    const [Roles3, setRoles3] = useState("");
    const [Roles4, setRoles4] = useState("");
    const [Roles5, setRoles5] = useState("");
    const [Roles6, setRoles6] = useState("");
  

    //experience 3
    const [company3, setComp3] = useState("");
    const [compLoc3, setCompLoc3] = useState("");
    const [compDes3, setCompDes3] = useState("");
    const [From3, setFrom3] = useState("");
    const [To3, setTo3] = useState("");
    const [Rolesx, setRolesx] = useState("");
    const [Rolesy, setRolesy] = useState("");
    const [Rolesz, setRolesz] = useState("");
   
  
    //education
    const [College, setCollege] = useState("");
    const [FromTo, setFromTo] = useState("");
    const [ColLoc, setColLoc] = useState("");
    const [Inter, setInter] = useState("");
    const [passOut, setPass] = useState("");
    const [SchoolLoc, setSchoolLoc] = useState("");


    //validation code
    const [locErr, setLocErr] = useState({});
    const [EmailErr, setEmailErr] = useState({});
    const [phErr, setphErr] = useState({});
    
  
  
    const history = useHistory();
  
    //image upload
    const uploadImage = async (e) => {
      const files = e.target.files;
      const data = new FormData();
      data.append("file", files[0]);
      data.append("upload_preset", "ougwtdrm");
  
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/daufictse/image/upload",
        { method: "POST", body: data }
      );
  
      const file = await res.json();
      console.log(file);
  
      setImage(file.secure_url)
      
    };
  
 //validation function
 const formValidation = () => {

    const locErr = {};
    const EmailErr = {};
    const phErr = {};

    let isValid = true;
    if(loc.trim().length <2){
        locErr.locShort = "Location cant be empty";
        isValid = false ;
    }

    if(!email.includes('@') && email===''){
        EmailErr.Emailnotvalid = "Email not valid or empty"
    }

    if(ph.trim().length !== 10 ){
        phErr.phnotvalid = "phone number not valid";
    }
    setLocErr(locErr);
    setEmailErr(EmailErr);
    setphErr(phErr);
    return isValid;
}


    //form submit
    const handleSubmit = (e) => {
      e.preventDefault();
        const isValid = formValidation();

        if(isValid){
      dispatch(
        login({
          //image upload
          image: image,
          //persoanl info
          name: name,
          loc: loc,
          des: des,
          email: email,
          ph: ph,
          profile: profile,
          //skills
          skill1:skill1,
          skill2:skill2,
          skill3:skill3,
          skill4:skill4,
          skill5:skill5,
          skill6:skill6,


          langFirst: langFirst,
          SecondLang: SecondLang,

          //Projects
          project1:project1,
          project1Abt:project1Abt,
          project2:project2,
          project2Abt:project2Abt,
      
          //experience
          company: company,
          compLoc: compLoc,
          compDes: compDes,
          From: From,
          To: To,
          RolesA: RolesA,
          RolesB: RolesB,
          RolesC: RolesC,
          RolesD: RolesD,
          RolesE: RolesE,
          
  
          //experience2
          company2: company2,
          compLoc2: compLoc2,
          compDes2: compDes2,
          From2: From2,
          To2: To2,
          Roles2: Roles2,
          Roles3: Roles3,
          Roles4: Roles4,
          Roles5: Roles5,
          Roles6: Roles6,

          //experience3
          company3: company3,
          compLoc3: compLoc3,
          compDes3: compDes3,
          From3: From3,
          To3: To3,
          Rolesx: Rolesx,
          Rolesy: Rolesy,
          Rolesz: Rolesz,
         
          
  
          //education
          College: College,
          FromTo: FromTo,
          ColLoc: ColLoc,
          Inter: Inter,
          passOut: passOut,
          SchoolLoc: SchoolLoc,
        })
      );
    
      history.push("/cv");
    };
    
}
    
    
    return (
      <>

        <div className="All">
          <div>
            <div>
              <div className="signup-container">
                <div className="left-container">
                  <h1>Resume Generator</h1>
                  <br />
                  <br />
                  <br />
                  <div className="Logo">
                    <img src={Loogo} alt="Logo" />
                  </div>
                  <br /> <br /> <br />
                  <div className="Logo2">
                    <img src={Loogo2} alt="Logo" />
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="Logo3">
                    <img src={Loogo3} alt="Logo" />
                  </div>
                  <br />
                  <br />
                  <br />
                </div>
                <div className="right-container">
                  <form onSubmit={handleSubmit}>
                    <header>
                      <h1 className="Edit">Hello , We make the best Resume !</h1>
                      <br />
  
                      <hr />
                      <br />
  
                      <h2>Add Personal Info</h2>
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
  
                        <div className="pers-photo">
                          <label htmlFor="Your-image">Upload your Image</label> <br />
                          <input type="file" name="file"  onChange={uploadImage} />
                        </div>
                      </div>
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Your-Location">Your Location</label>
                          <input
                            id="Your-Location"
                            placeholder="Your Location"
                            type="text"
                            name="location"
                            value={loc}
                            onChange={(e) => {
                              setLoc(e.target.value);
                            }}
                          />
                          
                          {Object.keys(locErr).map((key) => {

                                    return <div style={{color:"red"}}> {locErr[key]} </div>
                          })}
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Designation">Designation</label>
                          <input
                            id="Designation"
                            placeholder="Designation"
                            type="text"
                            name="Designation"
                            value={des}
                            onChange={(e) => {
                              setDes(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Email">Email</label>
                          <input
                            id="Email"
                            placeholder="Email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
{Object.keys(EmailErr).map((key) => {

return <div style={{color:"red"}}> {EmailErr[key]} </div>
})}


                        </div>
                        <div className="pers-des">
                          <label htmlFor="Phone">Phone</label>
                          <input
                            id="Phone"
                            placeholder="Phone"
                            type="text"
                            name="phone"
                            value={ph}
                            onChange={(e) => {
                              setPh(e.target.value);
                            }}
                          />
                          <br/> 
                                             {Object.keys(phErr).map((key) => {

return <div style={{color:"red"}}> {phErr[key]} </div>
})}
                          
               
                        </div>
   
                      </div>
  
   
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="First Language">First Language</label>
                          <input
                            id="First Language"
                            placeholder="First Language"
                            type="text"
                            name="language-first"
                            value={langFirst}
                            onChange={(e) => {
                              setLang1(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Second Language">Second Language</label>
                          <input
                            id="Second Language"
                            placeholder="Second Language"
                            type="text"
                            name="SecondLang"
                            value={SecondLang}
                            onChange={(e) => {
                              setLang2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="">
                        <label htmlFor="">Profile</label> <br />
                        <input
                          style={{ width: "550px", lineHeight: "110px" }}
                          size="50"
                          type="text"
                          placeholder="Profile"
                          value={profile}
                          onChange={(e) => {
                            setProfile(e.target.value);
                          }}
                        />
                      </div>

 {/* Skills============================================================================================= */}
 
 
                      <br />
                      <br />
                      <hr />
                      <br />
  
                      <h2>Add Skills Info</h2>
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name"> Technical Skills</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Skills#1"
                            name="Skills"
                            value={skill1}
                            onChange={(e) => {
                              setskill1(e.target.value);
                            }}
                          />

                          
                        </div>

                        <div className="pers-name">
                        <label htmlFor="pers-name"> Technical Skills</label>
                        <input
                            className="text-box"
                            type="text"
                            placeholder="Skills#2"
                            name="Skills"
                            value={skill2}
                            onChange={(e) => {
                              setskill2(e.target.value);
                            }}
                          />

                         
                        </div>
                        </div>


                        <div className="set">
                        <div className="pers-name">
                           <input
                            className="text-box"
                            type="text"
                            placeholder="Skills#3"
                            name="Skills"
                            value={skill3}
                            onChange={(e) => {
                              setskill3(e.target.value);
                            }}
                          />

                          
                        </div>

                        <div className="pers-name">
                          
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Skills#4"
                            name="Skills"
                            value={skill4}
                            onChange={(e) => {
                              setskill4(e.target.value);
                            }}
                          />

                         
                        </div>
                        </div>


                        <div className="set">
                        <div className="pers-name">
  
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Skills #5"
                            name="Skills"
                            value={skill5}
                            onChange={(e) => {
                              setskill5(e.target.value);
                            }}
                          />

                          
                        </div>

                        <div className="pers-name">
                     
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Skills #6"
                            name="Skills"
                            value={skill6}
                            onChange={(e) => {
                              setskill6(e.target.value);
                            }}
                          />

                         
                        </div>
                        </div>









{/* PROJECTS============================================================================================= */}
  
<br />
                      <br />
                      <hr />
                      <br />
                      <h2 className="Edit">Add Your Projects</h2>
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the Project</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Project #1"
                            name="name"
                            value={project1}
                            onChange={(e) => {
                              setProject1(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      
                      <div className="">
                        <label htmlFor="">About Your Project </label>
                        <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="About Project"
                          value={project1Abt}
                          onChange={(e) => {
                            setProject1Abt(e.target.value);
                          }}
                        />
                        </div>
                         <br/>

                        <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the Project</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Project #2"
                            name="name"
                            value={project2}
                            onChange={(e) => {
                              setProject2(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      
                      <div className="">
                        <label htmlFor="">About Your Project </label> <br/>
                        <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="About Project"
                          value={project2Abt}
                          onChange={(e) => {
                            setProject2Abt(e.target.value);
                          }}
                        />
                        </div>
                         <br/>


                        <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the Project</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Project #3"
                            name="name"
                            value={project3}
                            onChange={(e) => {
                              setProject3(e.target.value);
                            }}
                          />
                        </div>
                      </div>

                      
                      <div className="">
                        <label htmlFor="">About Your Project </label> <br/>
                        <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="About Project"
                          value={project3Abt}
                          onChange={(e) => {
                            setProject3Abt(e.target.value);
                          }}
                        />
                        </div>
                        <br/>













  {/* EXPERIeNCE============================================================================================= */}
  
                      <br />
                      <br />
                      <hr />
                      <br />
                      <h2 className="Edit">Add Your Experience</h2>
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the organistaion</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Company"
                            name="name"
                            value={company}
                            onChange={(e) => {
                              setComp(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Your-Location">Company Location</label>
                          <input
                            id="Your-Location"
                            placeholder="Company Location"
                            type="text"
                            name="location"
                            value={compLoc}
                            onChange={(e) => {
                              setCompLoc(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Designation">Your Designation</label>
                          <input
                            id="Designation"
                            placeholder="Your Designation"
                            type="text"
                            name="Designation"
                            value={compDes}
                            onChange={(e) => {
                              setCompDes(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="From">From</label>
                          <input
                            id="Email"
                            placeholder="From"
                            type="text"
                            value={From}
                            onChange={(e) => {
                              setFrom(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Phone">To</label>
                          <input
                            id="Phone"
                            placeholder="To"
                            type="text"
                            value={To}
                            onChange={(e) => {
                              setTo(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="">
                        <label htmlFor="">Roles and Responsibilities </label> <br /><br/>
                        <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #1"
                          value={RolesA}
                          onChange={(e) => {
                            setRolesA(e.target.value);
                          }}
                        />
                        <br/> <br/>
  
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #2"
                          value={RolesB}
                          onChange={(e) => {
                            setRolesB(e.target.value);
                          }}
                        />
                        <br/>
                        <br/>
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #3"
                          value={RolesC}
                          onChange={(e) => {
                            setRolesC(e.target.value);
                          }}
                        />
                        <br/><br/>
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #4"
                          value={RolesD}
                          onChange={(e) => {
                            setRolesD(e.target.value);
                          }}
                        />
                        <br/><br/>
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #5"
                          value={RolesE}
                          onChange={(e) => {
                            setRolesE(e.target.value);
                          }}
                        />
  
  
                      </div>
  
                      {/* Experience 2 ----------------------------------------------------------------------------------------------- */}
  
                      <br />
                      <hr />
                      <br />
  
                      <h3 className="Edit">Add Another Experience</h3>
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the organistaion</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Company"
                            name="name"
                            value={company2}
                            onChange={(e) => {
                              setComp2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Your-Location">Company Location</label>
                          <input
                            id="Your-Location"
                            placeholder="Company Location"
                            type="text"
                            name="location"
                            value={compLoc2}
                            onChange={(e) => {
                              setCompLoc2(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Designation">Your Designation</label>
                          <input
                            id="Designation"
                            placeholder="Your Designation"
                            type="text"
                            name="Designation"
                            value={compDes2}
                            onChange={(e) => {
                              setCompDes2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="From">From</label>
                          <input
                            id="Email"
                            placeholder="From"
                            type="text"
                            value={From2}
                            onChange={(e) => {
                              setFrom2(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Phone">To</label>
                          <input
                            id="Phone"
                            placeholder="To"
                            type="text"
                            value={To2}
                            onChange={(e) => {
                              setTo2(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="">
                        <label htmlfor="">Roles and Responsibilities </label> <br /> <br/>
                        <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #1"
                          value={Roles2}
                          onChange={(e) => {
                            setRoles2(e.target.value);
                          }}
                        />  <br/><br/>
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #2"
                          value={Roles3}
                          onChange={(e) => {
                            setRoles3(e.target.value);
                          }}
                        />  <br/><br/>
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #3"
                          value={Roles4}
                          onChange={(e) => {
                            setRoles4(e.target.value);
                          }}
                        />  <br/><br/>
  
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #4"
                          value={Roles5}
                          onChange={(e) => {
                            setRoles5(e.target.value);
                          }}
                        />  <br/><br/>
  
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #5"
                          value={Roles6}
                          onChange={(e) => {
                            setRoles6(e.target.value);
                          }}
                        />  <br/><br/>
  
  
                      </div>










                      {/* Experience 3 ----------------------------------------------------------------------------------------------- */}
  
                      <br />
                      <hr />
                      <br />
  
                      <h3 className="Edit">Add the Last Experience</h3>
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the organistaion</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="Company"
                            name="name"
                            value={company3}
                            onChange={(e) => {
                              setComp3(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Your-Location">Company Location</label>
                          <input
                            id="Your-Location"
                            placeholder="Company Location"
                            type="text"
                            name="location"
                            value={compLoc3}
                            onChange={(e) => {
                              setCompLoc3(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Designation">Your Designation</label>
                          <input
                            id="Designation"
                            placeholder="Your Designation"
                            type="text"
                            name="Designation"
                            value={compDes3}
                            onChange={(e) => {
                              setCompDes3(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="From">From</label>
                          <input
                            id="Email"
                            placeholder="From"
                            type="text"
                            value={From3}
                            onChange={(e) => {
                              setFrom3(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Phone">To</label>
                          <input
                            id="Phone"
                            placeholder="To"
                            type="text"
                            value={To3}
                            onChange={(e) => {
                              setTo3(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="">
                        <label htmlfor="">Roles and Responsibilities </label> <br /> <br/>
                        <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #1"
                          value={Rolesx}
                          onChange={(e) => {
                            setRolesx(e.target.value);
                          }}
                        />  <br/><br/>
  
  <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #2"
                          value={Rolesy}
                          onChange={(e) => {
                            setRolesy(e.target.value);
                          }}
                        />  <br/><br/>
                         <input
                          style={{
                            width: "550px",
                            lineHeight: "110px",
                            marginTop: "0px",
                          }}
                          size="50"
                          type="text"
                          placeholder="Roles #3"
                          value={Rolesz}
                          onChange={(e) => {
                            setRolesz(e.target.value);
                          }}
                        /> 
 <br/><br/>
  
  
                      </div>
 
  
                      {/* ---EDUCATION START------------------------------------------------------------------------------------------- */}
  
                      <br />
                      <br />
                      <hr />
                      <br />
  
                      <h2 className="Edit"> Add Education</h2>
  
                      <div className="set">
                        <div className="pers-name">
                          <label htmlFor="pers-name">Name of the Institution</label>
                          <input
                            className="text-box"
                            type="text"
                            placeholder="College"
                            name="name"
                            value={College}
                            onChange={(e) => {
                              setCollege(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Your-Location">From - To </label>
                          <input
                            id="Your-Location"
                            placeholder="From To"
                            type="text"
                            name="location"
                            value={FromTo}
                            onChange={(e) => {
                              setFromTo(e.target.value);
                            }}
                          ></input>
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Designation">College Location</label>
                          <input
                            id="Designation"
                            placeholder="Location"
                            type="text"
                            name="Designation"
                            value={ColLoc}
                            onChange={(e) => {
                              setColLoc(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      <div className="pers-des">
                        <label htmlFor="Designation">Intermediate</label>
                        <input
                          id="Designation"
                          placeholder="School 10+2"
                          type="text"
                          name="Designation"
                          value={Inter}
                          onChange={(e) => {
                            setInter(e.target.value);
                          }}
                        />
                      </div>
  
                      <div className="set">
                        <div className="pers-loc">
                          <label htmlFor="Your-Location">From - To </label>
                          <input
                            id="Your-Location"
                            placeholder="Date of Passing Out"
                            type="text"
                            name="location"
                            value={passOut}
                            onChange={(e) => {
                              setPass(e.target.value);
                            }}
                          />
                        </div>
                        <div className="pers-des">
                          <label htmlFor="Designation">School Location</label>
                          <input
                            id="Designation"
                            placeholder="Location"
                            type="text"
                            name="Designation"
                            value={SchoolLoc}
                            onChange={(e) => {
                              setSchoolLoc(e.target.value);
                            }}
                          />
                        </div>
                      </div>
  
                      {/*   Footer over ------------------------------------------------------------------------------------------- */}
                    </header>
  
                    <div className="profile">
                      <label htmlFor="Profile">Profile</label> <br />
                      <input
                        style={{ width: "550px", lineHeight: "110px" }}
                        size="50"
                        type="text"
                        placeholder="Profile"
                      />
                    </div>
  
                    <footer style={{ width: "600px" }}>
                      <div className="set">
                        <button id="back">Reset</button>
                        <h3 className="text"> Press Submit for Resume </h3>
                        <button id="next" type="submit">
                          Submit
                        </button>
                      </div>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
  
            {/*These two divs down is for the container ---------------------------------------------------------- */}
          </div>
        </div>
      </>
    );
  }

  export default Form;