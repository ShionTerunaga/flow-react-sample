// @flow

import { Box, Heading } from "../../lib/ui";
import { ja } from "../../shared/lang/ja";
import { Link } from "react-router";
import * as stylex from "@stylexjs/stylex";
import homePageStyle from "./home.stylex";

component HomeLayout() {
    return (
        <Box as="main" xstyle={homePageStyle.pageRoot}>
            <Box as="section" xstyle={homePageStyle.container}>
                <Heading xstyle={homePageStyle.heading}>
                    {ja.app.home.title}
                </Heading>
                <p {...stylex.props(homePageStyle.description)}>
                    ルーティングと動的データ取得をこのテンプレートで
                    すぐ試せます。
                </p>

                <ul {...stylex.props(homePageStyle.navList)}>
                    <li>
                        <Link
                            {...stylex.props(homePageStyle.navItemLink)}
                            to="/single-dynamic-fetch"
                        >
                            {ja.app.home.toSingleDynamicPotter}
                        </Link>
                    </li>
                </ul>
            </Box>
        </Box>
    );
}

export default HomeLayout;
