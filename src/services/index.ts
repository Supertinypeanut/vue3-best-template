import { HttpClient } from '@/utils'
import ServiceAuto from './example/services.auto'

const path = process.env.VITE_APP_API_PATH

const http = new HttpClient(path)

const projectService = new ServiceAuto(http)


export {
	projectService,
	ServiceAuto
}
