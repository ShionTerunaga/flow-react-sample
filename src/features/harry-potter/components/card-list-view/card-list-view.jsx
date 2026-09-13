// @flow strict

import * as React from "react";
import { Card } from "../../../../components/card";
import { Box, FontCenter, GridBox, Heading } from "../../../../lib/ui";
import type { SinglePageGetCharacters } from "../../hooks/characters.type";
import cardListViewStyle from "./card-list-view.stylex";

export component CardListView(
    potters: Array<SinglePageGetCharacters>,
    title: string
) {
    return (
        <Box as="section" xstyle={cardListViewStyle.section}>
            <Box xstyle={cardListViewStyle.inner}>
                <FontCenter xstyle={cardListViewStyle.headingWrap} as="div">
                    <Heading xstyle={cardListViewStyle.heading}>{title}</Heading>
                </FontCenter>

                <GridBox>
                    {potters.map(({ id, image, name }) => (
                        <Card
                            key={id}
                            src={image}
                            alt={name}
                            title={name}
                            srcWidth={150}
                            boxHeight={300}
                            srcHeight={200}
                        />
                    ))}
                </GridBox>
            </Box>
        </Box>
    );
}
