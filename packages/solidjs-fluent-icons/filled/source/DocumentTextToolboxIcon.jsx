import { splitProps } from "solid-js";
function DocumentTextToolboxIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.55c.16-.03.33-.05.5-.05h2c.82 0 1.54.4 2 1h5a.5.5 0 010 1H8.95v.04a2.5 2.5 0 011.55.96h3a.5.5 0 010 1h-2.55c.03.16.05.33.05.5v.5h2.5a.5.5 0 010 1H11v2.5c0 .17-.02.34-.05.5h3.55c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm1 0V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 00-1 0v.5H4v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3zm4-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v.5h3v-.5zM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 011 17.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z"/>
    </svg>);
}
export default DocumentTextToolboxIcon;
