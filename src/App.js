import React, { useState } from 'react'
import ContentTabs from './components/ContentTabs'
import Contents from './components/Contents'
import Footer from './components/Footer'
import Header from './components/Header'

import Counter123, { PI as P122 } from './components/Counter'
// import { PI  } from './components/Counter'

const App = () => {
  const [selectedTabNumber, setSelectedTabNumber] = useState(1)

  return (
    <>
      {/* <Counter123 />
      <br />
      <br />
      <br />
      {P122} */}

      <Header />

      <ContentTabs
        tabNum={selectedTabNumber}
        setTabNum={setSelectedTabNumber}
      />

      <Contents tabNum={selectedTabNumber} />

      <Footer />
    </>
  )
}

export default App
