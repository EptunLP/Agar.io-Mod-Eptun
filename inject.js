!function() {
    if (typeof hasRun == 'undefined') {
        hasRun = true;
        window.stop();
        /** @type {string} */
        document.documentElement.innerHTML = "";
        /** @type {XMLHttpRequest} */
        var vertexRequest = new XMLHttpRequest;
        vertexRequest.open("GET", chrome.extension.getURL("client/index.html"), true);
        /**
         * @return {undefined}
         */
        vertexRequest.onload = function () {
            document.open();
            document.write(this.responseText.replace(/\=\"\.\//g, '="' + chrome.extension.getURL("") + "client/"));
            document.close();
        };
        vertexRequest.send();
    }
}();
