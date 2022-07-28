import { splitProps } from "solid-js";
function ArrowSquareDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm5.5 3.5v5.8l2.65-2.65a.5.5 0 01.7.7l-3.5 3.5a.5.5 0 01-.7 0l-3.5-3.5a.5.5 0 01.7-.7l2.65 2.64V6.5a.5.5 0 011 0z"/>
    </svg>);
}
export default ArrowSquareDownIcon;
