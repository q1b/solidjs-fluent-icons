import { splitProps } from "solid-js";
function WindowNewIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.77 17a2.5 2.5 0 002.45-2.01A2 2 0 0017 13V5a2 2 0 00-2-2H7a2 2 0 00-2 1.81 2.5 2.5 0 00-2 2.46v6.23A3.5 3.5 0 006.5 17h6.27zM4 7.27c0-.66.42-1.21 1-1.42V13c0 1.1.9 2 2 2h7.18c-.2.58-.76 1-1.41 1H6.5A2.5 2.5 0 014 13.5V7.27zM9.52 6h3.98c.28 0 .5.22.5.5v3.98a.5.5 0 01-1 0V7.71l-4.15 4.14a.5.5 0 01-.7-.7L12.29 7H9.52a.5.5 0 010-1z"/>
    </svg>);
}
export default WindowNewIcon;
