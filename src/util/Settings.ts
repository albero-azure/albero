// @ts-ignore
import * as SettingsConfig from '../../config/settings.yml'


export class Settings {
    static obj = new Settings(SettingsConfig)

    readonly search: { debounce: number }

    constructor(settings: any) {
        this.search = settings.search
    }
}
