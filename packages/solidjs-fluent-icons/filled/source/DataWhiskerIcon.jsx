import { splitProps } from "solid-js";
function DataWhiskerIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 2a.5.5 0 000 1h1v1h-.5C4.67 4 4 4.67 4 5.5V10h5V5.5C9 4.67 8.33 4 7.5 4H7V3h1a.5.5 0 000-1H5zm7 2a.5.5 0 000 1h1v1h-.5c-.83 0-1.5.67-1.5 1.5V9h5V7.5c0-.83-.67-1.5-1.5-1.5H14V5h1a.5.5 0 000-1h-3zM4.5 15.5c0 .28.22.5.5.5h3a.5.5 0 000-1H7v-1h.5c.83 0 1.5-.67 1.5-1.5V11H4v1.5c0 .83.67 1.5 1.5 1.5H6v1H5a.5.5 0 00-.5.5zM12 18a.5.5 0 010-1h1v-1h-.5a1.5 1.5 0 01-1.5-1.5V10h5v4.5c0 .83-.67 1.5-1.5 1.5H14v1h1a.5.5 0 010 1h-3z"/>
    </svg>);
}
export default DataWhiskerIcon;
