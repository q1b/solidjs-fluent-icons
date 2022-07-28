import { splitProps } from "solid-js";
function ShieldCheckmarkIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.72 2.08a.5.5 0 01.56 0c1.94 1.3 4.03 2.1 6.3 2.43A.5.5 0 0117 5v4.6a5.5 5.5 0 00-6.78 8.35l-.04.02a.5.5 0 01-.36 0C5.31 16.23 3 13.39 3 9.5V5a.5.5 0 01.43-.5 15.05 15.05 0 006.3-2.42zM19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0z"/>
    </svg>);
}
export default ShieldCheckmarkIcon;
