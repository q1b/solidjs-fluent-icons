import { splitProps } from "solid-js";
function PauseOffIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 3.7v12.8c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5V8.7l4 4v3.8c0 .83.67 1.5 1.5 1.5h2c.49 0 .92-.23 1.2-.6l.45.45a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7l.85.86zm9 6.18l5 5V3.5c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v6.38zM4.16 2.04L8 5.88V3.5C8 2.67 7.33 2 6.5 2h-2c-.12 0-.23.01-.34.04z"/>
    </svg>);
}
export default PauseOffIcon;
