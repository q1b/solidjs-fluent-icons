import { splitProps } from "solid-js";
function ArrowHookUpRightIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 11a5 5 0 005 5h4.5a.5.5 0 000-1H9a4 4 0 010-8h5.3l-2.7 2.7a.5.5 0 10.7.7l3.54-3.53a.5.5 0 00.13-.5.5.5 0 00-.14-.25L12.3 2.6a.5.5 0 10-.71.7L14.29 6H9a5 5 0 00-5 5z"/>
    </svg>);
}
export default ArrowHookUpRightIcon;
