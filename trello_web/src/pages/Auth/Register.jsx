import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { styles } from '~/styles'
import { EarthCanvas } from '../../components/Canvas/EarthCanvas'
import { slideIn } from '~/utils/motion'

const Register = () => {

  const formRef = useRef()
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.userName || !form.email || !form.password) {
      alert('Please fill in all fields')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email)) {
      alert('Valid email address')
      return
    }

    if (form.password.length < 6) {
      alert('Password must be at least 6 characters long')
      return
    }

    setLoading(true)

    setLoading(false)
    alert('Registration successful!')

    setForm({
      userName: '',
      email: '',
      password: ''
    })
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-xl'
      >
        <h3 className={styles.sectionHeadText}>Register</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              User Name
            </span>
            <input
              type='text'
              name='userName'
              value={form.userName}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-[#192a56] py-4 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='bg-[#192a56] py-4 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Password</span>
            <input
              type='password'
              name='password'
              value={form.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='bg-[#192a56] py-4 px-6 placeholder:text-secondary text-white rounded-md outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='hover:bg-[#192a56b4] bg-[#192a56] py-3 px-8 outline-none w-fit shadow-md shadow-primary text-white font-bold rounded-md'
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default Register
