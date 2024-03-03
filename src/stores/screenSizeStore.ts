import { defineStore } from 'pinia'

const MOBILE_MEDIUM = 425
const TABLET = 768

export const useScreenSizeStore = defineStore('screenSizeStore', {
  state: () => ({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  }),
  actions: {
    initResponsive() {
      const width = window.innerWidth
      this.isDesktop = width > TABLET
      this.isMobile = width <= MOBILE_MEDIUM
      this.isTablet = width > MOBILE_MEDIUM && width <= TABLET

      window.addEventListener('resize', () => {
        const newWidth = window.innerWidth
        this.isMobile = newWidth <= MOBILE_MEDIUM
        this.isTablet = newWidth > MOBILE_MEDIUM && newWidth <= TABLET
        this.isDesktop = newWidth > TABLET
      })
    }
  }
})
