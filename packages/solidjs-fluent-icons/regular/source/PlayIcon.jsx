import { splitProps } from "solid-js";
function PlayIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.22 8.69a1.5 1.5 0 010 2.62l-10 5.5A1.5 1.5 0 015 15.5v-11A1.5 1.5 0 017.22 3.2l10 5.5zm-.48 1.75a.5.5 0 000-.88l-10-5.5A.5.5 0 006 4.5v11c0 .38.4.62.74.44l10-5.5z"/>
    </svg>);
}
export default PlayIcon;
