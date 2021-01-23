import Soy from './Soy'
import Comparison from './Comparison'
import BenefitsOfSoy from './BenefitsOfSoy'
import Myths from './Myths'
import PsyliumHusk from './PsyliumHusk'
import Soygreen from './Soygreen'
import Salad from './Salad'
import CaloriesBurn from './CaloriesBurn'
import CaloriesIntake from './CaloriesIntake'
import ChooseSoyGreen from './ChooseSoyGreen'
import Promotion from './Promotion'

const pages = [
  {
    name: 'soy',
    meta: {
      title: 'Soy'
    },
    component: Soy
  },
  {
    name: 'Comparison',
    meta: {
      title: 'Comparison between animal protein and plant based protein'
    },
    component: Comparison
  },
  {
    name: 'benefits of soy',
    meta: {
      title: 'Benefits Of Soy'
    },
    component: BenefitsOfSoy
  },
  {
    name: 'myths',
    meta: {
      title: 'Myths'
    },
    component: Myths
  },
  {
    name: 'psylium husk',
    meta: {
      title: 'Psylium Husk'
    },
    component: PsyliumHusk
  },
  {
    name: 'Soygreen',
    meta: {
      title: 'Soygreen'
    },
    component: Soygreen
  },
  {
    name: 'Salad',
    meta: {
      title: 'Salad'
    }, 
    component: Salad
  },
  {
    name: 'calories burn',
    meta: {
      title: 'Calories Burn'
    }, 
    component: CaloriesBurn
  },
  {
    name: 'calories intake',
    meta: {
      title: 'Calories intake'
    }, 
    component: CaloriesIntake
  },
  {
    name: 'choose SoyGreen',
    meta: {
      title: 'Choose Soy Green'
    }, 
    component: ChooseSoyGreen
  },
  {
    name: 'promotion',
    meta: {
      title: 'Promotion'
    }, 
    component: Promotion
  },
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages