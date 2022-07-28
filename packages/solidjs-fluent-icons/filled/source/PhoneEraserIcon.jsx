import { splitProps } from "solid-js";
function PhoneEraserIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M14.58 1.44a1.5 1.5 0 012.12 0l1.86 1.86a1.5 1.5 0 010 2.12l-5.14 5.14a1.5 1.5 0 01-2.12 0L9.44 8.7a1.5 1.5 0 010-2.12l5.14-5.14zm-4.43 5.84a.5.5 0 000 .71L12 9.85c.2.2.51.2.7 0l1.3-1.29L11.44 6l-1.3 1.3zM12.6 2H5.5C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-5.11a2.5 2.5 0 01-3.4-.12L8.72 9.4a2.5 2.5 0 010-3.54L12.6 2zm-2.1 12.5a.5.5 0 01-.5.5H8a.5.5 0 010-1h2c.28 0 .5.22.5.5z"/>
    </svg>);
}
export default PhoneEraserIcon;
