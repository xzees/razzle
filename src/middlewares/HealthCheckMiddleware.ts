import express from 'express'
import _ from 'lodash'
import DynamicRouteManager from 'common/Manager/DynamicRouteManager'

const HealthCheckMiddleware = express()
HealthCheckMiddleware.get('/', (req, res) => {
  if (_.every([
    DynamicRouteManager.default.isFetched
  ])) {
    res.status(200).json({
      message: "Web is running"
    })
  } else {
    res.status(400).json({
      message: "Unhealthy"
    })
  }
})

export default HealthCheckMiddleware