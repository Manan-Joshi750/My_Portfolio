import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Whether it's Discussing DSA problems or Mathematical concepts or building powerful Web Applications — I'm all ears!</p>
        <p>Contact me now for a Free consultation.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:joshimanan265@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:joshimanan265@gmail.com">joshimanan265@gmail.com</a>
        </div>
        <div>
        <a href="tel:+916283453432"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+916283453432">(+91) 6283453432</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}