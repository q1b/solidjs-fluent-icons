import { splitProps } from "solid-js";
function ArrowSwapIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12.78 3.22a.75.75 0 10-1.06 1.06L13.44 6H4.75a.75.75 0 000 1.5h8.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3c.3-.3.3-.77 0-1.06l-3-3zm-4.5 7.56a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06L6.56 14h8.69a.75.75 0 000-1.5H6.56l1.72-1.72z"/>
    </svg>);
}
export default ArrowSwapIcon;
