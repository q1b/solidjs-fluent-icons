import { splitProps } from "solid-js";
function ArrowStepOutIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 15a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0zm2-4a.5.5 0 00.5-.5V3.7l3.15 3.15a.5.5 0 00.7-.7l-4-4a.5.5 0 00-.7 0l-4 4a.5.5 0 10.7.7L9.5 3.71v7.79c0 .28.22.5.5.5z"/>
    </svg>);
}
export default ArrowStepOutIcon;
