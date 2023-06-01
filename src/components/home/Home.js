
import { Navigate, useNavigate,Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import { Row,Image } from "react-bootstrap";

import { SkillsModal } from "./MySkills";
import { WhoImIModal } from "./WhoAmI";

import profileImg from "../../img/DSC_6832-1.jpg";
import project1Img from "../../img/Project1.png";
import project2Img from "../../img/Project2.png";
import project3Img from "../../img/Project3.png";
import gitLogo from "../../img/PinClipart.com_open-source-github.png";
import emailImg from "../../img/PinClipart.com_track-shoes-clip-art_1652899.png";
import lnImg from "../../img/PinClipart.com_retirement-party-clip-art_108827.png";



export default function Home() {

	return (
		<Container>
			
			<Row sm={1} md={2} className="grid g-3 my-2">

				<div className="d-grid bg-body-secondary border border-3 border-dark-subtle pt-2 pb-3">
					<Image src={profileImg} alt="Aud K. Samuelsen main profile picture" className=" mx-auto d-block img1"/>
					<h1>Aud Kristin Samuelsen</h1>               
					<p className="textcolumn1">I am an authorized Psychiatric nurse who has now completed training as a front end developer.</p>
				</div>

				<div className="d-grid bg-body-secondary border border-3 border-dark-subtle pt-2 pb-3">
					<h1>Project Excam 2</h1>
					<h2>The social media company</h2>
					<Image src={project1Img} alt="Project 1 image" className=" mx-auto d-block img1"/>
					<Link to="https://github.com/Noroff-FEU-Assignments/project-exam-2-audksamu" target="_blank">Go to project Github</Link>
				</div>		
				<div className="d-grid bg-body-secondary border border-3 border-dark-subtle pt-2 pb-3">
					<h1>JS Framework CA</h1>
					<h2>Monsters and Robotes</h2>
					<Image src={project2Img} alt="Project 2 image" className=" mx-auto d-block img1"/>
					<Link to="https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-audksamu/" target="_blank">Go to project Github</Link>
				</div>		
				<div className="d-grid bg-body-secondary border border-3 border-dark-subtle pt-2 pb-3">
					<h1>Semester Project 2</h1>
					<h2>Mountain Diva Shoes</h2>
					<Image src={project3Img} alt="Project 3 image" className=" mx-auto d-block img1"/>
					<Link to="https://github.com/audksamu/Semester-Project-2" target="_blank">Go to project Github</Link>

				</div>		

				<div className="d-grid bg-body-secondary border border-3 border-dark-subtle pt-2 pb-3">

					<h2>My GitHub</h2>
					<Link to="https://github.com/audksamu" target="_blank">
						<div className="innerbox border border-3 border-dark-subtle bg-d-grid gap-2light">
							<Image src={gitLogo} className="Img2" />  
						</div>
					</Link>
					
					<h2 className="mt-3">My Skills</h2>
					
					<SkillsModal />

					<h2 className="mt-3">Who Im I?</h2>
					<WhoImIModal />


				</div>		

				<div className="d-grid bg-body-secondary border border-3 border-dark-subtle pt-2 pb-3">
					<h1>My contact details</h1>
					<div className="contactbox  border border-3 border-dark-subtle bg-light">
						<Link to="mailto:kristinswork900@gmail.com">
							<Image src={emailImg} className="contactimg"/>
							<h5>kristinswork900@gmail.com</h5>
						</Link>
					</div>
					
					<div className="contactbox border border-3 border-dark-subtle bg-light py-2 ">
					<Link to="https://www.linkedin.com/in/aud-kristin-s-996269192" target="_blank">
						<Image src={lnImg} className="contactimg" />
						<h5>Linkedin</h5>
					</Link>
				</div>
				</div>
			</Row>
			
		</Container>
	);
}
