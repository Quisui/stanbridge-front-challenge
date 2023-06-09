import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vue from 'vue'

const requireComponent = require.context(
  '~/components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
  )
  Vue.component(componentName, componentConfig.default || componentConfig)
})
