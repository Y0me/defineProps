export interface IHelloWorld {
    hello: string;
    world: string;
}

export function helloWorld(props: IHelloWorld) {
    console.log(`${props.hello} ${props.world}`)
}