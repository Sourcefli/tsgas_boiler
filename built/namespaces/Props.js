var ScriptProps;
(function (ScriptProps) {
    function getPropertyStore() {
        if (!this.store) {
            this.store = expBackoff(function () { return PropertiesService.getUserProperties(); });
        }
        return this.store;
    }
    ScriptProps.getPropertyStore = getPropertyStore;
    function get(propertyName) {
        return getPropertyStore().getProperty(propertyName) || '';
    }
    ScriptProps.get = get;
    function set(name, value) {
        getPropertyStore().setProperty(name, value);
    }
    ScriptProps.set = set;
    delete (propertyName);
    string;
    {
        getPropertyStore().deleteProperty(propertyName);
    }
    var ONE_SECOND = 1000;
    var ONE_MINUTE = ONE_SECOND * 60;
    var START_TIME = Date.now();
    var MAX_RETRIES = 5;
    var expBackoff = function (func) {
        for (var n = 0; n <= MAX_RETRIES; n += 1) {
            try {
                return func();
            }
            catch (e) {
                if (n === MAX_RETRIES) {
                    throw e;
                }
                Utilities.sleep(Math.pow(2, n) * ONE_SECOND + Math.round(Math.random() * ONE_SECOND));
            }
        }
        return null;
    };
    var hasCpuTime = function () { return !(Date.now() - START_TIME > ONE_MINUTE * 4); };
})(ScriptProps || (ScriptProps = {}));
