import { splitProps } from "solid-js";
function TextBulletListRotate270Icon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5.25 2.75a.75.75 0 00-1.5 0v11.5a.75.75 0 001.5 0V2.75zM4.5 18a1 1 0 100-2 1 1 0 000 2zm5.5 0a1 1 0 100-2 1 1 0 000 2zm6.5-1a1 1 0 11-2 0 1 1 0 012 0zM10 2c.41 0 .75.34.75.75v11.5a.75.75 0 01-1.5 0V2.75c0-.41.34-.75.75-.75zm6.25.75a.75.75 0 00-1.5 0v11.5a.75.75 0 001.5 0V2.75z"/>
    </svg>);
}
export default TextBulletListRotate270Icon;
