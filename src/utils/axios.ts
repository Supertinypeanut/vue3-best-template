import axios, { Method } from 'axios'

interface FetchService {
	post(url: string, data?: unknown): Promise<any>
	get(url: string, param?: unknown): Promise<any>
	request(config: FetchRequest): Promise<any>
}
interface FetchRequest {
	method: Method
	url: string
	params: unknown
	payload: any
	extends?: any
}
// axios 配置
function getInstance(serverPath: string) {
	const http = axios.create({
		baseURL: serverPath,
		timeout: 50000,
		headers: {},
		withCredentials: true,
	})
	/* request拦截器 */
	http.interceptors.request.use(
		(config: any) => {
			return config
		},
		(error: any) => {
			Promise.reject(error)
		}
	)
	/* respone拦截器 */
	http.interceptors.response.use(
		(res: any) => {
			if (res.data instanceof Blob) {
				return res
			}
			return Promise.resolve(res)
		},
		(error: any) => {
			return Promise.reject(error)
		}
	)
	return http
}

class HttpClient implements FetchService {
	private $http
	constructor(apiPath: string) {
		this.$http = getInstance(apiPath)
	}
	public async request(config: FetchRequest) {
		const result = await this.$http.request({
			url: config.url,
			method: config.method,
			params: config.params,
			data: config.payload,
			...config.extends,
		})
		return result.data
	}
	public async post(url: string, data?: unknown) {
		const result = await this.$http.post(url, data)
		return result.data
	}
	public async get(url: string, param?: unknown) {
		const result = await this.$http({
			url,
			method: 'get',
			params: param,
			withCredentials: true,
		})
		return result.data
	}
}

export { HttpClient, FetchService }
