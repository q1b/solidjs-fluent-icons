import { splitProps } from "solid-js";
function DeviceEqIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2c.41 0 .75.34.75.75v14.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm3.75 3c.41 0 .75.34.75.75v8.5a.75.75 0 01-1.5 0v-8.5c0-.41.34-.75.75-.75zM7 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zM17.25 8c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zM3.5 8.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"/>
    </svg>);
}
export default DeviceEqIcon;
