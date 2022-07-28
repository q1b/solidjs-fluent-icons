import { splitProps } from "solid-js";
function DocumentToolboxIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H13v-5a2 2 0 00-2-2h-1v-1a2 2 0 00-2-2H5a2 2 0 00-1 .27V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM4 12v-1.5C4 9.67 4.67 9 5.5 9h2c.83 0 1.5.67 1.5 1.5V12h1.5c.83 0 1.5.67 1.5 1.5V15H9v-.5a.5.5 0 00-1 0v.5H5v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H4zm1-1.5V12h3v-1.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zM9 16h3v1.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 011 17.5V16h3v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z"/>
    </svg>);
}
export default DocumentToolboxIcon;
