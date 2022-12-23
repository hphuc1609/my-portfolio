import { useEffect, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import "./Contact.scss";

function Contact() {
  const [scrolled, setSrolled] = useState(false);

  useEffect(() => {
    const contact = document.querySelector(".contact");
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > contact.offsetTop - 300) {
        setSrolled(true);
      } else {
        setSrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    const formContact = document.getElementById("contact");
    const name = formContact.name.value;
    const email = formContact.email.value;
    const subject = formContact.subject.value;
    const message = formContact.message.value;
    const data = {
      name,
      email,
      subject,
      message,
    };
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      console.log(data);
      alert("Thank you for your message! I will contact you as soon as possible.");
    }
    formContact.reset();
  };

  return (
    <section className={scrolled ? "contact active bg-neutral-800" : "contact bg-neutral-800"}>
      <div className="container m-auto px-6 py-20 overflow-hidden max-sm:px-6">
        <h2 className="flex items-center justify-center text-white text-6xl font-bold max-sm:text-5xl">
          <TfiHeadphoneAlt className="mr-4" />
          Get In <span className="text-green-600 ml-4">Touch</span>
        </h2>
        <div className="contact__wrapper bg-neutral-900 flex justify-between mt-12 p-20 rounded-2xl max-sm:px-8 max-sm:flex max-sm:flex-col ">
          <div className="w-1/2 max-sm:w-full">
            <h3 className="text-white text-4xl font-medium mb-6">Contact Me</h3>
            <p className="w-10/12 text-white text-2xl leading-normal max-sm:w-full">
              I’m interested in opportunities for jobs – especially ambitious or large projects. However, if you have
              other requests or questions, don’t be shy to contact me.
            </p>
          </div>
          <div className="contact__form w-1/2 max-sm:w-full max-sm:mt-8">
            <form id="contact" autoComplete="off">
              <div className="contact__form-group">
                <input className="contact__form-input" type="text" name="name" id="name" placeholder=" " required />
                <label className="contact__form-label">Name</label>
              </div>
              <div className="contact__form-group">
                <input className="contact__form-input" type="email" name="email" id="email" placeholder=" " required />
                <label className="contact__form-label">Email</label>
              </div>
              <div className="contact__form-group">
                <input
                  className="contact__form-input"
                  type="subject"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  required
                />
                <label className="contact__form-label">Subject</label>
              </div>
              <div className="contact__form-group">
                <textarea
                  className="contact__form-input"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder=" "
                  required
                ></textarea>
                <label className="contact__form-label">Message</label>
              </div>
              <button
                className="primary-button button-contact float-right bg-green-600 hover:bg-green-600 text-white"
                onClick={handleSubmit}
              >
                Submit
                <RiSendPlaneFill className="contact__icon ml-2 text-4xl duration-300 ease" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
