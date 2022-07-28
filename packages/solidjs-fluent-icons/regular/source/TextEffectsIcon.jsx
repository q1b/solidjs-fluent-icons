import { splitProps } from "solid-js";
function TextEffectsIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.62 4.1a1.75 1.75 0 00-3.24 0l-3.02 7.46-.03.07-1.2 2.96a1.75 1.75 0 003.24 1.32L8.14 14h3.72l.77 1.9a1.75 1.75 0 003.24-1.3l-1.2-2.97a1.73 1.73 0 00-.03-.07l-3.02-7.47zm-1.18 6.4L10 9.41l-.44 1.09h.88zm.26-6.03l3.03 7.48v.03l1.22 2.99a.75.75 0 01-1.4.56L12.54 13H7.47l-1.02 2.53a.75.75 0 01-1.4-.56l1.21-2.99.02-.03L9.3 4.47a.75.75 0 011.39 0zm1.22 7.03H8.08L10 6.75l1.92 4.75z"/>
    </svg>);
}
export default TextEffectsIcon;
