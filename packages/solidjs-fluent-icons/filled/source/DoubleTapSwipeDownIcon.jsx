import { splitProps } from "solid-js";
function DoubleTapSwipeDownIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.53 17.78c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06l1.22 1.22V7.75a.75.75 0 111.5 0v7.69l1.22-1.22a.75.75 0 111.06 1.06l-2.5 2.5zM4.25 7.5a5.75 5.75 0 004 5.48v-1.6a4.25 4.25 0 113.5 0v1.6a5.75 5.75 0 10-7.5-5.48zm2.5 0c0 1.15.6 2.16 1.5 2.74V7.75v-.13-.12a1.75 1.75 0 113.5.12v2.62a3.25 3.25 0 10-5-2.74z"/>
    </svg>);
}
export default DoubleTapSwipeDownIcon;
