import { splitProps } from "solid-js";
function XboxControllerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M8.33 4.71a2.12 2.12 0 00-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 00.82 4.06c.66.82 1.8.65 2.4-.02L6.9 13.7A2 2 0 018.4 13h3.2a2 2 0 011.51.7l1.51 1.73c.6.67 1.75.84 2.4.02a4.51 4.51 0 00.82-4.06c-.32-1.5-1.16-3.27-2.27-5.43a2.37 2.37 0 00-1.66-1.25l-.9-.17a2.12 2.12 0 00-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03zM10 8.5A.75.75 0 1110 7a.75.75 0 010 1.5z"/>
    </svg>);
}
export default XboxControllerIcon;
