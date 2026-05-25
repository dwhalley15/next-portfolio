import { componentRegistry } from "./componentRegistry";

export function renderComponent(component: any) {
    const Component = componentRegistry[component.component_type as keyof typeof componentRegistry];

    if (!Component) {
        console.warn(`Component type "${component.component_type}" not found in registry.`);
        return null;
    }

    return <Component key={component.id} {...component.data} />;
}