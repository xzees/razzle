const w: any = typeof window !== 'undefined' ? window : process
export const runtimeConfig = typeof window !== 'undefined' && !!(window['env']) ? {
  ENV: (window as any).env.ENV || '',
  ENV_NAME: (window as any).env.ENV_NAME || '',
  
} : {
    ENV: process.env.WEB_ENV || process.env.RAZZLE_WEB_ENV || '',
    ENV_NAME: process.env.ENV_NAME || process.env.RAZZLE_ENV_NAME || '',
  }
  
const PROD = {
  flight: {
    paymentENV: 'prd'
  },
}

const DEV = {
  flight: {
    paymentENV: 'dev'
  },
}



/** TODO-production: Change this */
const Config = DEV

export default Config