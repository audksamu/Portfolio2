import { useState } from "react";
import { Modal, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import whoImage from "../../img/DSC_6441_2.jpg";
import imageOne from "../../img/DSC_6066-small.jpg"
import imageTwo from "../../img/DSC_6090-small.jpg"
import imageThree from "../../img/DSC_5777-small.jpg"

function FullScreen (eim) { 
	console.log("fullScreen",eim) 

};


export function WhoImIModal() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
 
	return (
	  <>
		<Link variant="primary" onClick={handleShow}>
			<div className="innerbox border border-3 border-dark-subtle bg-light">
				<Image src={whoImage} className="Img2" />  
			</div>
		</Link>
		
		<Modal scrollable={true} show={show} onHide={handleClose} >

		  <Modal.Header closeButton className="bg-dark-subtle">
			<Modal.Title >Who am I?</Modal.Title>
		  </Modal.Header>
		  
		  <Modal.Body  className="bg-body-secondary w-100">

			<div className="imgBox bg-light p-1 ms-3 float-end text-center"><Image src={imageOne} className="innerImg" /></div>
			<div className="fsBox bg-light d-none"></div>
			<p>I am an active lady who likes to go for walks in the forest and mountains with my two dogs. I also do climb and some gardening. I am a woman who prefers a trip out into nature to time on the sofa. In addition, I am fond of interior design in the home.</p>                            
			<div className="imgBox bg-light p-1 me-3 float-start"><Image src={imageTwo} className="innerImg" /></div>                                
			<p>I am outgoing, bubbly and love to spend time with friends and family, but I also enjoy being in my own company. I am independent, honest, and trustworthy. I am a woman who is not afraid to say what I think, but I am also good at listening and letting others have their say.</p>                     
			<div className="imgBox bg-light p-1 ms-3 float-end text-center"><Image src={imageThree} className="innerImg" /></div>                                
			<p>I am a trained specialist nurse with experience in addiction and psychiatry and have spent large parts of my career working closely with people in various crises and phases of life. I have had busy and unpredictable workdays and have learned to work under high work pressure and collaborate with many different people.</p>                            

		  </Modal.Body>

		</Modal>
	  </>
	);
  }

