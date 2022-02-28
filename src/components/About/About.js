import React from 'react';

import Icon1 from '../../images/twitterImg.png';
import Icon2 from '../../images/stockImg.jpeg';
import Icon3 from '../../images/img-4.jpg';

import { AboutContainer, AboutH1, AboutWrapper, AboutCard, AboutIcon, AboutH2, AboutP } from './AboutElements';

const About = () => {
  return(
    <AboutContainer id="AboutMain">
      <AboutH1>About Us</AboutH1>
      <AboutWrapper>
        <AboutCard>
          <AboutIcon src={Icon1}></AboutIcon>
          <AboutH2>Tweet Data</AboutH2>
          <AboutP>Stockfluence is a website to show the influence of tweets on todays markets.</AboutP>
        </AboutCard>

        <AboutCard>
          <AboutIcon src={Icon2}></AboutIcon>
          <AboutH2>Reduce Expenses</AboutH2>
          <AboutP>We primarly are focused on a select stocks and cryptos, but we are expanding the list daily.</AboutP>
        </AboutCard>

        <AboutCard>
          <AboutIcon src={Icon3}></AboutIcon>
          <AboutH2>Our Mission</AboutH2>
          <AboutP>To show the community how extraneous factors are affecting the stock market.</AboutP>
        </AboutCard>
      </AboutWrapper>
    </AboutContainer>
  );
}

export default About;

















































// import React, { Component } from "react";
// import { useState } from "react";
// import "./About.css";
// function About() {

//   return (
//     <div>
//       <center>
//         <div id="bannerimage">
//           <h1 class="main-1">ABOUT US</h1>
//         </div>
//         <div className="info-1">
//           <p>
//             Stockfluence is a website to show the influence of tweets on todays
//             markets. We primarly are focused on a select stocks and cryptos, but
//             we are expanding the list daily. We are mainly targeting meme stocks
//             and cryptos that are highly suceptible to change by certain
//             celebrities and organizations.
//           </p>
//           <p>
//             We are currently focused on anlayzing Twitter as a focal point in
//             this project, but are expanding into more emerging apps such as
//             Reddit.
//           </p>
//           <p>
//             Our goal is to show the community how extraneous factors are
//             affecting the stock market daily.
//           </p>
//             <img
//               src="https://play-lh.googleusercontent.com/wIf3HtczQDjHzHuu7vezhqNs0zXAG85F7VmP7nhsTxO3OHegrVXlqIh_DWBYi86FTIGk"
//               alt="Twitter" height={"200"} width={"200"} className="img-1"
//             ></img>
//             <img
//               src="https://marketinginsidergroup.com/wp-content/uploads/2021/05/X-Brands-That-Have-No-Competition-on-Social-Media-in-2021.jpg"
//               alt="Social" height={"200"} width={"200"} className="img-2"
//             ></img>
          

//         </div>

//         <div className="info-2">
//           <h2 className="main-2">Our Mission</h2>
//           <p>To show consumers how social media is affecting todays evergrowing markets</p>
          
//         </div>
//       </center>
//     </div>





    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src="holder.js/100px180" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>

    //   <Card style={{ width: "18rem" }}>
    //     <Card.Img variant="top" src="holder.js/100px180" />
    //     <Card.Body>
    //       <Card.Title>Card Title</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //       </Card.Text>
    //       <Button variant="primary">Go somewhere</Button>
    //     </Card.Body>
    //   </Card>
    // </div>

    //   <Card>
    //   <Card.Header as="h5">Featured</Card.Header>
    //   <Card.Body>
    //     <Card.Title>Special title treatment</Card.Title>
    //     <Card.Text>
    //       With supporting text below as a natural lead-in to additional content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
//   );
// }
// export default About;
