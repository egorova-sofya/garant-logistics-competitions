import React from "react";

const AboutMe = () => {
  const employMe = (friendlyCommand, money) => {
    return friendlyCommand && money;
  };
  return (
    <>
      <main>
        <h1>About me</h1>
        <p>
          <b>Name:</b> Sofya
        </p>
        <p>
          <b>Last name:</b> Egorova
        </p>
        <p>What I like: </p>
        <ul></ul>
      </main>
    </>
  );
};

export default AboutMe;
