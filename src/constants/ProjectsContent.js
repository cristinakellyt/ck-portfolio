import imgCheckWeather from '@/assets/images/projects/check_weather2.png'
import imgEntertainment from '@/assets/images/projects/movie_app1.png'
import imgPomodoro from '@/assets/images/projects/pomodoro1.png'
import imgHouseCompany from '@/assets/images/projects/house_listing1.png'
import imgChargeGuard from '@/assets/images/projects/charge_guard2.png'
import imgSummaryCard from '@/assets/images/projects/summary_card1.png'

const projectCardContent = [
  {
    name: 'Charge Guard',
    description:
      'A CMS to control charging stations for electric cars. Check the CMS with the following credentials: login:admin@admin / password:admin',
    website: 'https://charge-guard.netlify.app/login',
    repoUrl: 'https://ck-check-weather.netlify.app/',
    image: imgChargeGuard
  },
  {
    name: 'House Company',
    description:
      'A project where the user can see available houses, search by city, filter them by price, location, and number of rooms. It is also possible to place new houses for sale through a form where the user provides all the information, being able to edit or delete it later',
    website: 'https://ck-house-company.netlify.app/houses',
    repoUrl: 'https://ck-check-weather.netlify.app/',
    image: imgHouseCompany
  },
  {
    name: 'Check Weather',
    description:
      'The user can see the weather information of a location by searching it by name. It also allows users to save the location and view their current weather on the home page.',
    website: 'https://ck-check-weather.netlify.app/',
    repoUrl: 'https://github.com/cristinakellyt/check-weather',
    image: imgCheckWeather
  },
  {
    name: 'Entertainment App',
    description:
      'In this project, the user can see available movies and tv-series, search and save them.',
    website: 'https://zk-entertainment.netlify.app/app/overview',
    repoUrl: 'https://github.com/cristinakellyt/entertainment-web-app',
    image: imgEntertainment
  },
  {
    name: 'Pomodoro',
    description:
      'This is a Pomodoro timer where the user can set the time for work and break (short or long). The user can pause, reset and set the minutes for the timer.',
    website: 'https://zk-pomodoro.netlify.app/',
    repoUrl: 'https://github.com/cristinakellyt/Pomodoro',
    image: imgPomodoro
  },

  {
    name: 'Summary Card',
    description:
      'A project where the user can select the type of its order and fill in the form of payment details.',
    website: 'https://ckorder-summary-component.netlify.app/',
    repoUrl: 'https://ck-check-weather.netlify.app/',
    image: imgSummaryCard
  }
]

export default projectCardContent
