import { splitProps } from "solid-js";
function TextCaseUppercaseIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.96 3.84a.5.5 0 00-.94-.02L3.29 11h-.02v.05l-1.24 3.27a.5.5 0 00.94.36L3.98 12h4.76l.92 2.66a.5.5 0 10.95-.32L6.96 3.84zM4.36 11l2.1-5.54L8.4 11H4.36zm7.14-7.25a.5.5 0 00-.5.5V14.5c0 .28.22.5.5.5h2.75a3.25 3.25 0 001.3-6.23 2.87 2.87 0 00-1.93-5.02H11.5zm4 2.88c0 1.03-.84 1.87-1.88 1.87H12V4.75h1.63c1.03 0 1.87.84 1.87 1.88zM14.25 14H12V9.5h2.25a2.25 2.25 0 010 4.5z"/>
    </svg>);
}
export default TextCaseUppercaseIcon;
