import { motion } from "framer-motion";
import { styles } from '../styles';
import { useRef, useState } from 'react';
import { slideIn } from '../utils/motion';
import { SectionWraper } from '../hoc';
import emailjs from '@emailjs/browser'


const ContactSection = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)


    emailjs.send(
      'service_gcez8jh',
      'template_kkg433h',
      {
        from_name: form.name,
        to_name: 'Arun',
        form_email: form.email,
        to_email: "arununithroth@gmail.com",
        message: form.message
      },
      'NGiNa7C8SutWr3iwv'
    )
      .then(() => {
        setLoading(false)
        alert("Thank you, I will get back to you ASAP")

        setForm({
          name: '',
          email: '',
          message: ''
        }),((error) => {
            setLoading(false)
            console.log(error)
            alert("Oops something went wrong")
          })
      })

  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden justify-center ">
      <motion className="flex-[0.75] bg-[#0a04049c] p-10 rounded-2xl bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}></h3>
        <form ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input type="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name?"
              className="bg-[#54667f3b] py-4 px-4 placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email?"
              className="bg-[#54667f3b] py-4 px-4 placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what's in your mind?"
              className="bg-[#54667f3b] py-4 px-4 placeholder:text-secondary text-white 
              rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button type="submit" className="bg-tertiary rounded-xl py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary">{loading ? 'sending...' : 'send'}</button>

        </form>
      </motion>
    </div>
  )
}

const Contact = SectionWraper(ContactSection, 'contact')
export default Contact