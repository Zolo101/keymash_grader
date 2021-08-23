import type { Component } from "solid-js";
import "./Footer.css";

const Footer: Component = () => {
    return <div class="footer">
        <span>Made by Zelo101, 2021 </span>
        <button><a target="_blank" rel="noopener" href="">Source Code</a></button>
        <button><a target="_blank" rel="noopener" href="https://zelo.dev/">Website</a></button>
    </div>
};

export default Footer;
