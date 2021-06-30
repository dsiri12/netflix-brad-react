import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const Contents = (props) => {
  const { tabNum } = props
  return (
    <div className="container">
      {tabNum === 1 && <Section1 />}

      {tabNum === 2 && <Section2 />}

      {tabNum === 3 && <Section3 />}
    </div>
  )
}

export default Contents
