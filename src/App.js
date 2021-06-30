import React, { useState } from 'react'
import ContentTabs from './components/ContentTabs'
import Contents from './components/Contents'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const [selectedTabNumber, setSelectedTabNumber] = useState(1)

  return (
    <>
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
