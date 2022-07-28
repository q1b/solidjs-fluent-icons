import { splitProps } from "solid-js";
function ArrowCircleDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.35 10.85l-3 3a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7l2.15 2.14V6.5a.5.5 0 011 0v5.8l2.15-2.15a.5.5 0 01.7.7zM10 18a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </svg>);
}
export default ArrowCircleDownIcon;
