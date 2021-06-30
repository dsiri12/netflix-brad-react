const ContentTabs = (props) => {
  console.log(props)
  const { tabNum, setTabNum } = props

  return (
    <section className="tabs">
      <div className="container">
        <div
          onClick={() => setTabNum(1)}
          className={tabNum === 1 && 'tab-border'}
        >
          <i className="fas fa-door-open fa-3x"></i>
          <p className="hide-sm">Cancel at any time</p>
        </div>

        <div
          onClick={() => setTabNum(2)}
          className={tabNum === 2 && 'tab-border'}
        >
          <i className="fas fa-tablet-alt fa-3x"></i>
          <p className="hide-sm">Watch anywhere</p>
        </div>

        <div
          onClick={() => setTabNum(3)}
          className={tabNum === 3 && 'tab-border'}
        >
          <i className="fas fa-tags fa-3x"></i>
          <p className="hide-sm">Pick your price</p>
        </div>
      </div>
    </section>
  )
}

export default ContentTabs
