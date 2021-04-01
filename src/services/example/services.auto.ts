import { FetchService } from '@/utils'
/**
 *
 * @class
 */
export default class {
	public http: FetchService
	public constructor(http: FetchService) {
		this.http = http
	}
	/**
	 * Get Monthly Csv
	 * @method
	 */
	public async GetMonthlyDataQuickpayApiGET(
		request: typingSerivces.EcampleData
	): Promise<{}> {
		const result: {} = await this.http.get(
			'/api/quickpay/getMonthlyData',
			request
		)
		return result
	}
}
