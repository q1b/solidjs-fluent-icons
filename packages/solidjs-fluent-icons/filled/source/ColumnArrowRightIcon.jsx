import { splitProps } from "solid-js";
function ColumnArrowRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2 4c0-1.1.9-2 2-2h1a2 2 0 012 2v3.75H5.75a1.75 1.75 0 100 3.5H7V15a2 2 0 01-2 2H4a2 2 0 01-2-2V4zm13-2a2 2 0 00-2 2v11c0 1.1.9 2 2 2h1a2 2 0 002-2V4a2 2 0 00-2-2h-1zM8.97 6.97c.3-.3.77-.3 1.06 0l2 2c.3.3.3.77 0 1.06l-2 2a.75.75 0 11-1.06-1.06l.72-.72H5.5a.75.75 0 010-1.5h4.19l-.72-.72a.75.75 0 010-1.06z"/>
    </svg>);
}
export default ColumnArrowRightIcon;
