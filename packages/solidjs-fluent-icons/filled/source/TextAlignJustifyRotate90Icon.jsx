import { splitProps } from "solid-js";
function TextAlignJustifyRotate90Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.75 2c.41 0 .75.34.75.75v14.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm-5 0c.41 0 .75.34.75.75v14.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm-4.25.75a.75.75 0 00-1.5 0v14.5a.75.75 0 001.5 0V2.75z"/>
    </svg>);
}
export default TextAlignJustifyRotate90Icon;
