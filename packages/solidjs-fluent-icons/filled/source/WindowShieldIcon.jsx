import { splitProps } from "solid-js";
function WindowShieldIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 5.75A2.75 2.75 0 015.75 3h8.5A2.75 2.75 0 0117 5.75v2.86a3.39 3.39 0 01-1.5-.72V7h-11v7.25c0 .7.56 1.25 1.25 1.25h3.82a5.8 5.8 0 00.97 1.5H5.75A2.75 2.75 0 013 14.25v-8.5zM15.5 9.1a4.13 4.13 0 002.1.57c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 01-.26 0A6.67 6.67 0 0112 17a4.87 4.87 0 01-1.31-1.5 5.75 5.75 0 01-.69-2.65v-2.77a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0c.4.4.8.73 1.22.98z"/>
    </svg>);
}
export default WindowShieldIcon;
