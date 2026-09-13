import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import stylex from "@stylexjs/unplugin";

export default defineConfig({
    plugins: [
        babel({
            presets: [["@babel/preset-flow", { all: true }]],
            plugins: ["flow-parser/babel-plugin"]
        }),
        stylex.vite(),
        react()
    ],
    test: {
        environment: "jsdom",
        coverage: {
            provider: "v8"
        }
    }
});
