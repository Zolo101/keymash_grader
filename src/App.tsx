import type { Component } from "solid-js";
import Counter from "./components/counter/Counter";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App: Component = () => {
    return <div class="app">
        <Header />
        <Counter />
        <Footer />
    </div>
};

export default App;
