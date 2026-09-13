import babel from "@rolldown/plugin-babel";
import { mergeConfig } from "vite";
import stylex from "@stylexjs/unplugin";

const config = {
    stories: ["../src/**/*.stories.@(js|jsx|mdx)"],
    addons: [],
    framework: {
        name: "@storybook/react-vite",
        options: {}
    },
    async viteFinal(config_, { configType }) {
        // merge with the project's Vite config if necessary
        return mergeConfig(config_, {
            plugins: [
                babel({
                    presets: [["@babel/preset-flow", { all: true }]],
                    plugins: ["flow-parser/babel-plugin"]
                }),
                stylex.vite()
            ]
        });
    }
};

export default config;
