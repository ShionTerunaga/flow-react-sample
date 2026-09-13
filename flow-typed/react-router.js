declare module "react-router" {
    declare export component BrowserRouter(children: React.Node);
    declare export component Routes(children: React.Node);
    declare export component Route(path?: string, element?: React.Node);
    declare export component Navigate(to: string, replace?: boolean);
    declare export component Link(
        to: string,
        children: React.Node,
        className?: string,
        'data-style-src'?: string,
        style?: $ReadOnly<{ [key: string]: string | number }>
    );
}
