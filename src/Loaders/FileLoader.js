/**
 * A class to load file using Ajax
 *
 * @category Loaders
 */
class FileLoader {
    /**
     * Load a file
     *
     * @param {string} filePath Path to the file to load
     * @param {function(boolean, string, Object=)} callback Callback
     * @param {Object=} userData User data
     */
    static load(filePath, callback, userData) {
        const reader = new XMLHttpRequest();
        reader.onreadystatechange = () => {
            if (reader.readyState === 4 && (reader.status === 200 || reader.status === 0)) {
                callback(true, reader.responseText, userData);
            }
        };
        reader.open('GET', filePath, true);
        reader.send();
    }
}

export default FileLoader;
