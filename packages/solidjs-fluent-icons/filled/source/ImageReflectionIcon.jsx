import { splitProps } from "solid-js";
function ImageReflectionIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 6a3 3 0 013-3h6a3 3 0 013 3v6a3 3 0 01-1.34 2.5A3 3 0 0116 17a.5.5 0 01-1 0 2 2 0 00-2-2 .5.5 0 010-1h-2.5a.5.5 0 010 1h-1a.5.5 0 010-1H7a.5.5 0 010 1 2 2 0 00-2 2 .5.5 0 01-1 0 3 3 0 011.34-2.5A3 3 0 014 12V6zm1.98 7.72l3.53-3.52a.7.7 0 01.98 0l3.53 3.52c.29-.17.53-.41.7-.7L11.2 9.49a1.7 1.7 0 00-2.4 0l-3.52 3.53c.17.29.41.53.7.7zM13 7a1 1 0 10-2 0 1 1 0 002 0z"/>
    </svg>);
}
export default ImageReflectionIcon;
