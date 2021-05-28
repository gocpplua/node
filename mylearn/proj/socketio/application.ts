
import { Event } from "./components/event/eventcomponent";
import { IComponent } from './components/IComponent';
type ObjectType<T> = {
  new (): T;
};
export class Application{
  loaded: IComponent[] = [];       // loaded component list
  components: {
    __event__?: Event,
    [key: string]: IComponent
  } = {};   // name -> component map

  load<T extends IComponent>(name: string | ObjectType<T>, component ?: ObjectType<T> | any | T, opts ?: any): T {
    if (typeof name !== 'string') {
        opts = component;
        component = name;
        name = null;
    }

    if (typeof component == 'function') {
        component = new component(this, opts);
    }

    if (!name && typeof component.name === 'string') {
        name = component.name;
    }

    if (name && this.components[name as string]) {
        // ignore duplicat component
        console.warn('ignore duplicate component: %j', name);
        return;
    }

    this.loaded.push(component);
    if (name) {
        // components with a name would get by name throught app.components later.
        this.components[name as string] = component;
    }

    return component;
}
}