import { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import skillsImg from "../../img/toppng.com-html5-js-css3-logo-png-3960x1500.png";


export function SkillsModal() {
	const [show, setShow] = useState(false);
  
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	return (
	  <>
		<Link variant="primary" onClick={handleShow}>
			<div className="innerbox border border-3 border-dark-subtle bg-light">
				<Image src={skillsImg} className="Img2" />  
			</div>
		</Link>
		
		<Modal scrollable={true} show={show} onHide={handleClose} >

		  <Modal.Header closeButton className="bg-dark-subtle">
			<Modal.Title >My skill</Modal.Title>
		  </Modal.Header>
		  
		  <Modal.Body  className="bg-body-secondary">
			<div className="box bg-light p-3 ms-3 float-end text-center"><span className="innerText">HTML</span></div>
			<p>I have studied Front End development at the Noroff School of Technology and digital media.</p>
			<p>Se details at <a href="https://www.noroff.no/en/studies/vocational-school/front-end-development" target="_blank">Noroff.no</a></p>
			<p>Frontend development is the technology education where visual design meets coding, web and UX design.</p>                                
			<div className="box bg-light p-3 me-3 float-start text-center"><span className="innerText">CSS</span></div>
			<p>Through my studies, I have acquired expertise in the most important areas of developing interactive and dynamic products with a strong focus on the development of user-oriented solutions for mobile devices and the web.</p>
			<p>In my studies, I have learned about basic design principles, universal design, comprehensive user experiences and technical solutions that are in accordance with today's requirements and needs.</p>
			<div className="box bg-light p-3 me-3 float-start text-center"><span className="innerText">JS</span></div>                                
			<p>I have learned the most important technologies for Front End Development, with a strong focus on HTML, CSS and javascript, and have also adopted frameworks for CSS and JS. The most important in this context are SASS and React.</p>
			<div className="box  bg-light p-3 ms-3 float-end text-center"><span className="innerText">API</span></div>                                
			<p>In the course I have also learned about the use of API for communication with servers and AJAX for more responsive exchange of data with servers.</p>
			<div className="box bg-light p-3 me-3 float-start text-center"><span className="innerText">STRAPI</span></div>                                
			<p>I have also learned basic engineering techniques for managing development projects, workflow, automation and streamlining of both work process and product.</p>                                
		  </Modal.Body>

		</Modal>
	  </>
	);
  }

