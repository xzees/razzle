export const BASENAME = ''

const isServer = typeof window === 'undefined'

const browserHistory = isServer ? {} : require("history").createBrowserHistory({ basename: BASENAME })

export default browserHistory