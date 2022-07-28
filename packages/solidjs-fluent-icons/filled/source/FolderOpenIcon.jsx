import { splitProps } from "solid-js";
function FolderOpenIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 5.5A2.5 2.5 0 014.5 3h2.66c.33 0 .64.1.9.3l1.6 1.2h4.84A2.5 2.5 0 0117 7H5.82c-.71 0-1.33.51-1.47 1.22L2.77 16.3A2.5 2.5 0 012 14.5v-9zm1.77 10.9c-.06.32.18.6.5.6h10.91c.72 0 1.34-.5 1.47-1.21l1.4-7.2a.5.5 0 00-.5-.59H5.83a.5.5 0 00-.49.4l-1.56 8z"/>
    </svg>);
}
export default FolderOpenIcon;
