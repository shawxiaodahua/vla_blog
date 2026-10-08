import { ref } from 'vue'

const HOME_PAGES = [
    { id: 'overview', index: '01', label: '总览', shortLabel: 'Overview' },
    { id: 'explore', index: '02', label: '探索', shortLabel: 'Explore' },
    { id: 'vla', index: '03', label: 'VLA', shortLabel: 'VLA' },
    { id: 'wam', index: '04', label: 'WAM', shortLabel: 'WAM' },
    { id: 'about', index: '05', label: '关于', shortLabel: 'About' },
]

const activeHomePage = ref('overview')
const activeExploreNode = ref(0)

let navigatorFn = null

function setActiveHomePage(page) {
    activeHomePage.value = page
}

function setHomePageNavigator(fn) {
    navigatorFn = fn
}

function requestHomePage(page, options = {}) {
    if (navigatorFn) {
        navigatorFn(page, options)
    } else {
        setActiveHomePage(page)
    }
}

export {
    HOME_PAGES,
    activeHomePage,
    activeExploreNode,
    setActiveHomePage,
    setHomePageNavigator,
    requestHomePage,
}