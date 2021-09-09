const addon = require('../build/Release/evpp_module-native');

interface IEvppModuleNative
{
    greet(strName: string): string;
};

class EvppModule {
    constructor(name: string) {
        this._addonInstance = new addon.EvppModule(name)
    }

    greet (strName: string) {
        return this._addonInstance.greet(strName);
    }

    // private members
    private _addonInstance: IEvppModuleNative;
}

export = EvppModule;
