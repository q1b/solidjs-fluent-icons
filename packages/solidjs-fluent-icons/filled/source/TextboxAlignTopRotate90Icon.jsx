import { splitProps } from "solid-js";
function TextboxAlignTopRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm5.5 2c.28 0 .5.22.5.5v9a.5.5 0 01-1 0v-9c0-.28.22-.5.5-.5zm3 0c.28 0 .5.22.5.5v9a.5.5 0 01-1 0v-9c0-.28.22-.5.5-.5z"/>
    </svg>);
}
export default TextboxAlignTopRotate90Icon;
