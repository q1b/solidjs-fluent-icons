import { splitProps } from "solid-js";
function TextFontIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2c.3 0 .59.2.7.48l2.27 5.94.05.13.03.1-.79 2.12-.49-1.27H4.22l-.77 2.02a.75.75 0 01-1.4-.53l3.25-8.5A.75.75 0 016 2zM4.8 8h2.4L6 4.85 4.8 8zm7.9-2.51a.75.75 0 00-1.4 0L7.2 16.5h-.45a.75.75 0 000 1.5h2.5a.75.75 0 100-1.5H8.8l.75-2h4.92l.75 2h-.46a.75.75 0 000 1.5h2.5a.75.75 0 100-1.5h-.44L12.7 5.49zm1.2 7.5h-3.8L12 7.9l1.9 5.1z"/>
    </svg>);
}
export default TextFontIcon;
