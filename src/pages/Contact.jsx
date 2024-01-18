import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    document.title = "CONTACT";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lpis4ca', 'template_a5v6zrf', form.current, 'ZZEEsmFJK3TpnKA_1')
        .then((result) => {
        console.log(result.text);
        alert("Message Sent Succeful!");
        }, (error) => {
        console.log(error.text);
        alert("Sorry We Face A Problem!");
    });
};

return (
    <>
        <section id="contact">
            <form ref={form} onSubmit={sendEmail}>
                <h2>Contact Me</h2>
                <p>You Can Contact Me By This Form or by Message in Social Media</p>
                <div id="nameinput">
                    <input type="text" name="user_name" id="name" placeholder="NAME" required/>
                </div>
                <div id="emailinput">
                    <input type="email" name="user_email" id="email" placeholder="EMAIL" required/>
                </div>
                <div id="contentinput">
                    <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <div id="submit">
                    <input type="submit" value="Send"/>
                </div>
            </form>
        </section>
        {/* <Footer /> */}
    </>
)
}
export default Contact