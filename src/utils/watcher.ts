type Callback = (...args: any[]) => unknown

// 通信总线
class Watcher<EventKeys extends string = string> {
	// 全局事件维护
	private _events: Map<EventKeys, Array<Callback>> = new Map()

	// 发布，触发事件
	public emit(key: EventKeys, ...payload: any[]) {
		const callbacks = this._events.get(key)
		if (callbacks) {
			callbacks.forEach((callback: Callback) => {
				callback.apply(null, [...payload])
			})
		}
	}

	// 订阅事件
	public on(key: EventKeys, callback: Callback) {
		if (this._events.has(key)) {
			this._events.get(key)?.push(callback)
		} else {
			this._events.set(key, [callback])
		}
	}

	// 关闭指定的订阅中某一个回调
	public off(key: EventKeys, callback: Callback) {
		if (this._events.has(key)) {
			const callbacks = this._events.get(key)
			const index = callbacks?.indexOf(callback) as number
			callbacks?.splice(index, 1)
		}
	}

	// 清空指定订阅
	public delete(key: EventKeys) {
		if (this._events.has(key)) {
			this._events.delete(key)
		}
	}

	// 清空所有订阅
	public clear() {
		this._events = new Map()
	}
}

export default Watcher
export { Callback }
