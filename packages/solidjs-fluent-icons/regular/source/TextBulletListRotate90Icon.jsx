import { splitProps } from "solid-js";
function TextBulletListRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4.5 4a1 1 0 100-2 1 1 0 000 2zM10 4a1 1 0 100-2 1 1 0 000 2zm6.5-1a1 1 0 11-2 0 1 1 0 012 0zM5 5.5a.5.5 0 00-1 0v12a.5.5 0 001 0v-12zm5-.5c.28 0 .5.22.5.5v12a.5.5 0 01-1 0v-12c0-.28.22-.5.5-.5zm6 .5a.5.5 0 00-1 0v12a.5.5 0 001 0v-12z"/>
    </svg>);
}
export default TextBulletListRotate90Icon;
