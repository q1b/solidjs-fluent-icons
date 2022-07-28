import { splitProps } from "solid-js";
function TagResetIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.02 2.04a2 2 0 011.99 2v4.94a2 2 0 01-.58 1.42l-.15.15A5 5 0 0015 10h-1.09a1.5 1.5 0 00-2.47-1.56l-2 2a1.5 1.5 0 000 2.12l1.2 1.2A1.5 1.5 0 0010 15a5 5 0 00.54 2.25 2 2 0 01-2.57-.22l-4.95-4.95a2 2 0 010-2.83L9.7 2.6A2 2 0 0111.13 2l4.89.04zM13 6a1 1 0 102 0 1 1 0 00-2 0zm-.15 3.85a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L11.71 12H15a3 3 0 11-3 3 .5.5 0 10-1 0 4 4 0 104-4h-3.3l1.15-1.15z"/>
    </svg>);
}
export default TagResetIcon;
