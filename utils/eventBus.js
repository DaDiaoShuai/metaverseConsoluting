import EventEmitter from "eventemitter3";

const eventBus = new EventEmitter();

export const emitEvent = (eventName, data) => {
	eventBus.emit(eventName, data);
};

export const onEvent = (eventName, callback) => {
	eventBus.on(eventName, callback);
};

export const offEvent = (eventName, callback) => {
	eventBus.off(eventName, callback);
};
