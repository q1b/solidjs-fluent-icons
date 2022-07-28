import { splitProps } from "solid-js";
function ArrowHookUpRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9 6c.06 0-.06 0 0 0h4.65l-2.27-2.27a.75.75 0 111.06-1.06l3.35 3.35c.17.18.24.42.21.64a.75.75 0 01-.21.45l-3.25 3.24a.75.75 0 11-1.06-1.06l1.8-1.79H9a3.5 3.5 0 100 7h4.25a.75.75 0 010 1.5H9A5 5 0 019 6z"/>
    </svg>);
}
export default ArrowHookUpRightIcon;
