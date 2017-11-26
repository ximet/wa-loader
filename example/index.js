import Counter from './counter.wasm';

const wasmHelloWorld = () => {
    const counter = new Counter();

    counter
        .then((module) => {
            console.log('Counter example', module.instance.exports._count());
        })
        .catch(error => console.log(error));
};

window.onload = wasmHelloWorld;
