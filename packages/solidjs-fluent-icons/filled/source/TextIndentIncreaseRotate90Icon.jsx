import { splitProps } from "solid-js";
function TextIndentIncreaseRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M9.03 2.22a.75.75 0 00-1.06 1.06l1.5 1.5c.3.3.77.3 1.06 0l1.5-1.5a.75.75 0 00-1.06-1.06l-.97.97-.97-.97zM6.25 7.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zm9 0a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zm-6 9.5v-9.5a.75.75 0 011.5 0v9.5a.75.75 0 01-1.5 0z"/>
    </svg>);
}
export default TextIndentIncreaseRotate90Icon;
