import imgCheckWeather from '@/assets/images/projects/check_weather2.webp'
import imgEntertainment from '@/assets/images/projects/movie_app1.webp'
import imgPomodoro from '@/assets/images/projects/pomodoro1.webp'
import imgHouseCompany from '@/assets/images/projects/house_listing1.webp'
import imgChargeGuard from '@/assets/images/projects/charge_guard2.webp'
import imgSummaryCard from '@/assets/images/projects/summary_card1.webp'
import imgKanban from '@/assets/images/projects/kanban2.webp'
import imgAdviceGenerator from '@/assets/images/projects/advice_card.webp'

//Skills icons
import iconHtml from '@/assets/icons/html.svg'
import iconCss from '@/assets/icons/css.svg'
import iconJs from '@/assets/icons/javascript.svg'
import iconVue from '@/assets/icons/vue.svg'
import iconNode from '@/assets/icons/node.svg'
import iconTypescript from '@/assets/icons/typescript.svg'
import iconScss from '@/assets/icons/scss.svg'
import iconGit from '@/assets/icons/git.svg'
import iconScreens from '@/assets/icons/screens.svg'
import iconApi from '@/assets/icons/api.svg'
import iconLocalStorage from '@/assets/icons/local_storage.svg'
import iconStorybook from '@/assets/icons/storybook.svg'
import iconTailwind from '@/assets/icons/tailwind_css.svg'
import iconAxios from '@/assets/icons/axios.svg'
import iconWebComponents from '@/assets/icons/web_component.svg'
import iconWebpack from '@/assets/icons/webpack.svg'

const projectCardContent = [
  {
    name: 'Charge Guard',
    description:
      'A CMS to control charging stations for electric cars. Check the CMS with the following credentials: login:admin@admin.com / password:admin',
    website: 'https://charge-guard.netlify.app/login',
    repoUrl: 'https://ck-check-weather.netlify.app/',
    image: imgChargeGuard,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'SCSS', image: iconScss },
      { name: 'Javascript', image: iconJs },
      { name: 'Vue3', image: iconVue },
      { name: 'Node', image: iconNode },
      { name: 'Git', image: iconGit },
      { name: 'API', image: iconApi }
    ]
  },
  {
    name: 'Kanban',
    description:
      'A project where the user can create, edit, delete and boards. The user can also create, edit and delete columns and tasks.',
    website: 'https://ck-kanban.netlify.app/',
    repoUrl: 'https://github.com/cristinakellyt/zk-kanban',
    image: imgKanban,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'SCSS', image: iconScss },
      { name: 'Typescript', image: iconTypescript },
      { name: 'Vue3', image: iconVue },
      { name: 'Git', image: iconGit },
      { name: 'Responsive design', image: iconScreens },
      { name: 'LocalStorage', image: iconLocalStorage },
      { name: 'Storybook', image: iconStorybook }
    ]
  },
  {
    name: 'House Company',
    description:
      'A project where the user can see available houses, search by city, filter them by price, location, and number of rooms. It is also possible to place new houses for sale through a form where the user provides all the information, being able to edit or delete it later',
    website: 'https://ck-house-company.netlify.app/houses',
    repoUrl: 'https://github.com/cristinakellyt/house-listing',
    image: imgHouseCompany,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'SCSS', image: iconScss },
      { name: 'Javascript', image: iconJs },
      { name: 'Vue3', image: iconVue },
      { name: 'Git', image: iconGit },
      { name: 'Responsive design', image: iconScreens },
      { name: 'LocalStorage', image: iconLocalStorage }
    ]
  },
  {
    name: 'Check Weather',
    description:
      'The user can see the weather information of a location by searching it by name. It also allows users to save the location and view their current weather on the home page.',
    website: 'https://ck-check-weather.netlify.app/',
    repoUrl: 'https://github.com/cristinakellyt/check-weather',
    image: imgCheckWeather,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'Tailwind', image: iconTailwind },
      { name: 'Typescript', image: iconTypescript },
      { name: 'Vue3', image: iconVue },
      { name: 'Git', image: iconGit },
      { name: 'Responsive design', image: iconScreens },
      { name: 'API', image: iconApi },
      { name: 'LocalStorage', image: iconLocalStorage },
      { name: 'Axios', image: iconAxios }
    ]
  },
  {
    name: 'Entertainment App',
    description:
      'In this project, the user can see available movies and tv-series, search and save them.',
    website: 'https://zk-entertainment.netlify.app/app/overview',
    repoUrl: 'https://github.com/cristinakellyt/entertainment-web-app',
    image: imgEntertainment,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'SCSS', image: iconScss },
      { name: 'Javascript', image: iconJs },
      { name: 'Vue3', image: iconVue },
      { name: 'Responsive design', image: iconScreens },
      { name: 'LocalStorage', image: iconLocalStorage },
      { name: 'Git', image: iconGit }
    ]
  },
  {
    name: 'Pomodoro',
    description:
      'This is a Pomodoro timer where the user can set the time for work and break (short or long). The user can pause, reset and set the minutes for the timer.',
    website: 'https://zk-pomodoro.netlify.app/',
    repoUrl: 'https://github.com/cristinakellyt/Pomodoro',
    image: imgPomodoro,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'SCSS', image: iconScss },
      { name: 'Typescript', image: iconTypescript },
      { name: 'Javascript', image: iconJs },
      { name: 'Web Components', image: iconWebComponents },
      { name: 'Webpack', image: iconWebpack },
      { name: 'Git', image: iconGit }
    ]
  },

  {
    name: 'Summary Card',
    description:
      'A project where the user can select the type of its order and fill in the form of payment details.',
    website: 'https://ckorder-summary-component.netlify.app/',
    repoUrl: 'https://github.com/cristinakellyt/order-summary-component/',
    image: imgSummaryCard,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'CSS', image: iconCss },
      { name: 'Javascript', image: iconJs },
      { name: 'Responsive design', image: iconScreens },
      { name: 'Git', image: iconGit }
    ]
  },

  {
    name: 'Advice Generator',
    description: 'A project where the user can click on the dice to see new advice on the screen.',
    website: 'https://zk-advice-generator.netlify.app',
    repoUrl: 'https://github.com/cristinakellyt/advice-generator',
    image: imgAdviceGenerator,
    skills: [
      { name: 'HTML5', image: iconHtml },
      { name: 'CSS', image: iconCss },
      { name: 'Javascript', image: iconJs },
      { name: 'Git', image: iconGit }
    ]
  }
]

export default projectCardContent
