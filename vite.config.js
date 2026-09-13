import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import stylex from "@stylexjs/unplugin";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        babel({
            presets: [["@babel/preset-flow", { all: true }]],
            plugins: ["flow-parser/babel-plugin"]
        }),
        stylex.vite(),
        viteReact(),
        tailwindcss()
    ]
});
