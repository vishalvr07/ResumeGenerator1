import React from "react";
import "./NewResume.css";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import Loogo from "../Images/cv.jpg";



function NewResume() {
  const user = useSelector(selectUser);
  

  return ( <>
    <div >

      <div id="doc2" className="yui-t7">
      
        <div id="inner">
        
          <div id="hd">
         
            <div className="yui-gc">
          
			  <div className="yui-u first">

        <div className="pogo">
         
                    <img src={user.image} alt="Logo" style={{width:"170px" , borderRadius:"5px", float:"right" , display:"block" , paddingLeft:"50px"}} />
                  </div>
            
                <h1 className="text">{user.name}</h1>
                <h2 className="text">{user.desc}, {user.loc}</h2>
              </div>

              <div className="yui-u" style={{paddingTop:"80px"}}>
                <div className="contact-info">
                  <h3 className="text"> Download PDF</h3>
                  <h3 className="text">{user.email}</h3>
                  <h3 className="text">{user.ph}</h3>
                </div>
              </div>
            </div>
          </div>

          <div id="bd">
            <div id="yui-main">
              <div className="yui-b">
                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2 className="text">Profile</h2>
                  </div>
                  <div className="yui-u">
                    <p className="enlarge">
                    { /* lorem epsum is graeat sample word that ever eixsted in the whole known universe i always try to user lorep epsum , i dont know why i it feels good to use lorem epsum instead osome random text like i am typing right now . 
                    */ } 

					{user.profile}
					</p>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2 className="text">Skills</h2>
                  </div>
                  <div className="yui-u">
                    <div className="talent">
                      <h2>{user.project1}</h2>
                      <p>
                        {user.project1Abt}{" "}
                      </p>
                    </div>

                    <div className="talent">
                      <h2>{user.project2}</h2>
                      <p>
                       {user.project2Abt}{" "}
                      </p>
                    </div>

                    <div className="talent">
                      <h2>{user.project3}</h2>
                      <p>
                        {user.project3Abt}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2 className="text">Technical</h2>
                  </div>
                  <div className="yui-u">
                    <ul className="talent">
                      <li>{user.skill1}</li>
                      <li>{user.skill2}</li>
                      <li className="last">{user.skill3}</li>
                    </ul>

                    <ul className="talent">
                      <li>{user.skill4}</li>
                      <li>{user.skill5}</li>
                      <li className="last">{user.skill6}</li>
                    </ul>

                     </div>
                </div>

                <div className="yui-gf">
                  <div className="yui-u first">
                    <h2 className="text">Experience</h2>
                  </div>

                  <div className="yui-u">
                    <div className="job">
                      <h2 className="text">{user.company}</h2>
                      <h3 className="text">{user.compDes}</h3>
                      <h4 className="text">{user.From}-{user.To}</h4>
                      <p>
					  • {user.RolesA}
                . <br />
                • {user.RolesB} . <br />• {user.RolesC} . <br />
                • {user.RolesD} . <br />• {user.RolesE} .{" "}
                      </p>
                    </div>

                    <div className="job">
                      <h2 className="text">{user.company2}</h2>
                      <h3 className="text">{user.compDes2} , {user.compLoc2} </h3>
                      <h4 className="text">{user.From2} – {user.To2} </h4>
                      <p>
					  • {user.Roles2}
                . <br />
                • {user.Roles3} . <br />• {user.Roles4} . <br />
                • {user.Roles5} . <br />• {user.Roles6} ..{" "}
                      </p>
                    </div>

                    <div className="job">
                      <h2 className="text">{user.company3}</h2>
                      <h3 className="text">{user.compDes3}</h3>
                      <h4 className="text">{user.From3} – {user.To3}</h4>
                      <p>
                      • {user.Rolesx}
                . <br />
                • {user.Rolesy} . <br />• {user.Rolesz} . <br />
                {" "}
                      </p>
                    </div>

                   
                  </div>
                </div>

                <div className="yui-gf last">
                  <div className="yui-u first">
                    <h2 className="text">Education</h2>
                  </div>
                  <div className="yui-u">
                    <h2 className="text">
					{user.College}  ,  {user.ColLoc} 
                    </h2>
                    <h3 className="text">
					Bachelor of Technology , Information Technology , June 2017&mdash;{" "}
                      <strong>4.0 GPA</strong>{" "}  <br/>
                    </h3>
                  </div>

				 
				  <div className="yui-u">
                    <h2 className="text">
						<br/>
						{user.Inter} , {user.SchoolLoc} 
                    </h2>
                    <h3 className="text">
					Bachelor of Technology , Information Technology ,  {user.passOut}&mdash;{" "}
                      <strong>4.0 GPA</strong>{" "}
                    </h3>
                  </div>


                </div>
              </div>
            </div>
          </div>

          <div id="ft">
            <p>
              {user.name} &mdash;{" "}
              <a href={user.email}>{user.email}</a>{" "}
              &mdash; {user.ph}
            </p>
          </div>
        </div>
      </div>
    
    </div>


    </>
  );
}

export default NewResume;
