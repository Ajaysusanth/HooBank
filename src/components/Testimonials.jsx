import { feedback } from "../constants"
import styles from "../style"
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

      <div className="absolute w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>

      <div className="w-full flex flex-col md:flex-row justify-between items-center sm:mb-16 mb-6 relative z-[1]">
        <h1 className={`${styles.heading2}`}>What people are <br className="sm:block hidden"/>saying about us</h1>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className="flex flex-wrap w-full relative z-[1] sm:justify-start justify-center feedback-container">

        {feedback.map((card)=>(
          <FeedbackCard key={card.id} {...card}/>
        ))}

      </div>

    </section>
  )
}
export default Testimonials