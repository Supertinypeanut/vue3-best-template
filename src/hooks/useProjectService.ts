import { inject, provide } from 'vue'
import { projectService, ServiceAuto } from '@/services'

/**
 * 提供API接口
 */
const key = Symbol('projectService')

function useProjectServiceProvide(): ServiceAuto {
	provide(key, projectService)
	return projectService
}

function useProjectServiceInject(): ServiceAuto {
	return inject(key) as ServiceAuto
}

export { useProjectServiceProvide, useProjectServiceInject }
