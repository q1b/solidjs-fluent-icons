import { splitProps } from "solid-js";
function FluidIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 3.5C2 2.67 2.67 2 3.5 2h2C6.33 2 7 2.67 7 3.5v2.04c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 012 5.54V3.5zM8 4h5.5c.83 0 1.5.67 1.5 1.5V9h-1V5.5a.5.5 0 00-.5-.5H8V4zM5 8v5.5c0 .28.22.5.5.5H9v1H5.5A1.5 1.5 0 014 13.5V8h1zm6.5 2c-.82 0-1.5.67-1.5 1.5v5c0 .83.68 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5z"/>
    </svg>);
}
export default FluidIcon;
