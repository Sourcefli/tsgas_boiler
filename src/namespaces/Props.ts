namespace ScriptProps {
    export function getPropertyStore() {
        if (!this.store) {
            this.store = expBackoff(() => PropertiesService.getUserProperties());
        }
        return this.store;
    }

    export function get(propertyName: string) {
        return getPropertyStore().getProperty(propertyName) || '';
    }

    export function set(name: string, value: string | number) {
        getPropertyStore().setProperty(name, value);
    }

    export function delete (propertyName: string) {
        getPropertyStore().deleteProperty(propertyName);
    }

    const ONE_SECOND: number = 1000;
    const ONE_MINUTE: number = ONE_SECOND * 60;
    const START_TIME: number = Date.now();
    const MAX_RETRIES: number = 5;

    const expBackoff = (func) => {
        for (let n = 0; n <= MAX_RETRIES; n += 1) {
            try {
                return func();
            } catch (e) {
                if (n === MAX_RETRIES) {
                    throw e;
                }
                Utilities.sleep(2 ** n * ONE_SECOND + Math.round(Math.random() * ONE_SECOND));
            }
        }
        return null;
    };

    const hasCpuTime = () => !(Date.now() - START_TIME > ONE_MINUTE * 4);

}