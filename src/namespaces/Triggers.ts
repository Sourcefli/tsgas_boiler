namespace Triggers {
    export const deleteTrigger = (fnName: string) => {
        if (!fnName) {
            throw new Error('A function name must be provided to delete a trigger!!')
        }
        ScriptApp.getProjectTriggers().forEach((trigger) => {
            if (trigger.getHandlerFunction() === fnName) {
                ScriptApp.deleteTrigger(trigger);
            }
        });
    };

    export const addChangeTrigger = (fnName: string, id?: string) => {
        let triggerFound = false;

        if (!fnName || !id) {
            throw new Error('A function name and a Spreadsheet id must be provided to create a trigger!!')
        }

        ScriptApp.getProjectTriggers().forEach((trigger) => {
            if (trigger.getHandlerFunction() === fnName) {
                triggerFound = true;
            }

            if (!triggerFound) {
                ScriptApp.newTrigger(fnName).forSpreadsheet(id).onChange().create()
                // ScriptApp.newTrigger(fnName).timeBased().everyHours(1).create();
            }
        });
    }
}