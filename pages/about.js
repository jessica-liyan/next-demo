
const About = () => (
  <div>
    <p>about</p>
    <style jsx>{`
      p {
        color: red;
      }
    `}
    </style>
  </div>
)

About.getLayout = function (page) {
  return (
    <div className="about">
      {page}
    </div>
  )
}

export default About;