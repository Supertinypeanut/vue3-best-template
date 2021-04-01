import Watcher from '@/utils/watcher'

/**
 * 代替Vue2中 EventBus
 */
declare type EventBusKeys = 'errorCode'
const eventBus = new Watcher<EventBusKeys>()

function useEventBus(): Watcher<EventBusKeys> {
	return eventBus
}

export { useEventBus }
