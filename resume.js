import React from "react";
import data from "../data.json";
function Resume(props) {
  let profile = data.details[props.location.personcard.id];
  console.log(profile);
  return (
    <div className="row">
      {/* cards data */}
      <div className="col-sm-12 ">
        <div className="card" style={{backgroundColor: "#25460B"}}>
          <h1 style={{color: "#7B9F5F"}}>{profile.Card.name}</h1>
          <a href={"mailto:" + profile.Card.email}>
            <h4>{profile.Card.email}</h4>
          </a>
        </div>
      </div>
          {/* get the remaining resume data */}
      <div className="col-sm-12"style={{backgroundColor: "#7B9F5F"}}>
        <h2>Education details:</h2>
        <hr />
        <p>{profile.Graduation}<br/>{profile.Intermediate}<br/>{profile.School}</p>
        <hr/>
        <h3>Technical Details</h3>
        <hr/>
        <p>{profile.Technical}<br/>{profile.Web}</p>
        <hr/>
        <h3>Hobbies</h3>
        <p>{profile.Hobbies}</p>
        <hr/>
        <h4>Declaration</h4>
        <p>{profile.Declaration}</p>

        <p>P.Malathidevi</p>



      </div>
    </div>
  );
}

export default Resume;