import { splitProps } from "solid-js";
function DataWhiskerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a.5.5 0 000 1h1v1h-.5C4.67 4 4 4.67 4 5.5v7c0 .83.67 1.5 1.5 1.5H6v1H5a.5.5 0 000 1h3a.5.5 0 000-1H7v-1h.5c.83 0 1.5-.67 1.5-1.5v-7C9 4.67 8.33 4 7.5 4H7V3h1a.5.5 0 000-1H5zm0 10.5V11h3v1.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5zm0-7c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V10H5V5.5zM12 4a.5.5 0 000 1h1v1h-.5c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5h.5v1h-1a.5.5 0 000 1h3a.5.5 0 000-1h-1v-1h.5c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5H14V5h1a.5.5 0 000-1h-3zm3 5h-3V7.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V9zm-3 1h3v4.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V10z"/>
    </svg>);
}
export default DataWhiskerIcon;
