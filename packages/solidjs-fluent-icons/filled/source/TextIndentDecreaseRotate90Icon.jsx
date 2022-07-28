import { splitProps } from "solid-js";
function TextIndentDecreaseRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.97 4.78a.75.75 0 101.06-1.06l-1.5-1.5a.75.75 0 00-1.06 0l-1.5 1.5a.75.75 0 001.06 1.06l.97-.97.97.97zM6.25 7.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zm9 0a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5zM10 7c.41 0 .75.34.75.75v9.5a.75.75 0 01-1.5 0v-9.5c0-.41.34-.75.75-.75z"/>
    </svg>);
}
export default TextIndentDecreaseRotate90Icon;
