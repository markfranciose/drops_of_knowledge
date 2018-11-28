function removeAll(object) {
	for (property in object) {
		if (object.hasOwnProperty(property)) {
			delete object[property];
		}
	}
}
