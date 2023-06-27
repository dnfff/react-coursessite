import '../../App.css'

import Header from '../HomePage/Header/Header'
import Body from '../HomePage/Body/Body'
import Statistic from '../HomePage/Statistic/Statistic'
import Content from '../HomePage/Content/Content'
import Teacher from '../HomePage/Teacher/Teacher'
import Students from '../HomePage/Students/Students'
import Questions from '..//HomePage/Questions/Questions'
import Ready from '../HomePage/Ready/Ready'
import Footer from '../HomePage/Footer/Footer'



function HomePage() {

  return (
    <div className='body_'>
        <div className='firstpage'>
        <Header />
        </div>
        <Body />
        <Statistic />
        <Content />
        <Teacher />
        <Students />
        <Questions />
        <Ready />
        <Footer />
    </div>
  )
}

export default HomePage