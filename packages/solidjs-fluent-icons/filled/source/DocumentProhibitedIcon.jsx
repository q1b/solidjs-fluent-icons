import { splitProps } from "solid-js";
function DocumentProhibitedIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.74A5.5 5.5 0 004 9.2V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zm-8.68 9.07a4.5 4.5 0 106.36 6.36 4.5 4.5 0 00-6.36-6.36zm5.65 5.65a3.5 3.5 0 01-4.57.33l4.9-4.9a3.5 3.5 0 01-.33 4.57zM7.6 11.7l-4.9 4.9a3.5 3.5 0 014.9-4.9z"/>
    </svg>);
}
export default DocumentProhibitedIcon;
