import { splitProps } from "solid-js";
function TabsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 8a6 6 0 016-6h3a3 3 0 012.24 1H8a5 5 0 00-5 5v5.24A3 3 0 012 11V8zm13-2a3 3 0 013 3v6a3 3 0 01-3 3H9a3 3 0 01-3-3V9a3 3 0 013-3h6zm-8 9c0 1.1.9 2 2 2h6a2 2 0 002-2V9a2 2 0 00-2-2H9a2 2 0 00-2 2v6zM4 8.5A4.5 4.5 0 018.5 4H13a3 3 0 012.24 1H8.5A3.5 3.5 0 005 8.5v6.74A3 3 0 014 13V8.5z"/>
    </svg>);
}
export default TabsIcon;
