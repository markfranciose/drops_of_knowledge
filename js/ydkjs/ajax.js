module.exports = {
	ajax
};

function ajax(url, callback) {
	setTimeout(callback, Math.random() * 3000); 
}
