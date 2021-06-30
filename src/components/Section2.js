import content2_1Png from '../images/tab-content-2-1.png'
import content2_2Png from '../images/tab-content-2-2.png'
import content2_3Png from '../images/tab-content-2-3.png'

const Section2 = () => {
  return (
    <>
      <div className="tab-2-content-top">
        <p className="text-lg">
          Watch TV shows and movies anytime, anywhere - personalized for you.
        </p>
        <a href="#" className="btn btn-lg">
          Watch Free For 30 Days
        </a>
      </div>
      <div className="tab-2-content-bottom">
        <div>
          <img src={content2_1Png} alt="" />
          <p className="text-md">Watch on your TV</p>
          <p className="text-dark">
            Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>

        <div>
          <img src={content2_2Png} alt="" />
          <p className="text-md">Watch instantly or download for later</p>
          <p className="text-dark">
            Available on phone and tablet, wherever you go.
          </p>
        </div>

        <div>
          <img src={content2_3Png} alt="" />
          <p className="text-md">Use any computer</p>
          <p className="text-dark">Watch right on Netflix.com</p>
        </div>
      </div>
    </>
  )
}

export default Section2
