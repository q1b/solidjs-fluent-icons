import { splitProps } from "solid-js";
function GlanceIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M3 14.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5zm0-10v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5C9 3.67 8.33 3 7.5 3h-3C3.67 3 3 3.67 3 4.5zm8 0v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3c-.83 0-1.5.67-1.5 1.5zM12.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3z"/>
    </svg>);
}
export default GlanceIcon;
